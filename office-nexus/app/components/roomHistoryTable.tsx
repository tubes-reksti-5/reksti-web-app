import React from 'react';
import Link from 'next/link';

interface RoomHistory {
  bookingName: string;
  date: string;
  startTime: string;
  endTime: string;
  reservedBy: string;
}

interface RoomHistoryTableProps {
  rooms: RoomHistory[];
}

const RoomHistoryTable: React.FC<RoomHistoryTableProps> = ({ rooms }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking Name</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Time</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Time</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reserved By</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rooms.map((room, index) => (
          <tr key={index}>
            {/* Make Room Name clickable */}
            <td className="px-6 py-4 whitespace-nowrap">{room.bookingName}</td>
            <td className="px-6 py-4 whitespace-nowrap">{room.date}</td>
            <td className="px-6 py-4 whitespace-nowrap">{room.startTime}</td>
            <td className="px-6 py-4 whitespace-nowrap">{room.endTime}</td>
            <td className="px-6 py-4 whitespace-nowrap">{room.reservedBy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoomHistoryTable;