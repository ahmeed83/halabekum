import flights from "../data/flights.json";
import {Navbar} from "../components/common/Navbar";
import {FlightTable} from "../components/flights/FlightTable";
import {Footer} from "../components/common/Footer";
import {useState} from "react";
import Head from "next/head";

export default function Home() {
    const [flightsState, setFlightsState] = useState(false);
    return (
        <div>
            <Head>
                <title>Hala Bekum</title>
                <meta name="description" content="Hala Bekum for Iraqi flights"/>
                <link rel="icon" href="/falcon.svg"/>
            </Head>
            <div className="font-Josefin">
                <Navbar flightsState={flightsState} setFlightsState={setFlightsState}/>
                <FlightTable flightsState={flightsState} flights={flights}></FlightTable>
                <Footer/>
            </div>
        </div>
    );
}
