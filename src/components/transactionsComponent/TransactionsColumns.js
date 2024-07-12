const columns = [   
    {
      field: "islemNo",
      header: "İşlem No",
      sortable: false,
      style: { width: "12%" }, 
    },
    {
      field: "tarih",
      header: "Tarih",
      sortable: true,
      style: { width: "12%" },
    },
    {
      field: "saat",
      header: "Saat",
      sortable: true,
      style: { width: "12%" },
    },
    {
      field: "durum",
      header: "Durum",
      sortable: false,
      style: { width: "12%" },
    },
    {
      field: "tuketilenEnerji",
      header: "Tüketilen Enerji",
      sortable: false,
      style: { width: "12%" },
    },
    {
      field: "kullaniciTCKN",
      header: "Kullanıcı TCKN",
      sortable: false,
      style: { width: "12%" },
    },
    {
      field: "istasyon",
      header: "İstasyon",
      sortable: false,
      style: { width: "12%" },
    },
    {
      field: "plaka",
      header: "Plaka",
      sortable: false,
      style: { width: "12%" },
    },
];

export default columns;