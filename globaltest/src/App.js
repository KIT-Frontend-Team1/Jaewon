import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './adapters/router';
import ModalStoreProvider from './store/2_context';

function App() {
    return (
        <ModalStoreProvider>
            <RouterProvider router={router} />
        </ModalStoreProvider>
    );
}

export default App;
