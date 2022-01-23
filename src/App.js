import { BrowserRouter } from 'react-router-dom';
import './assets/css/bootstrapInit.css';
import './assets/css/style.css';
import AppRouter from './containers/AppRouter';

function App() {
    return (
        <div>
            <BrowserRouter>
                {/* Этот компонент требует документация */}
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
