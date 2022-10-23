import {Flight} from "./Flight";

export const FlightTable = ({flightsState, flights}) => {
    return (
        <div className="m-3 px-3 md:m-6 md:px-16">
            <table className="w-full text-sm font-Montserrat text-center">
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                <tr>
                    <th className="py-2">
                        Flight to
                    </th>
                    <th>
                        Scheduled
                    </th>
                    <th className="hidden md:table-cell">
                        Flight Status
                    </th>
                    <th className="hidden md:table-cell">
                        Flight Number
                    </th>
                    <th className="hidden md:table-cell">
                        Gate
                    </th>
                    <th className="hidden md:table-cell">
                        Airline
                    </th>
                </tr>
                </thead>
                {flightsState ?
                    flights
                        .map((flight, i) => <Flight key={i} flight={flight}></Flight>)
                        .slice(0, 10)
                    : flights
                        .map((flight, i) => <Flight key={i} flight={flight}></Flight>)
                        .slice(-10)
                }
            </table>
        </div>
    );
};