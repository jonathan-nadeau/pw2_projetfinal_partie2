import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContainer from '../auth/components/AppContainer/AppContainer';
import Signup from '../pages/Signup/Signup';
import Signin from '../pages/Signin/Signin';
import User from '../pages/User/User';
import Navbar from '../components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
