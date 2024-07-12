import React, { useEffect } from 'react'
import DataTable from '../dataTable/DataTableComponent'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCars } from '../../redux/carsSlice/CarsSlice'
import columns from './CarsColumns'
export default function CarsComponent() {
  const dispatch = useDispatch()
  const cars = useSelector((state) => state.cars.items)
  const status = useSelector((state) => state.cars.status)
  useEffect(()=>{
    dispatch(fetchCars());
  },[dispatch])


  if (status === "loading") {
    return <div>Loading...</div>;
  }
  
  if (status === "failed") {
    return <div>Error</div>;
  }


  console.log(cars)
  return (
    <div>
     <DataTable
       columns={columns}
       isAddOpen={true}
       data={cars}
       globalFilterKey="firstName"
       onFilter={(value) => console.log("Filtering with", value)}
       onExport={() => console.log("Exporting data")}
       />
    </div>
  )
}
