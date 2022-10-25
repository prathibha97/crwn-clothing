import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Authentication, Checkout, Home, Navigation, Shop } from './routes';
import { checkUserSession } from './store/users/user.action';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSession())
  }, [])
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
