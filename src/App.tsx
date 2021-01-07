import React, { Suspense } from 'react';

import './styles/global.css';

import Loading from './Components/Loading';
const Header = React.lazy(() => import('./Components/UI/Header/'));
const BannerHomePage = React.lazy(() => import('./Components/BannerHomePage'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <BannerHomePage />
    </Suspense>
  )
}

export default App;
