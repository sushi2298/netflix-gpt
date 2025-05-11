import { BrowserRouter, Route, Routes } from 'react-router';
import Body from './components/Body';
import Browse from './components/Browse';

function App() {
  // const AppLayout = () => (
  //   <div></div>
  // )
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/browse' element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
