import './App.css';
import data from "./data.json";
import { Bar } from 'react-chartjs-2';
import {chart as chartJS} from "chart.js/auto";
import {FaCircle} from "react-icons/fa";
import {BsCircle} from "react-icons/bs"



function App() {

var date = data.map((elem)=> {
   return elem.day;
 })
var value = data.map((digit)=>{
  return digit.amount;
})
 var state = {
  labels:date,
  datasets: [
    {
     
      backgroundColor: ['hsl(10, 79%, 65%)',
                        'hsl(10, 79%, 65%)',
                        'hsl(186, 34%, 60%)',
                        'hsl(10, 79%, 65%)',
                        'hsl(10, 79%, 65%)',
                        'hsl(10, 79%, 65%)',
                        'hsl(10, 79%, 65%)'
                        ],
      borderRadius: 5,
      data: value
    }
  ]
}

 return (
  <div className="bg-red-100 py-20 w-full h-full m-0 p-0 ">
    <div className="w-10/12 h-9/12 sm:w-1/3 h-11/12 md:w-1/3 h-full mx-auto my-12 ">
      <div className="bg-red-400 rounded-lg py-4 mb-4" >
        <h1 className="text-xs ml-5 -mt-1 text-white ">My balance</h1>
        <p className="ml-5 text-white font-bold pb-2">$921.48</p>
        <div className=" flex items-start flex-row-reverse -mt-10 pr-8">
          <FaCircle size="1.5rem" className="-ml-2.5" />
          <BsCircle size="1.5rem" color="white" className="" />
          <p></p>
        </div>
      </div>
      <div className="mb-6 rounded-lg p-7 bg-white">
       <p className="ml-6 text-xl font-bold" >Spendings - Last 7 days</p>
      <div className="" >
      <Bar
        className=""
          data={state}
          options={{
            title:{
              display:false,
            },
             plugins: {
                legend: {
                  display: false
                }
              },
            scales: {
              x: {
                grid: {
                  display: false
                }
              },
              y: {
                display:false,
                grid: {
                  display: false
                }
              }
            },
          }}
        />
        </div>
      <div className="">
        <span className="text-xs">Total this month</span>
        <p className="text-xl font-bold">$478.33</p>
        </div>
        <div className="text-right -mt-5">
        <span className="text-xs font-semibold">+2.4%</span>
        <p className="text-xs">from last month</p>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
