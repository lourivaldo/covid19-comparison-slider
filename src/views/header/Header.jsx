import React, {Component} from 'react'
import './Header.scss'
import {parse, format} from "date-fns";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import $ from 'jquery';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Header extends Component {

    scrollTo = (id) => {
        try {
            $('html, body').animate({
                scrollTop: $("#section-" + id).offset().top
            }, 1000);
        } catch (e) {
        }
    }

    dimensions = {
        width: null,
        height: null,
    };
    settings = {
        // nextArrow: '<button class="any-class-name-you-want-next">Next</button>',
        // prevArrow: '<button class="any-class-name-you-want-previous">Previous</button>',
        accessibility: true,
        // arrows: false,
        arrows: true,
        dots: true,
        speed: 300,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        // centerMode: true,
        centerMode: false,
        variableWidth: false,
        // variableWidth: true,

        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick",
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    // slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // createSlick() {
    //     $('.cvd-cards').unslick && $('.cvd-cards').unslick();
    //
    //     $('.cvd-cards').slick(this.settings);
    //
    //     this.forceUpdate();
    // }
    //
    // componentDidMount() {
    //     // this.createSlick();
    //     //
    //     // window.onresize = () => {
    //     //     const width = $(window).width();
    //     //     const height = $(window).height();
    //     //
    //     //     if (this.dimensions.width >= 992 && width < 992) {
    //     //         this.createSlick();
    //     //     }
    //     //
    //     //     this.dimensions.width = width;
    //     //     this.dimensions.height = height;
    //     // };
    // }

    render() {

        const maps = [
            {
                id: 1,
                title: `Distribuição Espaço-temporal dos casos <strong>confirmados</strong> do Coronavírus Covid-19 no <strong>Nordeste do Brasil</strong>`,
                // title: 'Distribuição Espaço-temporal dos casos confirmados do Coronavírus Covid-19 no Nordeste do Brasil',
                img: "img/thumbs/thumb-4.png",
                updatedAt: new Date(2020, 4, 22),
            },
            {
                id: 2,
                title: "Distribuição Espaço-temporal dos casos <strong>confirmados</strong> do Coronavírus Covid-19 no <strong>Estado de Pernambuco</strong>",
                img: "img/thumbs/thumb-3.png",
                updatedAt: new Date(2020, 4, 23),
            },
            {
                id: 3,
                title: "Distribuição Espaço-temporal dos casos <strong>confirmados</strong> do Coronavírus Covid-19 na <strong>Região Metropolitana do Recife</strong>",
                img: "img/thumbs/thumb-2.png",
                updatedAt: new Date(2020, 4, 20),
            },
            {
                id: 4,
                title: "Distribuição Espaço-temporal dos casos <strong>confirmados</strong> do Coronavírus Covid-19 na <strong>Cidade do Recife</strong>",
                img: "img/thumbs/thumb-1.png",
                updatedAt: new Date(2020, 4, 20),
            },
        ];

        return (
            <div className="header">

                <header className="masthead">
                    <div className="masthead-content">
                        <div className="container text-center text-white">
                            <h1 className="masthead-heading mb-0">Evolução espaço-temporal</h1>
                            <h2 className="masthead-subheading mb-0">do Coronavírus Covid-19</h2>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%">
                        <polygon fill="#f8f9fa" points="0,100 100,0 100,100"/>
                    </svg>
                </header>

                <div className="container cvd-maps-list">

                    <Slider {...this.settings} className="row">
                    {/*<div className="row -d-flex -align-items-stretch cvd-cards">*/}
                        {maps.map((map) => (
                            // <div className="col-sm-6 col-md-4 col-lg-3 mt-4" key={map.id}>
                            <div className="col-lg-3" key={map.id}>
                            {/*<div className="cvd-card" key={map.id}>*/}
                                <div className="card" onClick={() => this.scrollTo(map.id)}>
                                    <div className={`card-img-top ${map.id === 2 ? '-card-img-top-lg' : '' }`}>
                                        <img className="card-img-top-img" src={map.img}/>
                                    </div>
                                    <div className="card-block">
                                        <div className="card-text">
                                            {ReactHtmlParser(map.title)}
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <small>Atualizado em {format(map.updatedAt, 'dd/MM/yy')}</small>
                                        <button onClick={() => this.scrollTo(map.id)} className="btn btn-primary float-right btn-sm">ver</button>
                                    </div>
                                </div>
                            </div>
                            )
                        )}

                    {/*</div>*/}
                    </Slider>
                </div>

            </div>
        )
    }
}
