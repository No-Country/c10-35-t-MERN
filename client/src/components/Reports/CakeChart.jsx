/* eslint-disable react/prop-types */
import { Line } from 'react-chartjs-2'
import { useState } from 'react'

import { Chart as Chartjs } from 'chart.js/auto'

function CakeChart({ charData }) {
	const [userData, setData] = useState({
		labels: charData.map(el => el.name),
		datasets: [
			{
				label: 'user amount of money',
				data: charData.map(el => el.money),
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.3)',
				fill: 'origin',
				tension: 0.4,
				responsive: false,
			},
		],
	})
	const options = {
		maintainAspectRatio: false,
	}
	return <Line data={userData} options={options} />
}

export default CakeChart
