import React,{useState,useEffect} from 'react'



const PieChart = (prop) => {
  
  const [colors, setColors]=useState({redFrom: "0", redTo:"20",greenFrom : "20", greenTo: "70", blueFrom: "70", blueTo: "100"})



  return (
    <div className="pieChartBox">
        <div className='pieChart' style={{backgroundImage: `conic-gradient(red ${colors.redFrom}%,red ${colors.redTo}%, green ${colors.greenFrom}%,green ${colors.greenTo}%,blue ${colors.blueFrom}%, blue  ${colors.blueTo}% )`}}>
            <div className='pieChartInnerCircle'>
                <div className='pieChartTextBox'>
                  <h1 className='pieChartText'>{}</h1>
                </div>
            </div>
        </div>

        <div className='pieChart' style={{backgroundImage: `conic-gradient(red ${colors.redFrom}%,red ${colors.redTo}%, green ${colors.greenFrom}%,green ${colors.greenTo}%,blue ${colors.blueFrom}%, blue  ${colors.blueTo}% )`}}>
            <div className='pieChartInnerCircle'>
                <div className='pieChartTextBox'>
                  <h1 className='pieChartText'>{}</h1>
                </div>
            </div>
        </div>

        <div className='pieChart' style={{backgroundImage: `conic-gradient(red ${colors.redFrom}%,red ${colors.redTo}%, green ${colors.greenFrom}%,green ${colors.greenTo}%,blue ${colors.blueFrom}%, blue  ${colors.blueTo}% )`}}>
            <div className='pieChartInnerCircle'>
                <div className='pieChartTextBox'>
                  <h1 className='pieChartText'>{}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PieChart