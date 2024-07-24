import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import WhiteButton from "../buttons/WhiteButton";
import UsersModal from "../modals/UsersModal";
import CarsModal from "../modals/CarsModal";
import CompaniesModal from "../modals/CompaniesModal";
import { Button } from "primereact/button";
import { Checkbox } from "@mui/material";
import "../../index.css";
import { toggleUserModal } from "../../service/Utilities";

const DataTableComponent = ({
  columns,
  data,
  globalFilterKey,
  onFilter,
  onExport,
  customActions,
  isAddOpen = false,
}) => {
  const [globalFilter, setGlobalFilter] = useState("3");
  const [modals, setModals] = useState({
    users: false,
    cars: false,
    companies: false,
  });
  toggleUserModal(globalFilter, modals);
  const toggleModal = (type) => {
    setModals((prevModals) => ({ ...prevModals, [type]: !prevModals[type] }));
  };

  const handleGlobalFilterChange = (e) => {
    const value = e.target.value;
    setGlobalFilter(value);
    if (onFilter) onFilter(value);
  };

  const editButtonTemplate = () => {
    const pageUrl = window.location.pathname;

    const getModalType = () => {
      if (pageUrl.includes("users")) return "users";
      if (pageUrl.includes("cars")) return "cars";
      if (pageUrl.includes("companies")) return "companies";
    };

    return (
      <Button
        variant="light"
        className="p-button-rounded p-button-outlined editButtonTemplate"
        onClick={() => toggleModal(getModalType())}
      >
        <i className="pi pi-pencil" style={{ fontSize: "1rem" }}></i>
      </Button>
    );
  };

  const verifiedBodyTemplate = (rowData) => (
    <Checkbox
      checked={rowData.verified}
      onChange={() => handleVerifyChange(rowData)}
    />
  );

  const handleVerifyChange = (rowData) => {
    // Verification status change logic
    console.log(`Verification status changed for ${rowData.firstName}`);
  };

  if (!data || data.length === 0) {
    return (
      <div className="card">
        <p style={{ padding: "1rem", textAlign: "center" }}>Veri bulunamadı.</p>
      </div>
    );
  }

  return (
    <>
      <div className="card m-4">
        <div className="d-flex justify-content-between align-items-center mb-3 p-3">
          <div className="search-container">
            <input
              type="text"
              className="form-control"
              placeholder="Ara..."
              value={globalFilter}
              onChange={handleGlobalFilterChange}
              style={{ maxWidth: "300px" }}
            />
          </div>
          <div className="d-flex gap-2">
            {customActions ? (
              customActions
            ) : (
              <>
                {isAddOpen && (
                  <WhiteButton
                    label={"EKLE"}
                    icon="pi pi-plus"
                    onClick={onFilter}
                  />
                )}
                <WhiteButton
                  label={"FİLTRE"}
                  icon="pi pi-filter"
                  onClick={onFilter}
                />
                <WhiteButton
                  label={"DIŞA AKTAR"}
                  icon="pi pi-filter"
                  onClick={onExport}
                />
              </>
            )}
          </div>
        </div>
        <DataTable
          value={data}
          sortMode="multiple"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
          globalFilter={globalFilterKey || globalFilter}
          className="custom-datatable"
        >
          <Column
            header={verifiedBodyTemplate}
            body={verifiedBodyTemplate}
            style={{ minWidth: "6rem" }}
          />
          {columns.map((col, index) => (
            <Column
              key={index}
              field={col.field}
              header={col.header}
              body={col.body}
              sortable={col.sortable}
              style={col.style}
              editButtonTemplate={col.editButtonTemplate}
            />
          ))}
          <Column
            body={editButtonTemplate}
            style={{ textAlign: "center", width: "8rem" }}
          />
        </DataTable>
      </div>
      <UsersModal isOpen={modals.users} toggle={() => toggleModal("users")} />
      <CarsModal isOpen={modals.cars} toggle={() => toggleModal("cars")} />
      <CompaniesModal isOpen={modals.companies} toggle={() => toggleModal("companies")} />
    </>
  );
};

export default DataTableComponent;
