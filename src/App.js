import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation';
import {Home, SignIn} from "./routes";

const Shop = ()=>{
  return(
    <h1>Shop</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signin' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
