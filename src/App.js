import './App.css';
import DrawerAppBar from "./components/header/DrawerAppBar.jsx";
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/main/Home.jsx'
import FirstReport from './components/main/reports/FirstReport.jsx'
import SecondReport from './components/main/reports/SecondReport.jsx'
import ThirdReport from './components/main/reports/ThirdReport.jsx'
import {ThemeProvider, createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#90344d"
        },
        secondary: {
            main: "#550024"
        }
    }
});


function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="container">
                    <DrawerAppBar></DrawerAppBar>
                    <Routes>
                        <Route path="/first" element={<FirstReport/>}></Route>
                        <Route path="/second" element={<SecondReport/>}></Route>
                        <Route path="/third" element={<ThirdReport/>}></Route>
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>)
}

export default App;
