import {Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Profile from '../../pages/Profiles';

const RouterApp = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path={'/about'}
        element={<About />}
      />
      <Route path="/profiles/:username" element={<Profile />}/>
    </Routes>

  );
};

export default RouterApp;