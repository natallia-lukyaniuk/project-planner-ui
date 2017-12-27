export const chartOptions = {
  chart: {
    height: 300,
    margin : {
      top: 20,
      right: 20,
      bottom: 50,
      left: 55
    },
    x: d => d.label,
    y: d => d.value,
    showValues: true,
    valueFormat: d => d3.format(',.0f')(d),
    duration: 500,
    // xAxis: {
    //   axisLabel: 'X Axis'
    // },
    // yAxis: {
    //   axisLabel: 'Y Axis',
    //   axisLabelDistance: -10
    // }
  }
};
