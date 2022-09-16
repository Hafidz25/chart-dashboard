import React, { useState, useEffect} from 'react'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, ArcElement, PointElement, Title, Tooltip, Legend } from 'chart.js'
import { Line, Doughnut } from 'react-chartjs-2'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import axios from 'axios'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)

export const SMP = () => {
  const [mat, setMat] = useState()
  const [bi, setBi] = useState()
  const [ipa, setIpa] = useState()
  const [loading, setLoading] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
        await axios.all([
                axios.get( 'http://localhost:3002/smp-mat/get'),
                axios.get( 'http://localhost:3002/smp-bi/get'),
                axios.get( 'http://localhost:3002/smp-ipa/get'),
                
              ]).then(axios.spread((...responses) => {
                setMat(responses[0].data[0].count)
                setBi(responses[1].data[0].count)
                setIpa(responses[2].data[0].count)
                setLoading(true)
              }))
      }
      fetchData()
    }, [])
    
    // console.log(mat , ipa , bi)

    const dataDough = {
        labels: ['MAT','BI', 'IPA'],
        datasets: [
            {
              label: '# of Votes',
              data: [mat, bi, ipa],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
        ]
    }
    
    const optionsDough = {
        maintainAspectRatio: false,
        legend: {
            labels: {
                fontSize: 26
            }
        }
    }

    if(!loading) {
        return(
            <div style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Player
                  autoplay
                  loop
                  src="https://assets7.lottiefiles.com/packages/lf20_yQz03Y.json"
                  style={{ height: '500px', width: 'auto' }}
                  >
              </Player>
            </div>
        )
    } else {
        return (
            <div>
              <div style={{ padding: '10px', margin: '40px 20px', alignItems: 'center' }}>
                <Doughnut 
                    data={dataDough}
                    height={400}
                    options={optionsDough}
                    style={{borderStyle: 'solid',borderColor: '#2C3E50', borderWidth: '0.1px', padding: '10px', borderRadius: '15px'}}
                />
              </div>
            </div>
          )
    }
};

export const MapelSMP = () => {

  const [dailyMat, setDailyMat] = useState([])
  const [dailyBi, setDailyBi] = useState([])
  const [dailyIpa, setDailyIpa] = useState([])
  const [loading, setLoading] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
        await axios.all([
                axios.get( 'http://localhost:3002/daily-smp-mat/get'),
                axios.get( 'http://localhost:3002/daily-smp-bi/get'),
                axios.get( 'http://localhost:3002/daily-smp-ipa/get'),
                
              ]).then(axios.spread((...responses) => {
                setDailyMat(responses[0].data)
                setDailyBi(responses[1].data)
                setDailyIpa(responses[2].data)
                setLoading(true)
              }))
      }
      fetchData()
    }, [])
  

  const data = {
    labels: dailyMat?.map(data => data.date),
    datasets: [
        {
            label: 'MAT',
            data: dailyMat?.map(data => data.total_count),
            borderColor: '#E74C3C',
            borderWidth: 2,
            fill: false,
            tension: 0.1
        },
        {
            label: 'BI',
            data: dailyBi?.map(data => data.total_count),
            borderColor: '#2980B9',
            borderWidth: 2,
            fill: false,
            tension: 0.1
        },
        {
            label: 'IPA',
            data: dailyIpa?.map(data => data.total_count),
            borderColor: '#F1C40F',
            borderWidth: 2,
            fill: false,
            tension: 0.1
        },
    ]
}

const options = {
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    legend: {
        labels: {
            fontSize: 26
        }
    }
}
  

if(!loading) {
  return(
      <div style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_yQz03Y.json"
            style={{ height: '500px', width: 'auto' }}
            >
        </Player>
      </div>
  )
} else {
  return (
      <div>
        <div style={{ padding: '10px', margin: '40px 20px', alignItems: 'center' }}>
          <Line 
              data={data}
              height={400}
              options={options}
              style={{borderStyle: 'solid',borderColor: '#2C3E50', borderWidth: '0.1px', padding: '10px', borderRadius: '15px'}}
          />
        </div>
      </div>
    )
}

};

