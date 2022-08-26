<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Cita;
use App\Models\Mascota_cita;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CitaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data =\DB::select("select c.*,m.* from mascota_citas as mc join citas as c on c.cod_cita=mc.cod_cita join mascotas as m on mc.cod_mascota=m.cod_mascota where m.cod_user='".\Auth::user()->cod_user."'");
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
         $dat=[
            'fecha'=>$request->fecha,
            'hora'=>$request->hora,
            'tipo'=>$request->tipo,
            'detalle'=>$request->detalle
        ];
         $data = Cita::create($dat);

       $d=[
        'cod_mascota'=>$request->cod_mascota,
        'cod_cita'=>$data->cod_cita
        ];
        Mascota_cita::create($d);
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
        $data = Cita::findOrFail($id);

        $data =\DB::select("select c.*,m.* from mascota_citas as mc join citas as c on c.cod_cita=mc.cod_cita join mascotas as m on mc.cod_mascota=m.cod_mascota where c.cod_cita='".$id."' limit 1");
        return response()->json([
            'errors' => false,
            'code' => Response::HTTP_OK,
            'status' => '200 OK',
            'data' => $data[0]
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
        $data = Cita::findOrFail($id);
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
        $data = Cita::findOrFail($id);
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
