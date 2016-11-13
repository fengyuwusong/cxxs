//cxxs by cjf 2015/10/31
$(document).ready(function(){
    //banner滚动
    var img=$('.banner_bg a');
    var index=0;//索引
    $('#next').click(function(){
        index=(index+1)%2;
        img.eq(index).fadeIn().siblings().fadeOut();
    });
    $('#prev').click(function(){
        index=(index+1)%2;
        img.eq(index).fadeIn().siblings().fadeOut();
    });
    //设置定时播放
    var playtime=3000;//banner播放间隔时间
    play = function(){
        img.eq(index).fadeIn().siblings().fadeOut();
        index = (index+1)%2;
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
    // $('#votesum1').html("<p>{111}票</p>");
    // $('#votesum2').html("<p>222票</p>");
    // $('#votesum3').html("<p>333票</p>");
    // $('#votesum4').html("<p>444票</p>");
    // $('#votesum5').html("<p>555票</p>");
    // $('#votesum6').html("<p>666票</p>");
    // $('#votesum7').html("<p>777票</p>");
    // $('#votesum8').html("<p>888票</p>");
    // $('#votesum9').html("<p>999票</p>");
    // $('#votesum10').html("<p>1111票</p>");


    $('#singer1').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        singer.src=""+PUBLIC+"/image/singer_1.png";
        audio.src=""+PUBLIC+"/music/singer1.mp3";
        $('#song').html("<p>演唱曲目:《别找我麻烦》</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg1+"</strong></p>");
        $('#people_name').html("<h1>赖依蓝</h1> <p>外国语学院15级英语一班</p> <p>女</p>");
        $('#introduction').html("<p>座右铭：忍耐，坚持，反思。兴趣爱好：跳舞，唱歌，喜欢认真时候的自己个人经历：出生在一个音乐的家庭，从小开始弹钢琴，但是一直没有唱歌的平台，但是一直在坚持自己热爱的东西，喜欢挑战。 </p>");

    //投票界面
    var vote_on=document.getElementById('vote_on');
    var write=document.getElementById('write');
    var choice=document.getElementById('choice');
    var url = "{U('Index/index?id=999')}"
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
                        $('#choice').html("<p>恭喜你</p><p>投票成功</p><p id='write_text'>填写信息抢决赛门票</p><p id='close_text'>谢谢，我不需要</p>");
                    }
                    else{
                        $('#choice').html("<p style='color:gray;margin:30px auto;'>很遗憾</p><p style='color:gray'>投票失败</p><p style='background:gray'>每个人只能投一次哦~</p>");

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

     $('#singer2').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
         singer.src=""+PUBLIC+"/image/singer_2.png";
         audio.src=""+PUBLIC+"/music/singer2.mp3";
         $('#song').html("<p>演唱曲目:《从前慢》</p>");
         $('#getvote').html("<p>获得票数:<strong>"+sg2+"</strong></p>");
         $('#people_name').html("<h1>蔡泽栋</h1> <p>14级管理学院电子商务2班</p> <p>男</p>");
         $('#introduction').html("<p>一个立志做淘宝客服的少年，一个喜欢唱歌写段子的少年，一个脱离不了低级趣味的人，一个整天嘲讽单身狗的单身狗，三观正，颜值高，明明可以靠脸吃饭偏偏要靠才华，这就是我，一个有时候靠谱有时候不靠谱的青年。</p>");
    
            //投票界面
            var vote_on=document.getElementById('vote_on');
            var write=document.getElementById('write');
            var choice=document.getElementById('choice');
            var url = "{U('Index/index?id=999')}"
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
                                $('#choice').html("<p>恭喜你</p><p>投票成功</p><p id='write_text'>填写信息抢决赛门票</p><p id='close_text'>谢谢，我不需要</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>很遗憾</p><p style='color:gray'>投票失败</p><p style='background:gray'>每个人只能投一次哦~</p>");

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
        singer.src=""+PUBLIC+"/image/singer_3.png";
        audio.src=""+PUBLIC+"/music/singer3.mp3";
        $('#song').html("<p>演唱曲目:《当你老了》</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg3+"</strong></p>");
        $('#people_name').html("<h1>吴泳龙</h1> <p>12级通信5班</p> <p>男</p>");
        $('#introduction').html("<p>兴趣爱好：吉他，篮球，唱歌。个人经历：去过酒吧驻唱，去过几次卖唱。座右铭：好好爱自己！</p>");
    
            //投票界面
            var vote_on=document.getElementById('vote_on');
            var write=document.getElementById('write');
            var choice=document.getElementById('choice');
            var url = "{U('Index/index?id=999')}"
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
                                $('#choice').html("<p>恭喜你</p><p>投票成功</p><p id='write_text'>填写信息抢决赛门票</p><p id='close_text'>谢谢，我不需要</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>很遗憾</p><p style='color:gray'>投票失败</p><p style='background:gray'>每个人只能投一次哦~</p>");

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
        singer.src=""+PUBLIC+"/image/singer_4.png";
        audio.src=""+PUBLIC+"/music/singer4.mp3";
        $('#song').html("<p>演唱曲目:《车站》</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg4+"</strong></p>");
        $('#people_name').html("<h1>唐泽锐</h1> <p>13级电气工程学院</p> <p>男</p>");
        $('#introduction').html("<p>唐泽锐，广东揭阳人。2013级就读于华广电气工程学院。喜欢打篮球、唱歌。性格随和不拘小节。 </p>");
    
           //投票界面
            var vote_on=document.getElementById('vote_on');
            var write=document.getElementById('write');
            var choice=document.getElementById('choice');
            var url = "{U('Index/index?id=999')}"
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
                                $('#choice').html("<p>恭喜你</p><p>投票成功</p><p id='write_text'>填写信息抢决赛门票</p><p id='close_text'>谢谢，我不需要</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>很遗憾</p><p style='color:gray'>投票失败</p><p style='background:gray'>每个人只能投一次哦~</p>");

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
        singer.src=""+PUBLIC+"/image/singer_5.png";
        audio.src=""+PUBLIC+"/music/singer5.mp3";
        $('#song').html("<p>演唱曲目:《离歌》</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg5+"</strong></p>");
        $('#people_name').html("<h1>陈昊恒</h1> <p>外国语学院14级英语5班</p> <p>男</p>");
        $('#introduction').html("<p>我叫陈昊恒，一直以来，我都是一个不善于表达，却又很希望去表达的人，很多时候，我都会选择，用唱歌，用拍照，甚至用文字，去让人动容，希望你能读懂我的感动。</p>");
    
        //投票界面
            var vote_on=document.getElementById('vote_on');
            var write=document.getElementById('write');
            var choice=document.getElementById('choice');
            var url = "{U('Index/index?id=999')}"
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
                                $('#choice').html("<p>恭喜你</p><p>投票成功</p><p id='write_text'>填写信息抢决赛门票</p><p id='close_text'>谢谢，我不需要</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>很遗憾</p><p style='color:gray'>投票失败</p><p style='background:gray'>每个人只能投一次哦~</p>");

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
        singer.src=""+PUBLIC+"/image/singer_6.png";
        audio.src=""+PUBLIC+"/music/singer6.mp3";
        $('#song').html("<p>演唱曲目:《别找我麻烦》</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg6+"</strong></p>");
        $('#people_name').html("<h1>黄嘉怡 张霭仪</h1> <p>13产品设计4班、13会计5班</p> <p>女</p>");
        $('#introduction').html("<p>黄嘉怡 座右铭：乐观宽容知足  爱好：吉他设计绘画唱歌电影 Ukulele &nbsp&nbsp  张霭仪 座右铭：花花世界太过美哪有我踪影  爱好：唱歌跳舞钢琴 Ukulele </p>");
    
        //投票界面
            var vote_on=document.getElementById('vote_on');
            var write=document.getElementById('write');
            var choice=document.getElementById('choice');
            var url = "{U('Index/index?id=999')}"
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
                                $('#choice').html("<p>恭喜你</p><p>投票成功</p><p id='write_text'>填写信息抢决赛门票</p><p id='close_text'>谢谢，我不需要</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>很遗憾</p><p style='color:gray'>投票失败</p><p style='background:gray'>每个人只能投一次哦~</p>");

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
        singer.src=""+PUBLIC+"/image/singer_7.png";
        audio.src=""+PUBLIC+"/music/singer7.mp3";
        $('#song').html("<p>演唱曲目:《我期待》</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg7+"</strong></p>");
        $('#people_name').html("<h1>李晟宇</h1> <p>15级财管7班</p> <p>男</p>");
        $('#introduction').html("<p>大家好，我是15级财管7班的李晟宇。我来自湖南岳阳， 17岁。高中时期，我是乐队的主唱兼吉他手，曾习电子琴，考过全国八级，曾获市三独比赛独奏第一名，独唱第二名。现是华广吉协贼帅贼帅的技术部的一员。</p>");
    
        //投票界面
            var vote_on=document.getElementById('vote_on');
            var write=document.getElementById('write');
            var choice=document.getElementById('choice');
            var url = "{U('Index/index?id=999')}"
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
                                $('#choice').html("<p>恭喜你</p><p>投票成功</p><p id='write_text'>填写信息抢决赛门票</p><p id='close_text'>谢谢，我不需要</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>很遗憾</p><p style='color:gray'>投票失败</p><p style='background:gray'>每个人只能投一次哦~</p>");

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
        singer.src=""+PUBLIC+"/image/singer_8.png";
        audio.src=""+PUBLIC+"/music/singer8.mp3";
        $('#song').html("<p>演唱曲目:《你的名字我的姓氏》</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg8+"</strong></p>");
        $('#people_name').html("<h1>刘迪嘉</h1> <p>13级机械2班</p> <p>男</p>");
        $('#introduction').html("<p>座右铭：我很丑，可是我很温柔。兴趣爱好：唱歌。个人经历：喜欢张学友，参加三年唱响，唱了三年的张学友。</p>");
    
        //投票界面
            var vote_on=document.getElementById('vote_on');
            var write=document.getElementById('write');
            var choice=document.getElementById('choice');
            var url = "{U('Index/index?id=999')}"
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
                                $('#choice').html("<p>恭喜你</p><p>投票成功</p><p id='write_text'>填写信息抢决赛门票</p><p id='close_text'>谢谢，我不需要</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>很遗憾</p><p style='color:gray'>投票失败</p><p style='background:gray'>每个人只能投一次哦~</p>");

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
        singer.src=""+PUBLIC+"/image/singer_9.png";
        audio.src=""+PUBLIC+"/music/singer9.mp3";
        $('#song').html("<p>演唱曲目:《无法逃脱》</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg9+"</strong></p>");
        $('#people_name').html("<h1>黄巍</h1> <p></p> <p>男</p>");
        $('#introduction').html("<p>从小喜欢唱歌，12岁接触吉他，16岁终爱上摇滚乐，音乐是我这一生唯一的爱好，性格方面有点逗逼</p>");
    
        //投票界面
            var vote_on=document.getElementById('vote_on');
            var write=document.getElementById('write');
            var choice=document.getElementById('choice');
            var url = "{U('Index/index?id=999')}"
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
                                $('#choice').html("<p>恭喜你</p><p>投票成功</p><p id='write_text'>填写信息抢决赛门票</p><p id='close_text'>谢谢，我不需要</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>很遗憾</p><p style='color:gray'>投票失败</p><p style='background:gray'>每个人只能投一次哦~</p>");

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
        singer.src=""+PUBLIC+"/image/singer_10.png";
        audio.src=""+PUBLIC+"/music/singer10.mp3";
        $('#song').html("<p>演唱曲目:《我的歌声里》</p>");
        $('#getvote').html("<p>获得票数:<strong>"+sg10+"</strong></p>");
        $('#people_name').html("<h1>许真源</h1> <p>12中兴通信工程学院通信6班</p> <p>男</p>");
        $('#introduction').html("<p>我是一个活泼开朗的人，平时喜欢唱歌。之前也参加过唱响，认识了许多喜欢唱歌的同学，我们一起分享歌唱的乐趣，在唱响的舞台上绽放自己的光彩。希望这次我还能唱我想唱的歌，不留遗憾。 </p>");
    
        //投票界面
            var vote_on=document.getElementById('vote_on');
            var write=document.getElementById('write');
            var choice=document.getElementById('choice');
            var url = "{U('Index/index?id=999')}"
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
                                $('#choice').html("<p>恭喜你</p><p>投票成功</p><p id='write_text'>填写信息抢决赛门票</p><p id='close_text'>谢谢，我不需要</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>很遗憾</p><p style='color:gray'>投票失败</p><p style='background:gray'>每个人只能投一次哦~</p>");

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
    // var url = "{U('Index/index?id=999')}"
    // $('#vote_click').click(function(){
    //     vote_on.style.zIndex=999;
    //     vote_on.style.display='block';
    //     $.ajax({
    //         // type:"POST",
    //         // data: singernum;
    //         type:"post",
    //         data:{singer:1},
    //         url:URL,
    //         success:function(data){
    //                 console.log(data);
    //                 if(data == "success"){
    //                     $('#choice').html("<p>恭喜你</p><p>投票成功</p><p id='write_text'>填写信息抢决赛门票</p><p id='close_text'>谢谢，我不需要</p>");
    //                 }
    //                 else{
    //                     $('#choice').html("<p>很遗憾</p><p>投票失败</p><p id='write_text2'>填写信息抢决赛门票</p><p id='close_text2'>每个人只能投一次哦~</p>");

    //                 }
    //                 $('#close_').click(function(){
    //                 vote_on.style.zIndex=-100;
    //                 vote_on.style.display='none';
    //                 });

    //                 $('#write_text').click(function(){
    //                 write.style.display='block';
    //                 choice.style.display='none';
    //                 });

    //                 $('#close_text').click(function(){
    //                 vote_on.style.zIndex=-100;
    //                 vote_on.style.display='none';
    //                 });

    //                 if($('#submit').checked==true){
    //                     $('#submit').click(function(){
    //                     write.style.display='none';
    //                     choice.style.display='block';
    //                     vote_on.style.zIndex=-100;
    //                     vote_on.style.display='none';
    //                     })
    //                 }
    //             }
    //     })
    // });

    // $('#close_').click(function(){
    //     vote_on.style.zIndex=-100;
    //     vote_on.style.display='none';
    // });

    // $('#write_text').click(function(){
    //     write.style.display='block';
    //     choice.style.display='none';
    // });

    // $('#close_text').click(function(){
    //     vote_on.style.zIndex=-100;
    //     vote_on.style.display='none';
    // });

    // $('#submit').click(function(){
    //    alert('提交成功');
    //     write.style.display='none';
    //     choice.style.display='block';
    //     vote_on.style.zIndex=-100;
    //     vote_on.style.display='none';
    // });

    // $('button').click(function(){
    // var url=$(this).attr('name');
    // var data={'a':$(this).attr('title')};
    // $.ajax({
    //    url:url,
    //    data:data,
    // });
 // })
});

