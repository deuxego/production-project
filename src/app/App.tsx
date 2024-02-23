import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.css';

const App = () => {
  return (
    <div className="app">
      <Navbar className="bg-white" />

      <div className="flex">
        <Sidebar />
        <div className="container">
          <AppRouter />
        </div>
      </div>
    </div>
  );
};

export default App;
