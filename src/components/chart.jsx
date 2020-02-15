import React from 'react';
import {BarChart, Bar, XAxis, YAxis} from 'recharts';

const Chart = () => {

    const data = [
        {
            name: "Battlemaster",
            pv: 200,
        },
        {
            name: "Champion",
            pv: 180,
        },
        {
            name: "Eldritch Knight",
            pv: 190,
        },
    ];

    return(
        <section id="chart-container">
            <BarChart width={730} height={250} data={data} >
                <XAxis dataKey="name"/>
                <YAxis />
                <Bar barSize={100} dataKey="pv" />
            </BarChart>
        </section>
    );
}

export default Chart;