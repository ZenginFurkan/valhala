import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import WhiteButton from "../buttons/WhiteButton";
import "../../index.css";
import UsersModal from "../modals/UsersModal";
import { Button } from "primereact/button";
import { Checkbox } from "@mui/material";
import CarsModal from "../modals/CarsModal";

const DataTableComponent = ({
  columns,
  data,
  globalFilterKey,
  onFilter,
  onExport,
  customActions,
  isAddOpen = false,
  pageType,
}) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isCarsModalOpen, setIsCarsModalOpen] = useState(false);

  const toggleUserModal = () => {
    setIsUserModalOpen(!isUserModalOpen);
  };

  const toggleCarsModal = () => {
    setIsCarsModalOpen(!isCarsModalOpen);
  };

  const handleGlobalFilterChange = (e) => {
    setGlobalFilter(e.target.value);
    if (onFilter) onFilter(e.target.value);
  };

  const editButtonTemplate = () => {
    return (
      <Button
        variant="light"
        className="p-button-rounded p-button-outlined editButtonTemplate"
        onClick={pageType === "users" ? toggleUserModal : toggleCarsModal}
      >
        <i className="pi pi-pencil" style={{ fontSize: "1rem" }}></i>
      </Button>
    );
  };

  const verifiedBodyTemplate = (rowData) => {
    return (
      <Checkbox
        checked={rowData.verified}
        onChange={() => handleVerifyChange(rowData)}
      />
    );
  };

  const handleVerifyChange = (rowData) => {
    // Implement your logic to handle verification change
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
      <div className="card m-4 ">
        <div className="d-flex justify-content-between align-items-center mb-3 p-3">
          <div className="search-container">
            <input
              type="text"
              className="form-control"
              placeholder="Ara..."
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
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
          globalFilter={globalFilterKey ? globalFilterKey : globalFilter}
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
      {pageType === "users" ? (
        <UsersModal isOpen={isUserModalOpen} toggle={toggleUserModal} />
      ) : (
        <CarsModal isOpen={isCarsModalOpen} toggle={toggleCarsModal} />
      )}
    </>
  );
};

export default DataTableComponent;
