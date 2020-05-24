import React, {Component} from 'react'
import './Header.scss'
import {parse, format} from "date-fns";
import $ from 'jquery';

export default class Header extends Component {

    scrollTo = (id) => {
        try {
            $('html, body').animate({
                scrollTop: $("#section-" + id).offset().top
            }, 1000);
        } catch (e) {
        }
    }

    render() {

        const maps = [
            {
                id: 1,
                title: "Distribuição Espaço-temporal dos casos confirmados do Coronavirus Covid-19 na Cidade do Recife",
                img: "img/confirmados/30.04.png",
                updatedAt: new Date(),
            },
            {
                id: 2,
                title: "Distribuição Espaço-temporal dos casos confirmados do Coronavirus Covid-19 no Estado de Pernambuco",
                img: "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200522.png",
                updatedAt: new Date(),
            },
            {
                id: 3,
                title: "Distribuição Espaço-temporal dos casos confirmados do Coronavirus Covid-19 na Região Metropolitana do Recife",
                img: "img/confirmados/30.04.png",
                updatedAt: new Date(),
            }
        ];

        return (
            <div className="header">

                <header className="masthead">
                    <div className="masthead-content">
                        <div className="container text-center text-white">
                            <h1 className="masthead-heading mb-0">Evolução espaço-temporal</h1>
                            <h2 className="masthead-subheading mb-0">dos casos confirmados do</h2>
                            <h2 className="masthead-subheading mb-0">Coronavírus Covid-19</h2>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%">
                        <polygon fill="#f8f9fa" points="0,100 100,0 100,100"/>
                    </svg>
                </header>

                <div className="container cvd-maps-list">

                    <div className="row justify-content-center my-5">
                        {maps.map((map) => (
                            <div className="col-sm-6 col-md-4 col-lg-3 mt-4" key={map.id}>
                                <div className="card" onClick={() => this.scrollTo(map.id)}>
                                    <div className="card-img-top">
                                        <img className="card-img-top-img" src={map.img}/>
                                    </div>
                                    <div className="card-block">
                                        <div className="card-text">
                                            {map.title}
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

                    </div>
                </div>

            </div>
        )
    }
}
