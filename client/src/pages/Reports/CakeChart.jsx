/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { Chart as Chartjs, LineElement } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import useGetData from '../../hooks/UseFetch/UseGetData'

Chartjs.register(LineElement)
function CakeChart({ charData }) {
	const [initialValue, setInitialValue] = useState([10, 20, 15, 30])

	const data = {
		labels: 'line',
		type: 'Line',
		datasets: [
			{
				label: '',
				data: charData?.stats?.map(el => el?.base_stat),
				borderCapStyle: 'round',
				borderWidth: '1',
				borderColor: function (context) {
					const chart = context.chart
					const { ctx, chartArea } = chart
					if (!chartArea) {
						return
					}
					return getGradient(ctx, chartArea)
				},
				backgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 2,
				fill: 'origin',
				responsive: false,
				tension: 0.1,
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

	let width, height, gradient
	function getGradient(ctx, chartArea) {
		const chartWidth = chartArea.right - chartArea.left
		const chartHeight = chartArea.bottom - chartArea.top
		if (!gradient || width !== chartWidth || height !== chartHeight) {
			width = chartWidth
			height = chartHeight
			gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
			gradient.addColorStop(0, '#F47E34')
			gradient.addColorStop(0.5, '#C331E3')
			gradient.addColorStop(1, '#5507E0')
		}

		return gradient
	}
	return <Line data={data} options={options} />
	// const [userData, setData] = useState({
	// 	labels: charData.map(el => el.name),
	// 	datasets: [
	// 		{
	// 			label: '',
	// 			data: charData.map(el => el.money),
	// 			borderCapStyle: 'round',
	// 			borderWidth: '1',
	// 			borderColor: function (context) {
	// 				const chart = context.chart
	// 				const { ctx, chartArea } = chart
	// 				if (!chartArea) {
	// 					return
	// 				}
	// 				return getGradient(ctx, chartArea)
	// 			},
	// 			backgroundColor: 'rgb(255, 255, 255)',
	// 			pointBorderWidth: 2,
	// 			fill: 'origin',
	// 			responsive: false,
	// 			tension: 0.1,
	// 		},
	// 	],
	// })
	// const options = {
	// 	maintainAspectRatio: false,
	// 	plugins: {
	// 		legend: {
	// 			display: false,
	// 		},
	// 	},
	// 	scales: {
	// 		y: {
	// 			ticks: {
	// 				display: false,
	// 			},
	// 		},
	// 		x: {
	// 			ticks: {
	// 				display: false,
	// 			},
	// 		},
	// 	},
	// }

	// let width, height, gradient
	// function getGradient(ctx, chartArea) {
	// 	const chartWidth = chartArea.right - chartArea.left
	// 	const chartHeight = chartArea.bottom - chartArea.top
	// 	if (!gradient || width !== chartWidth || height !== chartHeight) {
	// 		width = chartWidth
	// 		height = chartHeight
	// 		gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
	// 		gradient.addColorStop(0, '#F47E34')
	// 		gradient.addColorStop(0.5, '#C331E3')
	// 		gradient.addColorStop(1, '#5507E0')
	// 	}

	// 	return gradient
	// }
	// return <Line data={userData} options={options} />
}
export default CakeChart
