<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // All Post
    public function index()
    {
        // $categories = Category::where('status','=',1)->latest()->get();
        // //$catfilter = Category::where('status','=',1)->take(-3)->get();
        // $catfilter = Category::orderBy('id', 'desc')->take(14)->get();
        $posts=Post::where([['status','=','Publish'],['is_approve','=',1]])->latest()->get();
        // $authors = User::where('active','=',1)->get()->random(5);
        // $users = User::where('type','=','User')->where('active','=',1)->get();
         //return $posts->count();
        $author=[];
        $comments=[];
        $fav=[];
        if ($posts!=null) {
            foreach($posts as $post){
                array_push($author, $post->user->profileImage);
                array_push($fav, $post->favorite_to_users->count());
                array_push($comments, $post->comments->count());

            }
            // return $comments;
            
            return response([
                'message'=>'success',
                "posts"=>$posts,
                "author"=>$author,
                "comments"=>$comments,
                "fav"=>$fav
            ],200);
        }else{
            return response([
                'error' => ['home not found !']
            ], 404);
        }
        // return view('user.home',compact('posts','categories','catfilter','authors','users'));
    }

    public function singleBlog($id)
    {
        $post = Post::find($id);
        
        $author=[];
        $comments=[];
        $fav=[];
        if ($post!=NULL) {
            // foreach($posts as $post){
            //     array_push($author, $post->user->profileImage);
            //     array_push($fav, $post->favorite_to_users->count());
            //     array_push($comments, $post->comments->count());

            // }
            $author=$post->user->profileImage;
            $authorName=$post->user->name;
            $comments=$post->comments->count();
            $fav=$post->favorite_to_users->count();
            //return $comments;

            
            return response([
                'message'=>'success',
                "post"=>$post,
                "author"=>$author,
                "authorName"=>$authorName,
                "comments"=>$comments,
                "fav"=>$fav
                // "tags"=>$tags,
                // "authors"=>$authors,
                // "randomPost"=>$randomPost,
                // "catfilter"=>$catfilter,
            ],200);
        }else{
            return response([
                'error' => ['Single Blog not found !']
            ], 404);
        }
        // return view('user.single-blog',compact('post','catfilter','tags','randomPost','authors'));
    }
}
