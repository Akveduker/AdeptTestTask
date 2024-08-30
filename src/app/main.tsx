import { createRoot } from 'react-dom/client';
import { WithStore } from './providers/StoreProvider';
import { HashRouter } from 'react-router-dom';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { AppRouter } from './providers/RouterProvider';
import 'normalize.css';
import './styles/styles.scss';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <WithStore>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </WithStore>
  </HashRouter>
);
