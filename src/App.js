import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import getRoutes from './routes';
function App() {
  return (
    <>
      {getRoutes()}
    </>
  );
}

export default App;
