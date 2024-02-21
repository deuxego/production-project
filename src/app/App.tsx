import { Link } from 'react-router-dom';
import { AppRouter } from './providers/router';
import './styles/index.css';

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
