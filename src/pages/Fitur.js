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

export const Fitur = () => {
  const [faq, setFaq] = useState()
  const [search, setSearch] = useState()
  const [randtop, setRandtop] = useState()
  const [pilmat, setPilmat] = useState()
  const [loading, setLoading] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
        await axios.all([
                axios.get( 'http://localhost:3002/f-faq/get'),
                axios.get( 'http://localhost:3002/f-search/get'),
                axios.get( 'http://localhost:3002/f-randtop/get'),
                axios.get( 'http://localhost:3002/f-pilmat/get'),
                
              ]).then(axios.spread((...responses) => {
                setFaq(responses[0].data[0].count)
                setSearch(responses[1].data[0].count)
                setRandtop(responses[2].data[0].count)
                setPilmat(responses[3].data[0].count)
                setLoading(true)
              }))
      }
      fetchData()
    }, [])
    
    // console.log(mat , ipa , bi)

    const dataDough = {
        labels: ['FAQ','Search', 'Random Topic', 'Pilihan Materi'],
        datasets: [
            {
              label: '# of Votes',
              data: [faq, search, randtop, pilmat],
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

export const Data = () => {

  const [dailyFaq, setDailyFaq] = useState([])
  const [dailySearch, setDailySearch] = useState([])
  const [dailyRandtop, setDailyRandtop] = useState([])
  const [dailyPilmat, setDailyPilmat] = useState([])
  const [loading, setLoading] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
        await axios.all([
                axios.get( 'http://localhost:3002/daily-f-faq/get'),
                axios.get( 'http://localhost:3002/daily-f-search/get'),
                axios.get( 'http://localhost:3002/daily-f-randtop/get'),
                axios.get( 'http://localhost:3002/daily-f-pilmat/get'),
                
              ]).then(axios.spread((...responses) => {
                setDailyFaq(responses[0].data)
                setDailySearch(responses[1].data)
                setDailyRandtop(responses[2].data)
                setDailyPilmat(responses[3].data)
                setLoading(true)
              }))
      }
      fetchData()
    }, [])
  

  const data = {
    labels: dailyFaq?.map(data => data.date),
    datasets: [
        {
            label: 'FAQ',
            data: dailyFaq?.map(data => data.total_count),
            borderColor: '#E74C3C',
            borderWidth: 2,
            fill: false,
            tension: 0.1
        },
        {
            label: 'Search',
            data: dailySearch?.map(data => data.total_count),
            borderColor: '#2980B9',
            borderWidth: 2,
            fill: false,
            tension: 0.1
        },
        {
            label: 'Random Topic',
            data: dailyRandtop?.map(data => data.total_count),
            borderColor: '#F1C40F',
            borderWidth: 2,
            fill: false,
            tension: 0.1
        },
        {
            label: 'Pilihan Materi',
            data: dailyPilmat?.map(data => data.total_count),
            borderColor: '#27AE60',
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

