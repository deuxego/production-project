import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/configs/routerConfig/routeConfig';

const AppRouter = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route path={path} element={element} key={path}/>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
