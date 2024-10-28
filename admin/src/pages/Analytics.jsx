// src/components/Analytics.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { backendUrl } from '../App';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './AuthContext';

// Chart.js imports
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  const { token } = useAuth();
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAnalyticsData = async () => {
    if (!token) {
      toast.error("User is not authenticated.");
      return;
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        const orders = response.data.orders;
        processMonthlyData(orders);
      } else {
        toast.error(response.data.message || "Failed to fetch orders.");
      }
    } catch (error) {
      console.error("Error fetching analytics data:", error);
      toast.error("An error occurred while fetching analytics data.");
    } finally {
      setLoading(false);
    }
  };

  const processMonthlyData = (orders) => {
    const monthlyTotals = {};
    orders.forEach((order) => {
      const month = new Date(order.date).toLocaleString('default', { month: 'long' });
      if (!monthlyTotals[month]) {
        monthlyTotals[month] = 0;
      }
      monthlyTotals[month] += order.amount;
    });
    setMonthlyData(Object.entries(monthlyTotals).map(([month, total]) => ({ month, total })));
  };

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const data = {
    labels: monthlyData.map((data) => data.month),
    datasets: [
      {
        label: 'Total Sales',
        data: monthlyData.map((data) => data.total),
        backgroundColor: 'rgba(75, 192, 192, 0.7)', // Cool color gradient for bars
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.9)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#4B5563',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      title: {
        display: true,
        text: 'Monthly Sales Analysis',
        color: '#111827',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => `Sales: $${tooltipItem.raw}`,
        },
      },
    },
    animation: {
      duration: 1500,
    },
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center">
      <ToastContainer />
      <div className="w-full max-w-4xl">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          Monthly Sales Analytics
        </h3>
        <div className="bg-white p-10 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105">
          {loading ? (
            <p className="text-center text-gray-500 text-lg font-medium">Loading data...</p>
          ) : monthlyData.length > 0 ? (
            <Bar data={data} options={options} />
          ) : (
            <p className="text-center text-gray-500 text-lg font-medium">
              No data available for analytics
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
