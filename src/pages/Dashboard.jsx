import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/your-endpoint'); // API endpointini değiştir
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div style={{ padding: '20px' }}>
        <h1>Dashboard</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li> // Burada verilerini uygun bir şekilde göster
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;

  