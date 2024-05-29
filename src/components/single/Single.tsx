import { Legend, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line } from 'recharts'
import './single.scss'

type Props = {
  id: number,
  title: string,
  img?: string,
  info: object,
  chart?: {
    dataKeys: {name: string, color: string}[] ,
    data: object[],
  },
  activities?: {text: string, time: string}[],
}

export default function Single(props: Props) {
  return (
    <div className='single'>
      <div className="view">
        <div className="info">
          <div className="infoTop">
            {props.img && <img src={props.img} alt="Profile Image" />}
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
          <div className="infoDetails">
          {
            Object.entries(props.info).map((item)=> (
              <div className="item" key={item[0]}>
              <span className="itemTitle">{item[0]}:</span>
              <span className="itemValue">{item[1]}</span>
              </div>
            ))
          }
          </div>
        </div>
        <hr />
        {props.chart && <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={props.chart?.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {props.chart.dataKeys.map(datakey=> (
                <Line type="monotone" dataKey={datakey.name} stroke={datakey.color} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>}
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        {props.activities && <ul>
          {props.activities.map(activity => (
            <li key={activity.text}>
              <div>
                <p>{activity.text}</p>
                <time>{activity.time}</time>
              </div>
            </li>
          ))}
          
        </ul> }         
      </div>
    </div>
  )
}
