"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie, Bar, Doughnut } from "react-chartjs-2";
import "./bloodanalysis.css";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function BloodAnalysisPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const target = 200;

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const res = await fetch("/api/blood-analysis");
    const data = await res.json();
    setRows(data.data);
    setTotal(data.total);
  }

  const labels = rows.map(r => r.label);
  const values = rows.map(r => r.count);

  return (
    <>
      <header>
        <div className="logo-section">
          <img
            src="/positive-blood-group-3d-icon-png-download-4897215.webp"
            className="logo-img"
          />
          <div className="logo-text">
            <div className="top">Blood</div>
            <div className="bottom">Donation</div>
          </div>
        </div>

        <div className="header-right">
          <div className="header-title">Blood Analysis</div>
          <Link href="/dashboard" className="home-link">
            Home
            <img src="/home-icon_1076610-21321.avif" />
          </Link>
        </div>
      </header>

      <div className="content">
        <button className="refresh-btn" onClick={loadData}>
          🔄 Refresh Data
        </button>

        <div className="charts-row">
          {/* Pie Chart */}
          <div className="chart-container">
            <h3>Overall Pie Chart</h3>
            <Pie
              data={{
                labels,
                datasets: [
                  {
                    data: values,
                    backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56",
                      "#4CAF50",
                      "#9C27B0",
                      "#FF9800",
                    ],
                  },
                ],
              }}
            />
          </div>

          {/* Bar Chart */}
          <div className="chart-container">
            <h3>Overall Bar Chart</h3>
            <Bar
              data={{
                labels,
                datasets: [
                  {
                    label: "Total Count",
                    data: values,
                    backgroundColor: "#c53e3e",
                  },
                ],
              }}
            />
          </div>

          {/* Card */}
          <div className="chart-container">
            <h3>Entries Summary</h3>
            <div className="card">
              {total} / {target}
            </div>
          </div>

          {/* Donut Chart */}
          <div className="chart-container">
            <h3>Target Completion</h3>
            <Doughnut
              data={{
                labels: ["Completed", "Remaining"],
                datasets: [
                  {
                    data: [
                      Math.min(total, target),
                      Math.max(target - total, 0),
                    ],
                    backgroundColor: ["#4CAF50", "#FF5252"],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
