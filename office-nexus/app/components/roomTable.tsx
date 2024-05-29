import React from 'react';
import Link from 'next/link';

interface Room {
  name: string;
  status: string;
  occupancy: string;
  timeLeft: string;
  reservedBy: string;
}

interface RoomTableProps {
  rooms: Room[];
}

const RoomTable: React.FC<RoomTableProps> = ({ rooms }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Name</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Occupancy</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Left</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reserved By</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rooms.map((room, index) => (
          <tr key={index}>
            {/* Make Room Name clickable */}
            <td className="px-6 py-4 whitespace-nowrap">
              <Link legacyBehavior href={`/pages/room_page/${room.name}`} passHref>
                <a className="text-blue-500 hover:underline">{room.name}</a>
              </Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{room.status}</td>
            <td className="px-6 py-4 whitespace-nowrap">{room.occupancy}</td>
            <td className="px-6 py-4 whitespace-nowrap">{room.timeLeft}</td>
            <td className="px-6 py-4 whitespace-nowrap">{room.reservedBy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoomTable;