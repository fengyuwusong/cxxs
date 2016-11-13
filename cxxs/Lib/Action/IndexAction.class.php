<?php
class IndexAction extends Action {
    public function index(){
    	// $condition['uid'] = 0;
    	$singer = M("data");
    	$info = $singer ->select();
        foreach ($info as $key => $value) {
            $singerpoll = singerpoll."$key";
            $this->assign($singerpoll,$value['poll']);
        }
    	$this -> display();
    }
    public function checkID(){

        // die("success");
        
        //判断cookie是否存在
        if($_COOKIE['cxxs'] == md5('xingkong')){
            exit('cookie');
        }
    	if($_SERVER['HTTP_CLIENT_IP']){
			$onlineip=$_SERVER['HTTP_CLIENT_IP'];
		}elseif($_SERVER['HTTP_X_FORWARDED_FOR']){
			$onlineip=$_SERVER['HTTP_X_FORWARDED_FOR'];
		}else{
			$onlineip=$_SERVER['REMOTE_ADDR'];
		}
    	$user = M('ip');
    	$data = $user->field('id')->select();
    	foreach ($data as $key => $ID){
    	//判断ip是否提交过
    		if($ID['id'] == $onlineip){
    			exit('error');
    		}    	
        }
        $newdata['id']=$onlineip;
    	$newdata['createtime']=time();
    	$newdata['object'] = $_POST['singer'];//歌手变量uid  0-9
    	$user->add($newdata);
        //获取歌手号数，实例化歌手，票数加一
    	$condition['uid']= $_POST['singer'];
    	$singer = M("data");
    	$info = $singer->where($condition)->find();
    	$newinfo['poll'] = $info['poll'];
    	$newinfo['lasttime'] = time();
    	$singer->where($condition)->save($newinfo);
        //提交数据成功 setcookie
        setcookie('cxxs',md5("xingkong"));
    	exit('success');
		// echo $onlineip;
    }
    public function voter(){
        $name = $_POST['name'];
        $num = $_POST['num'];
        $phone = $_POST['phone'];
        if($_SERVER['HTTP_CLIENT_IP']){
            $onlineip=$_SERVER['HTTP_CLIENT_IP'];
        }elseif($_SERVER['HTTP_X_FORWARDED_FOR']){
            $onlineip=$_SERVER['HTTP_X_FORWARDED_FOR'];
        }else{
            $onlineip=$_SERVER['REMOTE_ADDR'];
        }
        $voter = M("ip");
        $condition['id']= $onlineip;
        $newinfo['name'] = $name;
        $newinfo['num'] = $num;
        $newinfo['phone'] = $phone;
        $newinfo['time'] = time();
        $newinfo['object'] = 1;//歌手变量 0-9
        $voter->where($condition)->save($newinfo);
        $this->redirect("Index/index");
    }
    public function singerinfo(){

    }
}