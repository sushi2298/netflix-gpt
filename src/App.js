import { BrowserRouter, Route, Routes } from 'react-router';
import Body from './components/Body';
import Browse from './components/Browse';
import { Provider, useDispatch } from 'react-redux';
import appStore from './utils/appStore';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { addUser, removeUser } from './utils/slices/userSlice';

function App() {

  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/browse' element={<Browse />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
