import React, { StrictMode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { GlobalContextProvider } from './globals/globalconfiguration';
import { formToJSON } from 'axios';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(

    <GlobalContextProvider>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </GlobalContextProvider>

);
