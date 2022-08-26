<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Mascota;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MascotaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Mascota::all();

        $data = Mascota::where("cod_user","=",1)->find(10);
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
        $data = Mascota::create($request->all());
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
        $data = Mascota::findOrFail($id);
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
        $data = Mascota::findOrFail($id);
        $data->update($request->all());
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
        $data = Mascota::findOrFail($id);
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
