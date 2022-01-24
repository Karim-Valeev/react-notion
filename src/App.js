import { BrowserRouter } from 'react-router-dom';
import './assets/css/bootstrapInit.css';
import './assets/css/style.css';
import './assets/css/activeState.css';
import AppRouter from './containers/AppRouter';

function App() {
    return (
        <div>
            {/* Этот 👇 компонент требует документация */}
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
