import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './application';
import { AuthProvider } from './app/Context/auth';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<AuthProvider><App/></AuthProvider>);

