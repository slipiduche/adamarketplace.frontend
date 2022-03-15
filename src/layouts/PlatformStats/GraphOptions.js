export const data1 = [
    [
      "Day", 'Response Time', 'Response Time'
    ],
    [1, 105, 90],
    [5, 200, 200],
    [15, 150, 220],
    [20, 230, 200],
    [25, 265, 190],
    [30, 400, 110],
  ];
  
  export const options1 = {
    backgroundColor: 'transparent',
    chartArea: {
      backgroundColor : 'transparent',
    },
    chart: {
      title: "Average Platform Response Time",
    },
    // colors: ['red', 'red', 'red', 'red', 'red', 'red'],
    hAxis: {
      textStyle:{color: '#FFF'}
    },
    vAxis: {
      textStyle:{color: '#FFF'}
    },
    titleTextStyle: {
      color: '#FFF'
    },
    legend: {
      position: 'top', textStyle: {color: 'white', fontSize: 16},
    },
    
    width: "100%",
    height: "430px",
    series: {
      // Gives each series an axis name that matches the Y-axis below.
      0: { axis: "Response Time" },
      1: { axis: "Response Time" },
    },
    axes: {
      // Adds labels to each axis; they don't have to match the axis names.
      y: {
        Temps: { label: "Time(ms)"},
        Daylight: { label: "Time(ms)"},
      },
    },
  };


  export const data2 = [
    [
      "Day", 'Response Time', 'Response Time'
    ],
    [1, 105, 90],
    [5, 200, 200],
    [15, 150, 220],
    [20, 230, 200],
    [25, 265, 190],
    [30, 400, 110],
  ];
  
  export const options2 = {
    backgroundColor: 'transparent',
    chartArea: {
      backgroundColor : 'transparent',
    },
    chart: {
      title: "Polygon Processing Time",
    },
    // colors: ['red', 'red', 'red', 'red', 'red', 'red'],
    hAxis: {
      textStyle:{color: '#FFF'}
    },
    vAxis: {
      textStyle:{color: '#FFF'}
    },
    legend: {
      position: 'top', textStyle: {color: 'white', fontSize: 16},
    },
    titleTextStyle: {
      color: '#FFF'
    },
    width: "100%",
    height: "430px",
    series: {
      // Gives each series an axis name that matches the Y-axis below.
      0: { axis: "Response Time" },
      1: { axis: "Response Time" },
    },
    axes: {
      // Adds labels to each axis; they don't have to match the axis names.
      y: {
        Temps: { label: "Time(ms)"},
        Daylight: { label: "Time(ms)"},
      },
    },
  };