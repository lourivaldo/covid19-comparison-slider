import React, { Component } from 'react'
import {faExpand} from '@fortawesome/free-solid-svg-icons'
import "./Geodinamica.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Geodinamica extends Component {

    fullscreen() {
        // check if fullscreen mode is available
        if (document.fullscreenEnabled ||
            document.webkitFullscreenEnabled ||
            document.mozFullScreenEnabled ||
            document.msFullscreenEnabled) {

            // which element will be fullscreen
            var iframe = document.querySelector('#geodinamica');
            // Do fullscreen
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe.mozRequestFullScreen) {
                iframe.mozRequestFullScreen();
            } else if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }
        }
        else {
            document.querySelector('.error').innerHTML = 'Your browser is not supported';
        }
    }

    fullscreenChange() {
        if (document.fullscreenEnabled ||
            document.webkitIsFullScreen ||
            document.mozFullScreen ||
            document.msFullscreenElement) {
            console.log('enter fullscreen');
        }
        else {
            console.log('exit fullscreen');
        }
        // force to reload iframe once to prevent the iframe source didn't care about trying to resize the window
        // comment this line and you will see
        // var iframe = document.querySelector('#geodinamica');
        // iframe.src = iframe.src;
    }

    bindEvents() {
        document.addEventListener('webkitfullscreenchange', this.fullscreenChange);
        document.addEventListener('mozfullscreenchange', this.fullscreenChange);
        document.addEventListener('fullscreenchange', this.fullscreenChange);
        document.addEventListener('MSFullscreenChange', this.fullscreenChange);
    }

    render() {

        this.bindEvents();

        return (
            <div className="section section-geodinamica">
                <button className="btn" onClick={this.fullscreen} title="Tela inteira">
                    <FontAwesomeIcon icon={faExpand} size={"lg"}/>
                </button>

                <div className="embed-responsive embed-responsive-16by9">
                    <iframe id="geodinamica" className="embed-responsive-item" src="https://www.irrd.org/geodinamica/index.html" allowFullScreen ></iframe>
                </div>
            </div>
        )
    }
}
