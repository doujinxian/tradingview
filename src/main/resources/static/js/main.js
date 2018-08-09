/**
 * @author syhyz1990@qq.com
 * @date 2018-07-13
 */
var Main = function () {

    //轮播图
    var superSlide = function () {
        //首页轮播图
        $(".slide-index").slide({mainCell: ".bd ul", autoPlay: true, interTime: 8000});
        $(".slide-switch").slide({effect:"left",trigger:"click",easing:"easeOutCirc"});
        $(".slide-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"top",autoPlay:true,vis:1});

        //币币交易轮播图
        $(".mod-coinlist").slide({titCell:".head li",mainCell:".table-list",effect:"left",trigger:"click",easing:"easeOutCirc"});
    };

    var tableSorder = function () {
        $("#table-index").tablesorter({
            headers: {
                0: {sorter: false},
                6: {sorter: false},
                7: {sorter: false}
            }
        });
        $("#table-conlist").tablesorter({
            headers: {
                0: {sorter: false}
            }
        });
    };


    return {
        init: function () {
            //加载插件
            superSlide();
            tableSorder();
        }
    };
}();

$(function () {
    Main.init();
});
