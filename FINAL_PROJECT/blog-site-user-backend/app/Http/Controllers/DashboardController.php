<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Comment;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

class DashboardController extends Controller
{


public function index($id)
    {
        $postCount=[];
        $user=User::find($id);
        


        if (1) {
            
            // return $commentCount;
            $postCount = $user->favorite_posts->count();
            $commentCount = Comment::where('user_id','=',$id)->count();
            return response([
                'message'=>'success',
                "commentCount"=>$commentCount,
                "postCount"=>$postCount
                
            ],200);
        }else{
            return response([
                'error' => ['Dashboard not found !']
            ], 404);
        }
    }
}