import React, {Component} from 'react'
import './Header.scss'
import {format} from "date-fns";
import ReactHtmlParser, {} from 'react-html-parser';
import $ from 'jquery';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {

    configs = null;
    dimensions = {
        width: null,
        height: null,
    };
    settings = {
        accessibility: true,
        arrows: true,
        dots: true,
        speed: 300,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 5,
        centerMode: false,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    // slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    constructor(props) {
        super(props);
        this.configs = props.configs;
    }

    scrollTo = (e, id) => {
        e.stopPropagation();
        try {
            $('html, body').animate({
                scrollTop: $("#section-" + id).offset().top
            }, 1000);
        } catch (e) {
        }
    }

    render() {

        return (
            <div className="header">
                <nav className="navbar">
                    <div className="container">
                        <a className="navbar-brand" href="https://www.irrd.org/covid-19">IRRD</a>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="https://twitter.com/IRRDPE" title="Follow on Twitter">
                                    <FontAwesomeIcon icon={faTwitter} size={"lg"}/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.instagram.com/irrdpe" title="Follow on Instagram">
                                    <FontAwesomeIcon icon={faInstagram} size={"lg"}/>
                                </a>
                            </li>
                        </ul>

                    </div>
                </nav>

                <header className="masthead">
                    <div id="particle-container">
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                    </div>
                    <div className="masthead-content">
                        <div className="container text-center text-white" id="page-title">
                            <h4 className="masthead-topheading mb-0">Instituto para Redução de Riscos e Desastres de Pernambuco</h4>
                            <h1 className="masthead-heading mb-0">Evolução espaço-temporal</h1>
                            <h2 className="masthead-subheading mb-0">do COVID-19</h2>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%">
                        <polygon fill="#f8f9fa" points="0,100 100,0 100,100"/>
                    </svg>
                </header>

                <div className="container cvd-maps-list">

                    <Slider {...this.settings} className="row">
                        {this.configs.map((map) => (
                            <div className="col-12 card-container" key={map.id}>
                                <div className="card" onClick={(e) => this.scrollTo(e, `${map.id}-`)}>
                                    <div className="card-img-top">
                                        <img className="card-img-top-img" src={map.img} alt={map.title}/>
                                    </div>
                                    <div className="card-block">
                                        <div className="card-text">
                                            {ReactHtmlParser(map.titleHtml)}
                                        </div>
                                    </div>
                                    <div className="card-actions">
                                        <div className="row">
                                            <div className="col-12">
                                                <button onClick={(e) => this.scrollTo(e, `${map.id}-`)} className={"btn btn-outline-danger btn-block btn-sm"}>
                                                    confirmados <FontAwesomeIcon icon={faChevronRight} size={"sm"}/>
                                                </button>
                                            </div>
                                            <div className="col-12">
                                                <button onClick={(e) => this.scrollTo(e, `${map.id}-recovered`)} className={"btn btn-outline-success btn-block btn-sm " + (map.imagesRecovered.length ? '' : 'btn-disabled')}>
                                                    recuperados <FontAwesomeIcon icon={faChevronRight} size={"sm"}/>
                                                </button>
                                            </div>
                                            <div className="col-12">
                                                <button onClick={(e) => this.scrollTo(e, `${map.id}-actives`)} className={"btn btn-outline-warning btn-block btn-sm " + (map.imagesActives.length ? '' : 'btn-disabled')}>
                                                    ativos <FontAwesomeIcon icon={faChevronRight} size={"sm"}/>
                                                </button>
                                            </div>
                                            {/*<div className="col-12">*/}
                                            {/*    <button onClick={(e) => this.scrollTo(e, `${map.id}-deaths`)} className={"btn btn-outline-danger btn-block btn-sm " + (map.imagesDeaths.length ? '' : 'btn-disabled')}>*/}
                                            {/*        óbitos <FontAwesomeIcon icon={faChevronRight} size={"sm"}/>*/}
                                            {/*    </button>*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className="card-footer">
                                            <small>Atualizado em <span>{format(map.updatedAt, 'dd/MM/yy')}</span></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        )}
                    </Slider>
                </div>

            </div>
        )
    }
}
