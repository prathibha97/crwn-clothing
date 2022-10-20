import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation';
import {Home, Authentication, Shop} from "./routes";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
