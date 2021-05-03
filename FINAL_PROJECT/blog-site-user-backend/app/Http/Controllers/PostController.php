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

        if ($posts!=null) {
            return response([
                'message'=>'success',
                "posts"=>$posts,
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
        // $blogKey = 'blog_'.$post->id;
        // if (!Session::has($blogKey)) {
        //     $post->increment('view_count');
        //     Session::put($blogKey,1);
        // }
        // $tags = Tag::all();
        // $authors = User::where('type','=','Author')->where('active','=',1)->get();
        // $randomPost = Post::where([['status','=','Publish'],['is_approve','=',1]])->get()->random(3);
        // $catfilter = Category::orderBy('id', 'desc')->take(14)->get();

        if ($post!=NULL) {
            return response([
                'message'=>'success',
                "post"=>$post,
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
