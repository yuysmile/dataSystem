var myChart1 = echarts.init(document.getElementById('main1'));

var v1 = [10,20,13,7,6,5,5,4,4,3,3];
var geoCoordMap1 = {
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

    var data1 = [{
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
        var tGeoDt1 = [];
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
    var planePath1 = 'arrow';

var option1 = {
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


myChart1.setOption(option1);
