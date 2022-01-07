import {BrowserRouter} from "react-router-dom";
import './assets/css/bootstrapInit.css'
import './assets/css/style.css'
import AppRouter from "./components/AppRouter";
function App() {
  return <div>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  </div>
}

export default App;
