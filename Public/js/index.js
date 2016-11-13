//cxxs by cjf 2015/10/31
$(document).ready(function(){
    //banner����
    var img=$('.banner_bg a');
    var index=0;//����
    $('#next').click(function(){
        index=(index+1)%3;
        img.eq(index).fadeIn().siblings().fadeOut();
    });
    $('#prev').click(function(){
        index=(index+1)%3;
        img.eq(index).fadeIn().siblings().fadeOut();
    });
    //���ö�ʱ����
    var playtime=5000;//banner���ż��ʱ��
    play = function(){
        img.eq(index).fadeIn().siblings().fadeOut();
        index = (index+1)%3;
        mytime = setTimeout(play,playtime);
    }
    mytime = setTimeout(play,playtime);
    //����������ֹͣ����
    $('#banner').hover(function(){
        clearTimeout(mytime);
    },function(){
        mytime = setTimeout(play,playtime);
    });

    //�������¼�
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

    //���ض���
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

    //�����bug
    $('#wechat').mousemove(function(){
        sidebar.style.zIndex=100;
    });
    $('#wechat').mouseout(function(){
        sidebar.style.zIndex=1;
    });

    // ���ѡ������
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

    //�����ѡ����Ϣ
    $('#votesum1').html("<p>������</p><p>"+sg1+"</p><small>Ʊ</small>");
    $('#votesum2').html("<p>����</p><p>"+sg2+"</p><small>Ʊ</small>");
    $('#votesum3').html("<p>��Ӿ��</p><p>"+sg3+"</p><small>Ʊ</small>");
    $('#votesum4').html("<p>������</p><p>"+sg4+"</p><small>Ʊ</small>");
    $('#votesum5').html("<p>��껺�</p><p>"+sg5+"</p><small>Ʊ</small>");
    $('#votesum6').html("<p>ice���</p><p>"+sg6+"</p><small>Ʊ</small>");
    $('#votesum7').html("<p>������</p><p>"+sg7+"</p><small>Ʊ</small>");
    $('#votesum8').html("<p>���ϼ�</p><p>"+sg8+"</p><small>Ʊ</small>");
    $('#votesum9').html("<p>��Ρ</p><p>"+sg9+"</p><small>Ʊ</small>");
    $('#votesum10').html("<p>����Դ</p><p>"+sg10+"</p><small>Ʊ</small>");


    $('#singer1').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src=""+PUBLIC+"/music/singer1.mp3";
        $('#song').html("<p>���������鷳��- ������</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg1+"</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_1.png)");

        //ͶƱ����
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
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");

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
                                    Response.Write("<script>alert('�ύ�ɹ�');</script>");
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
         $('#song').html("<p>����ǰ����- ����</p>");
         $('#getvote').html("<p>���Ʊ��:<strong>"+sg2+"</strong><small>Ʊ</small></p>");
         $('#people').css("background-image","url("+PUBLIC+"/image/singer_2.png)");
         //ͶƱ����
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
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");

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
        $('#song').html("<p>���������ˡ�- ��Ӿ��</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg3+"</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_3.png)");
        //ͶƱ����
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
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");

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
        $('#song').html("<p>����վ��- ������</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg4+"</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_4.png)");
        //ͶƱ����
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
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");

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
        $('#song').html("<p>����衷- ��껺�</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg5+"</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_5.png)");
        //ͶƱ����
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
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");

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
        $('#song').html("<p>���������鷳��- ice���</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg6+"</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_6.png)");
        //ͶƱ����
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
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");

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
        $('#song').html("<p>�����ڴ���- ������</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg7+"</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_7.png)");
        //ͶƱ����
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
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");

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
        $('#song').html("<p>����������ҵ����ϡ� - ���ϼ�</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg8+"</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_8.png)");
        //ͶƱ����
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
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");

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
        $('#song').html("<p>���޷����ѡ� - ��Ρ</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg9+"</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_9.png)");
        //ͶƱ����
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
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");

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
        $('#song').html("<p>���ҵĸ���� - ����Դ</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg10+"</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url("+PUBLIC+"/image/singer_10.png)");
        //ͶƱ����
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
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");

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


    // //ͶƱ����
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
    //                             $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");
    //                         }
    //                         else{
    //                             $('#choice').html("<p style='color:gray;margin-top:120px'>ͶƱ�ѽ���</p>");

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
//        alert('�ύ�ɹ�');
//         write.style.display='none';
//         choice.style.display='block';
//         vote_on.style.zIndex=-100;
//         vote_on.style.display='none';
//     });

//   //���̼�����
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

