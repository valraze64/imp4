// // import logo from './assets/logo.svg';
// import React from 'react';
// import './App.css';
// // import Dashboard from './components/Dashboard/DashboardHighCharts';
// import Dashboard from './components/Dashboard/Dashboard';

// function App() {
//   return (
//     <div className="App">
//       <Dashboard/>
//     </div>
//   );
// }

// export default App;


import './App.css';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import Home from './pages/Home';
import Login from './pages/Login';
import { useContext, useEffect } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import React from 'react';
import { GlobalStyles } from './components/Dashboard/Dashboard.styled';

function App() {
  const { accounts } = useMsal();


  return (

      <div>
        <GlobalStyles/>
      <AuthenticatedTemplate>
        <Dashboard />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Dashboard />
        {/* <Login /> */}
      </UnauthenticatedTemplate>
    {/* </GlobalStyles> */}
    </div>
  );
}

export default App;
