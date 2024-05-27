import PlantIcon from "./svg/PlantIcon";


interface PlantProps {
    plantNumber: number;
    humidityLevel: number;
}

export default function Plant({ plantNumber }: PlantProps) {
    return (
        <div className="flex">
            <div className="flex flex-col w-full justify-center ">
                <div className="justify-center text-sm text-green-600">Plant {plantNumber}</div>
                <PlantIcon />
            </div>
        </div>
    );
}