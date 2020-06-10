import React from 'react';
import $ from "jquery";
import {parse, compareDesc} from 'date-fns'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";
import Home from "./views/home/Home";
import Home2 from "./views/home2/Home2";
import Slider from "./views/slider/Slider";
import ChartRace from "./views/chart-race/ChartRace";
import Geodinamica from "./views/geodinamica/Geodinamica";
import {mapsConfig} from "./AppConfigMaps";

class App extends React.Component {

    maps = mapsConfig;

    constructor(props) {
        super(props);

        this.maps = this.maps.map((m) => {
            m.updatedAt = this.getMaxDate(m.images);
            return m;
        });
    }

    getMaxDate = (images) => {
        const dates = images.map(i => parse(i.date, 'dd/MM/yyyy', new Date()));
        return dates.sort(compareDesc)[0]
    };

    scrollFunction = () => {
        var mybutton = document.getElementById("toTopBtn");

        if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

    topFunction = () => {
        $('html, body').animate({
            scrollTop: $(".navbar").offset().top
        }, 500);
    };

    componentDidMount() {
        window.onscroll = () => {
            this.scrollFunction();
        };
    }

    getConfig(mapConfig, type = '') {

        let images;
        let title;

        switch (type) {
            case 'recovered':
                images = mapConfig.imagesRecovered;
                title = mapConfig.titleRecovered;
                break;
            case 'deaths':
                images = mapConfig.imagesDeaths;
                title = mapConfig.titleDeaths;
                break;
            case 'actives':
                images = mapConfig.imagesActives;
                title = mapConfig.titleActives;
                break;
            default:
                images = mapConfig.images;
                title = mapConfig.title;
        }

        return {
            id: `${mapConfig.id}-${type}`,
            title,
            images,
            captions: mapConfig.captions,
            defaultPosition: mapConfig.defaultPosition,
        };
    }

    render() {

        return (
            <div className="App">
                <Header configs={this.maps}/>

                <ChartRace id="2637633"></ChartRace>
                <ChartRace id="2709431"></ChartRace>

                <Geodinamica></Geodinamica>

                <Home2 config={this.getConfig(this.maps[0])}/>
                <Home config={this.getConfig(this.maps[1])}/>
                <Home2 config={this.getConfig(this.maps[2])}/>
                <Slider config={this.getConfig(this.maps[3])}/>
                <Slider config={this.getConfig(this.maps[3],'recovered')}/>
                <Slider config={this.getConfig(this.maps[4])}/>
                <Slider config={this.getConfig(this.maps[4],'recovered')}/>
                <Slider config={this.getConfig(this.maps[4],'actives')}/>

                <button onClick={this.topFunction} id="toTopBtn" title="Go to top">
                    <FontAwesomeIcon icon={faChevronUp} size={"lg"}/>
                </button>

                <ToastContainer/>

                <Footer/>
            </div>
        );
    }
}

export default App;
