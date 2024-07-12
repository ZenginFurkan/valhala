import React from "react";
import img1 from "../assets/fill.png";
import img2 from "../assets/fill2.png";
import img3 from "../assets/Vector.png";
import { PieChart } from "@mui/x-charts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function HomeComponent() {
  const cards = [
    {
      id: 1,
      img: img1,
      bgColor: "#E8F4EA",
      text1: "Bugün alınan toplam enerji",
      text2: "150.000 kWh",
    },
    {
      id: 2,
      img: img2,
      bgColor: "#FCE8D1",
      text1: "Bugün üye olan kullanıcılar",
      text2: "300 kişi",
    },
    {
      id: 3,
      img: img3,
      bgColor: "#DCF4F3",
      text1: "Bugün kullanılan enerji",
      text2: "100.000 kWh",
    },
  ];

  return (
    <>
      <div
        className="container mt-4"
        style={{ marginLeft: "30px", marginTop: "60px" }}
      >
        <div className="row">
          {cards.map((card, index) => (
            <div key={card.id} className="col-md-4 d-flex  mb-3">
              <div
                className="card border-0"
                style={{
                  width: "400px",
                  height: "120px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="row no-gutters ">
                  <div className="col-md-4">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        height: "72px",
                        width: "72px",
                        backgroundColor: card.bgColor,
                        marginTop: "25px",
                        marginLeft: "30px",
                      }}
                    >
                      <img
                        src={card.img}
                        alt="Image"
                        className="rounded-circle"
                        style={{ height: "52px", width: "52px" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body d-flex flex-column justify-content-center">
                      <h5 className="card-title">{card.text1}</h5>
                      <p className="card-text">{card.text2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Anlaşmalı" },
                { id: 1, value: 15, label: "Anlaşmasız" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
   
      </div>
    </>
  );
}
