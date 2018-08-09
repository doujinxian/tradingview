<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="Keywords" content="" />
    <meta name="Description" content="" />
    <title></title>
    <link rel="stylesheet" href="css/style.css?rev=@@hash">
</head>

<body>
<div class="page-notice">
    <div class="container">
        <div class="slide-top">
            <div class="hd">
            </div>
            <div class="bd">
                <ul class="infoList">
                    <li>全新币种上线公告1</li>
                    <li>全新币种上线公告2</li>
                    <li>全新币种上线公告3</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>


<div class="page-bb">
    <div class="container">
        <div class="left-content">
            <div class="mod-invite">
                <div class="title">邀请好友注册，<br> 轻松获得交易返佣</div>
                <a href="">立即邀请 ></a>
            </div>
            <div class="mod-coinlist">
            </div>

            <div class="mod-announce">
                <div class="head">公告</div>
                <ul class="body">
                    <li>
                        <a class="title" href="">Lorem ipsum dolor sit amet.</a>
                        <div class="time">2018-08-19 19:00:00</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="main-content">
        <div class="mod-tradingview">
            <div class="head">
                <h1>
                    <i class="icon-arrowdown"></i>
                    ETH/BTC 6224.90&nbsp;&nbsp;<span class="small">≈4748895&nbsp;&nbsp;CNY&nbsp;&nbsp;&nbsp;涨幅 <span
                        class="green">+4788.82%</span></span>
                </h1>
                <ul>
                    <li><span class="purple">24H最高 |</span> 3545566.24BTC</li>
                    <li><span class="purple">24H最低 |</span> 3545566.24BTC</li>
                    <li><span class="purple">24H成交量 |</span> 3545566.24BTC</li>
                </ul>
            </div>
            <div class="body">
                <div id="chart-container"></div>
            </div>
        </div>


    </div>
</div>

</body>
<script src="js/lib/trading-view/charting_library/charting_library.min.js"></script>
<script src="js/lib/trading-view/datafeeds/udf/dist/polyfills.js"></script>
<script src="js/lib/trading-view/datafeeds/udf/dist/bundle.js"></script>
<script type="text/javascript">
    TradingView.onready(function () {
        var widget = new TradingView.widget({
            "autosize": true,
            "symbol": "BTCUSDT",
            "interval": "1",
            "container_id": "chart-container",
            "library_path": "/js/lib/trading-view/charting_library/",
            "custom_css_url":"/css/theme.css",
            "datafeed":new Datafeeds.UDFCompatibleDatafeed("/api",5*1000),
            "timezone": "Asia/Shanghai",
            "style": "1",
            "toolbar_bg": "#000000",
            "withdateranges": true,
            "hide_side_toolbar": false,
            "save_image": false,
            "studies": [
                "Volume@tv-basicstudies",
                "ROC@tv-basicstudies",
                "StochasticRSI@tv-basicstudies",
                "MASimple@tv-basicstudies"
            ],
            "disabled_features": [
                "use_localstorage_for_settings",
                "volume_force_overlay",
                "header_symbol_search",
                "header_compare",
                "header_undo_redo",
                "header_screenshot",
                "header_fullscreen_button",
                "header_saveload",
                "header_settings",
                "header_resolutions",
                "header_chart_type",
                "left_toolbar",
                "header_indicators",
                "timeframes_toolbar",
                "control_bar",
                "pane_context_menu",
                "move_logo_to_main_pane",
                "adaptive_logo",
                "display_market_status"
            ],
            "overrides": {
                "paneProperties.background": "#131722", //设置图表背景
                "paneProperties.vertGridProperties.color": "#696969", //设置横线颜色
                "paneProperties.vertGridProperties.style": 1, //DOTTED
                "paneProperties.horzGridProperties.color": "#696969",//设置纵线颜色.
                "paneProperties.horzGridProperties.style": 1, //DOTTED
                "paneProperties.crossHairProperties.color": "#696969",
                "paneProperties.topMargin": 5,
                "paneProperties.bottomMargin": 5
            },
            "enabled_features": ["move_logo_to_main_pane", "study_templates"],
            "show_popup_button": false,
            "locale": "zh",
            "width": '100%',
            "height": '438'
        });
        widget.onChartReady(function () {
            create('1min',true,'1'); //1分钟
            create('5min',false,'5'); //5分钟
            create('15min',false,'15'); //15分钟
            create('30min',false,'30'); //30分钟
            create('1hour',false,'60'); //1小时
            create('1day',false,'1D'); //1天n
            create('1week',false,'1W'); //1周
            create('1month',false,'1M'); //1周
            function create(name,def,resolution){ //创建切换分辨率按钮
                var button=widget.createButton();
                var className='chartBtn';
                button[0].innerHTML=name;
                button[0].title=name;
                if(def) className="chartBtn chartBtnAct";
                button[0].className=className;
                button[0].onclick=function(){
                    var parent=button[0].parentNode.parentNode;
                    var children=parent.getElementsByClassName('chartBtn');
                    for(var i=0;i<children.length;i++){
                        children[i].className="chartBtn";
                    }
                    button[0].className="chartBtn chartBtnAct";
                    widget.chart().setResolution(resolution, function onReadyCallback(){});
                }
            }
        });

    });
</script>
</html>