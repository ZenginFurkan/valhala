import React from "react";

export default function PersonalInformation() {
  return (
    <div>
      <h2>Kişisel Bilgiler</h2>
      <form>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="mb-3" style={{ flex: 1, marginRight: "10px" }}>
            <label className="form-label">Ad</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3" style={{ flex: 1, marginRight: "10px" }}>
            <label className="form-label">Soyad</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3" style={{ flex: 1, marginRight: "10px" }}>
            <label className="form-label">TCKN</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3" style={{ flex: 1 }}>
            <label className="form-label">Üyelik Tarihi</label>
            <input type="date" className="form-control" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="mb-3" style={{ flex: 1, marginRight: "10px" }}>
            <label className="form-label">E-Posta</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3" style={{ flex: 1, marginRight: "10px" }}>
            <label className="form-label">Cep Telefonu</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3" style={{ flex: 1 }}>
            <label className="form-label">İletişim Tercihi</label>
            <div style={{ display: "flex" }}>
              <div className="form-check" style={{ marginRight: "10px" }}>
                <input className="form-check-input" type="checkbox" id="sms" />
                <label className="form-check-label" htmlFor="sms">
                  SMS
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="email"
                />
                <label className="form-check-label" htmlFor="email">
                  E-Posta
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
