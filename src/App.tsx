import React, { memo } from 'react';
import './App.css';
import Routes from './routes';
import { ThemeProvider } from '@material-ui/core/styles';
import customTheme from './customTheme';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App: React.FC = memo(() => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <div className="App">
          <Routes />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
});

export default App;
