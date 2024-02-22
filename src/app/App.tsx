import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import './styles/index.css';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  return (
    <div className="app">
      <Navbar className="bg-white" />
      <div className="flex">
        <Sidebar />
        <div className='container'>
          <AppRouter />
        </div>
      </div>
    </div>
  );
};

export default App;
