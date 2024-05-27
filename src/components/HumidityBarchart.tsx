import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface HumidityBarChartProps {
    humidityLevel: number;
}

function HumidityBarChart({ humidityLevel }: HumidityBarChartProps) {

    const data = [{ name: 'humidity', value: humidityLevel, fullBar: 1,}]
    const formatPercentage = (value: number) => `humidity level : ${(value * 100).toFixed(2)}%`;
    const layout = "vertical";
    const height = 100;

    return (
        <ResponsiveContainer width="100%" height={height} > 
        <BarChart data={data} layout={layout} barGap={-height/2} title="Humidity level">
            <p>Humidity level : {humidityLevel.toFixed(2)}</p>
            <CartesianGrid horizontal={false} vertical={false}/>
            <XAxis type="number" xAxisId={0} hide={true} domain={[0, 1]} />
            <XAxis type="number" xAxisId={1} hide={true} domain={[0, 1]} />
            <YAxis type="category" hide={true} dataKey="name" />
            <Bar dataKey="fullBar" fill="#caf0f8" xAxisId={1} barSize={height/2} opacity={1} isAnimationActive={false} animationDuration={100}>
                <LabelList dataKey={"value"} fontSize={20} fill="#03045e" position="top" formatter={formatPercentage}/>
            </Bar>  
            <Bar dataKey="value" fill="#0077b6" isAnimationActive={true} animationDuration={100} xAxisId={0} barSize={height/2}>
                {/* <LabelList dataKey="value" fontSize={15} fill="darkBlue" position="insideLeft" formatter={formatPercentage} /> */}
            </Bar>
        </BarChart>
        </ResponsiveContainer>
    );
}

export default HumidityBarChart;