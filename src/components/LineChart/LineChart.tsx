import React, { useEffect, useState } from 'react';
import { Svg, Path } from 'react-native-svg';
import * as d3 from 'd3';

const LineChart = ({ data, width, height, color }) => {
    const [path, setPath] = useState('');

    useEffect(() => {
        // Define the x and y scales
        const x = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, width]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([height, 0]);

        // Define the line generator
        const line = d3.line()
            .x((d, i) => x(i))
            .y(d => y(d));

        // Generate the path string for the line
        const pathString = line(data);

        // Set the path state
        setPath(pathString as string);
    }, [data, height, width]);

    return (
        <Svg width={width} height={height}>
            <Path d={path} stroke={color} strokeWidth={2} fill="none" />
        </Svg>
    );
};

export default LineChart;
