import React from 'react';
import Link from 'next/link';

interface EmployeeHistory {
  location: string;
  checkIn: string;
  checkOut: string;
}

interface EmployeeHistoryTableProps {
  employeeHistories: EmployeeHistory[];
}

const EmployeeHistoryTable: React.FC<EmployeeHistoryTableProps> = ({ employeeHistories}) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check In</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check Out</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {employeeHistories.map((employeeHistory, index) => (
          <tr key={index}>
            {/* Make Room Name clickable */}
            <td className="px-6 py-4 whitespace-nowrap">{employeeHistory.location}</td>
            <td className="px-6 py-4 whitespace-nowrap">{employeeHistory.checkIn}</td>
            <td className="px-6 py-4 whitespace-nowrap">{employeeHistory.checkOut}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeHistoryTable;