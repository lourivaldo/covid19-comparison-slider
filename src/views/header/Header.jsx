import React, {Component} from 'react'
import './Header.scss'
import {format} from "date-fns";
import ReactHtmlParser, {} from 'react-html-parser';
import $ from 'jquery';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        slidesToShow: 3,
        centerMode: false,
        variableWidth: false,
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

    constructor(props) {
        super(props);
        this.configs = props.configs;
    }

    scrollTo = (id) => {
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
                        {this.configs.map((map) => (
                            <div className="col-lg-3" key={map.id}>
                                <div className="card" onClick={() => this.scrollTo(map.id)}>
                                    <div className="card-img-top">
                                        <img className="card-img-top-img" src={map.img} alt={map.title}/>
                                    </div>
                                    <div className="card-block">
                                        <div className="card-text">
                                            {ReactHtmlParser(map.titleHtml)}
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
                    </Slider>
                </div>

            </div>
        )
    }
}
