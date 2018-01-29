window.onload=function () {
// 获取屏幕的高度
	



    setTimeout(load,1000);
    function load(){
        $("#loading").css("display","none");
        var Width=window.screen.width;
        $(".box").css("width",Width);
        $(".box").css("display","block");
        
        var width= $(".box").css("width");
        var a = parseInt(width)*0.5234;
        $(".box").css("height",a);

        var width1= $(".top").css("width");
        var b = parseInt(width1)*0.033;
        $(".top").css("height",b);

        var width2= $(".bottom").css("width");
        var c = parseInt(width2)*0.468;
        $(".bottom").css("height",c);
        
        var width3= $(".left").css("width");
        var c = parseInt(width3)*1.42;
        $(".left").css("height",c);

        var width4= $(".right").css("width");
        var d = parseInt(width4)*0.725;
        $(".right").css("height",d);

        var width5= $(".left-top").css("width");
        var e = parseInt(width5)*0.868;
        $(".left-top").css("height",e);

        var width6= $(".left-bottom").css("width");
        var f = parseInt(width6)*0.523;
        $(".left-bottom").css("height",f);

        var width7= $(".right-top").css("width");
        var g = parseInt(width7)*0.48;
        $(".right-top").css("height",g);

        var width8= $(".right-bottom").css("width");
        var h = parseInt(width8)*0.2338;
        $(".right-bottom").css("height",h);

        var width9= $(".right-bottom1").css("width");
        var i = parseInt(width9)*0.9508;
        $(".right-bottom1").css("height",i);

        var width10= $(".right-bottom2").css("width");
        var j = parseInt(width10)*0.52727;
        $(".right-bottom2").css("height",j);

        var width11= $(".right-bottom3").css("width");
        var k = parseInt(width11)*0.7631579;
        $(".right-bottom3").css("height",k);
        
        var width13= $(".leftt").css("width");
        var m = parseInt(width13)*0.82;
        $(".leftt").css("height",m);

        var width14= $(".rightt").css("width");
        var n = parseInt(width14)*1.6;
        $(".rightt").css("height",n);

        var width15= $(".right-top1").css("width");
        var o = parseInt(width15)*0.703;
        $(".right-top1").css("height",o);

        var width16= $(".right-top2").css("width");
        var p = parseInt(width16)*1.625;
        $(".right-top2").css("height",p);

        var width17= $(".right-top-top").css("width");
        var q = parseInt(width17)*0.7466;
        $(".right-top-top").css("height",q);

        var width18= $(".right-top-bottom").css("width");
        var r = parseInt(width18)*0.7466;
        $(".right-top-bottom").css("height",r);

        var width13 = $(".rightt").css("width");
        var x = parseInt(width13)*0.6;
        var y = parseInt(width13)*0.2;
        var z = parseInt(width13)*0.6;
        $(".Qr-code").css("width",x);
        $(".logo").css("width",y);
        $(".logo-title").css("width",z);
            Echarts();
        }


function Echarts(){
    // 右上角获取系统当前时间
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



var myChart1 = echarts.init(document.getElementById('main1'));
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

    var option1 = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:  '门板', 
            selectedMode: 'single',
        },
        visualMap: {
            min: 0,
            max: 2500,
            left: 5,
            bottom:14,
            itemWidth:15,
            itemHeight:110,
            text: ['高', '低'],
            calculable: true,
            colorLightness: [0.2, 100],
            color: ['#c05050','#e5cf0d','#5ab1ef'],
            dimension: 0,
            textStyle:{
                color:"#fff"
            }
        },
        grid: {
            right: 20,
            top: 5,
            bottom: 30,
            width: '16%'
        },
        xAxis: [{
            position: 'top',
            type: 'value',
            boundaryGap: false,
            splitLine: {
                show: false 
             
            },
            axisLine: {
                show: false,

            },
            axisTick: {
                show: false
            },
            
        }],
        yAxis: [{
            type: 'category',
            data: titledata,
            axisLine: {
                    show: false,
                    lineStyle:{
                        color:'rgb(249,249,249)',
                    }
                },
                splitLine: {
                    show: false
                },
            axisTick: {
                alignWithLabel: true
            }

        }],
        series: [{
            z: 1,
            name: '门板',
            type: 'map',
            map: 'china',
           
            textStyle:{
                color:'#fff'
            },
            left:'-9%',
            right: '18%',
            top: '-7%',
            bottom: "12%",
            zoom: 0.75,
            label: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: true
                }
            },
            //roam: true,
            data: resultdata1
        },
         {
            name: '门板',
            z: 2,
            type: 'bar',
            width:10,
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
        }]
};
   myChart1.setOption(option1);






var myChart3 = echarts.init(document.getElementById('main3'));
var option3 = {
    backgroundColor: 'transparent',
    series: [{
        name: '二级指标',
        type: 'pie',
        radius: ['20%', '35%'],
        label: {
            normal: {
                position: 'inner'
            }
        },
        data: [{
            value: 7,
            name: ''
        }, {
            value: 5,
            name: ''
        }, {
            value: 3,
            name: ''
        }, {
            value: 3,
            name: ''
        }, {
            value: 2,
            name: ''
        }, {
            value: 5,
            name: ''
        }, {
            value: 4,
            name: ''
        }, {
            value: 5,
            name: ''
        }, {
            value: 10,
            name: ''
        }, {
            value: 4,
            name: ''
        }]
    }, {
        name: '三级指标',
        type: 'pie',
        radius: ['45%', '68%'],
        label: {
            normal: {
                position: 'outer',
                labelLine: {
                    show: true,
                    length: 10,
                    smooth: 0.5
                }
            }
        },
        data: [ {
            value: 1,
            name: '重要单位'
        }, {
            value: 1,
            name: '关键基础'
        }, {
            value: 1,
            name: '其他防护'
        }, {
            value: 1,
            name: '应急物资'
        }, {
            value: 1,
            name: '应急通讯'
        }, {
            value: 1,
            name: '应急运输'
        }, {
            value: 1,
            name: '医疗卫量'
        }, {
            value: 1,
            name: '应急避难'
        }, {
            value: 1,
            name: '应急广播'
        }, {
            value: 1,
            name: '其他应急'
        }, {
            value: 1,
            name: '自然灾害'
        }, {
            value: 1,
            name: '事故灾难'
        }, {
            value: 1,
            name: '公共卫生'
        }, {
            value: 1,
            name: '社会专家'
        }, {
            value: 1,
            name: '其他突专家'
        }, {
            value: 3,
            name: '应急避增长'
        }, {
            value: 1,
            name: '区级预案'
        }, {
            value: 1,
            name: '企业案'
        }, {
            value: 1,
            name: '其他案'
        }, {
            value: 1,
            name: '预警增长'
        }, {
            value: 1,
            name: '预警增长'
        }, {
            value: 1,
            name: '自然件数量'
        }, {
            value: 1,
            name: '事故件数量'
        }, {
            value: 1,
            name: '公件数量'
        }, {
            value: 1,
            name: '社数量'
        }, {
            value: 1,
            name: '件数量'
        }, {
            value: 1,
            name: '大事件数量'
        }, {
            value: 1,
            name: '重大件数量'
        }, {
            value: 1,
            name: '较大数量'
        }, {
            value: 1,
            name: '一件数量'
        }, {
            value: 1,
            name: '上件数量'
        }, {
            value: 1,
            name: '启事件数量'
        }, {
            value: 1,
            name: '处件数量'
        }, {
            value: 1,
            name: '评估数量'
        }, {
            value: 1,
            name: '结束数量'
        }, {
            value: 6,
            name: '南营门理评分'

        }, {
            value: 6,
            name: '劝业理评分'
        }, {
            value: 6,
            name: '五大道评分'
        }, {
            value: 6,
            name: '小白评分'
        }, {
            value: 6,
            name: '新兴街评分'
        }, {
            value: 6,
            name: '南市理评分'
        }, {
            value: 1,
            name: '应急值分'
        }, {
            value: 1,
            name: '应急评分'
        }, {
            value: 1,
            name: '应急评分'
        }, {
            value: 1,
            name: '突发事评分'
        }]
    }]
};
 myChart3.setOption(option3);



var myChart4 = echarts.init(document.getElementById('main4'));
var option4 = {
    title: {
        text: '防晒品类的城市分布',
        textStyle:{
            color:"#fff",
            fontSize:12
        }
    },
    dataZoom:[
                    {   show:true,
                        height:9,
                        xAxisIndex: [0],
                        bottom:1,
                        type: 'slider',
                        start: 1,
                        end: 35,
                        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                        handleSize:'110%',
                        handleStyle: {
                            color:'#9B4E4E'
                        }
                     },
                     {
                         show:true,
                         type: 'inside',
                         height:15,
                         start: 1,
                         end:35
                     }
                    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['包租费', '装修费'],
        align: 'right',
        right: 3,
        textStyle:{
            color:"#fff",
            fontSize:5
        }
    },
    grid: {
        left: '6%',
        right: '1%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false,
            lineStyle:{
                color:'#fff',
            }
        },
        splitLine:{
            show:false
        },

        data: ['新虹桥', '中山公园', '虹桥', '镇宁路', '天山古北','新虹桥', '中山公园', '虹桥', '镇宁路', '天山古北','新虹桥', '中山公园', '虹桥', '镇宁路', '天山古北']
    }],
    yAxis: [{
        type: 'value',
        name: '总价(万元)',
        axisLine: {
            show: false,
            lineStyle:{
                color:'#fff',
            }
        },
        splitLine:{
            show:false
        },
        axisLabel: {
            formatter: '{value}'
        },

    }],
    series: [{
        name: '包租费',
        type: 'bar',
        data: [20, 12, 31, 34, 31,20, 12, 31, 34, 31,20, 12, 31, 34, 31],
        itemStyle: {
                normal: {
                 
                    color: "rgb(93,227,225)",
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            }

    }, {
        name: '装修费',
        type: 'bar',
        data: [10, 20, 5, 9, 3,20, 12, 31, 34, 31,20, 12, 31, 34, 31],
        itemStyle: {
                normal: {
                 
                    color: "rgb(39,122,205)",
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            }
    },
    ]
};
myChart4.setOption(option4); 




var myChart5 = echarts.init(document.getElementById('main5'));
function getData(percent) {
    return [{
        value: percent,
        name: percent,
        itemStyle: {
             normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00B2EE'
                            }, {
                                offset: 1,
                                color: '#00DDE6'
                            }])
            }
        }
    }, {
        value: 1 - percent,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }];
}

placeHolderStyle = {
    normal: {
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        }


    }
};

var option5 = {
    backgroundColor: 'transparent',
    title: {
        text: '防晒品类的购买力',
        left:'center',
        textStyle:{
            color:"#fff",
            fontSize:12
        }
    },
     
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {

            return params.seriesName + ": " + params.name * 100 + "%";
        }
    },
    legend: {
        top: 18,
        left: "1%",
        itemHeight: 8,
        data: ['实勘率', '户型图比例', '钥匙率', '委托率', '经理陪看率'],
        textStyle: {
            color: '#fff',
            fontSize:7
        },

        selectedMode: true,
        orient:"vertical"
    },
  
    series: [{
        name: '实勘率',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [18, 21],
        itemStyle: placeHolderStyle,

        label: {
            normal: {
                show: false,
            }
        },
        data: getData(0.6)
    }, {
        name: '户型图比例',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [28, 31],
        itemStyle: placeHolderStyle,
        data: getData(0.5)
    }, {
        name: '钥匙率',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [38, 41],
        itemStyle: placeHolderStyle,
        data: getData(0.4)
    }, {
        name: '委托率',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [48, 51],
        itemStyle: placeHolderStyle,
        data: getData(0.6)
    }, {
        name: '经理陪看率',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [58, 61],
        itemStyle: placeHolderStyle,
        data: getData(0.3)
    }]
};
myChart5.setOption(option5); 




var myChart6 = echarts.init(document.getElementById('main6'));
var option6 = {
    backgroundColor: 'transparent',
    title: {
        text: '品牌偏好',
        left:'center',
        top:'13',
        textStyle:{
            color:"#fff",
            fontSize:12
        }
    },
    legend: {
        bottom: 20,
        textStyle:{
            color:'#fff',
        },
        data: '钥匙量'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
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
                data: ['广州','深圳','东莞','天津','惠州']
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
                    barBorderRadius:30,
                    borderWidth:0,
                    borderColor:'#333',
                }
            },
            barGap:'0%',
            barCategoryGap:'60%',
            data: [35, 42, 51, 64, 75]
        }
       
    ]
};
myChart6.setOption(option6); 






var myChart7 = echarts.init(document.getElementById('main7'));
var myData = ['大栅栏', '天安门', '故宫', '景山', '北海公园'];
var databeast = {
    1: [389, 259, 262, 324, 232],
    2: [111, 315, 139, 375, 204],
    3: [227, 210, 328, 292, 241],
    4: [100, 350, 300, 250, 200],
    5: [280, 128, 255, 254, 313],
    6: [121, 388, 233, 309, 133],
    7: [200, 350, 300, 250, 200],
    8: [380, 129, 173, 101, 310],
    9: [363, 396, 388, 108, 325],
    10: [300, 350, 300, 250, 200],
    11: [100, 350, 300, 250, 200],
    12: [280, 128, 255, 254, 313],

};
var databeauty = {
    1: [121, 388, 233, 309, 133],
    2: [200, 350, 300, 250, 200],
    3: [380, 129, 173, 101, 310],
    4: [363, 396, 388, 108, 325],
    5: [300, 350, 300, 250, 200],
    6: [100, 350, 300, 250, 200],
    7: [280, 128, 255, 254, 313],
    8: [389, 259, 262, 324, 232],
    9: [111, 315, 139, 375, 204],
    10: [227, 210, 328, 292, 241],
    11: [100, 350, 300, 250, 200],
    12: [280, 128, 255, 254, 313],

};
var timeLineData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var option7 = {
    baseOption: {
        backgroundColor: 'transparent',
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
            currentIndex: 1,
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
                fontSize: 10,
            },
            
        },
        legend: {
            data: ['帅哥', '美女'],
            top: 10,
            right: '2%',
            height:3,
            itemHeight:13,
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
            left: '4%',
            top: 45,
            bottom: 50,
            containLabel: true,
            width: '49%',
        }, {
            show: false,
            left: '50.5%',
            top: 45,
            bottom: 50,
            width: '0%',
        }, {
            show: false,
            right: '4%',
            top: 45,
            bottom: 50,
            containLabel: true,
            width: '50%',
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
                    fontSize: 8,
                },
            },
            splitLine:{
                show:false
            }
        //     splitLine: {
        //         show: true,
        //         lineStyle: {
        //             color: '#F5F5F5',
        //             width: 0.4,
        //             type: 'solid',
        //         },
        //     },



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
                    fontSize: 8,
                },
            },
            splitLine: {
                show: false
                
            },
        }, 
        ],
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
                    color: '#fff',
                    fontSize: 5,
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
                    color: '#fff',
                    fontSize: 5,
                },

            },
            data: myData,
        }, ],
        series: [],

    },

    options: [],


};

for (var i = 0; i < timeLineData.length; i++) {
    option7.baseOption.timeline.data.push(timeLineData[i]);
    option7.options.push({
        title: {
            text: '防晒品类' + timeLineData[i] + '月份促销／评论敏感度',
            top: 10,
            left:2,
            textStyle:{
                fontSize:10
            }
        },
        symbolSize:1,
        series: [{
                name: '帅哥',
                type: 'bar',
                barGap: 20,
                barWidth: 15,
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
                            fontSize: 10,
                        },
                    },
                },
    
                itemStyle: {
                    normal: {
                        color: "rgb(39,122,205)"
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
                barWidth: 15,
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
                            fontSize: 10,
                        },
                    },
                },





                itemStyle: {
                    normal: {
                        color: 'rgb(93,227,225)',
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
myChart7.setOption(option7); 




var myChart8 = echarts.init(document.getElementById('main8'));
var option8 = {
    tooltip: {},
    title:{
        text:'防晒品类的购物类型',
        left:'center',
        top:'13',
        textStyle:{
            color:'#fff',
            fontSize:10
        }
    },
     grid: {
        left: '3%',
        right: '4%',
        bottom: '1%',
        top:'3%',
        containLabel: true
    },
    backgroundColor: 'transparent',
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '外倾', max: 11},
           { name: '理性', max: 11},
           { name: '内倾', max: 11},
           { name: '感性', max: 11}
        ],
        splitNumber: 4,
            center: ['50%','50%'],
            name: {
                    formatter:'{value}',
                    textStyle: {
                        fontSize:10,
                        color:'rgba(87, 203, 204, 1)'
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: ['rgba(0, 0, 0, 0)',
                        'rgba(87, 203, 204, 0.2)', 'rgba(0, 0, 0, 0)',
                        'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'],
                        shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowBlur: 30
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(87, 203, 204, 0.3)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(87, 203, 204, 0.6)',
                    }
                },
            radius: 60
    },
    series: [{
        name: '荣格心理类型',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [5, 6, 7, 8],
                name : '荣格心理类型'
            }
        ]
    }]
};
myChart8.setOption(option8); 

    window.onresize = function(){
        myChart3.resize();
        myChart7.resize();
        myChart1.resize();
        myChart4.resize();
        myChart5.resize();
        myChart6.resize();
        myChart8.resize();
    };
}

};