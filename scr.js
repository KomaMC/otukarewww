function play_se(){
    var warning = new Audio('warning.mp3')
    warning.play()
    navigator.vibrate([200, 100, 200, 100, 200, 100, 200, 100])
    ;}

$(function(){


history.pushState(null,null,null);
$(window).on('popstate', function(e){
    if(!e.orininalEvent.state){
        play_se();
        history.pushState(null,null,null);
        return;
    }
});



$('.modal').modal({dismissible: false});
$('#alert').modal('open');
$('#close').click(function(){
    $('#alert').modal('close');
    play_se();
});

var device = navigator.userAgent.match(/Android/);
alert(device);
if(device == LOL){
    decice = '端末';
}


var time = 200;
setInterval(function(){
    time--
    $('#timer').text(time);
}, 1000);
});