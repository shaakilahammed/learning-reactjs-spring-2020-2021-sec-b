<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class DairyController extends Controller
{
    public function index()
    {
        
        $events = Event::all();
        if(!empty($events)){
            return response([
                'event' => $events
            ],200);
        }else{
            return response([
                'results' => "Not Found !"
            ],404);
        }
        
    }

    function Store(Request $req)
    {   

            $event = new Event();

            $event->title = $req->title;
            $event->description = $req->description;
            $event->importance = $req->importance;

            if($event->save()){
                return response([
                    'event' => $event
                ],200);
            }else{
                return response([
                    'results' => "Events Create Failed !"
                ],404);
            }

            
    }

    public function Edit(Request $req,$id)
    {

            $event = Event::find($id);

            if(!$event==NULL){
                return response([
                    'event' => $event
                ],200);
            }else{
                return response([
                    'result' => "Not Found !"
                ],404);
            }
    }

    public function Update(Request $req,$id)
    {

            $event = Event::find($id);
            $event->title = $req->title;
            $event->description = $req->description;
            $event->importance = $req->importance;
            if($event->save()){
                return response([
                    'event' => $event
                ],200);

            }else{
                return response([
                    'result' => "Events Update Failed !"
                ],404);
            }
    }



    public function Delete($id)
    {
            $event = Event::find($id);
            if($event->delete()){

                return response([
                    'message' => 'Deleted successfully'
                ],200);
            }else{
                return response([
                    'message' => 'Deleted Failed !'
                ],404);
            }
    }
}
