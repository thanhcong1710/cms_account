<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Providers\UtilityServiceProvider as u;
use App\User;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $you = auth()->user()->id;
        $users = DB::table('users')
        ->select('users.id','users.branch_name AS branch', 'users.name', 'users.email', 'users.menuroles as roles', 'users.status', 'users.email_verified_at as registered')
        ->whereNull('deleted_at')
        ->get();
        return response()->json( compact('users', 'you') );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = DB::table('users')
        ->select('users.id','users.branch_name AS branch', 'users.name', 'users.email','users.hrm_id','users.manager_hrm_id', 'users.menuroles as roles', 'users.status', 'users.email_verified_at as registered')
        ->where('users.id', '=', $id)
        ->first();
        return response()->json( $user );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = DB::table('users')
        ->select('users.id','users.branch_name','users.phone', 'users.name', 'users.email','users.hrm_id','users.manager_hrm_id', 'users.menuroles as roles', 'users.status')
        ->where('users.id', '=', $id)
        ->first();
        return response()->json( $user );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name'       => 'required|min:1|max:256',
            'email'      => 'required|email|max:256'
        ]);
        $user = User::find($id);
        $user->name       = $request->input('name');
        $user->phone      = $request->input('phone');
        $user->email      = $request->input('email');
        $user->hrm_id      = $request->input('hrm_id');
        $user->manager_hrm_id      = $request->input('manager_hrm_id');
        $user->branch_name      = $request->input('branch_name');
        $user->status      = $request->input('status');
        if($request->password){
            $user->password = bcrypt($request->password);
        }
        $roles = $request->roles;
        $menuroles = "";
        foreach($roles AS $role){
            $role = (object) $role;
            if(isset($role->checked) && $role->checked==true){
                $menuroles .= $menuroles == "" ? $role->name : ','.$role->name;
                $model_has_roles = u::getObject(array('role_id'=>$role->id,'model_id'=>$user->id),'model_has_roles');
                if(!$model_has_roles){
                    u::insertSimpleRow(array('role_id'=>$role->id,'model_id'=>$user->id,'model_type'=>'App\User'),'model_has_roles');
                }
            }else{
                u::query("DELETE FROM model_has_roles WHERE role_id = $role->id AND model_id=$user->id");
            }
        }
        $user->menuroles = $menuroles;
        $user->save();
        u::query("UPDATE users AS u LEFT JOIN users AS m ON m.hrm_id=u.manager_hrm_id SET u.manager_id=m.id WHERE m.id IS NOT NULL");
        
        //$request->session()->flash('message', 'Successfully updated user');
        return response()->json( ['status' => 'success'] );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if($user){
            $user->delete();
        }
        return response()->json( ['status' => 'success'] );
    }
    public function add(Request $request)
    {
        $user =new User();
        $user->name       = $request->input('name');
        $user->email      = $request->input('email');
        $user->phone      = $request->input('phone');
        $user->password = bcrypt($request->password);
        $user->status      = $request->input('status');
        $user->hrm_id      = $request->input('hrm_id');
        $user->manager_hrm_id      = $request->input('manager_hrm_id');
        $user->email_verified_at = date('Y-m-d H:i:s');
        $user->branch_name      = $request->input('branch_name');
        $user->save();
        $roles = $request->roles;
        $menuroles = "";
        foreach($roles AS $role){
            $role = (object) $role;
            if(isset($role->checked) && $role->checked==true){
                $menuroles .= $menuroles == "" ? $role->name : ','.$role->name;
                $model_has_roles = u::getObject(array('role_id'=>$role->id,'model_id'=>$user->id),'model_has_roles');
                if(!$model_has_roles){
                    u::insertSimpleRow(array('role_id'=>$role->id,'model_id'=>$user->id,'model_type'=>'App\User'),'model_has_roles');
                }
            }else{
                u::query("DELETE FROM model_has_roles WHERE role_id = $role->id AND model_id=$user->id");
            }
        }
        $user->menuroles = $menuroles;
        $user->save();
        u::query("UPDATE users AS u LEFT JOIN users AS m ON m.hrm_id=u.manager_hrm_id SET u.manager_id=m.id WHERE m.id IS NOT NULL");
        //$request->session()->flash('message', 'Successfully updated user');
        return response()->json( ['status' => 'success'] );
    }
    public function getUserAssgin(Request $request){
        $data = u::query("SELECT * FROM users WHERE status=1 AND id IN (".$request->user_info->users_manager.")");
        return response()->json($data);
    }
    public function list(Request $request)
    {
        $status = isset($request->status) ? $request->status : '';
        $keyword = isset($request->keyword) ? $request->keyword : '';
        $branch_keyword = isset($request->branch_keyword) ? $request->branch_keyword : '';
        $role_id = isset($request->role_id) ? $request->role_id : '';
        
        $pagination = (object)$request->pagination;
        $page = isset($pagination->cpage) ? (int) $pagination->cpage : 1;
        $limit = isset($pagination->limit) ? (int) $pagination->limit : 20;
        $offset = $page == 1 ? 0 : $limit * ($page-1);
        $limitation =  $limit > 0 ? " LIMIT $offset, $limit": "";
        $cond = " 1 ";
        if($branch_keyword!==''){
            $cond .= " AND (u.branch_name LIKE '%$branch_keyword%') ";
        }
        if($role_id!==''){
            $cond .= " AND (SELECT count(role_id) FROM model_has_roles WHERE model_id=u.id AND role_id=$role_id)>0";
        }
        if($status!==''){
            $cond .= " AND u.status=$status";
        }
        if($keyword!==''){
            $cond .= " AND (u.name LIKE '%$keyword%' OR u.hrm_id LIKE '%$keyword%' ) ";
        }
        $total = u::first("SELECT count(id) AS total FROM users AS u WHERE $cond ");
        $list = u::query("SELECT u.*, (SELECT name FROM users WHERE id=u.manager_id) AS manager_name ,
            (SELECT status FROM user_system WHERE user_id=u.id AND `system`='crm') AS crm_status,
            (SELECT status FROM user_system WHERE user_id=u.id AND `system`='leads') AS leads_status, u.role_name AS menuroles
            FROM users AS u WHERE $cond ORDER BY u.id DESC $limitation");
        $data = u::makingPagination($list, $total->total, $page, $limit);
        return response()->json($data);
    }
    public function loginCRM(Request $request){
        $user_info = u::first("SELECT u.hrm_id FROM user_system AS s LEFT JOIN users AS u ON u.id=s.user_id WHERE s.system='crm' AND s.status=1 AND s.user_id=".$request->user()->id);
        $key ="CMS@abcd1234";
        if($user_info){
            if(env('APP_ENV', 'staging')=='production'){
                $tmp_link = 'https://crm.cmsedu.vn/single-sign-on/';
            }else{
                $tmp_link = 'https://staging.cmsedu.vn/single-sign-on/';
            }
            $data = (object)array(
                'status'=>1,
                'message'=>'',
                'link_redirect'=>$tmp_link.$user_info->hrm_id."/".md5($key.$user_info->hrm_id)
            );
        }else{
            $data = (object)array(
                'status'=>0,
                'message'=>'Bạn không có quyền truy cập hệ thống vận hành CMS',
            );
        }
        return response()->json($data);
    }
    public function loginLeads(Request $request){
        $user_info = u::first("SELECT u.hrm_id FROM user_system AS s LEFT JOIN users AS u ON u.id=s.user_id WHERE s.system='leads' AND s.status=1 AND s.user_id=".$request->user()->id);
        $key ="CMS@abcd1234";
        if($user_info){
            if(env('APP_ENV', 'staging')=='production'){
                $tmp_link = 'https://lead.cmsedu.vn/#/single-sign-on/';
            }else{
                $tmp_link = 'https://stg-lead.cmsedu.vn/#/single-sign-on/';
            }
            $data = (object)array(
                'status'=>1,
                'message'=>'',
                'link_redirect'=>$tmp_link.$user_info->hrm_id."/".md5($key.$user_info->hrm_id)."/".$request->type
            );
        }else{
            $data = (object)array(
                'status'=>0,
                'message'=>'Bạn không có quyền truy cập hệ thống chăm sóc khách hàng CMS',
            );
        }
        return response()->json($data);
    }
    public function getUserInfo(Request $request){
        $data = u::first("SELECT * FROM users WHERE id =".(int)$request->user()->id);
        return response()->json($data);
    }
    public function updateUserInfo(Request $request){
        $data = u::updateSimpleRow(array(
            'name'=>$request->name,
            'phone'=>$request->phone,
            'email'=>$request->email,
        ),array('id'=>(int)$request->user()->id),'users');
        return response()->json($data);
    }
    public function userChangePassword(Request $request){
        $user = u::first("SELECT * FROM users WHERE id =".(int)$request->user()->id);
        if(Hash::check($request->curr_pass, $user->password)) {
            $data = u::updateSimpleRow(array(
                'password' => Hash::make($request->pass),
                'change_password'=>1
            ),array('id'=>(int)$request->user()->id),'users');
            $data = (object)array(
                'status'=>1,
                'message'=>""
            );
        }else{
            $data = (object)array(
                'status'=>0,
                'message'=>"Mật khẩu cũ không chính xác"
            );
        }
        return response()->json($data);
    }
    public function sync(){
        //CRM
        u::query("DELETE FROM tmp_users");
        $connection = DB::connection('mysql_crm');
        $list_user_crm = $connection->select(
            DB::raw("SELECT u.full_name, u.email, u.phone, u.hrm_id, u.superior_id, u.`status`,
                    (SELECT b.name FROM term_user_branch AS t LEFT JOIN branches AS b ON b.id=t.branch_id WHERE t.status=1 AND t.user_id=u.id LIMIT 1) AS branch_name ,
                    (SELECT r.name FROM term_user_branch AS t LEFT JOIN roles AS r ON r.id=t.role_id WHERE t.status=1 AND t.user_id=u.id LIMIT 1) AS role_name
                FROM users AS u"));
        $sql_insert = "INSERT INTO tmp_users (name,phone,email,hrm_id,manager_hrm_id,branch_name,status,type,role_name) VALUES ";
        foreach($list_user_crm AS $row){
            $sql_insert.="('$row->full_name','$row->phone','$row->email','$row->hrm_id','$row->superior_id','$row->branch_name','$row->status','crm','$row->role_name'),";
        }
        $sql_insert = substr($sql_insert, 0, -1);
        u::query($sql_insert);

        u::query("UPDATE tmp_users AS t LEFT JOIN users AS u ON u.hrm_id=t.hrm_id SET is_duplicate =1 WHERE u.id IS NOT NULL");
        $list_insert_users = u::query("SELECT * FROM tmp_users WHERE is_duplicate=0");

        if(!empty($list_insert_users)){
            $created_at = date('Y-m-d H:i:s');
            $password = Hash::make('@12345678');
            $sql_insert_users = "INSERT INTO users (name,phone,email,password,menuroles,branch_name,hrm_id,manager_hrm_id,status,created_at,role_name) VALUES ";
            foreach($list_insert_users AS $row){
                $sql_insert_users.="('$row->name','$row->phone','$row->email','$password','users','$row->branch_name','$row->hrm_id','$row->manager_hrm_id',1,'$created_at','$row->role_name'),";
            }
            $sql_insert_users = substr($sql_insert_users, 0, -1);
            u::query($sql_insert_users);
            
            $list_users = u::query("SELECT u.id FROM users AS u LEFT JOIN model_has_roles AS m ON u.id=m.model_id WHERE m.role_id IS NULL");
            if(!empty($list_users)){
                $sql_insert_model_has_roles = "INSERT INTO model_has_roles (role_id,model_type,model_id) VALUES ";
                foreach($list_users AS $row){
                    $sql_insert_model_has_roles.="(2,'App\User','$row->id'),";
                }
                $sql_insert_model_has_roles = substr($sql_insert_model_has_roles, 0, -1);
                u::query($sql_insert_model_has_roles);
            }

            $list_users = u::query("SELECT u.id FROM users AS u LEFT JOIN user_system AS m ON u.id=m.user_id WHERE m.id IS NULL");
            if(!empty($list_users)){
                $sql_insert_user_system = "INSERT INTO user_system (user_id,`system`,status) VALUES ";
                foreach($list_users AS $row){
                    $sql_insert_user_system.="('$row->id','crm',0),('$row->id','leads',0),";
                }
                $sql_insert_user_system = substr($sql_insert_user_system, 0, -1);
                u::query($sql_insert_user_system);
            }
        }
        u::query("UPDATE user_system AS s LEFT JOIN users AS u ON u.id=s.user_id 
            LEFT JOIN tmp_users AS t ON (t.hrm_id=u.hrm_id AND t.type=s.system) 
            SET s.status=t.status, u.name = t.name, u.phone=t.phone, u.email=t.email, u.manager_hrm_id =t.manager_hrm_id, u.branch_name = t.branch_name,u.role_name=t.role_name
            WHERE t.id IS NOT NULL");

        //Lead
        u::query("DELETE FROM tmp_users");
        $connection = DB::connection('mysql_lead');
        $list_user_crm = $connection->select(DB::raw("SELECT u.name, u.email, u.phone, u.hrm_id, u.manager_hrm_id, u.`status`,u.branch_name 
                FROM users AS u"));
        $sql_insert = "INSERT INTO tmp_users (name,phone,email,hrm_id,manager_hrm_id,branch_name,status,type) VALUES ";
        foreach($list_user_crm AS $row){
            $sql_insert.="('$row->name','$row->phone','$row->email','$row->hrm_id','$row->manager_hrm_id','$row->branch_name','$row->status','leads'),";
        }
        $sql_insert = substr($sql_insert, 0, -1);
        u::query($sql_insert);

        u::query("UPDATE tmp_users AS t LEFT JOIN users AS u ON u.hrm_id=t.hrm_id SET is_duplicate =1 WHERE u.id IS NOT NULL");
        $list_insert_users = u::query("SELECT * FROM tmp_users WHERE is_duplicate=0");

        if(!empty($list_insert_users)){
            $created_at = date('Y-m-d H:i:s');
            $password = Hash::make('@12345678');
            $sql_insert_users = "INSERT INTO users (name,phone,email,password,menuroles,branch_name,hrm_id,manager_hrm_id,status,created_at) VALUES ";
            foreach($list_insert_users AS $row){
                $sql_insert_users.="('$row->name','$row->phone','$row->email','$password','user','$row->branch_name','$row->hrm_id','$row->manager_hrm_id',1,'$created_at'),";
            }
            $sql_insert_users = substr($sql_insert_users, 0, -1);
            u::query($sql_insert_users);
            
            $list_users = u::query("SELECT u.id FROM users AS u LEFT JOIN model_has_roles AS m ON u.id=m.model_id WHERE m.role_id IS NULL");
            if(!empty($list_users)){
                $sql_insert_model_has_roles = "INSERT INTO model_has_roles (role_id,model_type,model_id) VALUES ";
                foreach($list_users AS $row){
                    $sql_insert_model_has_roles.="(2,'App\User','$row->id'),";
                }
                $sql_insert_model_has_roles = substr($sql_insert_model_has_roles, 0, -1);
                u::query($sql_insert_model_has_roles);
            }

            $list_users = u::query("SELECT u.id FROM users AS u LEFT JOIN user_system AS m ON u.id=m.user_id WHERE m.id IS NULL");
            if(!empty($list_users)){
                $sql_insert_user_system = "INSERT INTO user_system (user_id,`system`,status) VALUES ";
                foreach($list_users AS $row){
                    $sql_insert_user_system.="('$row->id','crm',0),('$row->id','leads',0),";
                }
                $sql_insert_user_system = substr($sql_insert_user_system, 0, -1);
                u::query($sql_insert_user_system);
            }
        }

        u::query("UPDATE user_system AS s LEFT JOIN users AS u ON u.id=s.user_id 
            LEFT JOIN tmp_users AS t ON (t.hrm_id=u.hrm_id AND t.type=s.system) SET s.status=t.status
            WHERE t.id IS NOT NULL");
        u::updateSimpleRow(array('model_type'=>'App\User'),array('role_id'=>2),'model_has_roles');
        //update manager_id
        u::query("UPDATE users AS u LEFT JOIN users AS m ON m.hrm_id=u.manager_hrm_id SET u.manager_id=m.id");
        return "ok";
    }
}
