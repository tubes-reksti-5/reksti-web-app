"use client"
import Image from "next/image";
import PercentageWheel from "../components/percentageWheel";
import RoomTable from "../components/roomTable";
import { useState } from "react";
import Link from "next/link";

export default function Rooms() {
  // Sample room data
  const [rooms, setRooms] = useState([
    {
      name: 'Room 1',
      status: 'Used',
      occupancy: '3/10',
      timeLeft: '1h 30m',
      reservedBy: 'Raditya Azka P.',
    },
    {
      name: 'Room 2',
      status: 'Not Used',
      occupancy: '0/8',
      timeLeft: '-',
      reservedBy: '-',
    },

    {
      name: 'Room 3',
      status: 'Used',
      occupancy: '5/12',
      timeLeft: '1h 00m',
      reservedBy: 'Duke of Sawangan',
    },

    {
      name: 'Room 4',
      status: 'Used',
      occupancy: '4/4',
      timeLeft: '1h 00m',
      reservedBy: 'Palapa Fox',
    },
    
    {
      name: 'Room 5',
      status: 'Not Used',
      occupancy: '0/8',
      timeLeft: '-',
      reservedBy: '-',
    },

    {
      name: 'Room 6',
      status: 'Not Used',
      occupancy: '0/12',
      timeLeft: '-',
      reservedBy: '-',
    },

    {
      name: 'Room 7',
      status: 'Not Used',
      occupancy: '0/10',
      timeLeft: '-',
      reservedBy: '-',
    },
    
  ]);
  return (
  <div className="flex h-screen bg-lighter_gray">
    {/* Left Div */}
    <div className="w-1/5 bg-white flex flex-col m-8 rounded-lg items-center pt-8">
      {/* Rooms Button */}
      <Link href="./room_page/" className="flex items-center justify-start px-4 py-2 text-left mt-4 headline_subtext border border-office_gray rounded-md w-4/5 mb-4 bg-lighter_gray">
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
      <Link href="./employee_page/" className="flex items-center justify-start px-4 py-2 text-left mt-4 headline_subtext border border-office_gray rounded-md w-4/5
                        hover:bg-lighter_gray">
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
        <div className="flex w-4/5 bg-white rounded-lg mr-3">
          {/* Content of the Left Side of Recap Div */}
          {/* Split the div into two: info and percentage wheel */}
          <div className="flex flex-col w-3/5"> 
            <h1 className="headline_subtext pl-2 pt-2">Monday, 9 December 2024</h1> 
            {/* Rooms Used and Rooms Vacant containers */}
            <div className="flex flex-row m-2 mt-4"> 
              {/* Rooms Used */}
              <div className="flex flex-col border border-office_gray w-1/2 h-full rounded-md m-2"> 
                <h2 className="subtext pl-2">Rooms Used</h2>
                <h2 className="subtext pl-2">12</h2>
              </div>

              {/* Rooms Vacant */}
              <div className="flex flex-col border border-office_gray w-1/2 h-full rounded-md m-2"> 
                <h2 className="subtext pl-2 text">Rooms Vacant</h2>
                <h2 className="subtext pl-2">10</h2>
              </div>
            </div>
          </div>

          {/* Percentage wheel */}
          <div className="flex justify-center items-center w-2/5 bg-white">
            <PercentageWheel percentage={75} size={130}/> {/* Provide a value for the percentage prop */}
          </div> 
        </div>

        {/* Add Room Div */}
          <div className="w-2/5 bg-white rounded-lg ml-3 p-4 pt-0 flex flex-col justify-between">
            {/* Top Div */}
            <div className="mb-4">
              <h1 className="headline_text mb-2">Room Name</h1>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Enter room name"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
                  Add
                </button>
              </div>
            </div>

            {/* Bottom Div */}
            <div className="flex space-x-2">
              <div className="flex flex-col w-1/2">
                <label className="text-gray-700 mb-1">Capacity</label>
                <input
                  type="number"
                  placeholder="Capacity"
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-gray-700 mb-1">RFID Sensor</label>
                <select className="border border-gray-300 rounded-md p-2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>

      </div>
      
      {/* Room List Div */}
      <h2 className="headline_text ml-8">Rooms</h2>
        <div className="h-4/6 bg-white rounded-lg m-8 mt-4 p-4 overflow-y-auto">
          <RoomTable rooms={rooms} />
        </div>

    </div>
  </div>
);
}
