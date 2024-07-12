const columns = [
    {
      field: "firstName",
      header: "Firma Adı",
      body: (rowData) => `${rowData.firmaAdi}`,
      sortable: true,
      style: { width: "12%" },
    },
    {
      field: "lastName",
      header: "Anlaşma Durumu",
      body: (rowData) => `${rowData.anlaşmaDurumu}`,
      sortable: true,
      style: { width: "12%" },
    },
    {
      field: "tckn",
      header: "AC Birim Fiyat",
      body: (rowData) => `${rowData.acBirimFiyat}`,
      style: { width: "12%" },
    },
    {
      field: "membershipDate",
      header: "DC Birim Fiyat",
      body: (rowData) => `${rowData.dcBirimFiyat}`,
      sortable: true,
      style: { width: "12%" },
    },
  ];

  export default columns;

