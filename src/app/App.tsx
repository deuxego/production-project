import { Link } from 'react-router-dom';
import './styles/index.css';
import { AppRouter } from './providers/router';

const App = () => {

  return (
    <div className="app">
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </div>

      <AppRouter />
    </div>
  );
};

export default App;
