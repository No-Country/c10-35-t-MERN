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
	const [userData, setData] = useState({
		labels: charData.map(el => el.name),
		datasets: [
			{
				label: 'user amount of money',
				data: charData.map(el => el.money),
			},
		],
	})
	const options = {
		maintainAspectRatio: false,
	}
	return <Bar data={userData} options={options} plugins={plugins} />
}

export default BarChart
