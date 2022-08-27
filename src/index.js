import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'antd/dist/antd.min.css';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
