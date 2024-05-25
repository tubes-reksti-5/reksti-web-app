import Image from "next/image";
import PercentageWheel from "../components/percentageWheel";

export default function Rooms() {
  return (
  <div className="flex h-screen bg-lighter_gray">
    {/* Left Div */}
    <div className="w-1/5 bg-white flex flex-col m-8 rounded-lg">
      {/* Content of the Left Div */}
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
        <div className="w-2/5 bg-white  rounded-lg ml-3">
          {/* Content of the Right Side of Recap Div */}
          <h1 className="headline_text ">Hello World</h1>
        </div>
      </div>
      
      {/* Room List Div */}
      <h2 className="headline_text ml-8">Rooms</h2>
      <div className="h-4/6 bg-white  rounded-lg m-8 mt-4">
        {/* Content of the Room List Div */}
        <h1 className="headline_text">Hello World</h1>
      </div>
    </div>
  </div>
);
}
