import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.css';
import { useAppDispatch } from './providers/StoreProvider/config/store';
import { useEffect } from 'react';
import { userActions } from 'entities/User';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
