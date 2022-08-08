import { Routes, Route } from 'react-router-dom';

import PageWrapper from 'components/PageWrapper';
import { ROUTES } from 'constants/routes';
import AddressRegister from 'pages/AddressRegister';
import AddProduct from 'pages/AddProduct';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path={ROUTES.ADDRESS.ROOT}>
          <Route path={ROUTES.ADDRESS.REGISTER} element={<AddressRegister />} />
        </Route>

        <Route path={ROUTES.PRODUCT.ROOT}>
          <Route path={ROUTES.PRODUCT.REGISTER} element={<AddProduct />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
