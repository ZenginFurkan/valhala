import React from 'react'

export default function BillingInformation() {
  return (
    <div>
        <h3>Fatura Bilgileri</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Fatura Türü</label>
              <div style={{ display: "flex" }}>
                <div className="form-check" style={{ marginRight: "10px" }}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="individual"
                  />
                  <label className="form-check-label" htmlFor="individual">
                    Bireysel
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="corporate"
                  />
                  <label className="form-check-label" htmlFor="corporate">
                    Kurumsal
                  </label>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="mb-3" style={{ flex: 1, marginRight: "10px" }}>
                <label className="form-label">İl</label>
                <input type="text" className="form-select" list="cities" />
                <datalist id="cities">
                  <option value="İstanbul" />
                  <option value="Ankara" />
                  <option value="İzmir" />
                </datalist>
              </div>
              <div className="mb-3" style={{ flex: 1 }}>
                <label className="form-label">İlçe</label>
                <input type="text" className="form-select" />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="mb-3" style={{ flex: 1, marginRight: "10px" }}>
                <label className="form-label">Mahalle</label>
                <input type="text" className="form-select" />
              </div>
              <div className="mb-3" style={{ flex: 1 }}>
                <label className="form-label">Posta Kodu</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Adres</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">TCKN</label>
              <input type="text" className="form-control" />
            </div>
          </form>
    </div>
  )
}
