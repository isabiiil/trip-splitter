import React from "react";
import Chart from "react-apexcharts";
import Navbar from "./Navbar";

class Balances extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'what you\'re owed',
        data: [224.60, 0, 0.76, 1184.10,
        ]
      },
      {
        name: 'what you owe',
        data: [0, -744.06, -664.64, 0,
        ]
      }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 440,
          stacked: true
        },
        colors: ['#059669', '#DC2626'],
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'bottom',

            }
          },
          dataLabels: {
            enabled: true,
            style: {
                colors: ['#333']
            },
            offsetY: 30
          },
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },

        grid: {
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          min: -1500,
          max: 1500,
          title: {
            // text: 'Age',
          },
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function (val) {
              return val
            }
          },
          y: {
            formatter: function (val) {
              return Math.abs(val)
            }
          }
        },
        xaxis: {
          categories: [
            'Alexandra Trese',
            'Maliksi',
            'Captain Guererro',
            'Crispin & Basilio',
          ],
          title: {
            text: 'Percent'
          },
          labels: {
            formatter: function (val) {
              return Math.abs(Math.round(val))
            }
          }
        },
      },


    };
  }



  render() {
    return (
      <>
        <div className="h-screen bg-green-100">
          <Navbar />
          <div className="h-auto m-16 flex items-bottom justify-center">
            <div className="w-2/4 h-auto bg-white p-6 rounded-lg shadow-2xl">
              <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="bar" height={440} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Balances;