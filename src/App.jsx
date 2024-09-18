import { createTheme, ThemeProvider } from '@mui/material/styles';
import ErrorBoundary from './components/ErrorBoundary';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import { ToastContainer } from 'react-toastify';
import Store from './app/store';


function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#333',
        },
        secondary: {
          main: '#666',
          second: '#161C24'
          },
          },
          });
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Provider store={Store}>
          <AppRouter/>
        </Provider>
        <ToastContainer/>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
