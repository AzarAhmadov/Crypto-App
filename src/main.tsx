import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/css/App.css'
import { store } from './app/store/Store.tsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
