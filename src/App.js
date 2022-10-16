
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  }
])

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
