// Javascript Document

function(id){
    var obj = document.getElementById(id);
    var disX=0,
        disY=0;
    obj.onmousedown = function(ev){
        disX = ev.pageX - obj.offsetLeft;
        disY = ev.pageY - obj.offsetTop;
    }
}