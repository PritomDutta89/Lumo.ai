import React, { useEffect, useState } from 'react'
import { dummyCreationData } from '../assets/assets';

const Dashboard = () => {
  const [creations, setCreations] = useState([]);

  const getDashboardData = ()=>{
    setCreations(dummyCreationData);
  }

  useEffect(()=>{
    getDashboardData();
  }, []);

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard