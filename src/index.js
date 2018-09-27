require('./index.css');
// require('./index.html');
require('jquery')



var $item = $('.item');
var len = $item.length;
var deg = 360/len;
var $text = $('.text');
var str = `如果思念是一条河流，那我一定是在河里游行的鱼，在这潺潺河水的相思中孤独终老;如果思念是一场烟雨，那我一定是雨中孤傲的路灯，在黑夜中观望着人来人往的街道;
如果思念是一座城，那我一定是站在城门等待的姑娘，等待着回不来的故人。我见过这世间的繁华，也曾路过空洞的街道，
但我不喜欢望着人群渐行渐远的感觉，也不喜欢吹着萧瑟的夜风行走在空无一人的街道。我感受过春天的温暖，也经历过冬天的严寒。
但我不喜欢春天的温暖，它太和煦了，让人感觉美得不真实;我也不喜欢冬天的严寒，它像一把匕首，一次次地刺在我的胸口，直到我的血流干，直到我的心被封锁。`;
var textStr = '';
var leftLong = $('body').width();
var lastTop = $('body').height();
var minWidth = 8;
console.log(deg)
$item.each(function(ind,it){
    $(it).css({
        "transform": "rotateY(" + (ind * deg) + "deg) translateZ(" + 300 + "px)"
    })
})

$(function() {
    var i = 0;
    var strLen = str.length;
    var timer = setInterval(function(){
        if(i>=str.length){
            clearInterval(timer);
        }else{
            textStr += str.charAt(i ++);
            $text.text(textStr)
        }
    }, 300)

    var snowTimer = setInterval(function(){
        $('<div></div>').addClass('snow').html('❉').css({
            position: 'absolute',
            top: '0',
            left: Math.floor(Math.random() * leftLong) + 'px',
            width: minWidth + Math.floor(Math.random()*30) + 'px',
            height: minWidth + Math.floor(Math.random()*30) + 'px',
            color: '#fff',
            fontSize: minWidth + Math.floor(Math.random() * 30) + 'px'
        }).appendTo($('body')).animate({
            top: lastTop - 200 + 'px',
            left: Math.floor(Math.random() * leftLong) + 'px',
        }, 10000, function () {
            $(this).remove();
        })
    }, 200)
})
