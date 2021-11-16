<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Providers\UtilityServiceProvider as u;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{ 
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register','logoutSingleSignOn']]);
    }
  
    /**
     * Register new user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request){
        $validate = Validator::make($request->all(), [
            'name'      => 'required',
            'email'     => 'required|email|unique:users',
            'password'  => 'required|min:4|confirmed',
        ]);        
        if ($validate->fails()){
            return response()->json([
                'status' => 'error',
                'errors' => $validate->errors()
            ], 422);
        }        
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->status = 1;
        $user->save();       
        return response()->json(['status' => 'success'], 200);
    } 

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = request(['hrm_id', 'password']);
        $user_info = u::getObject(['hrm_id'=>$credentials['hrm_id']],'users');
        if($user_info){
            $credentials['email'] = $user_info->email;
            if (! $token = auth()->attempt($credentials)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        }else{
            if (! $token = auth()->attempt($credentials)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        }

        return $this->respondWithToken($token, $user_info->email);
    }
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token, $email)
    {
        $user = u::first("SELECT * FROM users WHERE email='$email'");

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'roles' => $user->menuroles,
            'change_password'=>$user->change_password
        ]);
    }
    public function singleSignOn(Request $request){
        $hrm_id = $request->hrm_id;
        $token = $request->token;
        $key ="CMS@abcd1234";
        if($token == md5($key.$hrm_id)){
            $user_info = u::first("SELECT id FROM users WHERE hrm_id='$hrm_id' AND status=1");
            if($user_info){
                $user = User::find( $user_info->id);
                $token = JWTAuth::fromUser($user);
                return $this->respondWithToken($token, $user->email);
            }else{
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        }else{
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
    public function logoutSingleSignOn(Request $request){
    }
}