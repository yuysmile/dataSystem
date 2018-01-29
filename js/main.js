window.onload=function () {
// 获取屏幕的高度

    setTimeout(load,1000);
    function load(){
        $("#loading").css("display","none");
        var Width=window.screen.width;
        $(".box").css("width",Width);
        $(".box").css("display","block");        

        var width= $(".box").css("width");
        var a = parseInt(width)*0.524;
        $(".box").css("height",a);

        var width1= $(".top").css("width");
        var b = parseInt(width1)*0.033;
        $(".top").css("height",b);

        var width2= $(".bottom").css("width");
        var c = parseInt(width2)*0.0468;
        $(".bottom").css("height",c);
        
        var width3= $(".left").css("width");
        var cc = parseInt(width3)*1.52;
        $(".left").css("height",cc);

        var width4= $(".right").css("width");
        var d = parseInt(width4)*0.705;
        $(".right").css("height",d);

        var width5= $(".left-top").css("width");
        var e = parseInt(width5)*0.843;
        $(".left-top").css("height",e);

        var width6= $(".left-bottom").css("width");
        var f = parseInt(width6)*0.646;
        $(".left-bottom").css("height",f);

        var width7= $(".right-top").css("width");
        var g = parseInt(width7)*0.457;
        $(".right-top").css("height",g);

        var width8= $(".right-bottom").css("width");
        var h = parseInt(width8)*0.238;
        $(".right-bottom").css("height",h);

        var width9= $(".right-bottom1").css("width");
        var i = parseInt(width9)*0.94;
        $(".right-bottom1").css("height",i);

        var width10= $(".right-bottom2").css("width");
        var j = parseInt(width10)*0.94;
        $(".right-bottom2").css("height",j);

        var width11= $(".right-bottom3").css("width");
        var k = parseInt(width11)*1.13;
        $(".right-bottom3").css("height",k);

        var width12 = $(".right-bottom4").css("width");
        var l = parseInt(width12)*0.94;
        $(".right-bottom4").css("height",l);

        var width13 = $(".right-bottom3").css("width");
        var o = parseInt(width13)*0.5;
        var p = parseInt(width13)*0.2;
        var q = parseInt(width13)*0.6;
        $(".Qr-code").css("width",o);
        $(".logo").css("width",p);
        $(".logo-title").css("width",q);

        var width14 =  $("#left1").css("width");
        var r = parseInt(width14)*0.646;
         $("#left1").css("height",r);

          $(".percentage").css("width",width14);
        $(".percentage").css("height",r);


        var height=$(".percentage").css("height");
        var t = parseInt(height)*0.06;
        $('.p1').css("height",t);
        $('.p2').css("height",t);
        $('.p3').css("height",t);
        $('.p4').css("height",t);
        $('.p5').css("height",t);
        $('.p6').css("height",t);
        $('.p7').css("height",t);


        Echarts();
    }
  

function Echarts(){

//右上角获取系统当前时间
function date() {
    // body...
    var nowdate = document.getElementById('now-date');
    var myDate = new Date();    
    var year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)  
    var month = myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)  
    var date =  myDate.getDate();        //获取当前日(1-31)  
    var day = myDate.getDay();         //获取当前星期X(0-6,0代表星期天)  
    var hour = myDate.getHours();       //获取当前小时数(0-23)  
    var minutes = myDate.getMinutes();     //获取当前分钟数(0-59)  
    var sedonds = myDate.getSeconds();     //获取当前秒数(0-59)
    nowdate.innerHTML="当前时间："+year+"年"+month+"月"+date+"日"+"  "+hour+":"+minutes+":"+sedonds;
}
setInterval(date,1000);




//网络零售额的echarts折线图
var myChart1 = echarts.init(document.getElementById('main1'));
var option1 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['零售额', '零售消费额'],
        align: 'right',
        right: 10,
        textStyle:{
            color: '#90979c'
        }
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '21%',
        top:"17%",
        containLabel: true
    },
    "dataZoom": [{
        "show": true,
        "height": 10,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 90,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#ddd",
            
        },
           textStyle:{
            color:"#red"},
           borderColor:"#eee"
        
        
    },{
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    xAxis: [{
        type: 'category',
        data: ['北京', '广州', '上海', '南京', '安徽'],
        splitLine:{
            show:false
        },
        axisLine:{
            show:true,
            lineStyle:{
                color: '#90979c'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        name: '总价(万元)',
        axisLabel: {
            formatter: '{value}'
        },
        splitLine:{
            show:false
        },
        axisLine:{
            show:true,
            lineStyle:{
               color: '#90979c'
            }
        }
    }],
    series: [{
        name: '零售额',
        type: 'bar',
        data: [20, 12, 31, 34, 31],
        itemStyle:{
            normal:{
                color:"#66CDAA"
            }
        },
        label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
    }, {
        name: '零售消费额',
        type: 'bar',
        data: [10, 20, 5, 9, 3],
        itemStyle:{
            normal:{
                color:"rgb(245,187,137)"
            }
        },
        label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },

    }]
};
myChart1.setOption(option1);


//网络零售额的echarts条形图
var myChart2 = echarts.init(document.getElementById('main2'));
var option2 = {
    title : {
        text: '某站点用户访问来源',
        x:'center',
        textStyle:{
            color:'white',
            fontSize:14
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
        itemHeight:10,
        textStyle:{
            color:'white'
        }
    },
    grid:{
        top:"2%",
        bottom:"1%"
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart2.setOption(option2);


// 全国网络零售额的echarts地图
var myChart = echarts.init(document.getElementById('main'));
var v = [10,20,13,7,6,5,5,4,4,3,3];
var geoCoordMap = {
        '越南': [106.633394,10.792441],
        '南宁': [108.400504,22.810731],
        '美国': [-101.543212,38.297327],
        '香港': [114.190838,22.259745],
        '巴西': [-50.942436,-11.807860],
        '泰国': [100.708312,13.705836],
        '澳大利亚': [134.496303,-26.221547],
        '台湾省': [121.022363,23.721319],
        '中国': [111.2002,33.949888],
        '加拿大': [-107.327894,62.740586],
        '智利': [-70.357353,-26.963456],
        '俄罗斯':[90.75582599999998,61.617299899999985 ],
        '英国':[-3.65322600000002,55.38318429999993],
        
        '加拿大':[-105.65322600000002,57.38318429999993],
        '印度': [80.708312,20.705836],
        '沙特阿拉伯':[47.128160,20.643501],
        '埃及':[32.128160,25.643501],
        '利比亚':[20.379433,27.165579],
        '刚果民主共和国':[23.779433,0.165579],
    };
    var data = [{
        name: '越南',
        value: 90
    }, {
        name: '南宁',
        value: 10
    },{
        name: '美国',
        value: 10
    }, {
        name: '香港',
        value: 20
    }, {
        name: '巴西',
        value: 20
    }, {
        name: '泰国',
        value: 20
    }, {
        name: '澳大利亚',
        value: 50
    }, {
        name: '台湾省',
        value: 58
    }, {
        name: '中国',
        value: 64
    }, {
        name: '加拿大',
        value: 68
    }, {
        name: '智利',
        value: 45
    },
    {
        name: '俄罗斯',
        value: 10
    },
    {
        name: '英国',
        value: 15
    }, 
    {
        name: '印度',
        value: 30
    }, 
    {
        name: '加拿大',
        value: 38
    }
    , 
    {
        name: '沙特阿拉伯',
        value: 38
    }
    , {
        name: '埃及',
        value: 49
    }
    , {
        name: '利比亚',
        value: 25
    }
    ,
    {
        name: '刚果民主共和国',
        value: 20
    }
    ];
    function formtGCData(geoData, data, srcNam, dest) {
        var tGeoDt = [];
        if (dest) {
            for (var i = 0, len = data.length; i < len; i++) {
                if (srcNam != data[i].name) {
                    tGeoDt.push({
                        coords: [geoData[srcNam], geoData[data[i].name]]
                    });
                }
            }
        } else {
            for (var i = 0, len = data.length; i < len; i++) {
                if (srcNam != data[i].name) {
                    tGeoDt.push({
                        coords: [geoData[data[i].name], geoData[srcNam]]
                    });
                }
            }
        }
        return tGeoDt;
    }
    function formtVData(geoData, data, srcNam) {
        var tGeoDt = [];
        for (var i = 0, len = data.length; i < len; i++) {
            var tNam = data[i].name
            if (srcNam != tNam) {
                tGeoDt.push({
                    name: tNam,
                    value: geoData[tNam],
                    symbolSize: v[i],
                    itemStyle: {

                        normal: {
                            color: '#FFD24D',
                            borderColor: 'gold'
                        }
                    }
                });
            }
        }
        tGeoDt.push({
            name: srcNam,
            value: geoData[srcNam],
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#4DFFFF',
                    borderColor: '#fff'
                }
            }
        });
        return tGeoDt;
    }
    //var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    var planePath = 'arrow';
    var option = {
    backgroundColor:'transparent',
    geo: {
        zoom:1.1,
        name: 'Enroll distribution',
        type: 'map',
        map: 'world',
        roam: true,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                /*shadowBlur: 30,
                shadowColor: 'rgba(0, 0, 0,0.8)',*/
                areaColor: '#022548',
                borderColor: '#0DABEA'
            },
            emphasis: {
                areaColor: '#011B34'
            }
        }
    },
    series: [{

            type: 'lines',
            zlevel: 2,

            effect: {
                show: true,
                period: 6,
                trailLength: 0.1,
                color: '#FFB973',
                symbol: planePath,
                symbolSize: 5
            },
            lineStyle: {
                normal: {
                    color: '#FFB973',
                    width: 0,
                    opacity: 0.2,
                    curveness: 0
                }
            },
            data: formtGCData(geoCoordMap, data, '南宁', true)
        },
            {

                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.1,
                    color: '#9CE6FE',
                    symbol: planePath,
                    symbolSize: 5
                },
                lineStyle: {
                    normal: {
                        color: '#65A2C2',
                        width: 0,
                        opacity: 0.4,
                        curveness:0
                    }
                },
                data: formtGCData(geoCoordMap, data, '南宁', false)
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    scale: 4,
                    brushType: 'stroke',
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: 5,
                itemStyle: {
                    normal: {
                        color: '#fff',
                        borderColor: 'gold'
                    }
                },


                data: formtVData(geoCoordMap, data, '南宁')
            }]
};
myChart.setOption(option);





//跨境消费者购买最多的商品来源国的echarts图表
var myChart5 = echarts.init(document.getElementById('main5'));
option5 = {
    backgroundColor: 'transparent',
    legend: {
        bottom: 20,
        textStyle:{
            color:'#fff',
        },
        data: '钥匙量'
    },
    grid: {
        left: '5%',
        right: '2%',
        bottom: '10%',
        top:"10%",
        containLabel: true
    },
    
            tooltip: {
        show:"true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis:  {
        type: 'value',
        axisTick : {show: false},
        axisLine: {
            show: false,
            lineStyle:{
                color:'transparent',
            }
        },
        splitLine: {
            show: false
        },
    },
    yAxis: [
            {
                type: 'category',
                axisTick : {show: false},
                axisLine: {
                    show: false,
                    lineStyle:{
                        color:'#fff',
                    }
                },
                splitLine: {
                    show: false
                },
                data: ['美国','韩国','日本','英国','德国']
            }
            
    ],
    series: [
        
        {
            name: '钥匙量',
            type: 'bar',
            itemStyle:{
                normal: {
                    show: true,
                    color: '#5de3e1',
                    barBorderRadius:50,
                    borderWidth:0,
                    borderColor:'#333',
                }
            },
            barGap:'0%',
            barCategoryGap:'65%',
            data: [35, 42, 51, 64, 75]
        }
       
    ]
};
myChart5.setOption(option5);







var myChart6 = echarts.init(document.getElementById('main6'));
var option6 = {
    backgroundColor: 'transparent',
    animation: false,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        }
    },
    grid: {
        top: "10%",
        bottom: "10%",
        left:"18%"
    },
    xAxis: {
        type: 'value',
        position: 'top',
        splitLine:{
            show:false
        },
        axisLabel: {
            show: true,
            rotate: 0,
            textStyle: {
                color: 'transparent'
            }
        },
    },
    yAxis: {
        splitNumber: 25,
        type: 'category',
        // axisLine: {
        //     lineStyle: {
        //         type: 'solid',
        //         color: '#ccc'
        //     }
        // },
        axisLabel: {
            show: true,
            rotate: 0,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: true
        },
        
        data: ['北京', '上海', '南京', '广州', '深圳', '黑龙江', '合肥', '天津', '济南', '杭州']
    },
    series: [{
        name: '排名',
        type: 'bar',
        // barGap: '-100%',
        barCategoryGap:'45%',
        label: {
            normal: {
                textStyle: {
                    color: '#682d19'
                },
                position: 'left',
                show: false,
                formatter: '{b}'
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                        offset: 0,
                        color: '#0099FF',

                    }, {
                        offset: 1,
                        color: '#9999FF'
                    }]),
            }
        },
        data: [1, 11, 21, 31, 41, 51, 61, 71, 81, 91]
    }]
}
myChart6.setOption(option6);


// 词云的脚本
var radius = 90;
var d = 200;
var dtr = Math.PI / 180;
var mcList = [];
var lasta = 1;
var lastb = 1;
var distr = true;
var tspeed = 11;
var size = 200;
var mouseX = 0;
var mouseY = 10;
var howElliptical = 1;
var aA = null;
var oDiv = null;
    var i=0;
    var oTag=null;
    oDiv=document.getElementById('tagscloud');
    aA=oDiv.getElementsByTagName('a');
    for(i=0;i<aA.length;i++)
    {
        oTag={};        
        aA[i].onmouseover = (function (obj) {
            return function () {
                obj.on = true;
                this.style.zIndex = 9999;
                this.style.color = '#fff';
                this.style.padding = '5px 5px';
                this.style.filter = "alpha(opacity=100)";
                this.style.opacity = 1;
            }
        })(oTag)
        aA[i].onmouseout = (function (obj) {
            return function () {
                obj.on = false;
                this.style.zIndex = obj.zIndex;
                this.style.color = '#fff';
                this.style.padding = '5px';
                this.style.filter = "alpha(opacity=" + 100 * obj.alpha + ")";
                this.style.opacity = obj.alpha;
                this.style.zIndex = obj.zIndex;
            }
        })(oTag)
        oTag.offsetWidth = aA[i].offsetWidth;
        oTag.offsetHeight = aA[i].offsetHeight;
        mcList.push(oTag);
    }
    sineCosine( 0,0,0 );
    positionAll();
    (function () {
            update();
            setTimeout(arguments.callee, 40);
        })();

function update()
{
    var a, b, c = 0;
        a = (Math.min(Math.max(-mouseY, -size), size) / radius) * tspeed;
        b = (-Math.min(Math.max(-mouseX, -size), size) / radius) * tspeed;
        lasta = a;
        lastb = b;
        if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
            return;
        }
        sineCosine(a, b, c);
        for (var i = 0; i < mcList.length; i++) {
            if (mcList[i].on) {
                continue;
            }
            var rx1 = mcList[i].cx;
            var ry1 = mcList[i].cy * ca + mcList[i].cz * (-sa);
            var rz1 = mcList[i].cy * sa + mcList[i].cz * ca;

            var rx2 = rx1 * cb + rz1 * sb;
            var ry2 = ry1;
            var rz2 = rx1 * (-sb) + rz1 * cb;

            var rx3 = rx2 * cc + ry2 * (-sc);
            var ry3 = rx2 * sc + ry2 * cc;
            var rz3 = rz2;

            mcList[i].cx = rx3;
            mcList[i].cy = ry3;
            mcList[i].cz = rz3;

            per = d / (d + rz3);

            mcList[i].x = (howElliptical * rx3 * per) - (howElliptical * 2);
            mcList[i].y = ry3 * per;
            mcList[i].scale = per;
            var alpha = per;
            alpha = (alpha - 0.6) * (10 / 6);
            mcList[i].alpha = alpha * alpha * alpha - 0.2;
            mcList[i].zIndex = Math.ceil(100 - Math.floor(mcList[i].cz));
        }
        doPosition();
}
function positionAll()
{
    var phi = 0;
    var theta = 0;
    var max = mcList.length;
    for (var i = 0; i < max; i++) {
        if (distr) {
            phi = Math.acos(-1 + (2 * (i + 1) - 1) / max);
            theta = Math.sqrt(max * Math.PI) * phi;
        } else {
            phi = Math.random() * (Math.PI);
            theta = Math.random() * (2 * Math.PI);
        }
        //坐标变换
        mcList[i].cx = radius * Math.cos(theta) * Math.sin(phi);
        mcList[i].cy = radius * Math.sin(theta) * Math.sin(phi);
        mcList[i].cz = radius * Math.cos(phi);

        aA[i].style.left = mcList[i].cx + oDiv.offsetWidth / 2 - mcList[i].offsetWidth / 2 + 'px';
        aA[i].style.top = mcList[i].cy + oDiv.offsetHeight / 2 - mcList[i].offsetHeight / 2 + 'px';
    }
}
function doPosition()
{
    var l = oDiv.offsetWidth / 2;
        var t = oDiv.offsetHeight / 2;
        for (var i = 0; i < mcList.length; i++) {
            if (mcList[i].on) {
                continue;
            }
            var aAs = aA[i].style;
            if (mcList[i].alpha > 0.1) {
                if (aAs.display != '')
                    aAs.display = '';
            } else {
                if (aAs.display != 'none')
                    aAs.display = 'none';
                continue;
            }
            aAs.left = mcList[i].cx + l - mcList[i].offsetWidth / 2 + 'px';
            aAs.top = mcList[i].cy + t - mcList[i].offsetHeight / 2 + 'px';
            //aAs.fontSize=Math.ceil(12*mcList[i].scale/2)+8+'px';
            //aAs.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+100*mcList[i].alpha+")";
            aAs.filter = "alpha(opacity=" + 100 * mcList[i].alpha + ")";
            aAs.zIndex = mcList[i].zIndex;
            aAs.opacity = mcList[i].alpha;
        }
}
    function sineCosine( a, b, c)
    {
        sa = Math.sin(a * dtr);
        ca = Math.cos(a * dtr);
        sb = Math.sin(b * dtr);
        cb = Math.cos(b * dtr);
        sc = Math.sin(c * dtr);
        cc = Math.cos(c * dtr);
    }

    window.onresize = function(){
    myChart.resize();
    myChart2.resize();
    myChart1.resize();
    myChart4.resize();
    myChart5.resize();
    myChart6.resize();
    };
}

};


