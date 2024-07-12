const columns = [
    {
        field: "Marka",
        header: "Marka",
        body: (rowData) => `${rowData.marka}`,
        sortable: true,
        style: { width: "12%" },
      },
      {
        field: "Model",
        header: "Model",
        body: (rowData) => `${rowData.model}`,
        sortable: true,
        style: { width: "12%" },
      },
      {
        field: "bataryaKapasitesi",
        header: "Batarya Kapasitesi",
        body: (rowData) => `${rowData.bataryaKapasitesi}`,
        sortable: true,
        style: { width: "12%" },
      },
      {
        field: "soketType",
        header: "Soket Tipi",
        body: (rowData) => `${rowData.soketType}`,
        sortable: false,
        style: { width: "12%" },
      },
]
export default columns;