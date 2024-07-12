import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInPage from "./pages/logInPage/LogInPage";
import HomePage from "./pages/homePage/HomePage";
import StationsPage from "./pages/stationsPage/StationsPage";
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';          
import 'primeicons/primeicons.css';                        
import UsersPage from "./pages/usersPage/UsersPage";
import CompaniesPage from "./pages/companiesPage/CompaniesPage";
import CarsPage from "./pages/carsPage/CarsPage";
import TransactionsPage from "./pages/transactionsPage/TransactionsPage";
import AuthorityPage from "./pages/authorityPage/AuthorityPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/stations" element={<StationsPage />} />
          <Route path="/users" element={<UsersPage/>} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/authority" element={<AuthorityPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
