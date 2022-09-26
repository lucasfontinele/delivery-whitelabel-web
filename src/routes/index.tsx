import { Routes, Route } from 'react-router-dom';

import PageWrapper from 'components/PageWrapper';

import AddressRegister from 'pages/AddressRegister';
import AddProduct from 'pages/AddProduct';
import Offers from 'pages/Offers';
import Checkout from 'pages/Checkout';

import { ROUTES } from 'constants/routes';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path={ROUTES.ADDRESS.ROOT}>
          <Route path={ROUTES.ADDRESS.REGISTER} element={<AddressRegister />} />
        </Route>

        <Route path={ROUTES.PRODUCT.ROOT}>
          <Route path={ROUTES.PRODUCT.ROOT} element={<Offers />} />
          <Route path={ROUTES.PRODUCT.REGISTER} element={<AddProduct />} />
        </Route>

        <Route path={ROUTES.CHECKOUT.ROOT}>
          <Route path={ROUTES.CHECKOUT.CART} element={<Checkout />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
