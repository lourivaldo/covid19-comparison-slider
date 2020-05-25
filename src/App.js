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

class App extends React.Component {

    maps = [
        {
            id: 1,
            titleHtml: `Distribuição Espaço-temporal dos casos <strong>confirmados</strong> do Coronavírus Covid-19 no <strong>Nordeste do Brasil</strong>`,
            title: `Distribuição Espaço-temporal dos casos confirmados do Coronavírus Covid-19 no Nordeste do Brasil`,
            img: "img/thumbs/thumb-4.png",
            updatedAt: null,
            defaultPosition: 0.5,
            images: [
                /** inject-images:start(nordeste) */
	{
		"date": "06/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200306.png"
	},
	{
		"date": "07/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200307.png"
	},
	{
		"date": "08/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200308.png"
	},
	{
		"date": "09/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200309.png"
	},
	{
		"date": "10/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200310.png"
	},
	{
		"date": "11/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200311.png"
	},
	{
		"date": "12/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200312.png"
	},
	{
		"date": "13/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200313.png"
	},
	{
		"date": "14/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200314.png"
	},
	{
		"date": "15/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200315.png"
	},
	{
		"date": "16/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200316.png"
	},
	{
		"date": "17/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200317.png"
	},
	{
		"date": "18/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200318.png"
	},
	{
		"date": "19/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200319.png"
	},
	{
		"date": "20/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200320.png"
	},
	{
		"date": "21/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200321.png"
	},
	{
		"date": "22/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200322.png"
	},
	{
		"date": "23/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200323.png"
	},
	{
		"date": "24/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200324.png"
	},
	{
		"date": "25/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200325.png"
	},
	{
		"date": "26/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200326.png"
	},
	{
		"date": "27/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200327.png"
	},
	{
		"date": "28/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200328.png"
	},
	{
		"date": "29/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200329.png"
	},
	{
		"date": "30/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200330.png"
	},
	{
		"date": "31/03/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200331.png"
	},
	{
		"date": "01/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200401.png"
	},
	{
		"date": "02/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200402.png"
	},
	{
		"date": "03/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200403.png"
	},
	{
		"date": "04/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200404.png"
	},
	{
		"date": "05/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200405.png"
	},
	{
		"date": "06/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200406.png"
	},
	{
		"date": "07/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200407.png"
	},
	{
		"date": "08/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200408.png"
	},
	{
		"date": "09/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200409.png"
	},
	{
		"date": "10/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200410.png"
	},
	{
		"date": "11/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200411.png"
	},
	{
		"date": "12/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200412.png"
	},
	{
		"date": "13/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200413.png"
	},
	{
		"date": "14/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200414.png"
	},
	{
		"date": "15/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200415.png"
	},
	{
		"date": "16/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200416.png"
	},
	{
		"date": "17/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200417.png"
	},
	{
		"date": "18/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200418.png"
	},
	{
		"date": "19/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200419.png"
	},
	{
		"date": "20/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200420.png"
	},
	{
		"date": "21/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200421.png"
	},
	{
		"date": "22/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200422.png"
	},
	{
		"date": "23/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200423.png"
	},
	{
		"date": "24/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200424.png"
	},
	{
		"date": "25/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200425.png"
	},
	{
		"date": "26/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200426.png"
	},
	{
		"date": "27/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200427.png"
	},
	{
		"date": "28/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200428.png"
	},
	{
		"date": "29/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200429.png"
	},
	{
		"date": "30/04/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200430.png"
	},
	{
		"date": "01/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200501.png"
	},
	{
		"date": "02/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200502.png"
	},
	{
		"date": "03/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200503.png"
	},
	{
		"date": "04/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200504.png"
	},
	{
		"date": "05/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200505.png"
	},
	{
		"date": "06/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200506.png"
	},
	{
		"date": "07/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200507.png"
	},
	{
		"date": "08/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200508.png"
	},
	{
		"date": "09/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200509.png"
	},
	{
		"date": "10/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200510.png"
	},
	{
		"date": "11/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200511.png"
	},
	{
		"date": "12/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200512.png"
	},
	{
		"date": "13/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200513.png"
	},
	{
		"date": "14/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200514.png"
	},
	{
		"date": "15/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200515.png"
	},
	{
		"date": "16/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200516.png"
	},
	{
		"date": "17/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200517.png"
	},
	{
		"date": "18/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200518.png"
	},
	{
		"date": "19/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200519.png"
	},
	{
		"date": "20/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200520.png"
	},
	{
		"date": "21/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200521.png"
	},
	{
		"date": "22/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200522.png"
	},
	{
		"date": "23/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200523.png"
	},
	{
		"date": "24/05/2020",
		"img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200524.png"
	}
/** inject-images:end(nordeste) */
            ]
        },
        {
            id: 2,
            titleHtml: "Distribuição Espaço-temporal dos casos <strong>confirmados</strong> do Coronavírus Covid-19 no <strong>Estado de Pernambuco</strong>",
            title: "Distribuição Espaço-temporal dos casos confirmados do Coronavírus Covid-19 no Estado de Pernambuco",
            img: "img/thumbs/thumb-3.png",
            updatedAt: null,
            defaultPosition: 0.5,
            images: [
                /** inject-images:start(pernambuco) */
	{
		"date": "01/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200401.png"
	},
	{
		"date": "02/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200402.png"
	},
	{
		"date": "03/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200403.png"
	},
	{
		"date": "04/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200404.png"
	},
	{
		"date": "05/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200405.png"
	},
	{
		"date": "06/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200406.png"
	},
	{
		"date": "07/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200407.png"
	},
	{
		"date": "08/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200408.png"
	},
	{
		"date": "09/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200409.png"
	},
	{
		"date": "10/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200410.png"
	},
	{
		"date": "11/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200411.png"
	},
	{
		"date": "12/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200412.png"
	},
	{
		"date": "13/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200413.png"
	},
	{
		"date": "14/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200414.png"
	},
	{
		"date": "15/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200415.png"
	},
	{
		"date": "16/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200416.png"
	},
	{
		"date": "17/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200417.png"
	},
	{
		"date": "18/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200418.png"
	},
	{
		"date": "19/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200419.png"
	},
	{
		"date": "20/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200420.png"
	},
	{
		"date": "21/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200421.png"
	},
	{
		"date": "22/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200422.png"
	},
	{
		"date": "23/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200423.png"
	},
	{
		"date": "24/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200424.png"
	},
	{
		"date": "25/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200425.png"
	},
	{
		"date": "26/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200426.png"
	},
	{
		"date": "27/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200427.png"
	},
	{
		"date": "28/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200428.png"
	},
	{
		"date": "29/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200429.png"
	},
	{
		"date": "30/04/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200430.png"
	},
	{
		"date": "01/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200501.png"
	},
	{
		"date": "02/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200502.png"
	},
	{
		"date": "03/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200503.png"
	},
	{
		"date": "04/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200504.png"
	},
	{
		"date": "05/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200505.png"
	},
	{
		"date": "06/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200506.png"
	},
	{
		"date": "07/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200507.png"
	},
	{
		"date": "08/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200508.png"
	},
	{
		"date": "09/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200509.png"
	},
	{
		"date": "10/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200510.png"
	},
	{
		"date": "11/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200511.png"
	},
	{
		"date": "12/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200512.png"
	},
	{
		"date": "13/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200513.png"
	},
	{
		"date": "14/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200514.png"
	},
	{
		"date": "15/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200515.png"
	},
	{
		"date": "16/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200516.png"
	},
	{
		"date": "17/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200517.png"
	},
	{
		"date": "18/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200518.png"
	},
	{
		"date": "19/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200519.png"
	},
	{
		"date": "20/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200520.png"
	},
	{
		"date": "21/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200521.png"
	},
	{
		"date": "22/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200522.png"
	},
	{
		"date": "23/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200523.png"
	},
	{
		"date": "24/05/2020",
		"img": "img/pernambuco/COVID19_PE_TEM_200524.png"
	}
/** inject-images:end(pernambuco) */
            ]
        },
        {
            id: 3,
            titleHtml: "Distribuição Espaço-temporal dos casos <strong>confirmados</strong> do Coronavírus Covid-19 na <strong>Região Metropolitana do Recife</strong>",
            title: "Distribuição Espaço-temporal dos casos confirmados do Coronavírus Covid-19 na Região Metropolitana do Recife",
            img: "img/thumbs/thumb-2.png",
            updatedAt: null,
            defaultPosition: 0.35,
            images: [
                /** inject-images:start(rmr) */
	{
		"date": "05/04/2020",
		"img": "img/rmr/aglomerados confirmados 05.04 (1).png"
	},
	{
		"date": "05/05/2020",
		"img": "img/rmr/aglomerados confirmados 05.05 (1).png"
	},
	{
		"date": "10/05/2020",
		"img": "img/rmr/aglomerados confirmados 10.05 (1).png"
	},
	{
		"date": "15/04/2020",
		"img": "img/rmr/aglomerados confirmados 15.04 (1).png"
	},
	{
		"date": "15/05/2020",
		"img": "img/rmr/aglomerados confirmados 15.05 (1).png"
	},
	{
		"date": "20/04/2020",
		"img": "img/rmr/aglomerados confirmados 20.04 (1).png"
	},
	{
		"date": "20/05/2020",
		"img": "img/rmr/aglomerados confirmados 20.05 (1).png"
	},
	{
		"date": "25/04/2020",
		"img": "img/rmr/aglomerados confirmados 25.04 (1).png"
	}
/** inject-images:end(rmr) */
            ]
        },
        {
            id: 4,
            titleHtml: "Distribuição Espaço-temporal dos casos <strong>confirmados</strong> do Coronavírus Covid-19 na <strong>Cidade do Recife</strong>",
            title: "Distribuição Espaço-temporal dos casos confirmados do Coronavírus Covid-19 na Cidade do Recife",
            img: "img/thumbs/thumb-1.png",
            updatedAt: null,
            defaultPosition: 0.35,
            images: [
                /** inject-images:start(recife) */
	{
		"date": "01/04/2020",
		"img": "img/recife/01.04.png"
	},
	{
		"date": "05/04/2020",
		"img": "img/recife/05.04.png"
	},
	{
		"date": "05/05/2020",
		"img": "img/recife/05.05.png"
	},
	{
		"date": "10/04/2020",
		"img": "img/recife/10.04.png"
	},
	{
		"date": "10/05/2020",
		"img": "img/recife/10.05.png"
	},
	{
		"date": "15/04/2020",
		"img": "img/recife/15.04.png"
	},
	{
		"date": "15/05/2020",
		"img": "img/recife/15.05.png"
	},
	{
		"date": "20/04/2020",
		"img": "img/recife/20.04.png"
	},
	{
		"date": "20/05/2020",
		"img": "img/recife/20.05.png"
	},
	{
		"date": "25/04/2020",
		"img": "img/recife/25.04.png"
	},
	{
		"date": "30/04/2020",
		"img": "img/recife/30.04.png"
	}
/** inject-images:end(recife) */
            ]
        },
    ];

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
        console.log(document.body.scrollTop || document.documentElement.scrollTop)
        if (document.body.scrollTop > 165 || document.documentElement.scrollTop > 165) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

    topFunction = () => {
        $('html, body').animate({
            scrollTop: $("#page-title").offset().top - 50
        }, 500);
    };

    componentDidMount() {
        window.onscroll = () => {
            this.scrollFunction();
        };
    }

    render() {

        return (
            <div className="App">
                <Header configs={this.maps}/>

                <Home config={this.maps[0]}/>
                <Home2 config={this.maps[1]}/>
                <Slider config={this.maps[2]}/>
                <Slider config={this.maps[3]}/>

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
