import moment from "moment";
import {useEffect, useState} from "react";
import Image from "next/image";

export const Navbar = ({flightsState, setFlightsState}) => {
    const arrived = 'Arrived';
    const departed = 'Departed';

    const [time, setTime] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment(new Date()).format('D/MM h:mm:ss a'))
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="bg-gray-800 font-Montserrat">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Image className="h-8 w-auto"
                                   src="/falcon.svg"
                                   alt="Hala Bekum"
                                   width={48}
                                   height={40}/>
                        </div>
                        <div className=" sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <p className="px-3 py-2 text-gray-300 text-sm text-xl">Hala Bekum</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block text-gray-300 text-base">
                        {time}
                    </div>
                    <div className="md:hidden text-gray-300 text-sm">
                        {time}
                    </div>
                </div>
            </div>
            <header className="bg-white shadow text-gray-300">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
                    <h1 className="text-xl font-bold tracking-tight text-gray-700">
                        {flightsState ? arrived : departed} flights
                    </h1>
                    <button className="bg-gray-700 hover:bg-gray-600 font-bold md:py-2 px-4 md:px-16 rounded-lg"
                            onClick={() => setFlightsState(!flightsState)}>
                        Check {flightsState ? departed : arrived}
                    </button>
                </div>
            </header>
        </nav>
    );
}