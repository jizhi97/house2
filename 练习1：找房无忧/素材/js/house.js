function set (){
    var win = document.documentElement.clientWidth || document.body.clientWidth;

    var ui = 375;

    document.documentElement.style.fontSize = (win / ui) *100 +'px';

}
set();
window.onresize = set;