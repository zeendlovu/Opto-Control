import './chart.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { data } from '../../data'

const Chart = ({aspect, title}) => {
    return(
        <div className="chart">
            <div className='title'>{title}</div>
                <ResponsiveContainer width="100%" aspect={aspect}>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
                        <XAxis dataKey="name" stroke='gray' />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
        </div>

    )
}

export default Chart;