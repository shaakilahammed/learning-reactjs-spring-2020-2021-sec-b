<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use App\Models\Comment;
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
        
        $allComments=[];
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

            $allComments=$post->comments;
            
            
            return response([
                'message'=>'success',
                "post"=>$post,
                "author"=>$author,
                "authorName"=>$authorName,
                "comments"=>$comments,
                "fav"=>$fav,
                "allComments"=>$allComments
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


    public function Comments($id)
    {
        $post = Post::find($id);
        
        $allComments=[];
        $CommentImage=[];
        $CommentName=[];       
        if ($post!=NULL) {

            $allComments=$post->comments;

            foreach($allComments as $comment){
                array_push($CommentImage, $comment->user->profileImage);
                array_push($CommentName, $comment->user->name);

            }

            //return $CommentImage;
            
            return response([
                'message'=>'success',
                "allComments"=>$allComments,
                "CommentImage"=>$CommentImage,
                "CommentName"=>$CommentName
                
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



    function StoreComment($uid, $pid,Request $req)
    {   
        $comment = new Comment();
        $comment->user_id = $uid;
        $comment->post_id = $pid;
        $comment->comment = $req->comment;
            if($comment->save()){
                return response([
                    'comment' => $comment
                ],200);
            }else{
                return response([
                    'results' => "Comments Create Failed !"
                ],404);
            } 
    }

    function DeleteComment($id)
    {   
        $comment = Comment::find($id);   
        if($comment->delete()){
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
