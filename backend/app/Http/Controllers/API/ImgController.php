<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\File;
use Faker\Provider\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Storage;

class ImgController extends Controller
{
    /**
     * @param $image
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function viewImage(Request $request){
        $name=$request->img;
        $image=File::where('name','=',$name)->first();
       if($image){
           $path=$image['path'];
           $route = env('APP_LOCATION').'/storage/app/'.$path; // depende de root en el archivo filesystems.php.
           if (\Storage::exists($path))
           {
               header("Content-type: image/jpeg");
               header("Content-length: " . filesize($route));
               header("Content-Disposition: inline; filename=".$image['name']);
               readfile($route);
           }else{
               return "Error";
           }
       }else{
           return 'Error';
       }

 }

public function uploadAvatar(Request $request){
        //$access_granted=Controller::validatePermissions($request->user()->id,'POST','/users/avatar');
        //if($access_granted){
            $errors=[];
            if($request->hasFile('avatar')){
                $file = $request->file('avatar');
                $validate = \Validator::make(
                    array(
                        'file' => $file,
                    ),
                    array(
                        'file' => 'mimes:jpg, jpeg, png, svg'
                    )
                );

                if(!$validate->fails()){
                    $cedula=$request->user()->cedula;
                    $extension= $file->getClientOriginalExtension();
                    $type=$file->getType();
                    $path = $request->file('avatar')->store("file/$cedula/avatars");
                    $aux=explode('/',$path);
                    $name=end($aux);
                    $data=[
                        'id_user'=>$request->user()->id,
                        'path'=>$path,
                        'name'=>$name,
                        'extension'=>$extension,
                        'type'=>$type
                    ];
                     $created= File::create($data);
                    if($created){
                        $data=[
                            'photography'=>$created->id_file
                        ];
                        $request->user()->update($data);
                        $log="The user '".$request->user()->id."' update your profile image.";
                        $this->log('info',$log,'web',$request->user());
                        return $this->response('false', Response::HTTP_CREATED, '201 CREATED', '');
                    }

                }else{
                    $errors[]='El archivo es incorrecto';
                    return $this->response('true', Response::HTTP_BAD_REQUEST, '400 BAD REQUEST', $errors);
                }
            }else{
                $errors[]='El archivo es incorrecto';
                return $this->response('true', Response::HTTP_BAD_REQUEST, '400 BAD REQUEST', $errors);
            }
       /* }else{
            return $this->response(true,Response::HTTP_FORBIDDEN,'403 Forbidden' );
        }*/

    }

}
