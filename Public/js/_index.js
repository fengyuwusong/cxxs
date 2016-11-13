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
    });

    //�����ѡ����Ϣ
    $('#singer1').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        singer.src="../public/image/singer_1.png";
        audio.src="../public/music/singer1.mp3";
        $('#people_name').html("<h1>������</h1> <p>�����ѧԺ15��Ӣ��һ��</p> <p>Ů</p>");
        $('#introduction').html("<p>�����������ͣ���֣���˼����Ȥ���ã����裬���裬ϲ������ʱ����Լ����˾�����������һ�����ֵļ�ͥ����С��ʼ�����٣�����һֱû�г����ƽ̨������һֱ�ڼ���Լ��Ȱ��Ķ�����ϲ����ս�� </p>");
    });

     $('#singer2').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
         singer.src="../public/image/singer_2.png";
         audio.src="../public/music/singer2.mp3";
         $('#people_name').html("<h1>����</h1> <p>14������ѧԺ��������2��</p> <p>��</p>");
         $('#introduction').html("<p>һ����־���Ա��ͷ������꣬һ��ϲ������д���ӵ����꣬һ�����벻�˵ͼ�Ȥζ���ˣ�һ�����쳰�����ĵ���������������ֵ�ߣ��������Կ����Է�ƫƫҪ���Ż���������ң�һ����ʱ������ʱ�򲻿��׵����ꡣ</p>");
    });

    $('#singer3').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        singer.src="../public/image/singer_3.png";
        audio.src="../public/music/singer3.mp3";
        $('#people_name').html("<h1>��Ӿ��</h1> <p>12��ͨ��5��</p> <p>��</p>");
        $('#introduction').html("<p>��Ȥ���ã����������򣬳��衣���˾�����ȥ���ư�פ����ȥ���������������������úð��Լ���</p>");
    });

    $('#singer4').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        singer.src="../public/image/singer_4.png";
        audio.src="../public/music/singer4.mp3";
        $('#people_name').html("<h1>������</h1> <p>13����������ѧԺ</p> <p>��</p>");
        $('#introduction').html("<p>�����񣬹㶫�����ˡ�2013���Ͷ��ڻ����������ѧԺ��ϲ�������򡢳��衣�Ը���Ͳ���С�ڡ� </p>");
    });

    $('#singer5').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        singer.src="../public/image/singer_5.png";
        audio.src="../public/music/singer5.mp3";
        $('#people_name').html("<h1>��껺�</h1> <p>�����ѧԺ14��Ӣ��5��</p> <p>��</p>");
        $('#introduction').html("<p>�ҽг�껺㣬һֱ�������Ҷ���һ�������ڱ�ȴ�ֺ�ϣ��ȥ�����ˣ��ܶ�ʱ���Ҷ���ѡ���ó��裬�����գ����������֣�ȥ���˶��ݣ�ϣ�����ܶ����ҵĸж���</p>");
    });

    $('#singer6').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        singer.src="../public/image/singer_6.png";
        audio.src="../public/music/singer6.mp3";
        $('#people_name').html("<h1>�Ƽ��� ������</h1> <p>13��Ʒ���4�ࡢ13���5��</p> <p>Ů</p>");
        $('#introduction').html("<p>�Ƽ��� ���������ֹۿ���֪��  ���ã�������ƻ滭�����Ӱ Ukulele &nbsp&nbsp  ������ ����������������̫������������Ӱ  ���ã������������ Ukulele </p>");
    });

    $('#singer7').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        singer.src="../public/image/singer_7.png";
        audio.src="../public/music/singer7.mp3";
        $('#people_name').html("<h1>������</h1> <p>15���ƹ�7��</p> <p>��</p>");
        $('#introduction').html("<p>��Һã�����15���ƹ�7�������������Ժ��������� 17�ꡣ����ʱ�ڣ������ֶӵ������漪���֣���ϰ�����٣�����ȫ���˼����������������������һ���������ڶ��������ǻ��㼪Э��˧��˧�ļ�������һԱ��</p>");
    });

    $('#singer8').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        singer.src="../public/image/singer_8.png";
        audio.src="../public/music/singer8.mp3";
        $('#people_name').html("<h1>���ϼ�</h1> <p>13����е2��</p> <p>��</p>");
        $('#introduction').html("<p>���������Һܳ󣬿����Һ����ᡣ��Ȥ���ã����衣���˾�����ϲ����ѧ�ѣ��μ����곪�죬�����������ѧ�ѡ�</p>");
    });

    $('#singer9').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        singer.src="../public/image/singer_9.png";
        audio.src="../public/music/singer9.mp3";
        $('#people_name').html("<h1>��Ρ</h1> <p></p> <p>��</p>");
        $('#introduction').html("<p>��Сϲ�����裬12��Ӵ�������16���հ���ҡ���֣�����������һ��Ψһ�İ��ã��Ը����е㶺��</p>");
    });
    
    $('#singer10').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        singer.src="../public/image/singer_10.png";
        audio.src="../public/music/singer10.mp3";
        $('#people_name').html("<h1>����Դ</h1> <p>12����ͨ�Ź���ѧԺͨ��6��</p> <p>��</p>");
        $('#introduction').html("<p>����һ�����ÿ��ʵ��ˣ�ƽʱϲ�����衣֮ǰҲ�μӹ����죬��ʶ�����ϲ�������ͬѧ������һ�����質����Ȥ���ڳ������̨�������Լ��Ĺ�ʡ�ϣ������һ��ܳ����볪�ĸ裬�����ź��� </p>");
    });

});

