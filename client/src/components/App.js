import React, { Component } from "react";

import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;