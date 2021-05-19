<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Address;
use Auth;
use Validator;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    //

    protected $user;
    

    public function __construct(){
        
        $this->middleware("auth:api",["except" => ["login","register"]]);
        $this->user = new User;
                
    }
    public function image(Request $request){
        
        $teste = "imagemPerfil";
        $user = auth()->user();
        
        $data ['image'] = $user->image;
        if($request->hasFile('image') && $request->file('image')->isValid()){
            if($user->image){
                $name = $user->image;
            }
            else
                $name = $user->id.$teste;
            
            $extension = $request->image->extension();
            $nameFile = "{$name}.{$extension}";
            $data['image'] = $nameFile;
            
            $upload = $request->image->storeAs('users', $nameFile);
            
            if(!$upload){
                return redirect()
                            ->back()
                            ->witch('error', 'Falha ao fazer o upload da imagem');
            }
        }
        $update = $user->update($data);
        dd($data);
    }
    public function address(Request $request){

        $userId = Auth::id();
        
        $data = $request->address;
        
        $address = User::find($userId);
        $address->address = $data;  
        $address->save();

    }

    public function register(Request $request){
        
        $validator = Validator::make($request->all(),[
            'name' => 'required|string',
            'email' => 'required|string|unique:users',
            'cpf' => 'required|string|unique:users',
            'password' => 'required|min:6|confirmed',
       ]);
       
       if($validator->fails()){
        return response()->json([
            'success' => false,
            'message' => $validator->messages()->toArray()
         ], 500);
       }


       $data = [
        "name" => $request->name,
        "email" => $request->email,
        "cpf" => $request->cpf,
        "password" => Hash::make($request->password)
       ];


       $this->user->create($data);

       $responseMessage = "Cadastro com sucesso";

        return response()->json([
        'success' => true,
        'message' => $responseMessage
     ], 200);

    }


    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'email' => 'required|string',
            'password' => 'required|min:6',
       ]);


       if($validator->fails()){
        return response()->json([
            'success' => false,
            'message' => $validator->messages()->toArray()
         ], 500);
       }

        $credentials = $request->only(["email","password"]);
        $user = User::where('email',$credentials['email'])->first();
        if($user){
            if(!auth()->attempt($credentials)){
                $responseMessage = "Senha ou usuário incorretos";
                
                return response()->json([
                    "success" => false,
                    "message" => $responseMessage,
                    "error" => $responseMessage
                ], 422);
         }
            
         $accessToken = auth()->user()->createToken('authToken')->accessToken;
         $responseMessage = "Login com Sucesso!";
 
         return $this->respondWithToken($accessToken,$responseMessage,auth()->user());
        }
        else{
           $responseMessage = "Usuário não encontrado";
           return response()->json([
            "success" => false,
            "message" => $responseMessage,
            "error" => $responseMessage
        ], 422);
        }
           
    }

    public function viewProfile(){
        $responseMessage = "Perfil Usuário";
        $data = Auth::guard("api")->user();
        return response()->json([
            "success" => true,
            "message" => $responseMessage,
            "data" => $data
        ], 200);
    }


    
    public function logout(){
       
        //auth()->user()->logout();
        $user = Auth::guard("api")->user()->token();
        $user->revoke();
        $responseMessage = "Desconectado com sucesso!";
        return response()->json([
            'success' => true,
            'message' => $responseMessage
         ], 200);
           
    }





}
