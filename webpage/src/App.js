import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from 'theme';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom';
import Layout from './pages/layout';
import Dashboard from './pages/dashboard';
import Products from 'pages/products';
import Customers from 'pages/customers';
import Transactions from 'pages/transactions';
import Geography from 'pages/geography';
import Overview from 'pages/overview';
import Daily from 'pages/daily';
import Monthly from 'pages/monthly';

const App = () => {

  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (

    <div className = 'app'>
      <BrowserRouter>
        <ThemeProvider theme = {theme}>
          <CssBaseline />
          <Routes>
            <Route element = {<Layout />}>
              <Route path = '/' element = {<Navigate to = '/dashboard' replace />} />
              <Route path = '/dashboard'    element = {<Dashboard />}   />
              <Route path = '/products'     element = {<Products  />}   />
              <Route path = '/customers'    element = {<Customers />}   />
              <Route path = '/transactions' element = {<Transactions/>} />
              <Route path = '/geography'    element = {<Geography />}   />
              <Route path = '/overview'     element = {<Overview  />}   />
              <Route path = '/daily'        element = {<Daily     />}   />
              <Route path = '/monthly'      element = {<Monthly   />}   />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
    
  );
};

export default App;