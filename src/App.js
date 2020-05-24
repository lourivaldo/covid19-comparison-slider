import TwentyTwenty from 'react-twentytwenty';
import React from 'react';
import DatePicker from 'react-date-picker';
import { format, parse, compareAsc, compareDesc} from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronCircleUp, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from "./views/home/Home";
import Home2 from "./views/home2/Home2";
import Slider from "./views/slider/Slider";
import Slider2 from "./views/slider2/Slider2";
import Header from "./views/header/Header";
import $ from "jquery";
import Footer from "./views/footer/Footer";

class App extends React.Component {

    scrollFunction = () => {
        var mybutton = document.getElementById("toTopBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    topFunction = () => {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    }

    componentDidMount() {
        window.onscroll = () => {
            this.scrollFunction();
        };
    }

    render() {

        return (
            <div className="App">
                <Header />
                <Home />
                <Home2 />
                <Slider2 />
                <Slider />
                <Footer />
                <button onClick={this.topFunction} id="toTopBtn" title="Go to top">
                    <FontAwesomeIcon icon={faChevronUp} size={"lg"}/>
                </button>

                <ToastContainer />
            </div>
        );
    }
}

export default App;
