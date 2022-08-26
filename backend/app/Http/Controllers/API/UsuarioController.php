<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Usuario::all();
        return response()->json([
            'errors' => false,
            'code' => Response::HTTP_OK,
            'status' => '200 OK',
            'data' => $data
        ], Response::HTTP_OK,);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $data=[
            'nombres'=>$request->nombres,
            'apellido'=>$request->apellido,
            'cedula'=>$request->cedula,
            'numero_celular'=>$request->celular,
            'cod_rol'=>$request->cod_rol,
            'direccion'=>$request->direccion,
            'email'=>$request->email,
            'is_register'=>false,
            "password"=>bcrypt($request->password)
        ];
   
        $data = Usuario::create($data);
        return response()->json([
            'errors' => false,
            'code' => Response::HTTP_CREATED,
            'status' => '201 Created',
            'data' => $data
        ], Response::HTTP_CREATED);
    }


    public function storeClient(Request $request)
    {   
        $data=[
            'nombres'=>$request->nombres,
            'apellido'=>$request->apellido,
            'cedula'=>$request->cedula,
            'numero_celular'=>$request->celular,
            'cod_rol'=>2,
            'direccion'=>$request->direccion,
            'email'=>$request->email,
            'is_register'=>true,
            "password"=>bcrypt($request->password)
        ];
   
        $data = Usuario::create($data);
        return response()->json([
            'errors' => false,
            'code' => Response::HTTP_CREATED,
            'status' => '201 Created',
            'data' => $data
        ], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Usuario::findOrFail($id);
        return response()->json([
            'errors' => false,
            'code' => Response::HTTP_OK,
            'status' => '200 OK',
            'data' => $data
        ], Response::HTTP_OK,);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $data = Usuario::findOrFail($id);

        $dat=[
            'nombres'=>$request->nombres,
            'apellido'=>$request->apellido,
            'cedula'=>$request->cedula,
            'numero_celular'=>$request->celular,
            'cod_rol'=>$request->cod_rol,
            'direccion'=>$request->direccion,
            'email'=>$request->email,
            'is_register'=>false
        ];
        isset($request->password)? $dat=["password"=>bcrypt($request->password)]:null;
        $data->update($dat);
        return response()->json([
            'errors' => false,
            'code' => Response::HTTP_OK,
            'status' => '200 OK',
            'data' => $data
        ], Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Usuario::findOrFail($id);
        $data->delete();
        $messages = [
            "Se elimino correctamente"
        ];
        return response()->json([
            'errors' => false,
            'code' => Response::HTTP_OK,
            'status' => '200 OK',
            'data' => [
                'msj' => $messages
            ],
        ], Response::HTTP_OK);
    }
}
