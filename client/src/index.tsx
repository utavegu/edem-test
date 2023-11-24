import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './App';
import './styles/index.scss';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found!');
}

const rootContainer = createRoot(root);

rootContainer.render(
  <Provider store={store}>
    <App />
  </Provider>
);
