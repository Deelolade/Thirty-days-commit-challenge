// src/components/LineChart.js

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import chart.js
import { IoIosArrowDown } from "react-icons/io";

const LineChart = () => {
    const chartRef = useRef(null); // Ref to attach to the canvas element

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d'); // Get 2d context from canvas

        const chart = new Chart(ctx, {
            type: 'line', // Set the type to 'line' for Line Chart
            data: {
                labels: ['Dec, 2024', 'Jan, 2025', 'Feb, 2025', 'Mar, 2025', 'Apr, 2025', "May, 2025"], // X-axis labels
                datasets: [
                    {
                        label: '', // First line
                        data: [120, 110, 160, 105, 149, 156], // Y-axis data for the first line
                        borderColor: 'rgba(75, 192, 192, 1)', // Line color for the first line
                        // backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color under the first line
                        // fill: true, // Set to true if you want the area under the line to be filled
                        tension: 0.1, // Smooth line curve
                        borderWidth: 2, // Line thickness
                    },
                    {
                        label: '', // Second line
                        data: [96, 60, 96, 91, 72, 80], // Y-axis data for the second line
                        borderColor: 'rgba(153, 102, 255, 1)', // Line color for the second line
                        // backgroundColor: 'rgba(153, 102, 255, 0.2)', // Fill color under the second line
                        // fill: true, // Set to true if you want the area under the second line to be filled
                        tension: 0.1, // Smooth line curve
                        borderWidth: 2, // Line thickness
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                        // position: 'top', // Position the legend at the top
                    },
                    tooltip: {
                        mode: 'index', // Show tooltips for both lines at the same time
                        intersect: false,
                    },
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            // text: 'Months', // Label for the x-axis
                        },
                    },
                    y: {
                        title: {
                            display: true,
                        },
                    },
                },
            },
        });

        // Cleanup chart on component unmount
        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div className="p-6 max-w-4xl  bg-purple-100 rounded-lg ">
            <div className=" flex justify-between">
            <h2 className="text-2xl font-bold text-left mb-4">Blood Pressure</h2>
            <p className='flex leading-3 '>Last 6 Months <IoIosArrowDown className='ml-2'/></p>
            </div>
            <canvas
                ref={chartRef}
                className="w-full h-80 rounded-lg" // Tailwind classes to style the canvas
            />
        </div>
    );
};

export default LineChart;
