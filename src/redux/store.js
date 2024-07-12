import { configureStore } from "@reduxjs/toolkit";
import customersReducer from "./customerSlice/CustomerSlice";
import companiesReducer from "./companiesSlice/CompaniesSlice";
import carsReduces from "./carsSlice/CarsSlice";
import transactionsReducer from "./transactionsSlice/TransactionsSlice";
const store = configureStore({
  reducer: {
    customers: customersReducer,
    companies: companiesReducer,
    cars: carsReduces,
    transactions: transactionsReducer,
  },
});

export default store;
