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

window.onresize = function(){
    myChart.resize();
    myChart2.resize();
    myChart1.resize();
    myChart4.resize();
    myChart5.resize();
    myChart6.resize();
    };
}


