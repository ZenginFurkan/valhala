import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../redux/customerSlice/CustomerSlice";
import { Button } from "primereact/button";
import { Checkbox } from "@mui/material";
import UsersModal from "../modals/UsersModal";
import WhiteButton from "../buttons/WhiteButton";



export default function UsersComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomers()).then((item) => {
      console.log(item);
    })
  }, [dispatch]);

  const {
    items: customers,
    status,
    error,
  } = useSelector((state) => state.customers);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const handleVerifyChange = (rowData) => {
    // Implement your logic to handle verification change
    console.log(`Verification status changed for ${rowData.firstName}`);
  };

  const verifiedBodyTemplate = (rowData) => {
    return (
      <Checkbox
        checked={rowData.verified}
        onChange={() => handleVerifyChange(rowData)}
      />
    );
  };

  const editButtonTemplate = () => {
    return (
      <Button
        variant="light"
        className="p-button-rounded p-button-outlined"
        style={{ border: "none", color: "#9E9E9E" }}
        onClick={toggleModal}
      >
        <i className="pi pi-pencil" style={{ fontSize: "1rem" }}></i>
      </Button>
    );
  };

  return (
    <>
      <div className="card  m-4 ">
        <div className="d-flex justify-content-between align-items-center mb-3 p-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ara..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            style={{ maxWidth: "300px" }}
          />
          <div className="d-flex " >
            <WhiteButton label={'FİLTRE'}  />
            <WhiteButton label={'DIŞA AKTAR'}  />
          </div>
        </div>
        <DataTable
          value={customers}
          sortMode="multiple"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem"}}
          globalFilter={globalFilter}
          className="custom-datatable "
        >
          <Column
            header={verifiedBodyTemplate}
            body={verifiedBodyTemplate}
            style={{ minWidth: "6rem" }}
          />
          <Column
            header="Ad"
            body={(rowData) => `${rowData.firstName}`}
            sortField="price"
            style={{ width: "12%" }}
            sortable
          />
          <Column
            header="Soyad"
            body={(rowData) => `${rowData.lastName}`}
            style={{ width: "12%" }}
            sortable
          />
          <Column
            header="TCKN"
            body={(rowData) => `${rowData.tckn}`}
            style={{ width: "12%" }}
          />
          <Column
            header="Üyelik Tarihi"
            body={(rowData) => `${rowData.membershipDate}`}
            style={{ width: "12%" }}
            sortable
          />
          <Column
            header="Telefon"
            body={(rowData) => `${rowData.phone}`}
            style={{ width: "12%" }}
          />
          <Column
            header="E-Posta"
            body={(rowData) => `${rowData.email}`}
            style={{ width: "12%" }}
          />
          <Column
            header="Araç Sayısı"
            body={(rowData) => `${rowData.vehicleCount}`}
            style={{ width: "12%" }}
            sortable
          />
          <Column
            header="Plaka"
            body={(rowData) => `${rowData.licensePlate}`}
            style={{ width: "12%" }}
          />
          <Column
             body={editButtonTemplate}
             style={{ textAlign: "center", width: "8rem" }}
             frozen
             alignFrozen="right"
          />
        </DataTable>
      </div>
      <UsersModal isOpen={isOpen}  />
    </>
  );
}
