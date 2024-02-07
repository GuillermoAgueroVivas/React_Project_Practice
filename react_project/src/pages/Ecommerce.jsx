import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
// import { GrOptimizeDot } from 'react-icons/gr';
import { MdTerrain } from "react-icons/md";
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center bg-gradient-to-r from-cyan-200 to-blue-500'>
          
          {/* This would be a Luffy Gif.*/}
          {/* <img className='justify-right bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-0 pt-0 m-0 bg-no-repeat bg-auto md:bg-contain bg-center bg-[url("https://media4.giphy.com/media/Tgvn82bqJT36lkVqDZ/giphy.gif?cid=ecf05e47ua1622wotzipj2ndb50caojhfxkclrj2z3rr3hke&ep=v1_stickers_search&rid=giphy.gif&ct=s")] bg-opacity-2'>
          </img> */}

          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>
                  $32,566.99
                {/* <span>
                  <img className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-0 pt-0 m-0 bg-no-repeat bg-auto md:bg-contain bg-center bg-[url("https://media4.giphy.com/media/Tgvn82bqJT36lkVqDZ/giphy.gif?cid=ecf05e47ua1622wotzipj2ndb50caojhfxkclrj2z3rr3hke&ep=v1_stickers_search&rid=giphy.gif&ct=s")] bg-opacity-2'>
                  </img>
                </span> */}
              </p>
            </div>
          </div>

          <div className='mt-6'>
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        
        {/* This div here creates all the cards showing up in the ecommerce page for every item inside of the 'earningData' dummy file.*/}
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button 
                type='button' 
                style={{ color: item.iconColor, backgroundColor: item.iconBg }} 
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'  
              >
                  {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* This div right here creates the graph below all the cards above and all its components.*/}
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <MdTerrain/>
                </span>
                <span>
                  Expense
                </span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span>
                  <MdTerrain />
                </span>
                <span>
                  Butget
                </span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              {/* This is for the 'Budget' value on the Page with the green number beside it.*/}
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$165,458</span>
                  <span className='p-1.5 
                  hover:drop-shadow-xl 
                  cursor-pointer 
                  rounded-full 
                  text-white
                  bg-green-400 ml-3 text-xs'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
              </div>
              {/* This is for the Expenses numbers below it */}
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$95,197</span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-5'>
                {/* Here the Sparkline component exported at the top is being used and all the required values it needs to be created are being passed to it as shown below. The component on the other side takes in these values and makes the graph using the 'Syncfusion SparklineComponent'. */}
                <SparkLine 
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              <div className='mt-10'>
                <Button 
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px"
              height="360px"/>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Ecommerce