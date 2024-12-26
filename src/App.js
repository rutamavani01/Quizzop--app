import logo from './logo.svg';
import './App.css';
import AppRoutes from './Routes/Routes';
import './css/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-h-screen flex flex-col content-between'>
      <div className='flex-1'>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;