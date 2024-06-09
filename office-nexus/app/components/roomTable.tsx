import React from 'react';
import Link from 'next/link';

interface Room {
  number: string;
  floor: string;
  name: string;
  type: string;
  capacity: string;
}

interface RoomTableProps {
  rooms: Room[];
}

const RoomTable: React.FC<RoomTableProps> = ({ rooms }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Number</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Floor</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Name</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Type</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rooms.map((room, index) => (
          <tr key={index}>
            {/* Make Room Name clickable */}
            <td className="px-6 py-4 whitespace-nowrap">
              <Link legacyBehavior href={`/pages/room_page/${room.number}`} passHref>
                <a className="text-blue-500 hover:underline">{room.number}</a>
              </Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{room.floor}</td>
            <td className="px-6 py-4 whitespace-nowrap">{room.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{room.type}</td>
            <td className="px-6 py-4 whitespace-nowrap">{room.capacity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoomTable;