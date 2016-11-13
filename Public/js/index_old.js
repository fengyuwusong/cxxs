//cxxs by cjf 2015/10/31
$(document).ready(function(){
    //banner����
    var img=$('.banner_bg a');
    var index=0;//����
    $('#next').click(function(){
        index=(index+1)%2;
        img.eq(index).fadeIn().siblings().fadeOut();
    });
    $('#prev').click(function(){
        index=(index+1)%2;
        img.eq(index).fadeIn().siblings().fadeOut();
    });
    //���ö�ʱ����
    var playtime=3000;//banner���ż��ʱ��
    play = function(){
        img.eq(index).fadeIn().siblings().fadeOut();
        index = (index+1)%2;
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
    // $('#votesum1').html("<p>{111}Ʊ</p>");
    // $('#votesum2').html("<p>222Ʊ</p>");
    // $('#votesum3').html("<p>333Ʊ</p>");
    // $('#votesum4').html("<p>444Ʊ</p>");
    // $('#votesum5').html("<p>555Ʊ</p>");
    // $('#votesum6').html("<p>666Ʊ</p>");
    // $('#votesum7').html("<p>777Ʊ</p>");
    // $('#votesum8').html("<p>888Ʊ</p>");
    // $('#votesum9').html("<p>999Ʊ</p>");
    // $('#votesum10').html("<p>1111Ʊ</p>");


    $('#singer1').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        singer.src=""+PUBLIC+"/image/singer_1.png";
        audio.src=""+PUBLIC+"/music/singer1.mp3";
        $('#song').html("<p>�ݳ���Ŀ:���������鷳��</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg1+"</strong></p>");
        $('#people_name').html("<h1>������</h1> <p>�����ѧԺ15��Ӣ��һ��</p> <p>Ů</p>");
        $('#introduction').html("<p>�����������ͣ���֣���˼����Ȥ���ã����裬���裬ϲ������ʱ����Լ����˾�����������һ�����ֵļ�ͥ����С��ʼ�����٣�����һֱû�г����ƽ̨������һֱ�ڼ���Լ��Ȱ��Ķ�����ϲ����ս�� </p>");

    //ͶƱ����
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
                        $('#choice').html("<p>��ϲ��</p><p>ͶƱ�ɹ�</p><p id='write_text'>��д��Ϣ��������Ʊ</p><p id='close_text'>лл���Ҳ���Ҫ</p>");
                    }
                    else{
                        $('#choice').html("<p style='color:gray;margin:30px auto;'>���ź�</p><p style='color:gray'>ͶƱʧ��</p><p style='background:gray'>ÿ����ֻ��Ͷһ��Ŷ~</p>");

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
         $('#song').html("<p>�ݳ���Ŀ:����ǰ����</p>");
         $('#getvote').html("<p>���Ʊ��:<strong>"+sg2+"</strong></p>");
         $('#people_name').html("<h1>����</h1> <p>14������ѧԺ��������2��</p> <p>��</p>");
         $('#introduction').html("<p>һ����־���Ա��ͷ������꣬һ��ϲ������д���ӵ����꣬һ�����벻�˵ͼ�Ȥζ���ˣ�һ�����쳰�����ĵ���������������ֵ�ߣ��������Կ����Է�ƫƫҪ���Ż���������ң�һ����ʱ������ʱ�򲻿��׵����ꡣ</p>");
    
            //ͶƱ����
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
                                $('#choice').html("<p>��ϲ��</p><p>ͶƱ�ɹ�</p><p id='write_text'>��д��Ϣ��������Ʊ</p><p id='close_text'>лл���Ҳ���Ҫ</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>���ź�</p><p style='color:gray'>ͶƱʧ��</p><p style='background:gray'>ÿ����ֻ��Ͷһ��Ŷ~</p>");

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
        $('#song').html("<p>�ݳ���Ŀ:���������ˡ�</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg3+"</strong></p>");
        $('#people_name').html("<h1>��Ӿ��</h1> <p>12��ͨ��5��</p> <p>��</p>");
        $('#introduction').html("<p>��Ȥ���ã����������򣬳��衣���˾�����ȥ���ư�פ����ȥ���������������������úð��Լ���</p>");
    
            //ͶƱ����
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
                                $('#choice').html("<p>��ϲ��</p><p>ͶƱ�ɹ�</p><p id='write_text'>��д��Ϣ��������Ʊ</p><p id='close_text'>лл���Ҳ���Ҫ</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>���ź�</p><p style='color:gray'>ͶƱʧ��</p><p style='background:gray'>ÿ����ֻ��Ͷһ��Ŷ~</p>");

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
        $('#song').html("<p>�ݳ���Ŀ:����վ��</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg4+"</strong></p>");
        $('#people_name').html("<h1>������</h1> <p>13����������ѧԺ</p> <p>��</p>");
        $('#introduction').html("<p>�����񣬹㶫�����ˡ�2013���Ͷ��ڻ����������ѧԺ��ϲ�������򡢳��衣�Ը���Ͳ���С�ڡ� </p>");
    
           //ͶƱ����
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
                                $('#choice').html("<p>��ϲ��</p><p>ͶƱ�ɹ�</p><p id='write_text'>��д��Ϣ��������Ʊ</p><p id='close_text'>лл���Ҳ���Ҫ</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>���ź�</p><p style='color:gray'>ͶƱʧ��</p><p style='background:gray'>ÿ����ֻ��Ͷһ��Ŷ~</p>");

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
        $('#song').html("<p>�ݳ���Ŀ:����衷</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg5+"</strong></p>");
        $('#people_name').html("<h1>��껺�</h1> <p>�����ѧԺ14��Ӣ��5��</p> <p>��</p>");
        $('#introduction').html("<p>�ҽг�껺㣬һֱ�������Ҷ���һ�������ڱ�ȴ�ֺ�ϣ��ȥ�����ˣ��ܶ�ʱ���Ҷ���ѡ���ó��裬�����գ����������֣�ȥ���˶��ݣ�ϣ�����ܶ����ҵĸж���</p>");
    
        //ͶƱ����
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
                                $('#choice').html("<p>��ϲ��</p><p>ͶƱ�ɹ�</p><p id='write_text'>��д��Ϣ��������Ʊ</p><p id='close_text'>лл���Ҳ���Ҫ</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>���ź�</p><p style='color:gray'>ͶƱʧ��</p><p style='background:gray'>ÿ����ֻ��Ͷһ��Ŷ~</p>");

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
        $('#song').html("<p>�ݳ���Ŀ:���������鷳��</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg6+"</strong></p>");
        $('#people_name').html("<h1>�Ƽ��� ������</h1> <p>13��Ʒ���4�ࡢ13���5��</p> <p>Ů</p>");
        $('#introduction').html("<p>�Ƽ��� ���������ֹۿ���֪��  ���ã�������ƻ滭�����Ӱ Ukulele &nbsp&nbsp  ������ ����������������̫������������Ӱ  ���ã������������ Ukulele </p>");
    
        //ͶƱ����
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
                                $('#choice').html("<p>��ϲ��</p><p>ͶƱ�ɹ�</p><p id='write_text'>��д��Ϣ��������Ʊ</p><p id='close_text'>лл���Ҳ���Ҫ</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>���ź�</p><p style='color:gray'>ͶƱʧ��</p><p style='background:gray'>ÿ����ֻ��Ͷһ��Ŷ~</p>");

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
        $('#song').html("<p>�ݳ���Ŀ:�����ڴ���</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg7+"</strong></p>");
        $('#people_name').html("<h1>������</h1> <p>15���ƹ�7��</p> <p>��</p>");
        $('#introduction').html("<p>��Һã�����15���ƹ�7�������������Ժ��������� 17�ꡣ����ʱ�ڣ������ֶӵ������漪���֣���ϰ�����٣�����ȫ���˼����������������������һ���������ڶ��������ǻ��㼪Э��˧��˧�ļ�������һԱ��</p>");
    
        //ͶƱ����
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
                                $('#choice').html("<p>��ϲ��</p><p>ͶƱ�ɹ�</p><p id='write_text'>��д��Ϣ��������Ʊ</p><p id='close_text'>лл���Ҳ���Ҫ</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>���ź�</p><p style='color:gray'>ͶƱʧ��</p><p style='background:gray'>ÿ����ֻ��Ͷһ��Ŷ~</p>");

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
        $('#song').html("<p>�ݳ���Ŀ:����������ҵ����ϡ�</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg8+"</strong></p>");
        $('#people_name').html("<h1>���ϼ�</h1> <p>13����е2��</p> <p>��</p>");
        $('#introduction').html("<p>���������Һܳ󣬿����Һ����ᡣ��Ȥ���ã����衣���˾�����ϲ����ѧ�ѣ��μ����곪�죬�����������ѧ�ѡ�</p>");
    
        //ͶƱ����
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
                                $('#choice').html("<p>��ϲ��</p><p>ͶƱ�ɹ�</p><p id='write_text'>��д��Ϣ��������Ʊ</p><p id='close_text'>лл���Ҳ���Ҫ</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>���ź�</p><p style='color:gray'>ͶƱʧ��</p><p style='background:gray'>ÿ����ֻ��Ͷһ��Ŷ~</p>");

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
        $('#song').html("<p>�ݳ���Ŀ:���޷����ѡ�</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg9+"</strong></p>");
        $('#people_name').html("<h1>��Ρ</h1> <p></p> <p>��</p>");
        $('#introduction').html("<p>��Сϲ�����裬12��Ӵ�������16���հ���ҡ���֣�����������һ��Ψһ�İ��ã��Ը����е㶺��</p>");
    
        //ͶƱ����
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
                                $('#choice').html("<p>��ϲ��</p><p>ͶƱ�ɹ�</p><p id='write_text'>��д��Ϣ��������Ʊ</p><p id='close_text'>лл���Ҳ���Ҫ</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>���ź�</p><p style='color:gray'>ͶƱʧ��</p><p style='background:gray'>ÿ����ֻ��Ͷһ��Ŷ~</p>");

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
        $('#song').html("<p>�ݳ���Ŀ:���ҵĸ����</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>"+sg10+"</strong></p>");
        $('#people_name').html("<h1>����Դ</h1> <p>12����ͨ�Ź���ѧԺͨ��6��</p> <p>��</p>");
        $('#introduction').html("<p>����һ�����ÿ��ʵ��ˣ�ƽʱϲ�����衣֮ǰҲ�μӹ����죬��ʶ�����ϲ�������ͬѧ������һ�����質����Ȥ���ڳ������̨�������Լ��Ĺ�ʡ�ϣ������һ��ܳ����볪�ĸ裬�����ź��� </p>");
    
        //ͶƱ����
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
                                $('#choice').html("<p>��ϲ��</p><p>ͶƱ�ɹ�</p><p id='write_text'>��д��Ϣ��������Ʊ</p><p id='close_text'>лл���Ҳ���Ҫ</p>");
                            }
                            else{
                                $('#choice').html("<p style='color:gray;margin:30px auto;'>���ź�</p><p style='color:gray'>ͶƱʧ��</p><p style='background:gray'>ÿ����ֻ��Ͷһ��Ŷ~</p>");

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

    // //ͶƱ����
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
    //                     $('#choice').html("<p>��ϲ��</p><p>ͶƱ�ɹ�</p><p id='write_text'>��д��Ϣ��������Ʊ</p><p id='close_text'>лл���Ҳ���Ҫ</p>");
    //                 }
    //                 else{
    //                     $('#choice').html("<p>���ź�</p><p>ͶƱʧ��</p><p id='write_text2'>��д��Ϣ��������Ʊ</p><p id='close_text2'>ÿ����ֻ��Ͷһ��Ŷ~</p>");

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
    //    alert('�ύ�ɹ�');
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

