const columns = [
    {
        field: "Marka",
        header: "Marka",
        body: (rowData) => `${rowData.marka}`,
        sortable: true,
        style: { width: "20%" },
      },
      {
        field: "Model",
        header: "Model",
        body: (rowData) => `${rowData.model}`,
        sortable: true,
        style: { width: "20%" },
      },
      {
        field: "bataryaKapasitesi",
        header: "Batarya Kapasitesi",
        body: (rowData) => `${rowData.bataryaKapasitesi}`,
        sortable: true,
        style: { width: "20%" },
      },
      {
        field: "soketType",
        header: "Soket Tipi",
        body: (rowData) => `${rowData.soketType}`,
        sortable: false,
        style: { width: "20%" },
      },
]
export default columns;