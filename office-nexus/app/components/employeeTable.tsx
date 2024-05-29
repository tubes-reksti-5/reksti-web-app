import React from 'react';
import Link from 'next/link';

interface Employee {
  employeeName: string;
  status: string;
  checkIn: string;
  checkOut: string;
  location: string;
}

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check In</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check Out</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {employees.map((employee, index) => (
          <tr key={index}>
            {/* Make Room Name clickable */}
            <td className="px-6 py-4 whitespace-nowrap">
              <Link legacyBehavior href={`/pages/employee_page/${employee.employeeName}`} passHref>
                <a className="text-blue-500 hover:underline">{employee.employeeName}</a>
              </Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{employee.status}</td>
            <td className="px-6 py-4 whitespace-nowrap">{employee.checkIn}</td>
            <td className="px-6 py-4 whitespace-nowrap">{employee.checkOut}</td>
            <td className="px-6 py-4 whitespace-nowrap">{employee.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;