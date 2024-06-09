"use client"
import Image from "next/image";
import EmployeeTable from "@/app/components/employeeTable";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 

export default function Employees() {
  // router
  const router = useRouter();

  // State to hold employee data
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employee data when the component mounts
    const fetchEmployees = async () => {
      try {
        const response = await fetch("/api/employee");
        const data = await response.json();
        // logging the data
        console.log("Fetched data:", data);

        // Map the fetched data into the table format
        const formattedEmployees = data.employees.map((employee: any) => ({
          user_id: employee.user_id,
          fullName: employee.full_name,
          division: employee.employee_division,
          location: employee.location,
          status: employee.status,
        }));

        setEmployees(formattedEmployees)
      } catch (error) {
        console.error("Failed to fetch employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  // State to hold input values
  const [employeeID, setEmployeeID] = useState("");
  const [fullName, setFullName] = useState("");
  const [division, setDivision] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  // Function to handle form submission
  const handleAddEmployee = async () => {
    const newEmployee = {
      user_id: employeeID,
      employee_division: division,
      location: location,
      status: status,
    };

    try {
      const response = await fetch('/api/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
      });

      if (response.ok) {
        // Clear the form
        setEmployeeID("");
        setFullName("");
        setDivision("");
        setLocation("");
        setStatus("");
        // Refresh the employee list
        window.location.reload()
      } else {
        console.error("Failed to add employee:", await response.json());
      }
    } catch (error) {
      console.error("Failed to add employee:", error);
    }
  };


  return (
    <div className="flex h-screen bg-lighter_gray">
      {/* Left Div */}
      <div className="w-1/5 bg-white flex flex-col m-8 rounded-lg items-center pt-8">
        {/* Rooms Button */}
        <Link href="/pages/room_page" className="flex items-center justify-start px-4 py-2 text-left mt-4 headline_subtext border border-office_gray rounded-md w-4/5 mb-4 bg-white hover:bg-lighter_gray">
          <Image
            src="/assets/grid1.png"
            alt="Grid"
            width={30}
            height={30}
            className="object-contain align-left mr-2"
          />
          Rooms
        </Link>

        {/* Employees Button */}
        <Link href="/pages/employee_page" className="flex items-center justify-start px-4 py-2 text-left mt-4 headline_subtext border border-office_gray rounded-md w-4/5 bg-lighter_gray">
          <Image
            src="/assets/users.png"
            alt="Grid"
            width={30}
            height={30}
            className="object-contain align-left mr-2"
          />
          Employees
        </Link>

        {/* Admin Text */}
        <div className="flex justify-left mt-auto w-4/5 items-center">
          <Image
            src="/assets/thumb_logo.png"
            alt="Grid"
            width={40}
            height={40}
            className="object-contain align-left mr-2 mb-2"
          />
          <h1 className="mb-4 text-sm headline_subtext">Admin 1</h1>
        </div>
      </div>

      {/* Right Div */}
      <div className="w-4/5 bg-lighter_gray flex flex-col">
        {/* Recap Div */}
        <div className="h-2/6 bg-lighter_gray flex m-8 mb-0">
          {/* Date and Recap Div */}
          <div className="flex w-2/5 bg-white rounded-lg mr-3 p-4"> {/* Added padding here */}
            {/* Content of the Left Side of Recap Div */}
            <div className="flex flex-col items-center w-full">
              <h1 className="headline_subtext pl-2 pt-2">Monday, 9 December 2024</h1>
              {/* TotalEmployees and Present Employees Container*/}
              <div className="flex flex-row m-2 mt-4 w-full  space-x-2">
                {/* Total Employees */}
                <div className="flex flex-col border border-office_gray flex-grow h-full rounded-md p-2">
                  <h2 className="subtext">Employee</h2>
                  <h2 className="subtext">60</h2>
                </div>

                {/* Present Employees */}
                <div className="flex flex-col border border-office_gray flex-grow h-full rounded-md p-2">
                  <h2 className="subtext">Present</h2>
                  <h2 className="subtext">28</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Add Employee Div */}
          <div className="w-3/5 bg-white rounded-lg ml-3 p-4 pt-0 flex flex-col justify-between">
            {/* Top Div */}
            <div className="mb-4 flex flex-col md:flex-row">
              <div className="mr-2 flex-grow">
                {/* Changed width class from w-1/2 to flex-grow */}
                <h1 className="headline_subtext mb-2">Employee ID</h1>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Enter Employee ID"
                    className="border border-gray-300 rounded-md p-2 w-full"
                    value={employeeID}
                    onChange={(e) => setEmployeeID(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex-grow">
                {/* Changed width class from w-1/2 to flex-grow */}
                <h1 className="headline_subtext mb-2">Division</h1>
                <div className="flex items-center space-x-2"> 
                  <input
                    type="text"
                    placeholder="Division"
                    className="border border-gray-300 rounded-md p-2"
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Div */}
            <div className="flex space-x-2">
              <div className="flex flex-col w-1/3">
                <label className="text-gray-700 mb-1 headline_subtext">Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  className="border border-gray-300 rounded-md p-2"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-1/3">
                <label className="text-gray-700 mb-1 headline_subtext">Status</label>
                <input
                  type="text"
                  placeholder="Current Status"
                  className="border border-gray-300 rounded-md p-2"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 w-1/3 h-1/2 mt-10"
              onClick={handleAddEmployee}>
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Employee List Div */}
        <h2 className="headline_text ml-8">Employees</h2>
        <div className="h-4/6 bg-white rounded-lg m-8 mt-4 p-4 overflow-y-auto">
          <EmployeeTable employees={employees} />
        </div>
      </div>
    </div>
  );
}