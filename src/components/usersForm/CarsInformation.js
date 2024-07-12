import React from "react";
import SmallGreenButton from "../buttons/SmallGreenButton";
import WhiteButton from "../buttons/WhiteButton";
export default function CarsInformation() {
  return (
    <div>
      <h3>Araç Bilgileri</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Araç Sayısı</label>
          <select className="form-select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">1. Araç</label>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: 1, marginRight: "10px" }}>
              <input type="text" className="form-select" />
            </div>
            <div style={{ flex: 1 }}>
              <input type="text" className="form-select" />
            </div>
          </div>
          <div className="mb-3 mt-2">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">2. Araç</label>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: 1, marginRight: "10px" }}>
              <input type="text" className="form-select" />
            </div>
            <div style={{ flex: 1 }}>
              <input type="text" className="form-select" />
            </div>
          </div>
          <div className="mb-3 mt-3 ">
            <input type="text" className="form-control" />
          </div>
          <div className="d-flex" style={{ width: "10px" }}>
            <WhiteButton label={"Iptal"} />
            <SmallGreenButton label={"Kaydet"} />
          </div>
        </div>
      </form>
    </div>
  );
}
