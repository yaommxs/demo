$(function(){
    var dom = document.getElementById("container");
    var myChart = echarts.init(dom,'macarons');
    var option=null;
    $.get('./data/data.json', function (data) {
        var option = {
            title: {
                text: 'Series-Line-Mock'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: data.map(function (item) {
                    return item[0];
                })
            },
            yAxis: {
                splitLine: {
                    show: false
                }
            },
            toolbox: {
                left: 'center',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            dataZoom: [{
                startValue: '1'
            }, {
                type: 'inside'
            }],
            series: {
                name: 'Series-Line-Mock',
                type: 'line',
                data: data.map(function (item) {
                    return item[1];
                }),
                markLine: {
                    silent: true,
                    data: [{
                        yAxis: 0
                    }, {
                        yAxis: 10
                    }, {
                        yAxis: 20
                    }, {
                        yAxis: 30
                    }, {
                        yAxis: 40
                    }, {
                        yAxis: 50
                    }, {
                        yAxis: 60
                    }, {
                        yAxis: 70
                    }, {
                        yAxis: 80
                    }, {
                        yAxis: 90
                    }, {
                        yAxis: 100
                    }]
                }
            }
        };
        myChart.setOption(option);
    });
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
})
