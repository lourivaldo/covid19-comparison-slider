import React, { Component } from 'react'
import "./ChartRace.scss";

export default class ChartRace extends Component {

    render() {

        return (
            <div className="section section-flourish">
                <div className="container">
                    <div className="flourish-embed flourish-bar-chart-race" data-src={"visualisation/" + this.props.id}
                         data-url={"https://flo.uri.sh/visualisation/"+this.props.id+"/embed"}></div>
                </div>
            </div>
        )
    }
}
