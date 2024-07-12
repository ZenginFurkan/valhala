import React, { useEffect } from 'react'
import DataTableComponent from '../dataTable/DataTableComponent'
import { useDispatch, useSelector } from 'react-redux';
import {fetchTransactions} from '../../redux/transactionsSlice/TransactionsSlice'
import columns from './TransactionsColumns'
export default function TransactionsComponent() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.items);
  console.log(transactions)
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);
  return (
    <div>
      <DataTableComponent
      data={transactions}
      columns={columns}
      isAddOpen={false}
      globalFilterKey="firstName"
       onFilter={(value) => console.log("Filtering with", value)}
       onExport={() => console.log("Exporting data")}
      />
    </div>
  )
}
