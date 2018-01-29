window.onload=function (argument) {
// 获取屏幕的高度
	var ScreenHeight = document.documentElement.clientHeight;
	console.log(ScreenHeight);
	$(".box").css("height",ScreenHeight);











// 全国网络零售额
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
    }];
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
    option = {
    backgroundColor:'transparent',
    geo: {
        
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









// 网络零售额统计
var myChart1 = echarts.init(document.getElementById('main1'));
var option1 = {
                    backgroundColor:'transparent',
                    fontsize:'0.2em',
                    color: ['#FFFF00', '#FFFF00', '#FFFF00'],
                    tooltip: {
                        trigger: 'axis'
                    },
                   
                    grid: {
                        left: '0',
                        right: '3%',
                        bottom: '3%',
                        top:'13%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisTick:{show:false},
                        axisLabel:{
                            textStyle:{
                                color:'#fff'
                            }
                        },
                        splitLine:{//网格线
                            show: true,
                            lineStyle:{
                                color:['#fff'],
                                 opacity:0.5,
                                type:'solid'
                            }
                        },
                        data: ['3.21','3.22','3.23','3.24','3.25','3.26','3.27']
                    },
                    yAxis: {
                        min:0,
                        max:100,
                        interval:20,
                        axisTick:{show:false},
                        axisLine:{
                            show:false,
                        //    onZero:false
                        },
                        axisLabel:{
                            textStyle:{
                                color:'#fff'
                            }
                        },
                        splitLine:{//网格线
                            show: true,
                            lineStyle:{
                                color:['#fff'],
                                opacity:0.5,
                                type:'solid'
                            }
                        }
                    },
                    series: [
                        {
                            name:'有害程序',
                            type:'line',
                            smooth:true,
                            symbolSize:12,
                            data:['48','43','41','40','24','53','47'],
                            label: {
                                normal: {
                                    show: false,
                                    position: 'top'//值显示
                                }
                            }
                        }
                    ]
                };
myChart1.setOption(option1);







var myChart2 = echarts.init(document.getElementById('main2'));
var option2 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'11%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            color:'#fff',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel:{
                            textStyle:{
                                color:'#fff'
                            }
                        },
            axisTick: {
                alignWithLabel: true
            },
            splitLine:{//网格线
                            show: true,
                            lineStyle:{
                                color:['#fff'],
                                 opacity:0.5,
                                type:'solid'
                            }
                        }
        }
    ],
    yAxis : [
        {   
            color:'#fff',
            type : 'value',
            axisLabel:{
                            textStyle:{
                                color:'#fff'
                            }
                        },
            splitLine:{//网格线
                            show: true,
                            lineStyle:{
                                color:['#fff'],
                                 opacity:0.5,
                                type:'solid'
                            }
                        }
        }

    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};
myChart2.setOption(option2);







var myChart3 = echarts.init(document.getElementById('main3'));
function randomData() {
    return Math.round(Math.random() * 1000);
}

var data = [{
    name: '北京',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '天津',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '上海',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '重庆',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '河北',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '河南',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '云南',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '辽宁',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '黑龙江',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '湖南',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '安徽',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '山东',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '新疆',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '江苏',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '浙江',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '江西',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '湖北',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '广西',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '甘肃',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '山西',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '内蒙古',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '陕西',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '吉林',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '福建',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '贵州',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '广东',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '青海',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '西藏',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '四川',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '宁夏',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '海南',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '台湾',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '香港',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '澳门',
    value1: randomData(),
    value2: randomData(),
}];

var resultdata0 = [];
var resultdata1 = [];
var resultdata2 = [];
var sum0 = 0;
var sum1 = 0;
var sum2 = 0;
var titledata = [];
for (var i = 0; i < data.length; i++) {
    var d0 = {
        name: data[i].name,
        value: data[i].value1 + data[i].value2
    };
    var d1 = {
        name: data[i].name,
        value: data[i].value1
    };
    var d2 = {
        name: data[i].name,
        value: data[i].value2
    };
    titledata.push(data[i].name)
    resultdata0.push(d0);
    resultdata1.push(d1);
    resultdata2.push(d2);
    sum0 += data[i].value1 + data[i].value2;
    sum1 += data[i].value1;
    sum2 += data[i].value2;
}

function NumDescSort(a,b){
    return a.value-b.value;
}

resultdata0.sort(NumDescSort);
resultdata1.sort(NumDescSort);
resultdata2.sort(NumDescSort);

var option3 = {
    title: [{
        text: '销售量统计',
        subtext: '纯属虚构',
        left: 'center'
    },{
        text: '全部: ' +sum0,
        right: 120,
        top: 40,
        width: 100,
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },{
        text: "门板: " +sum1,
        right: 120,
        top: 40,
        width: 100,
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },{
        text: "拼框门: "+sum2,
        right: 120,
        top: 40,
        width: 100,
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },],
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['全部', '门板', '拼框门'],
        selectedMode: 'single',
    },
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
        colorLightness: [0.2, 100],
        color: ['#c05050','#e5cf0d','#5ab1ef'],
        dimension: 0
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    grid: {
        right: 40,
        top: 100,
        bottom: 40,
        width: '30%'
    },
    xAxis: [{
        position: 'top',
        type: 'value',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'category',
        data: titledata,
        axisTick: {
            alignWithLabel: true
        }
    }],
    series: [{
        z: 1,
        name: '全部',
        type: 'map',
        map: 'china',
        left: '10',
        right: '35%',
        top: 100,
        bottom: "35%",
        zoom: 0.75,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        //roam: true,
        data: resultdata0
    }, {
        z: 1,
        name: '门板',
        type: 'map',
        map: 'china',
        left: '10',
        right: '35%',
        top: 100,
        bottom: "35%",
        zoom: 0.75,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        //roam: true,
        data: resultdata1
    }, {
        z: 1,
        name: '拼框门',
        type: 'map',
        map: 'china',
        left: '10',
        right: '35%',
        top: 100,
        bottom: "35%",
        zoom: 0.85,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        //roam: true,
        data: resultdata2
    }, {
        name: '全部',
        z: 1,
        type: 'bar',
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true,
            }
        },
        itemStyle: {
            emphasis: {
                color: "rgb(254,153,78)"
            }
        },
        data: resultdata0
    }, {
        name: '门板',
        z: 1,
        type: 'bar',
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                color: "rgb(254,153,78)"
            }
        },
        data: resultdata1
    }, {
        name: '拼框门',
        z: 1,
        type: 'bar',
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                color: "rgb(254,153,78)"
            }
        },
        data: resultdata2
    }]
};

myChart3.setOption(option3);








var myChart4 = echarts.init(document.getElementById('main4'));
    function randomData() {
        return Math.round(Math.random()*2500);
    }
    var option4 = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        visualMap: {
            seriesIndex: 0,
            min: 0,
            max: 2500,
            left: 'left',
            top: 'bottom',
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true
        },
        grid: {
            height: 80,
            width: 7,
            right: 5,
            bottom: 100
        },
        xAxis: {
            type: 'category',
            data: [],
            splitNumber: 1,
            show: false
        },
        yAxis: {
            position: 'right',
            min: 0,
            max: 10,
            splitNumber: 10,
            inverse: true,
            axisLabel: {
                show: true
            },
            axisLine: {
                show: false  
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            data: []
        },
        series: [
            {
                zlevel: 1,
                name: '中国',
                type: 'map',
                mapType: 'china',
                selectedMode : 'multiple',
                roam: true,
                left: 0,
                right: '1%',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name: '北京',value: randomData() },
                    {name: '天津',value: randomData() },
                    {name: '上海',value: randomData() },
                    {name: '重庆',value: randomData() },
                    {name: '河北',value: randomData() },
                    {name: '河南',value: randomData() },
                    {name: '云南',value: randomData() },
                    {name: '辽宁',value: randomData() },
                    {name: '黑龙江',value: randomData() },
                    {name: '湖南',value: randomData() },
                    {name: '安徽',value: randomData() },
                    {name: '山东',value: randomData() },
                    {name: '新疆',value: randomData() },
                    {name: '江苏',value: randomData() },
                    {name: '浙江',value: randomData() },
                    {name: '江西',value: randomData() },
                    {name: '湖北',value: randomData() },
                    {name: '广西',value: randomData() },
                    {name: '甘肃',value: randomData() },
                    {name: '山西',value: randomData() },
                    {name: '内蒙古',value: randomData() },
                    {name: '陕西',value: randomData() },
                    {name: '吉林',value: randomData() },
                    {name: '福建',value: randomData() },
                    {name: '贵州',value: randomData() },
                    {name: '广东',value: randomData() },
                    {name: '青海',value: randomData() },
                    {name: '西藏',value: randomData() },
                    {name: '四川',value: randomData() },
                    {name: '宁夏',value: randomData() },
                    {name: '海南',value: randomData() },
                    {name: '台湾',value: randomData() },
                    {name: '香港',value: randomData() },
                    {name: '澳门',value: randomData() }
                ]
            }
        ]
    };


/**
 * 根据值获取线性渐变颜色
 * @param  {String} start 起始颜色
 * @param  {String} end   结束颜色
 * @param  {Number} max   最多分成多少分
 * @param  {Number} val   渐变取值
 * @return {String}       颜色
 */
    function getGradientColor (start, end, max, val) {
        var rgb = /#((?:[0-9]|[a-fA-F]){2})((?:[0-9]|[a-fA-F]){2})((?:[0-9]|[a-fA-F]){2})/;
        var sM = start.match(rgb);
        var eM = end.match(rgb);
        var err = '';
        max = max || 1
        val = val || 0
        if (sM === null) {
            err = 'start';
        }
        if (eM === null) {
            err = 'end';
        }
        if (err.length > 0) {
            throw new Error('Invalid ' + err + ' color format, required hex color');    
        }
        var sR = parseInt(sM[1], 16),
            sG = parseInt(sM[2], 16),
            sB = parseInt(sM[3], 16);
        var eR = parseInt(eM[1], 16),
            eG = parseInt(eM[2], 16),
            eB = parseInt(eM[3], 16);
        var p = val / max;
        var gR = Math.round(sR + (eR - sR) * p).toString(16),
            gG = Math.round(sG + (eG - sG) * p).toString(16),
            gB = Math.round(sB + (eB - sB) * p).toString(16);
        return '#' + gR + gG + gB;
    }

    setTimeout(function() {
        var TOPN = 25
        
        var option44 = myChart.getOption()
        // 修改top
        option44.grid[0].height = TOPN * 20
        option44.yAxis[0].max = TOPN
        option44.yAxis[0].splitNumber = TOPN
        option44.series[1].data[0] = TOPN
        // 排序
        var data = option44.series[0].data.sort(function(a, b) {
            return b.value - a.value
        })
        
        var maxValue = data[0].value,
            minValue = data.length > TOPN ? data[TOPN - 1].value : data[data.length - 1].value
        
        var s = option44.visualMap[0].controller.inRange.color[0],
            e = option44.visualMap[0].controller.inRange.color.slice(-1)[0]
        var sColor = getGradientColor(s, e, maxValue, minValue)
        var eColor = getGradientColor(s, e, maxValue, maxValue)
        
        option44.series[1].itemStyle.normal.color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 1,
            color: sColor
        }, {
            offset: 0,
            color: eColor
        }])
        
        // yAxis
        var newYAxisArr = []
        echarts.util.each(data, function(item, i) {
            if (i >= TOPN) {
                return false
            }
            var c = getGradientColor(sColor, eColor, maxValue, item.value)
            newYAxisArr.push({
                value: item.name,
                textStyle: {
                    color: c
                }
            })
        })
        option44.yAxis[0].data = newYAxisArr
        option44.yAxis[0].axisLabel.formatter = (function(data) {
            return function(value, i) {
                if (!value) return ''
                return value + ' ' + data[i].value
            }
        })(data)
        myChart4.setOption(option44)
    }, 0);

 myChart4.setOption(option4);










var myChart5 = echarts.init(document.getElementById('main5'));
var option5 = {
    legend: {
        data: ['bar1', 'bar2']
    },
    xAxis: {
        triggerEvent:true,
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
         axisLabel:{
                textStyle:{
                color:'#fff'
            }
         }
    },
    grid: {
        left:9,
        right: 3,
        bottom: 9
    },
    yAxis: {
         axisLabel:{
            textStyle:{
            color:'#fff'
            }
        }
    },
    series: [{
        name: 'bar1',
        type: 'bar',
        textStyle:{
            color:'#fff'
        },
        itemStyle: {
            normal: {
                color: '#1FBCD2'
            }
        },
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        name: 'bar2',
        type: 'bar',
        textStyle:{
            color:'#fff'
        },
        itemStyle: {
            normal: {
                color: '#FEDC6E'
            }
        },
        data: [200, 200, 101, 300, 330, 190, 100]
    }]
};
myChart5.on('click', function(param) {
  alert(param.value);
}); 

 myChart5.setOption(option5);








var myChart6 = echarts.init(document.getElementById('main6'));
var myData = ['大栅栏', '天安门', '故宫', '景山', '北海公园', '后海', '什刹海', '西单', '玉渊潭', '中央电视塔', '东单', '王府井', '南锣鼓巷', '工体', '潘家园', '琉璃厂'];
var databeast = {
    1: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 185, 392, 392, 153],
    2: [111, 315, 139, 375, 204, 352, 163, 258, 385, 209, 209, 243, 204, 352, 163, 258],
    3: [227, 210, 328, 292, 241, 110, 130, 185, 392, 392, 153, 187, 150, 200, 250, 300],
    4: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    5: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],
    6: [121, 388, 233, 309, 133, 308, 297, 283, 349, 273, 229, 238, 224, 291, 185, 203],
    7: [200, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    8: [380, 129, 173, 101, 310, 393, 386, 296, 366, 268, 208, 149, 356, 239, 208, 330],
    9: [363, 396, 388, 108, 325, 120, 180, 292, 200, 309, 223, 236, 209, 271, 215, 216],
    10: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    11: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    12: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],
};
var databeauty = {
    1: [121, 388, 233, 309, 133, 308, 297, 283, 349, 273, 229, 238, 224, 291, 185, 203],
    2: [200, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    3: [380, 129, 173, 101, 310, 393, 386, 296, 366, 268, 208, 149, 356, 239, 208, 330],
    4: [363, 396, 388, 108, 325, 120, 180, 292, 200, 309, 223, 236, 209, 271, 215, 216],
    5: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    6: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    7: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],
    8: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 185, 392, 392, 153],
    9: [111, 315, 139, 375, 204, 352, 163, 258, 385, 209, 209, 243, 204, 352, 163, 258],
    10: [227, 210, 328, 292, 241, 110, 130, 185, 392, 392, 153, 187, 150, 200, 250, 300],
    11: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    12: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],

};
var timeLineData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

 var option6 = {
    baseOption: {
        backgroundColor: '#transparent',
        timeline: {
            show: true,
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function(params) {
                    console.log(params);
                    return params.name + '月份数据统计';
                }
            },
            autoPlay: true,
            currentIndex: 6,
            playInterval: 1000,
            label: {
                normal: {
                    show: true,
                    interval: 'auto',
                    formatter: '{value}月',
                },
            },
            data: [],
        },
        title: {
            //   text:'大北京景点帅哥美女统计', 
            textStyle: {
                color: '#fff',
                fontSize: 5,
            }
        },
        legend: {
            data: ['帅哥', '美女'],
            top: 4,
            right: '10%',
            textStyle: {
                color: '#fff',
            },
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b}<br/>{a}: {c}人',
            axisPointer: {
                type: 'shadow',
            }
        }, 
        grid: [{
            show: false,
            left: '2%',
            top: 20,
            bottom: 10,
            containLabel: true,
            width: '46%',
        }, {
            show: false,
            left: '50.5%',
            top: 20,
            bottom: 10,
            width: '0%',
        }, {
            show: false,
            right: '4%',
            top: 20,
            bottom: 10,
            containLabel: true,
            width: '46%',
        }, ],

        xAxis: [
            {
            type: 'value',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#B2B2B2',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1F2022',
                    width: 1,
                    type: 'solid',
                },
            },
        }, {
            gridIndex: 1,
            show: false,
        }, {
            gridIndex: 2,
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#B2B2B2',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1F2022',
                    width: 1,
                    type: 'solid',
                },
            },
        }, ],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                margin: 8,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: myData,
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: myData.map(function(value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            }),
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: myData,
        }, ],
        series: [],

    },

    options: [],


};

for (var i = 0; i < timeLineData.length; i++) {
    option6.baseOption.timeline.data.push(timeLineData[i]);
    option6.options.push({
        title: {
            text: '大北京' + timeLineData[i] + '月份城区景点帅哥美女统计',
        },
        series: [{
                name: '帅哥',
                type: 'bar',
                barGap: 20,
                barWidth: 20,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true,
                        position: 'left',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#659F83',
                    },
                    emphasis: {
                        color: '#08C7AE',
                    },
                },
                data: databeast[timeLineData[i]],
            },


            {
                name: '美女',
                type: 'bar',
                barGap: 20,
                barWidth: 20,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true,
                        position: 'right',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#F68989',
                    },
                    emphasis: {
                        color: '#F94646',
                    },
                },
                data: databeauty[timeLineData[i]],
            }
        ]
    });
}

myChart6.setOption(option6);


var myChart7 = echarts.init(document.getElementById('main7'));
  var option7 = {
      title: {
          text: '雷达图'
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: ['肌肉综合评价']
      },
      backgroundColor: 'transparent',
      radar: {
          indicator: [{
              text: '躯干部',
              max: 100
          }, {
              text: '左上肢',
              max: 100
          }, {
              text: '左下肢\n(含臀)',
              max: 100
          }, {
              text: '右下肢\n(含臀)',
              max: 100
          }, {
              text: '右上肢',
              max: 100
          }],
          splitNumber: 4,
          name: {
              textStyle: {
                  color: '#fff'
              }
          },
          axisLine: {
              lineStyle: {
                  color: '#2D91BD',
                  width: 2,
                  type: 'dotted'
              },
          },
          splitLine: {
              lineStyle: {
                  color: ['#2D91BD', 'transparent', 'transparent', 'transparent'],
                  width: 2
              }
          },
          splitArea: {
              areaStyle: {
                  color: ['#B3DBF5', '#FAFAFA']
              }
          }
      },
      series: [{
          type: 'radar',
          tooltip: {
              trigger: 'item'
          },
          symbol: 'circle',
          symbolSize: 5,
          itemStyle: {
              normal: {
                  color: '#2D91BD',
                  borderColor: '#2D91BD'
              }
          },
          data: [{
              value: [60, 33, 15, 50, 100],
              name:'肌肉综合评价'
          }]
      }, ]
  };

myChart7.setOption(option7);





var myChart8 = echarts.init(document.getElementById('main8'));
 var option8 = {
    backgroundColor: 'transparent',

    title: {
        text: '解决状态排名',
        left: 'center',
        top: 1,
        textStyle: {
            color: '#fff'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'解决状态',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'P1'},
                {value:310, name:'P2'},
                {value:274, name:'P3'},
                {value:235, name:'P4'}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
                       label: {
                normal: {
                   formatter: "{b} : {c} ({d}%)"
                }
            },

            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
myChart8.setOption(option8);



var myChart9 = echarts.init(document.getElementById('main9'));
placeHolderStyle = {
    normal: {
        label: {
            show: false,
            position: "center"
        },
        labelLine: {
            show: false
        },
        color: "#dedede",
        borderColor: "#dedede",
        borderWidth: 0
    },
    emphasis: {
        color: "#dedede",
        borderColor: "#dedede",
        borderWidth: 0
    }
};
var option9 = {
    backgroundColor: 'transparent',
    color: ['#fc7a26', '#fff', '#ffa127', '#fff', "#ffcd26"],
    legend: [{
        orient: '',
        icon: 'circle',
        left: 'right',
        top: 'center',
        data: ['不喜欢', '喜欢', '跳过']
    }],
    series: [{
        name: '值',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [199, 200],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside'
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#fc7a26",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 7,
            name: '70%'
        }, {
            value: 3,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        name: '白',
        type: 'pie',
        clockWise: false,
        radius: [180, 180],
        hoverAnimation: false,
        data: [{
            value: 1
        }]
    }, {
        name: '值',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [59, 60],
        itemStyle: {
            normal: {
                label: {
                    show: true
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#ffa127",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 6,
            name: '60%'
        }, {
            value: 4,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        name: '白',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: [38, 40],
        data: [{
            value: 1
        }]
    }, {
        name: '值',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [18, 20],
        itemStyle: {
            normal: {
                label: {
                    show: true
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 5,
                shadowBlur: 10,
                borderColor: "#ffcd26",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 4,
            name: '40%'
        }, {
            value: 6,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        type: 'pie',
        color: ['#fc7a26', '#ffa127', "#ffcd26"],
        data: [{
            value: '',
            name: '不喜欢'
        }, {
            value: '',
            name: '喜欢'
        }, {
            value: '',
            name: '跳过'
        }]
    }, {
        name: '白',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [10, 10],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 1,
            label: {
                normal: {
                    formatter: '投票人数',
                    textStyle: {
                        color: '#666666',
                        fontSize: 3
                    }
                }
            }
        }, {
            tooltip: {
                show: false
            },
            label: {
                normal: {
                    formatter: '\n1200',
                    textStyle: {
                        color: '#666666',
                        fontSize: 3
                    }
                }
            }
        }]
    }]
};
myChart9.setOption(option9);


var myChart10 = echarts.init(document.getElementById('main10'));
var option10 = {
                //提示框组件
                tooltip: {
                    //触发类型
                    trigger: 'axis',
                    //指示器
                    axisPointer: {
                        type: 'shadow'
                    },
                    //提示悬浮文字
                    formatter: "{a} <br/>{b} : {c}"
                },
                legend: {
                    data: ['2016年']
                },
                grid: {
                    left: '9%',
                    right: '8%',
                    bottom: '5%',
                    top:'2%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    name:'人数',
                    nameLocation:'end',
                    position:'top',
                    //去掉，坐标尺度
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        formatter: '{value}',
                    }
                },
                yAxis: {
                    type: 'category',
                    name:'单位名称                          ',
                    nameLocation:'start',
                    axisTick: {
                        show: false
                    },
                    inverse:'true', //排序
                    data: ['公司1',
                        '公司1',
                        '公司2',
                        '公司3',
                        '公司4',
                        '公司5',
                        '公司6',
                        '公司7',
                        '公司8',
                        '公司9'
                    ]
                },
                series: [{
                    name: '2016年占比',
                    type: 'bar',
                    itemStyle: {
                            normal: {
        　　　　　　　　　　　　　　      //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                                color: '#26C0C0'
                            }
                        },
                    data: [42, 36, 35, 28, 21, 20, 15, 15, 5, 2]
                }]
            };
myChart10.setOption(option10);








var myChart11 = echarts.init(document.getElementById('main11'));
var option11 = {
                //提示框组件
                tooltip: {
                    //触发类型
                    trigger: 'axis',
                    //指示器
                    axisPointer: {
                        type: 'shadow'
                    },
                    //提示悬浮文字
                    formatter: "{a} <br/>{b} : {c}"
                },
                legend: {
                    data: ['2016年']
                },
                grid: {
                    left: '9%',
                    right: '8%',
                    bottom: '5%',
                    top:'2%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    name:'人数',
                    nameLocation:'end',
                    position:'top',
                    //去掉，坐标尺度
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        formatter: '{value}',
                    }
                },
                yAxis: {
                    type: 'category',
                    name:'单位名称                          ',
                    nameLocation:'start',
                    axisTick: {
                        show: false
                    },
                    inverse:'true', //排序
                    data: ['公司1',
                        '公司1',
                        '公司2',
                        '公司3',
                        '公司4',
                        '公司5'
                    ]
                },
                series: [{
                    name: '2016年占比',
                    type: 'bar',
                    itemStyle: {
                            normal: {
        　　　　　　　　　　　　　　      //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                                color: '#26C0C0'
                            }
                        },
                    data: [42, 36, 35, 28, 21, 20]
                }]
            };
myChart11.setOption(option11);








var myChart12 = echarts.init(document.getElementById('main12'));
var option12 = {
    title:{
        text: "广州大学数据分析",
        subtext: "外省比例及少数民族比例-Acring",
        left:"center"
    },
     backgroundColor: 'transparent',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:({d}%)"
    },
    series: [{
        name: '少数民族占比',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
            normal: {
                position: 'outer'
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        data: [{
            'name': '土家族',
            'value': 30
        }, {
            'name': '回族',
            'value': 31
        }, {
            'name': '壮族',
            'value': 40
        }, {
            'name': '苗族',
            'value': 26
        }, {
            'name': '瑶族',
            'value': 12
        }, {
            'name': '京族',
            'value': 1
        }, {
            'name': '侗族',
            'value': 14
        }, {
            'name': '维吾尔族',
            'value': 16
        }, {
            'name': '彝族',
            'value': 6
        }, {
            'name': '满族',
            'value': 24
        }, {
            'name': '蒙古族',
            'value': 14
        }, {
            'name': '布依族',
            'value': 15
        }, {
            'name': '畲族',
            'value': 6
        }, {
            'name': '黎族',
            'value': 5
        }, {
            'name': '水族',
            'value': 1
        }, {
            'name': '傣族',
            'value': 2
        }, {
            'name': '朝鲜族',
            'value': 5
        }, {
            'name': '白族',
            'value': 2
        }, {
            'name': '毛难族',
            'value': 1
        }, {
            'name': '其他',
            'value': 1
        }, {
            'name': '东乡族',
            'value': 1
        }, {
            'name': '仡佬族',
            'value': 1
        }]
    }, {
        name: '外来省份占比',
        type: 'pie',
        radius: ['50%', '65%'],

        data: [{
            'name': '贵州',
            'value': 119
        }, {
            'name': '新疆',
            'value': 46
        }, {
            'name': '安徽',
            'value': 175
        }, {
            'name': '福建',
            'value': 57
        }, {
            'name': '河南',
            'value': 133
        }, {
            'name': '甘肃',
            'value': 139
        }, {
            'name': '重庆',
            'value': 53
        }, {
            'name': '云南',
            'value': 57
        }, {
            'name': '宁夏',
            'value': 42
        }, {
            'name': '湖南',
            'value': 213
        }, {
            'name': '山西',
            'value': 77
        }, {
            'name': '吉林',
            'value': 42
        }, {
            'name': '辽宁',
            'value': 31
        }, {
            'name': '内蒙古',
            'value': 32
        }, {
            'name': '河北',
            'value': 34
        }, {
            'name': '广西',
            'value': 67
        }, {
            'name': '海南',
            'value': 68
        }, {
            'name': '湖北',
            'value': 38
        }, {
            'name': '江西',
            'value': 85
        }, {
            'name': '四川',
            'value': 14
        }, {
            'name': '山东',
            'value': 1
        }, {
            'name': '内高班',
            'value': 15
        }, {
            'name': '香港',
            'value': 1
        }]
    }]
};
myChart12.setOption(option12);



};


