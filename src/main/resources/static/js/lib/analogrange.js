/**
 * Copyright 2016, jackness.org
 * Creator: Jackness Lau
 * $Author: Jackness Lau $
 * $Date: 2016.05.14 $
 * $Version: 1.1.1 $
 */
(function( global, factory ){
    if ( typeof module === "object" && typeof module.exports === "object" ) {
    
        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "analogrange requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }

})(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

var document = window.document;
var $ = jQuery;


var fn = {
    getPosition: function(target){
        var contentDocument = document; 
        if(arguments[2]){
            contentDocument = arguments[2];
        }

        var _x = target.offsetLeft; 
        var _y = target.offsetTop; 
        if($(target).css("position") == "fixed"){
            _x += contentDocument.documentElement.scrollLeft || contentDocument.body.scrollLeft; 
            _y += contentDocument.documentElement.scrollTop || contentDocument.body.scrollTop; 
        } 
        target = target.offsetParent;
        while(target){
            _x += target.offsetLeft || 0; 
            _y += target.offsetTop || 0; 
            target = target.offsetParent;
        } 
        return {
            left:_x, 
            top:_y 
        }; 
    },
    upper1stLetter: function(str){
        return str.charAt(0).toUpperCase() + str.substr(1);
    },
    preventDefault: function(e){
        e = e || window.event;
        if(e.preventDefault){
            e.preventDefault();
        }
        e.returnValue = false;
    },
    px2precent: function(she, val){
        var 
            o = she.options,
            key = she.key,
            iPrecent = val / she.target['offset' + key.wh2];


        return fn.precentFix(iPrecent);
    },
    precentFix: function(val){
        if(val < 0){
            val = 0;
        }
        if(val > 1){
            val = 1;
        }
        return val;
    }
};

// + config
var 
    options = {
        // 滑动方向
        direction: 'x',
        // 滑动时触发事件
        onchange: function(precent){},

        // 反向
        reverse: false,
        
        // 初始化完成回调函数
        onready: function(){}
    };
// - config
// + protected attributes
var 
    attributes = {
        target: undefined,
        bar: undefined,
        nowPos: 0,
        nowPrecent: 0,
        key: {
            pos: '',
            dir: '',
            wh: '',
            nwh: ''
        }
    };
// + protected attributes

var analogrange = function(target, op){
    return new analogrange.fn.init(target, op);
};

// + protected fn
analogrange.fn = analogrange.prototype = {
    // 设置滑块位置
    changeTo: function(precent){
        var she = this,
            o = she.options,
            key = she.key;

        she.bar.style[key.wh] = fn.precentFix(precent) * 100 + '%';

        if(she.nowPrecent != precent){
            o.onchange(precent);
        }
        she.nowPrecent = precent;
    }
};
// - protected fn

// + analogrange
var init = analogrange.fn.init = function(target, op){
    var 
        she = this,
        o = she.options = $.fn.extend({}, options, op);

    $.fn.extend(she, attributes);

    var 
        tar = she.target = $(target)[0],
        bar = she.bar = $(target)[0].children[0],
        key = she.key = $.fn.extend({}, attributes.key);

    if(o.direction == 'x'){
        key.pos = 'left';
        key.dir = 'x';
        key.wh = 'width';
        key.nwh = 'height';
    } else {
        key.pos = 'top';
        key.dir = 'y';
        key.wh = 'height';
        key.nwh = 'width';
    }

    key.pos2 = fn.upper1stLetter(key.pos);
    key.dir2 = fn.upper1stLetter(key.dir);
    key.wh2 = fn.upper1stLetter(key.wh);
    key.nwh2 = fn.upper1stLetter(key.nwh);

    var 
        mouse = {
            posM: 0,
            down: function(e){
                e = e || window.event;
                var clientM = e['client' + key.dir2];

                if(o.reverse){
                    clientM = - clientM;
                }

                mouse.posM = clientM - bar['offset' + key.wh2];


                $(document).on('mousemove', mouse.move);
                $(document).on('mouseup', mouse.up);
                $(window).on('blur', mouse.up);
                $(window).on('losecapture', mouse.up);

                fn.preventDefault(e);
            },
            move: function(e){
                e = e || window.event;
                var clientM = e['client' + key.dir2];

                if(o.reverse){
                    clientM = - clientM;
                }
                var iPos = clientM - mouse.posM;

                var nowPrecent = fn.px2precent(she, iPos);

                she.changeTo(nowPrecent);
                fn.preventDefault(e);
            },
            up: function(e){

                e = e || window.event;
                $(document).off('mousemove', mouse.move);
                $(document).off('mouseup', mouse.up);
                $(window).off('blur', mouse.up);
                $(window).off('losecapture', mouse.up);
            }
        };

    $(tar).on('click', function(e){
        e = e || window.event;
        var iPos = e['client' + key.dir2] - fn.getPosition(tar)[key.pos] + document.body['scroll' + key.pos2];
        var nowPrecent = fn.px2precent(she, iPos);

        if(o.reverse){
            nowPrecent = 1 - nowPrecent;
        }
        she.changeTo(nowPrecent);
    });

    $(bar).on('mousedown', mouse.down);
    o.onready();
    
    return she;
};

init.prototype = analogrange.fn;
// - init


if ( typeof define === "function" && define.amd ) {
    define([], function() {
        return analogrange;
    });
}

if ( typeof noGlobal === 'undefined' ) {
    window.analogrange = analogrange;
}

});



