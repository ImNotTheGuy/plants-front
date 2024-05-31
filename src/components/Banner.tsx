interface BannerProps {
    title: string
}

function Banner({ title }: PumpProps) {
    return (
    <div>
        <div className="p-3 text-6xl text-green-600">Automate the Small Stuff !</div>
        <div>{title}</div>
    </div>
    )
}

export default Banner;