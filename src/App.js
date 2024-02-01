import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import './global.css'
import { useEffect } from 'react';
import AllRoutes from './routes';
import { Button as NewButton } from 'reactstrap';


export const Button = ({ children, ...props }) => {
  return (
    <NewButton cssModule={{ ["btn-secondary"]: "none" }} {...props}>
      {children}
    </NewButton>
  );
};


function App() {

  useEffect(() => {
    import('./global')
  })

  return (
    <AllRoutes />
  );
}

export default App;



