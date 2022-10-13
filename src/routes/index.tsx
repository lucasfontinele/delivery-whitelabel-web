import { Routes, Route } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

import PageWrapper from 'components/PageWrapper';

import AddressRegister from 'pages/AddressRegister';
import AddProduct from 'pages/AddProduct';
import CardRegister from 'pages/CardRegister';
import Offers from 'pages/Offers';
import Checkout from 'pages/Checkout';
import MenuOptions from 'pages/MenuOptions';

import ScrollToTop from 'utils/ScrollTop';

function Router() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route path={ROUTES.ADDRESS.ROOT}>
            <Route
              path={ROUTES.ADDRESS.REGISTER}
              element={<AddressRegister />}
            />
          </Route>
          <Route path={ROUTES.PRODUCT.ROOT}>
            <Route path={ROUTES.PRODUCT.ROOT} element={<Offers />} />
            <Route path={ROUTES.PRODUCT.REGISTER} element={<AddProduct />} />
          </Route>
          <Route path={ROUTES.CHECKOUT.ROOT}>
            <Route path={ROUTES.CHECKOUT.CART} element={<Checkout />} />
          </Route>
          <Route path={ROUTES.MENUOPTIONS.ROOT}>
            <Route
              path={ROUTES.MENUOPTIONS.OPTION}
              element={<MenuOptions option={1} />}
            />
          </Route>
          <Route path={ROUTES.PAYMENTS.ROOT}>
            <Route path={ROUTES.PAYMENTS.OPTION} element={<CardRegister />} />
          </Route>
          ;
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default Router;
