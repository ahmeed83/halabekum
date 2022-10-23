import moment from "moment";

export const Flight = ({flight}) => {
    const airport = flight.arrival.airport;
    const gate = flight.arrival.gate;
    const scheduled = flight.departure.scheduled;
    const flight_status = flight.flight_status;
    const flight_number = flight.flight.number;
    const airline = flight.airline.name;
    return (
        <tbody>
        {airport ||
        gate ||
        scheduled ||
        flight_number ||
        flight_status ||
        airline ? (
            <tr className="text-gray-400 font-medium border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                <th className="text-left px-2 md:px-6 py-2 md:py-4 text-gray-200">
                    {airport}
                </th>
                <td className="md:px-6 hidden md:table-cell">
                    {moment(scheduled).format("MMM Do YY, h:mm a")}
                </td>
                <td className="px-2 md:hidden">
                    {moment(scheduled).format("D, h:mm a")}
                </td>
                <td className="md:px-6 py-4 hidden md:table-cell">
                    {flight_status}
                </td>
                <td className="md:px-6 py-4 hidden md:table-cell">
                    {flight_number}
                </td>
                <td className="md:px-6 py-4 hidden md:table-cell">
                    {gate}
                </td>
                <td className="md:px-6 py-4 hidden md:table-cell">
                    {airline}
                </td>
            </tr>
        ) : null}
        </tbody>
    );
}