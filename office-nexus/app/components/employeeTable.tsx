import React from 'react';
import Link from 'next/link';

interface Employee {
  user_id: number;
  fullName: string;
  division: string;
  location: string;
  status: string;

}
interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee ID</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Division</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {employees.map((employee, index) => (
          <tr key={index}>
            {/* Make Room Name clickable */}
            <td className="px-6 py-4 whitespace-nowrap">
              <Link legacyBehavior href={`/pages/employee_page/${employee.user_id}`} passHref>
                <a className="text-blue-500 hover:underline">{employee.user_id}</a>
              </Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{employee.fullName}</td>
            <td className="px-6 py-4 whitespace-nowrap">{employee.division}</td>
            <td className="px-6 py-4 whitespace-nowrap">{employee.location}</td>
            <td className="px-6 py-4 whitespace-nowrap">{employee.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;