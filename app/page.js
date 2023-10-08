import Cards from './(components)/Card/card'
import BarChart from './(components)/barchart/chart'
import Chart from './(components)/barchart/chart/chart'
export default function Home() {
  return (
    <>
   <h1 className='text-3xl ml-[40%] p-2'>USER HISTORY</h1>
    <span className='float-right pr-52 py-[100px] w-[70%]'>
    
    <Cards/>
    <span className=''>
    <BarChart />
    </span>
    <span className='mr-[50px]'>
    <Chart />
    </span>
    
  
    </span>
  
    </>
  )
}
