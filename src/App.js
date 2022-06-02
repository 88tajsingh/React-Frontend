import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import './sass/App.scss';
import NavigationRoutes from './components/shared/navbar';
import Footer from './components/shared/footer';
function App() {
  return (
    <>
      <Router>
        <NavigationRoutes />       
      </Router>
      <Footer />
    </>
  );
}
export default App;
