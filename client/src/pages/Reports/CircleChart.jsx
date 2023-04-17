/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'

import { Chart as Chartjs } from 'chart.js/auto'

function CircleChart({ charData }) {
	const plugins = [
		{
			beforeDraw: function (chart) {
				if (chart.chartArea) {
					var ctx = chart.ctx
					var chartArea = chart.chartArea
					var barArray = chart.getDatasetMeta(0).data

					ctx.fillStyle = '#EEE'

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
	const [userData, setData] = useState({
		labels: charData.map(el => el.name),
		datasets: [
			{
				label: 'user amount of money',
				data: charData.map(el => el.money),
				responsive: false,
				backgroundColor: ['#F47E34', '#C331E3', '#5507E0'],
			},
		],
	})
	const options = {
		maintainAspectRatio: false,
		cutout: 48,
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
	return <Doughnut data={userData} options={options} />
}

export default CircleChart
