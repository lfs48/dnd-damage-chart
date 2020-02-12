import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Chart = () => {

    const options = {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Damage of each Fighter Subclass"
        },
        axisX: {
            title: "Subclass",
        },
        axisY: {
            title: "Damage"
        },
        data: [{
            type: "column",
            dataPoints: [
                { y:  1, label: "Cavalier" },
                { y:  2, label: "Champion" },
                { y:  3, label: "Arcane Archer" },
                { y:  4, label: "Eldritch Knight" },
                { y:  5, label: "Battlemaster" }
            ]
        }]
    };

    return(
        <section id="chart-container">
            <CanvasJSChart options={options} />
        </section>
    );
}

export default Chart;