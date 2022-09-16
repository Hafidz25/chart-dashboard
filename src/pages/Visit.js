import React, { useState, useEffect} from 'react'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Player, Controls } from '@lottiefiles/react-lottie-player'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
)

const Visit = () => {
  const [chart, setChart] = useState([])
  const [loading, setLoading] = useState(false)

    var baseUrl = 'http://localhost:3002'

    useEffect(() => {
      const fetchVisit = async () => {
        await fetch(`${baseUrl}/visit-total/get`, {
            method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json'
            // }
        }).then((response) => {
            response.json().then((json) => {
                // console.log(json)
                setChart(json)
                setLoading(true)
            })
        }).catch(error => {
            console.log(error)
        })
      }
      fetchVisit()
    }, [])
    
    // console.log(chart)

    const data = {
        labels: chart?.map(data => data.date),
        datasets: [
            {
                label: 'Visit',
                data: chart?.map(data => data.total_count),
                borderColor: '#E74C3C',
                borderWidth: 2,
                fill: false,
                tension: 0.1
            }
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

export default Visit;
