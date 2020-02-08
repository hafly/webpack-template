import $ from 'zepto-webpack';
import echarts from 'echarts';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/chart/map';
import 'echarts/map/js/china';

import './index.css';

console.log($)
let data = [{name: '江苏', value: 5.3}, {name: '北京', value: 3.8}, {name: '天津', value: 2.8},{name: '上海', value: 4.6}, {name: '重庆', value: 3.6}, {name: '河北', value: 3.4}, {name: '河南', value: 3.2}, {name: '云南', value: 1.6}, {name: '辽宁', value: 4.3}, {name: '黑龙江', value: 4.1}, {name: '湖南', value: 2.4}, {name: '安徽', value: 3.3}, {name: '山东', value: 3.0}, {name: '新疆', value: 3}, {name: '江苏', value: 3.9}, {name: '浙江', value: 3.5}, {name: '江西', value: 2.0}, {name: '湖北', value: 2.1}, {name: '广西', value: 3.0}, {name: '甘肃', value: 1.2}, {name: '山西', value: 3.2}, {name: '内蒙古', value: 3.5}, {name: '陕西', value: 2.5}, {name: '吉林', value: 4.5}, {name: '福建', value: 2.8}, {name: '贵州', value: 1.8}, {name: '广东', value: 3.7}, {name: '青海', value: 0.6}, {name: '西藏', value: 1}, {name: '四川', value: 3.3}, {name: '宁夏', value: 0.8}, {name: '海南', value: 1.9}, {name: '台湾', value: 0.1}, {name: '香港', value: 0.1}, {name: '澳门', value: 0.1}];
let chart = echarts.init(document.getElementById('chart1'));
let option = {
    visualMap: {
        orient: 'horizontal',
        type: 'continuous',
        itemWidth: 9,
        itemHeight: 55,
        text: ['高', '低'],
        showLabel: true,
        seriesIndex: [0],
        min: 0,
        max: 5,
        inRange: {
            color: ['#d9e3ff', '#a9c0ff', '#7398fe', '#4476ff', '#1f4bcb']
        }
    },
    tooltip: {
        show: true,
        formatter: function (params) {
            if (!params.data) return '';
            return params.name + '：' + params.data['value'] + '%'
        },
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                areaColor: '#1f4bcb',
            }
        },
        regions: [{
            name: '南海诸岛',
            value: 0,
            itemStyle: {
                normal: {
                    opacity: 0,
                    label: {
                        show: false
                    }
                }
            }
        }],
    },
    series: [{
        type: 'map',
        map: 'china',
        geoIndex: 0,
        aspectScale: 0.2, //长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
                textStyle: {
                    color: '#fff'
                }
            }
        },
        data: data,
    }]
};

chart.setOption(option);