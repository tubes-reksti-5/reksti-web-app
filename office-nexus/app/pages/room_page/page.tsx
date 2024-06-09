"use client"
import Image from "next/image";
import PercentageWheel from "../../components/percentageWheel";
import RoomTable from "../../components/roomTable";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 
export default function Rooms() {
  // router
  const router = useRouter();

  // State to hold room data
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('/api/room');
        const data = await response.json();
        
        // Log the data to verify its structure
        console.log("Fetched data:", data);
        
        // Map the fetched data to the expected structure
        const formattedRooms = data.data.map((room: any) => ({
          number: room.room_number,      
          floor: room.room_floor,
          type: room.room_type,
          capacity: room.room_capacity,
          name: room.room_name
        }));
        
        setRooms(formattedRooms);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      }
    };
  
    fetchRooms();
  }, []);

  
  // State buat add room
  const [roomNumber, setRoomNumber] = useState("");
  const [roomFloor, setRoomFloor] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [capacity, setCapacity] = useState("");
  

  const handleAddRoom = async () => {
    const newRoom = {
      room_number: roomNumber,
      room_floor: roomFloor,
      room_name: roomName,
      room_type: roomType,
      room_capacity: capacity,
    };
  
    try {
      const response = await fetch('/api/room', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRoom),
      });
  
      if (response.ok) {
        // Clear the form
        setRoomNumber("");
        setRoomFloor("");
        setRoomName("");
        setRoomType("");
        setCapacity("");
        // Refresh the room list
        window.location.reload()
      } else {
        console.error("Failed to add room:", await response.json());
      }
    } catch (error) {
      console.error("Failed to add room:", error);
    }
  };

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
            <h1 className="headline_subtext pl-4 pt-4">Monday, 9 December 2024</h1> 
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
              <h1 className="headline_text mb-2">Room Number & Room Floor</h1>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Enter room number"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={roomNumber} 
                  onChange={(e) => setRoomNumber(e.target.value)} // <-- ADD THIS
                />
                <input
                  type="text"
                  placeholder="Enter room floor"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={roomFloor} // <-- ADD THIS
                  onChange={(e) => setRoomFloor(e.target.value)} // <-- ADD THIS
                />
                <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
                onClick={handleAddRoom}>
                  Add
                </button>
              </div>
            </div>

            {/* Bottom Div */}
            <div className="flex space-x-2 pr-2">
              <div className="flex flex-col w-1/3">
                <label className="text-gray-700 mb-1">Room Name</label>
                <input
                  type="text"
                  placeholder="Enter room name"
                  className="border border-gray-300 rounded-md p-2"
                  value={roomName} 
                  onChange={(e) => setRoomName(e.target.value)} 
                />

              </div>
              <div className="flex flex-col w-1/3">
                <label className="text-gray-700 mb-1">Room Type</label>
                <input
                  type="text"
                  placeholder="Enter room type"
                  className="border border-gray-300 rounded-md p-2"
                  value={roomType} 
                  onChange={(e) => setRoomType(e.target.value)} 
                />
              </div>

              <div className="flex flex-col w-1/3">
                <label className="text-gray-700 mb-1">Capacity</label>
                <input
                  type="number"
                  placeholder="Capacity"
                  className="border border-gray-300 rounded-md p-2"
                  value={capacity} 
                  onChange={(e) => setCapacity(e.target.value)}
                />
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
