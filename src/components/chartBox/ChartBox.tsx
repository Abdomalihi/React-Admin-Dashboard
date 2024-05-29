import { Link } from 'react-router-dom'
import './chartBox.scss'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

type Props ={
  color:string;
  icon:string;
  title:string;
  number:number | string;
  dataKey:string;
  percentage:number;
  chartData:object[]
}

export default function ChartBox(props: Props) {
  return (
    <div className='chartBox'>
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to='/' style={{color:props.color}}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip 
                contentStyle={{background:"transparent", border:"none"}}
                position={{x:5, y:60}}
                labelStyle={{display:"none"}}
              />
              <Line type="monotone" dataKey={props.dataKey} 
                    stroke={props.color} strokeWidth={2} 
                    dot={false}  />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <div className="percentage" style={props.percentage<=0 ? {color:"tomato"} : {color:"limegreen"}}>{props.percentage}%</div>
          <div className="duration">this month</div>
        </div>
      </div>
    </div>
  )
}
