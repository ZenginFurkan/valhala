import React from "react";
import "../../../index.css"; // Custom styles if needed
import WhiteButton from "../../buttons/WhiteButton";
import SmallGreenButton from "../../buttons/SmallGreenButton";
export default function CarsForm() {
  return (
    <div className="cars-form m-5   bg-white p-4 ">
      <h2>Araç Bilgileri</h2>
      <div className="row mb-3">
        <div className="col">
          <input type="text" className="form-control" placeholder="Audi" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="e-tron" />
        </div>
        <div className="col">
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="customFile" />
            <label className="custom-file-label" htmlFor="customFile">Görsel Yükle</label>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <input type="text" className="form-control" placeholder="73-95" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Css" />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-4">
        <WhiteButton onCLikc={() => {}} className="mr-2" variant="primary" label="İptal"/>
        <SmallGreenButton variant="secondary" label="Kaydet"/>
      </div>
    </div>
  );
}
