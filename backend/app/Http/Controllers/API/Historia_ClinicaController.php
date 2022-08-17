<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Historial_clinico;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class Historia_ClinicaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Historial_clinico::all();
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
        $data = Historial_clinico::create($request->all());
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
        $data = Historial_clinico::findOrFail($id);
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
        $data = Historial_clinico::findOrFail($id);
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
        $data = Historial_clinico::findOrFail($id);
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
