// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function install_w3close() {
    document.querySelector('.w3_open').onclick=function(){
        mySidebar.style.display = mySidebar.style.display === 'block'?'none':'block';
    };
    var menus=document.querySelectorAll('.w3_close');
    for (var i=0;i<menus.length;i++){
        menus[i].onclick=function(){
            mySidebar.style.display = "none";
        };
    }
}
install_w3close();

var fsm=0;
var imgs=document.querySelectorAll('#bground img');
document.getElementById('mybutton').onclick= function(e) {
    var oldclass='w3-xxxlarge w3-center';
    document.location.hash="home";
    var me=document.getElementById('myname');
    var home=document.getElementById('home');
    // me.style.animationIterationCount=1;
    if (fsm<imgs.length){
        var i=fsm;
        fsm+=1;
        var src=imgs[i].getAttribute('src');
        home.style.backgroundImage="url('" + src  + "')";
    } else {
        fsm=0;
        home.style.backgroundImage='';
        me.setAttribute('class',oldclass);
    }
}

var vol=0;
var aud=document.getElementById('music');
var pct=document.getElementById('percent');
document.getElementById('speaker').onclick=function(e){
    var icon='off down up up'.split(' ');
    vol=(vol+1)%icon.length;
    var vv=.334*vol>1?1:.334*vol
    var spkr=document.querySelector('#speaker i');
    spkr.setAttribute('class','fa fa-volume-' + icon[vol]);
    pct.innerText= Math.floor(vv*100) + '%';
    pct.style.display='unset';
    aud.volume=vv;
    if (vol==1) {
        aud.play();
    } else if (vol==0) {
        aud.pause();
    }
    setTimeout(function(){
        pct.style.display='none';
    },500);
}

document.getElementById('noguide').onclick=function() {
    document.getElementById('guide').style.display='none';
    document.getElementById('main').setAttribute('class','');
}
