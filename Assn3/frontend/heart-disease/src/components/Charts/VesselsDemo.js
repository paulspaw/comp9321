import React, { Component } from 'react'
import CanvasJSReact from '../Canvas/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class VesselsDemo extends Component {

    state = {
        dataSet: undefined
    }

    componentDidMount() {
        fetch(`http://localhost:5000/collections/${this.props.id}`, {method: "GET"})
        .then(res => res.json())
        .then(response => this.setState({
            dataSet: response
        }))
    }
    toggleDataSeries = (e) => {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
    }

    computeAmount = (Obj) =>{
        let result_male = {}
        let result_female = {}
        for(let age = 30; age < 75; age += 1){
            let cnt_male = [0,0,0,0]
            let cnt_female = [0,0,0,0]
            for(var key in Obj){
                if(Obj[key].age === age && Obj[key].sex === 1){
                    console.log('Obj[key] :',Obj[key] );
                    switch(Obj[key].vessels){
                        case 0: cnt_male[0] += 1;break;
                        case 1: cnt_male[1] += 1;break;
                        case 2: cnt_male[2] += 1;break;
                        case 3: cnt_male[3] += 1;break;
                        default: break;
                    }
                }
                if(Obj[key].age === age && Obj[key].sex === 0){
                    switch(Obj[key].vessels){
                        case 0: cnt_female[0] += 1;break;
                        case 1: cnt_female[1] += 1;break;
                        case 2: cnt_female[2] += 1;break;
                        case 3: cnt_female[3] += 1;break;
                        default: break;
                    }
                }

            }
            result_male[age] = cnt_male
            result_female[age] = cnt_female
        }
        
        return {male:result_male,female:result_female} 
    }
    
    render() {

        if (this.state.dataSet === undefined) {
          return <div></div>
        } else {
            let dataSet = this.state.dataSet
            let result = this.computeAmount(dataSet)
            let male = result.male
            let female = result.female
    
            let dataPoints_male_1 = [
                {label: "<45",   y: 0},
                {label: "45-55", y: 0},
                {label: "55-65", y: 0},
                {label: "65-75", y: 0},
                {label: ">75",   y: 0}
            ]
        
            let dataPoints_male_2 = [
                {label: "<45",   y: 0},
                {label: "45-55", y: 0},
                {label: "55-65", y: 0},
                {label: "65-75", y: 0},
                {label: ">75",   y: 0}
            ]

            let dataPoints_male_3 = [
                {label: "<45",   y: 0},
                {label: "45-55", y: 0},
                {label: "55-65", y: 0},
                {label: "65-75", y: 0},
                {label: ">75",   y: 0}
            ]

            let dataPoints_male_4 = [
                {label: "<45",   y: 0},
                {label: "45-55", y: 0},
                {label: "55-65", y: 0},
                {label: "65-75", y: 0},
                {label: ">75",   y: 0}
            ]

            let dataPoints_female_1 = [
                {label: "<45",   y: 0},
                {label: "45-55", y: 0},
                {label: "55-65", y: 0},
                {label: "65-75", y: 0},
                {label: ">75",   y: 0}
            ]
        
            let dataPoints_female_2 = [
                {label: "<45",   y: 0},
                {label: "45-55", y: 0},
                {label: "55-65", y: 0},
                {label: "65-75", y: 0},
                {label: ">75",   y: 0}
            ]

            let dataPoints_female_3 = [
                {label: "<45",   y: 0},
                {label: "45-55", y: 0},
                {label: "55-65", y: 0},
                {label: "65-75", y: 0},
                {label: ">75",   y: 0}
            ]

            let dataPoints_female_4 = [
                {label: "<45",   y: 0},
                {label: "45-55", y: 0},
                {label: "55-65", y: 0},
                {label: "65-75", y: 0},
                {label: ">75",   y: 0}
            ]
            
            
            for (let key in male) {
                if (key < 45) {
                    dataPoints_male_1[0].y += male[key][0]
                    dataPoints_male_2[0].y += male[key][1]
                    dataPoints_male_3[0].y += male[key][2]
                    dataPoints_male_4[0].y += male[key][3]
                } else if (key < 55) {
                    dataPoints_male_1[1].y += male[key][0]
                    dataPoints_male_2[1].y += male[key][1]
                    dataPoints_male_3[1].y += male[key][2]
                    dataPoints_male_4[1].y += male[key][3]
                } else if (key < 65) {
                    dataPoints_male_1[2].y += male[key][0]
                    dataPoints_male_2[2].y += male[key][1]
                    dataPoints_male_3[2].y += male[key][2]
                    dataPoints_male_4[2].y += male[key][3]
                } else if (key < 75) {
                    dataPoints_male_1[3].y += male[key][0]
                    dataPoints_male_2[3].y += male[key][1]
                    dataPoints_male_3[3].y += male[key][2]
                    dataPoints_male_4[3].y += male[key][3]
                } else {
                    dataPoints_male_1[4].y += male[key][0]
                    dataPoints_male_2[4].y += male[key][1]
                    dataPoints_male_3[4].y += male[key][2]
                    dataPoints_male_4[4].y += male[key][3]
                }
            }


            for (let key in female) {
                if (key < 45) {
                    dataPoints_female_1[0].y += female[key][0]
                    dataPoints_female_2[0].y += female[key][1]
                    dataPoints_female_3[0].y += female[key][2]
                    dataPoints_female_4[0].y += female[key][3]
                } else if (key < 55) {
                    dataPoints_female_1[1].y += female[key][0]
                    dataPoints_female_2[1].y += female[key][1]
                    dataPoints_female_3[1].y += female[key][2]
                    dataPoints_female_4[1].y += female[key][3]
                } else if (key < 65) {
                    dataPoints_female_1[2].y += female[key][0]
                    dataPoints_female_2[2].y += female[key][1]
                    dataPoints_female_3[2].y += female[key][2]
                    dataPoints_female_4[2].y += female[key][3]
                } else if (key < 75) {
                    dataPoints_female_1[3].y += female[key][0]
                    dataPoints_female_2[3].y += female[key][1]
                    dataPoints_female_3[3].y += female[key][2]
                    dataPoints_female_4[3].y += female[key][3]
                } else {
                    dataPoints_female_1[4].y += female[key][0]
                    dataPoints_female_2[4].y += female[key][1]
                    dataPoints_female_3[4].y += female[key][2]
                    dataPoints_female_4[4].y += female[key][3]
                }
            }

            const options = {
                theme: "light2",
                animationEnabled: true,
                zoomEnabled: true,
                title: {
                  text: "Number of major vessels (0-3) colored by flourosopy"
                },
                axisX: {
                  title: "Age"
                },
                axisY: {
                  title: "Quantity",
                },
                toolTip: {
                  shared: true,
                  reversed: true
                },
                legend: {
                          verticalAlign: "center",
                          horizontalAlign: "right",
                          reversed: true,
                          cursor: "pointer",
                          itemclick: this.toggleDataSeries
                },
        
                data: [{
                  type: "column",
                  name: "Male 0",
                  showInLegend: true,
                  yValueFormatString: "#,###",
                  toolTipContent: "<span style=\"color:#808000 \">{name}</span><br>Quantity: {y}",
                  dataPoints: dataPoints_male_1
                },
                {
                  type: "column",
                  name: "Male 1",
                  showInLegend: true,          
                  yValueFormatString: "#,###",
                  toolTipContent: "<span style=\"color:#808000 \">{name}</span><br>Quantity: {y}",
                  dataPoints: dataPoints_male_2
                },
                {
                    type: "column",
                    name: "Male 2",
                    showInLegend: true,          
                    yValueFormatString: "#,###",
                    toolTipContent: "<span style=\"color:#808000 \">{name}</span><br>Quantity: {y}",
                    dataPoints: dataPoints_male_3
                },
                {
                    type: "column",
                    name: "Male 3",
                    showInLegend: true,          
                    yValueFormatString: "#,###",
                    toolTipContent: "<span style=\"color:#808000 \">{name}</span><br>Quantity: {y}",
                    dataPoints: dataPoints_male_4
                },
                {
                  type: "column",
                  name: "Female 0",
                  showInLegend: true,
                  yValueFormatString: "#,###",
                  toolTipContent: "<span style=\"color:#808000 \">{name}</span><br>Quantity: {y}",
                  dataPoints: dataPoints_female_1
                },
                {
                  type: "column",
                  name: "Female 1",
                  showInLegend: true,
                  yValueFormatString: "#,###",
                  toolTipContent: "<span style=\"color:#808000 \">{name}</span><br>Quantity: {y}",
                  dataPoints: dataPoints_female_2
                },
                {
                    type: "column",
                    name: "Female 2",
                    showInLegend: true,
                    yValueFormatString: "#,###",
                    toolTipContent: "<span style=\"color:#808000 \">{name}</span><br>Quantity: {y}",
                    dataPoints: dataPoints_female_3
                },
                {
                    type: "column",
                    name: "Female 3",
                    showInLegend: true,
                    yValueFormatString: "#,###",
                    toolTipContent: "<span style=\"color:#808000 \">{name}</span><br>Quantity: {y}",
                    dataPoints: dataPoints_female_4
                }]
            }
            return (
                <div>
                  <CanvasJSChart options = {options} 
                    onRef={ref => this.chart = ref}
                  />
                  {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                </div>
                );
        }
    }
}