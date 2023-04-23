/* eslint-disable react/prop-types */
import { Bar } from 'react-chartjs-2'
import { useState } from 'react'
import { Chart as Chartjs } from 'chart.js/auto'

// eslint-disable-next-line react/prop-types
function BarChart({ charData }) {
	const plugins = [
		{
			beforeDraw: function (chart) {
				if (chart.chartArea) {
					var ctx = chart.ctx
					var chartArea = chart.chartArea
					var barArray = chart.getDatasetMeta(0).data

					ctx.fillStyle = '#efefef'

					for (let i = 0; i < barArray.length; i++) {
						const { x, width } = barArray[i]

						ctx.fillRect(
							x - width / 2,
							chartArea.top,
							width,
							chartArea.bottom - chartArea.top
						)
					}
				}
			},
		},
	]
	const data = {
		labels: 'data',
		datasets: [
			{
				label: '',
				data: charData?.stats?.map(el => el?.base_stat),
				backgroundColor: '#5507E0',
				barPercentaje: '0.2',
				borderWidth: '0',
			},
			{
				label: '',
				data: charData?.stats?.map(el => el?.base_stat),
				backgroundColor: '#C331E3',
				barPercentaje: '0.2',
				borderWidth: '0',
			},
		],
	}
	const options = {
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			y: {
				ticks: {
					display: false,
				},
			},
			x: {
				ticks: {
					display: false,
				},
			},
		},
	}
	return <Bar data={data} options={options} plugins={plugins} />
}

export default BarChart
