import React, { Component } from 'react'
import "./Flourish.scss";

export default class Flourish extends Component {

    render() {

        return (
            <div className="section section-flourish">
                <div className="container">
                    <div className="flourish-embed flourish-bar-chart-race"
                         data-src="visualisation/2590403"
                         data-url="https://flo.uri.sh/visualisation/2590403/embed"></div>
                </div>
            </div>
        )
    }
}
