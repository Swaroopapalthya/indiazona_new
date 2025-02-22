// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { theme } from './theme/theme';
// import Layout from './components/layout/Layout';
// import Dashboard from './pages/Dashboard';
// import Sellers from './pages/Sellers';

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/sellers" element={<Sellers />} />
//             {/* Add more routes here as we create more pages */}
//           </Routes>
//         </Layout>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;


// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Sellers from './pages/Sellers';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sellers" element={<Sellers />} />
            <Route path="/support" element={<div>Support Page (Coming Soon)</div>} />
            <Route path="/faq" element={<div>FAQ Page (Coming Soon)</div>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;