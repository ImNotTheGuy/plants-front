import Banner from "./Banner";

function NoWebSocketConnexion() {

    return(
        <div className="flex flex-col  h-screen w-screen">
        <div className="flex pb-3 h-1/6 w-full">
            <Banner title="No websocket connexion active"></Banner>
        </div>
        <div className="flex flex-wrap sm:flex-row lg:flex-row md:flex-wrap md:flex-row h-5/6 w-full">
                <p className='text-4xl text-blue-400'>No websocket connexion established</p>
        </div>
    </div>
    )

}

export default NoWebSocketConnexion;