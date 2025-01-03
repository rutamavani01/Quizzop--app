import logo from './logo.svg';
import './App.css';
import AppRoutes from './Routes/Routes';
import './css/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    getSetting();
  }, []);

  const [settings, setSettings] = useState([]);

  const getSetting = async () => {
    try {
      const response = await axios.get('http://192.168.1.8:8000/api/setting');
      console.log('API Data:', response?.data.Data);
      const transformedData = [{
        id: response.id,
        logo: response.logo,
        title: response.title,
        ...response.themecolor
      }];
      setSettings(transformedData);

    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  };

  return (
    <div className='min-h-screen flex flex-col content-between'>
      <div className='flex-1'>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;