//cxxs by cjf 2015/10/31
$(document).ready(function(){
    //banner滚动
    var img=$('.banner_bg a');
    var index=0;//索引
    $('#next').click(function(){
        index=(index+1)%3;
        img.eq(index).fadeIn().siblings().fadeOut();
    });
    $('#prev').click(function(){
        index=(index+1)%3;
        img.eq(index).fadeIn().siblings().fadeOut();
    });
    //设置定时播放
    var playtime=5000;//banner播放间隔时间
    play = function(){
        img.eq(index).fadeIn().siblings().fadeOut();
        index = (index+1)%3;
        mytime = setTimeout(play,playtime);
    }
    mytime = setTimeout(play,playtime);
    //设置鼠标放上停止播放
    $('#banner').hover(function(){
        clearTimeout(mytime);
    },function(){
        mytime = setTimeout(play,playtime);
    });

    //鼠标滚动事件
    var backtop=document.getElementById('backtop');
    var sidebar=document.getElementById('sidebar');
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;
    window.onscroll = function(){
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(!isTop){
            clearInterval(timer);
        }
        isTop = false;
        if(osTop > 0.2*clientHeight){
            sidebar.style.display = "block";
        }else{
            sidebar.style.display = "none";
        }
    };

    //返回顶部
    backtop.onclick = function(){
        timer = setInterval(function(){
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var scrollSpeed = Math.floor(osTop/4);
            isTop = true;
            document.documentElement.scrollTop = document.body.scrollTop = osTop - scrollSpeed;
            if(osTop < 20){
                document.documentElement.scrollTop = document.body.scrollTop=0;
                clearInterval(timer);
            }
        },35);
    };

    //侧边栏bug
    $('#wechat').mousemove(function(){
        sidebar.style.zIndex=100;
    });
    $('#wechat').mouseout(function(){
        sidebar.style.zIndex=1;
    });

    // 点击选手详情
    var people=document.getElementById('people');
    var audio=document.getElementById('audio');
    var singer=document.getElementById('singerpic');
    var all=document.getElementById('all');
    
    $('#close').click(function(){
        people.style.opacity=0;
        people.style.zIndex=-10;
        audio.pause();
        all.style.display="block";
        vote_on.style.zIndex=-100;
        vote_on.style.display='none';
    });

    //输出各选手信息
    $('#votesum1').html("<p>赖依蓝</p><p>"+sg1+"</p><small>票</small>");
    $('#votesum2').html("<p>蔡泽栋</p><p>"+sg2+"</p><small>票</small>");
    $('#votesum3').html("<p>吴泳龙</p><p>"+sg3+"</p><small>票</small>");
    $('#votesum4').html("<p>唐泽锐</p><p>"+sg4+"</p><small>票</small>");
    $('#votesum5').html("<p>陈昊恒</p><p>"+sg5+"</p><small>票</small>");
    $('#votesum6').html("<p>ice组合</p><p>"+sg6+"</p><small>票</small>");
    $('#votesum7').html("<p>李晟宇</p><p>"+sg7+"</p><small>票</small>");
    $('#votesum8').html("<p>刘迪嘉</p><p>"+sg8+"</p><small>票</small>");
    $('#votesum9').html("<p>黄巍</p><p>"+sg9+"</p><small>票</small>");
    $('#votesum10').html("<p>许真源</p><p>"+sg10+"</p><small>票</small>");


    $('#singer1').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src=""+PUBLIC+"/music/singer1.mp3";
        $('#song').html("<p>《别找我麻烦》- 赖依蓝</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg1+"</strong><small>票</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_1.png)");

        //投票界面
    var vote_on=document.getElementById('vote_on');
    var write=document.getElementById('write');
    var choice=document.getElementById('choice');
    $('#vote_click').click(function(){
        vote_on.style.zIndex=999;
        vote_on.style.display='block';
        $.ajax({
                    // type:"POST",
                    // data: singernum;
                    type:"post",
                    data:{singer:0},
                    url:URL,
                    success:function(data){
                            console.log(data);
                            if(data == "success"){
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");

                            }
                            $('#close_').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $('#write_text').click(function(){
                            write.style.display='block';
                            choice.style.display='none';
                            });

                            $('#close_text').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $(document).keydown(function(e){
                                if(!e) var e = window.event;
                                if(e.keyCode==27){
                                    people.style.opacity=0;
                                    people.style.zIndex=-10;
                                    audio.pause();
                                    all.style.display="block";
                                    vote_on.style.zIndex=-100;
                                    vote_on.style.display='none';
                                }
                            });

                            if($('#submit').checked==true){
                                $('#submit').click(function(){
                                    Response.Write("<script>alert('提交成功');</script>");
                                write.style.display='none';
                                choice.style.display='block';
                                vote_on.style.zIndex=-100;
                                vote_on.style.display='none';
                                })
                            }
                        }
                })
            });
    });

    });

     $('#singer2').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
         audio.src=""+PUBLIC+"/music/singer2.mp3";
         $('#song').html("<p>《从前慢》- 蔡泽栋</p>");
         $('#getvote').html("<p>获得票数:<strong>"+sg2+"</strong><small>票</small></p>");
         $('#people').css("background-image","url("+PUBLIC+"/image/singer_2.png)");
         //投票界面
    var vote_on=document.getElementById('vote_on');
    var write=document.getElementById('write');
    var choice=document.getElementById('choice');
    $('#vote_click').click(function(){
        vote_on.style.zIndex=999;
        vote_on.style.display='block';
        $.ajax({
                    // type:"POST",
                    // data: singernum;
                    type:"post",
                    data:{singer:1},
                    url:URL,
                    success:function(data){
                            console.log(data);
                            if(data == "success"){
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");

                            }
                            $('#close_').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $('#write_text').click(function(){
                            write.style.display='block';
                            choice.style.display='none';
                            });

                            $('#close_text').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $(document).keydown(function(e){
                                if(!e) var e = window.event;
                                if(e.keyCode==27){
                                    people.style.opacity=0;
                                    people.style.zIndex=-10;
                                    audio.pause();
                                    all.style.display="block";
                                    vote_on.style.zIndex=-100;
                                    vote_on.style.display='none';
                                }
                            });

                            if($('#submit').checked==true){
                                $('#submit').click(function(){
                                write.style.display='none';
                                choice.style.display='block';
                                vote_on.style.zIndex=-100;
                                vote_on.style.display='none';
                                })
                            }
                        }
                })
            });
    });


    $('#singer3').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src=""+PUBLIC+"/music/singer3.mp3";
        $('#song').html("<p>《当你老了》- 吴泳龙</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg3+"</strong><small>票</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_3.png)");
        //投票界面
    var vote_on=document.getElementById('vote_on');
    var write=document.getElementById('write');
    var choice=document.getElementById('choice');
    $('#vote_click').click(function(){
        vote_on.style.zIndex=999;
        vote_on.style.display='block';
        $.ajax({
                    // type:"POST",
                    // data: singernum;
                    type:"post",
                    data:{singer:2},
                    url:URL,
                    success:function(data){
                            console.log(data);
                            if(data == "success"){
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");

                            }
                            $('#close_').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $('#write_text').click(function(){
                            write.style.display='block';
                            choice.style.display='none';
                            });

                            $('#close_text').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $(document).keydown(function(e){
                                if(!e) var e = window.event;
                                if(e.keyCode==27){
                                    people.style.opacity=0;
                                    people.style.zIndex=-10;
                                    audio.pause();
                                    all.style.display="block";
                                    vote_on.style.zIndex=-100;
                                    vote_on.style.display='none';
                                }
                            });

                            if($('#submit').checked==true){
                                $('#submit').click(function(){
                                write.style.display='none';
                                choice.style.display='block';
                                vote_on.style.zIndex=-100;
                                vote_on.style.display='none';
                                })
                            }
                        }
                })
            });
    });


    $('#singer4').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src=""+PUBLIC+"/music/singer4.mp3";
        $('#song').html("<p>《车站》- 唐泽锐</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg4+"</strong><small>票</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_4.png)");
        //投票界面
    var vote_on=document.getElementById('vote_on');
    var write=document.getElementById('write');
    var choice=document.getElementById('choice');
    $('#vote_click').click(function(){
        vote_on.style.zIndex=999;
        vote_on.style.display='block';
        $.ajax({
                    // type:"POST",
                    // data: singernum;
                    type:"post",
                    data:{singer:3},
                    url:URL,
                    success:function(data){
                            console.log(data);
                            if(data == "success"){
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");

                            }
                            $('#close_').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $('#write_text').click(function(){
                            write.style.display='block';
                            choice.style.display='none';
                            });

                            $('#close_text').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $(document).keydown(function(e){
                                if(!e) var e = window.event;
                                if(e.keyCode==27){
                                    people.style.opacity=0;
                                    people.style.zIndex=-10;
                                    audio.pause();
                                    all.style.display="block";
                                    vote_on.style.zIndex=-100;
                                    vote_on.style.display='none';
                                }
                            });

                            if($('#submit').checked==true){
                                $('#submit').click(function(){
                                write.style.display='none';
                                choice.style.display='block';
                                vote_on.style.zIndex=-100;
                                vote_on.style.display='none';
                                })
                            }
                        }
                })
            });
    });


    $('#singer5').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src=""+PUBLIC+"/music/singer5.mp3";
        $('#song').html("<p>《离歌》- 陈昊恒</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg5+"</strong><small>票</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_5.png)");
        //投票界面
    var vote_on=document.getElementById('vote_on');
    var write=document.getElementById('write');
    var choice=document.getElementById('choice');
    $('#vote_click').click(function(){
        vote_on.style.zIndex=999;
        vote_on.style.display='block';
        $.ajax({
                    // type:"POST",
                    // data: singernum;
                    type:"post",
                    data:{singer:4},
                    url:URL,
                    success:function(data){
                            console.log(data);
                            if(data == "success"){
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");

                            }
                            $('#close_').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $('#write_text').click(function(){
                            write.style.display='block';
                            choice.style.display='none';
                            });

                            $('#close_text').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });
                            
                            $(document).keydown(function(e){
                                if(!e) var e = window.event;
                                if(e.keyCode==27){
                                    people.style.opacity=0;
                                    people.style.zIndex=-10;
                                    audio.pause();
                                    all.style.display="block";
                                    vote_on.style.zIndex=-100;
                                    vote_on.style.display='none';
                                }
                            });

                            if($('#submit').checked==true){
                                $('#submit').click(function(){
                                write.style.display='none';
                                choice.style.display='block';
                                vote_on.style.zIndex=-100;
                                vote_on.style.display='none';
                                })
                            }
                        }
                })
            });
    });


    $('#singer6').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src=""+PUBLIC+"/music/singer6.mp3";
        $('#song').html("<p>《别找我麻烦》- ice组合</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg6+"</strong><small>票</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_6.png)");
        //投票界面
    var vote_on=document.getElementById('vote_on');
    var write=document.getElementById('write');
    var choice=document.getElementById('choice');
    $('#vote_click').click(function(){
        vote_on.style.zIndex=999;
        vote_on.style.display='block';
        $.ajax({
                    // type:"POST",
                    // data: singernum;
                    type:"post",
                    data:{singer:5},
                    url:URL,
                    success:function(data){
                            console.log(data);
                            if(data == "success"){
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");

                            }
                            $('#close_').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $('#write_text').click(function(){
                            write.style.display='block';
                            choice.style.display='none';
                            });

                            $('#close_text').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $(document).keydown(function(e){
                                if(!e) var e = window.event;
                                if(e.keyCode==27){
                                    people.style.opacity=0;
                                    people.style.zIndex=-10;
                                    audio.pause();
                                    all.style.display="block";
                                    vote_on.style.zIndex=-100;
                                    vote_on.style.display='none';
                                }
                            });

                            if($('#submit').checked==true){
                                $('#submit').click(function(){
                                write.style.display='none';
                                choice.style.display='block';
                                vote_on.style.zIndex=-100;
                                vote_on.style.display='none';
                                })
                            }
                        }
                })
            });
    });


    $('#singer7').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src=""+PUBLIC+"/music/singer7.mp3";
        $('#song').html("<p>《我期待》- 李晟宇</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg7+"</strong><small>票</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_7.png)");
        //投票界面
    var vote_on=document.getElementById('vote_on');
    var write=document.getElementById('write');
    var choice=document.getElementById('choice');
    $('#vote_click').click(function(){
        vote_on.style.zIndex=999;
        vote_on.style.display='block';
        $.ajax({
                    // type:"POST",
                    // data: singernum;
                    type:"post",
                    data:{singer:6},
                    url:URL,
                    success:function(data){
                            console.log(data);
                            if(data == "success"){
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");

                            }
                            $('#close_').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $('#write_text').click(function(){
                            write.style.display='block';
                            choice.style.display='none';
                            });

                            $('#close_text').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $(document).keydown(function(e){
                                if(!e) var e = window.event;
                                if(e.keyCode==27){
                                    people.style.opacity=0;
                                    people.style.zIndex=-10;
                                    audio.pause();
                                    all.style.display="block";
                                    vote_on.style.zIndex=-100;
                                    vote_on.style.display='none';
                                }
                            });

                            if($('#submit').checked==true){
                                $('#submit').click(function(){
                                write.style.display='none';
                                choice.style.display='block';
                                vote_on.style.zIndex=-100;
                                vote_on.style.display='none';
                                })
                            }
                        }
                })
            });
    });


    $('#singer8').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src=""+PUBLIC+"/music/singer8.mp3";
        $('#song').html("<p>《你的名字我的姓氏》 - 刘迪嘉</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg8+"</strong><small>票</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_8.png)");
        //投票界面
    var vote_on=document.getElementById('vote_on');
    var write=document.getElementById('write');
    var choice=document.getElementById('choice');
    $('#vote_click').click(function(){
        vote_on.style.zIndex=999;
        vote_on.style.display='block';
        $.ajax({
                    // type:"POST",
                    // data: singernum;
                    type:"post",
                    data:{singer:7},
                    url:URL,
                    success:function(data){
                            console.log(data);
                            if(data == "success"){
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");

                            }
                            $('#close_').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $('#write_text').click(function(){
                            write.style.display='block';
                            choice.style.display='none';
                            });

                            $('#close_text').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $(document).keydown(function(e){
                                if(!e) var e = window.event;
                                if(e.keyCode==27){
                                    people.style.opacity=0;
                                    people.style.zIndex=-10;
                                    audio.pause();
                                    all.style.display="block";
                                    vote_on.style.zIndex=-100;
                                    vote_on.style.display='none';
                                }
                            });

                            if($('#submit').checked==true){
                                $('#submit').click(function(){
                                write.style.display='none';
                                choice.style.display='block';
                                vote_on.style.zIndex=-100;
                                vote_on.style.display='none';
                                })
                            }
                        }
                })
            });
    });


    $('#singer9').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src=""+PUBLIC+"/music/singer9.mp3";
        $('#song').html("<p>《无法逃脱》 - 黄巍</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg9+"</strong><small>票</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_9.png)");
        //投票界面
    var vote_on=document.getElementById('vote_on');
    var write=document.getElementById('write');
    var choice=document.getElementById('choice');
    $('#vote_click').click(function(){
        vote_on.style.zIndex=999;
        vote_on.style.display='block';
        $.ajax({
                    // type:"POST",
                    // data: singernum;
                    type:"post",
                    data:{singer:8},
                    url:URL,
                    success:function(data){
                            console.log(data);
                            if(data == "success"){
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");

                            }
                            $('#close_').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $('#write_text').click(function(){
                            write.style.display='block';
                            choice.style.display='none';
                            });

                            $('#close_text').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $(document).keydown(function(e){
                                if(!e) var e = window.event;
                                if(e.keyCode==27){
                                    people.style.opacity=0;
                                    people.style.zIndex=-10;
                                    audio.pause();
                                    all.style.display="block";
                                    vote_on.style.zIndex=-100;
                                    vote_on.style.display='none';
                                }
                            });

                            if($('#submit').checked==true){
                                $('#submit').click(function(){
                                write.style.display='none';
                                choice.style.display='block';
                                vote_on.style.zIndex=-100;
                                vote_on.style.display='none';
                                })
                            }
                        }
                })
            });
    });


    $('#singer10').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src=""+PUBLIC+"/music/singer10.mp3";
        $('#song').html("<p>《我的歌声里》 - 许真源</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg10+"</strong><small>票</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_10.png)");
        //投票界面
    var vote_on=document.getElementById('vote_on');
    var write=document.getElementById('write');
    var choice=document.getElementById('choice');
    $('#vote_click').click(function(){
        vote_on.style.zIndex=999;
        vote_on.style.display='block';
        $.ajax({
                    // type:"POST",
                    // data: singernum;
                    type:"post",
                    data:{singer:9},
                    url:URL,
                    success:function(data){
                            console.log(data);
                            if(data == "success"){
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");

                            }
                            $('#close_').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $('#write_text').click(function(){
                            write.style.display='block';
                            choice.style.display='none';
                            });

                            $('#close_text').click(function(){
                            vote_on.style.zIndex=-100;
                            vote_on.style.display='none';
                            });

                            $(document).keydown(function(e){
                                if(!e) var e = window.event;
                                if(e.keyCode==27){
                                    people.style.opacity=0;
                                    people.style.zIndex=-10;
                                    audio.pause();
                                    all.style.display="block";
                                    vote_on.style.zIndex=-100;
                                    vote_on.style.display='none';
                                }
                            });

                            if($('#submit').checked==true){
                                $('#submit').click(function(){
                                write.style.display='none';
                                choice.style.display='block';
                                vote_on.style.zIndex=-100;
                                vote_on.style.display='none';
                                })
                            }
                        }
                })
            });
    });


    // //投票界面
    // var vote_on=document.getElementById('vote_on');
    // var write=document.getElementById('write');
    // var choice=document.getElementById('choice');
    // $('#vote_click').click(function(){
    //     vote_on.style.zIndex=999;
    //     vote_on.style.display='block';
    //     $.ajax({
    //                 // type:"POST",
    //                 // data: singernum;
    //                 type:"post",
    //                 data:{singer:9},
    //                 url:URL,
    //                 success:function(data){
    //                         console.log(data);
    //                         if(data == "success"){
    //                             $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");
    //                         }
    //                         else{
    //                             $('#choice').html("<p style='color:gray;margin-top:120px'>投票已结束</p>");

    //                         }
    //                         $('#close_').click(function(){
    //                         vote_on.style.zIndex=-100;
    //                         vote_on.style.display='none';
    //                         });

    //                         $('#write_text').click(function(){
    //                         write.style.display='block';
    //                         choice.style.display='none';
    //                         });

    //                         $('#close_text').click(function(){
    //                         vote_on.style.zIndex=-100;
    //                         vote_on.style.display='none';
    //                         });

    //                         $(document).keydown(function(e){
    //                             if(!e) var e = window.event;
    //                             if(e.keyCode==27){
    //                                 people.style.opacity=0;
    //                                 people.style.zIndex=-10;
    //                                 audio.pause();
    //                                 all.style.display="block";
    //                                 vote_on.style.zIndex=-100;
    //                                 vote_on.style.display='none';
    //                             }
    //                         });

    //                         if($('#submit').checked==true){
    //                             $('#submit').click(function(){
    //                             write.style.display='none';
    //                             choice.style.display='block';
    //                             vote_on.style.zIndex=-100;
    //                             vote_on.style.display='none';
    //                             })
    //                         }
    //                     }
    //             })
    //         });
    // });

//     $('#close_').click(function(){
//         vote_on.style.zIndex=-100;
//         vote_on.style.display='none';
//     });

//     $('#write_text').click(function(){
//         write.style.display='block';
//         choice.style.display='none';
//     });

//     $('#close_text').click(function(){
//         vote_on.style.zIndex=-100;
//         vote_on.style.display='none';
//     });

//     $('#submit').click(function(){
//        alert('提交成功');
//         write.style.display='none';
//         choice.style.display='block';
//         vote_on.style.zIndex=-100;
//         vote_on.style.display='none';
//     });

//   //键盘监听器
//     $(document).keydown(function(e){
//         if(!e) var e = window.event;
//         if(e.keyCode==27){
//             people.style.opacity=0;
//             people.style.zIndex=-10;
//             audio.pause();
//             all.style.display="block";
//             vote_on.style.zIndex=-100;
//             vote_on.style.display='none';
//         }
//     });
// });

