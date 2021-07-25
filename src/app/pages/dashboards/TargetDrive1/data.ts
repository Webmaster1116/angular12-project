import { ChartType } from "./targetdrive1.model";

var visitorsOptions: ChartType = {
    series: [{
        name: 'CLOSED',
        data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26]
    }, {
        name: 'PENDING',
        data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34]
    }],
    chart: {
        height: 330,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    colors: ['#556ee6', '#f1b44c'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100]
        },
    },
    xaxis: {
        categories: ['Atlanta', 'Georgia', 'Charlotte', 'Market X', 'Market X', 'Market X', 'Market X', 'Market X', 'Market X', 'Market X', 'Market X', 'Market X'],
    },
    markers: {
        size: 3,
        strokeWidth: 3,
        hover: {
            size: 4,
            sizeOffset: 2
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
    },
};

const popularPostData = [
    {
        image: 'assets/images/small/img-2.jpg',
        title: 'Beautiful Day with Friends',
        date: '10 Nov, 2020',
        likes: 125,
        comments: 68
    },
    {
        image: 'assets/images/small/img-6.jpg',
        title: 'Drawing a sketch',
        date: '02 Nov, 2020',
        likes: 102,
        comments: 48
    },
    {
        image: 'assets/images/small/img-1.jpg',
        title: 'Riding bike on road',
        date: '24 Oct, 2020',
        likes: 98,
        comments: 35
    },
    {
        image: 'assets/images/small/img-2.jpg',
        title: 'Project discussion with team',
        date: '15 Oct, 2020',
        likes: 92,
        comments: 22
    },
]
const basicColumChart: ChartType = {
  chart: {
    height: 430,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: 'rounded',
      columnWidth: '45%',
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  colors: ['#34c38f', '#556ee6', '#f46a6a'],
  series: [{
    name: 'Identify',
    data: [46, 57, 59, 54, 62, 58, 64, 60, 66]
  }, {
    name: 'Discover',
    data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
  }, {
    name: 'Advise',
    data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
  }, {
    name: 'Close',
    data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
  }],
  xaxis: {
    categories: ['Atlanta', 'Georgia', 'Charlotte', 'Market X', 'Market X', 'Market X', 'Market X', 'Market X', 'Market X', 'Market X'],
  },
  yaxis: {
    title: {
      text: 'Activity Total'
    }
  },
  fill: {
    opacity: 1
  },
  grid: {
    borderColor: '#f1f1f1'
  },
  tooltip: {
    y: {
      formatter: (val) => {
        return   val ;
      }
    }
  }
};
const litecoinChart: ChartType = {
  series: [{
    name: 'value',
    data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14]
  }],
  chart: {
    type: 'area',
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  colors: ['#50a5f1'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100]
    },
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    marker: {
      show: false
    }
  }
};
export { visitorsOptions, popularPostData, basicColumChart, litecoinChart };
