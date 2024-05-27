import { HumiditySensor } from "../models/humidity-sensors";
import HumidityBarChart from "./HumidityBarchart";
import Plant from "./Plant";
import Pump from "./Pump";

interface DashboardProps {
    humiditySensor: HumiditySensor
}

export default function Dashboard({ humiditySensor }: DashboardProps) {
    return (
            <div className="flex flex-col p-4 lg:w-1/2 xl:w-1/4 md:w-1/2 sm:w-full w-full hover:bg-green-50 border-green-100 border">
                <div className="flex flex-row">
                    <Plant plantNumber={humiditySensor.plant_number} humidityLevel={humiditySensor.value} />
                    <Pump plantNumber={humiditySensor.plant_number} />
                </div>
                <div className="flex flex-col">
                    <div className="flex"><HumidityBarChart humidityLevel={humiditySensor.value} /></div>
                </div>
            </div>

    )
}