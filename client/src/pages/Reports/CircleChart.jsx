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
			},
		],
	})
	const options = {
		maintainAspectRatio: false,
	}
	return <Doughnut data={userData} options={options} />
}

export default CircleChart
