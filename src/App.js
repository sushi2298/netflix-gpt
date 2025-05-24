import { BrowserRouter, Route, Routes } from 'react-router';
import Browse from './components/Browse';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Login from './components/Login';

function App() {

  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/browse' element={<Browse />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
