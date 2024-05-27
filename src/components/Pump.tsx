import PumpIcon from "./svg/PumpIcon";

interface PumpProps {
    plantNumber: number;
}

export default function Pump({ plantNumber }: PumpProps) {
    return (
        <div className="flex">
            <div className="flex flex-row w-full justify-center ">
                <PumpIcon />
                <div className="justify-center text-sm text-gray-600">Pump {plantNumber}</div>
            </div>
        </div>
    );
}