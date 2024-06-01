interface BannerProps {
    title: string
}

function Banner({ title }: BannerProps) {

    return (
    <div>
        <div className="p-3 text-6xl text-green-600">Automate the Small Stuff !</div>
        <div className="p-3 text-2xl text-green-600">{title}</div>
    </div>
    )
}

export default Banner;
