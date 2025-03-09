import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "../container/Homepage"
import Navbar from "../components/Navbar"
import Container from "../container/Container"

const RouteComponent = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/create" element={<Container />} />
            </Routes>
        </Router>
    )
}

export default RouteComponent