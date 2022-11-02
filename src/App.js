import './App.css';
import DrawerAppBar from "./components/main/DrawerAppBar.jsx";
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/main/Home.jsx'
import FirstReport from './components/main/reports/FirstReport.jsx'
import SecondReport from './components/main/reports/SecondReport.jsx'
import ThirdReport from './components/main/reports/ThirdReport.jsx'


function App() {
    return (
        <Router>
            <div className="container">
                <DrawerAppBar></DrawerAppBar>
                <Routes>
                    <Route path="/first" element={<FirstReport/>}></Route>
                    <Route path="/second" element={<SecondReport/>}></Route>
                    <Route path="/third" element={<ThirdReport/>}></Route>
                </Routes>
            </div>
        </Router>)
}

export default App;
