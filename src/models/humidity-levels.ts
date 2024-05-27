import { HumiditySensor } from "./humidity-sensors";

export interface HumidityLevels {
    message_id: string;
    sensors: HumiditySensor[]
}