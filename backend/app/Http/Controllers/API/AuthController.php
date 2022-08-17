<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use \Laravel\Socialite\Facades\Socialite;
use Lcobucci\JWT\Exception;


class AuthController extends Controller
{
    /**
     * Manual login
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request){

        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];
        //return $request;
        if (!Auth::attempt($data)) {
            return response()->json([
                'message' => 'Unauthorized'], 401);
        }
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');

        $token = $tokenResult->token;
        if ($request->remember) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }
        $token->save();

        $data=[
            'user'=>$user,
            'access_token'=>[
                "token"=>$tokenResult->accessToken,
                "type"=>'Bearer',
                'expires_at' => Carbon::parse(
                    $tokenResult->token->expires_at)
                    ->toDateTimeString()
            ]
        ];
        //$log="The user '".$user->id."' logged in using manual auth.";
      //  $this->log('info',$log,'web',$user);
        return response()->json([
            'errors' => false,
            'code' => Response::HTTP_OK,
            'status' => '200 OK',
            'data' => $data
        ], Response::HTTP_OK);
    }

    /**
     * logout session
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        $log="The user '".$request->user()->id."' logged out.";
        $this->log('info',$log,'web',$request->user());
        return $this->response('false',Response::HTTP_OK,'200 OK',['message' =>
            'Successfully logged out']);
    }


}
