import { useState } from "react";
import { HumidityLevels } from "../models/humidity-levels"
import Banner from "./Banner"
import { useSubscription } from "react-stomp-hooks";
import Dashboard from "./Dashboard";

function Main() {

    const [data, setData] = useState<HumidityLevels>();
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("Hi :)")
    useEffect(() => {
        if (data && data.title) {
            setTitle(data.title);
        }
    }, [data]);
    useSubscription('/topic/humidity-levels', (message) => {
        console.log('message', message);
        setData(JSON.parse(message.body));
        setMessage(message.body);
        if (data && data.title) {
            setTitle(data.title);
        }
    });

    return (
        <div className="flex flex-col  h-screen w-screen">
            <div className="flex pb-3 h-1/6 w-full">
                <Banner title={title}></Banner>
            </div>
            <div className="flex flex-wrap sm:flex-row lg:flex-row md:flex-wrap md:flex-row h-5/6 w-full">
                {data ? (
                    data.sensors?.sort((sensorA, sensorB) => sensorA.plant_number - sensorB.plant_number).map(sensor => {
                        return (
                            <Dashboard key={sensor.plant_number} humiditySensor={sensor} />
                        )
                    })
                ) : (
                    <p className='p-3 text-4xl text-blue-400'>Waiting for data...</p>
                )}
            </div>
        </div>
    )
}

export default Main
