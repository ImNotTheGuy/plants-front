import { HumiditySensor } from "./humidity-sensors";

export interface HumidityLevels {
    title: string;
    message_id: string;
    sensors: HumiditySensor[]
}
