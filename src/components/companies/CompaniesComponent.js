import React, { useEffect } from "react";
import DataTableComponent from "../dataTable/DataTableComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "../../redux/companiesSlice/CompaniesSlice";
import columns from "./CompaniesColumns";
export default function CompaniesComponent() {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.items);
  const status = useSelector((state) => state.companies.status);
  console.log(status);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  
  if (status === "failed") {
    return <div>Error</div>;
  }

  return (
    <div>
      {companies && (
        <DataTableComponent
          columns={columns}
          isAddOpen={true}
          data={companies}
          globalFilterKey="firstName"
          onFilter={(value) => console.log("Filtering with", value)}
          onExport={() => console.log("Exporting data")}
        />
      )}
    </div>
  );
}
