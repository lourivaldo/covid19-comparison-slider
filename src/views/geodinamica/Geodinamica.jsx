import React, { Component } from 'react'
import {faExpand, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
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
    }

    bindEvents() {
        document.addEventListener('webkitfullscreenchange', this.fullscreenChange);
        document.addEventListener('mozfullscreenchange', this.fullscreenChange);
        document.addEventListener('fullscreenchange', this.fullscreenChange);
        document.addEventListener('MSFullscreenChange', this.fullscreenChange);
    }

    componentDidMount() {

    }

    play = () => {
        try {
            const vid = window.document.getElementById("webmapVideo");
            vid.autoplay = true;
            vid.load();
        } catch (e) {

        }
    }

    render() {

        this.bindEvents();

        return (
            <div className="section section-geodinamica">
                <a href="https://www.irrd.org/geodinamica/index.html" target="_blank">

                    <FontAwesomeIcon icon={faExternalLinkAlt} size={"lg"}/>
                    <div className="embed-overlays"></div>

                    <div id="webmapVideo" className="embed-responsive embed-responsive-16by9">
                        <video className="embed-responsive-item" width="100%" autoPlay loop controls onLoad={this.play}>
                            <source src="video/webmap.webm" type="video/webm"/>
                            <source src="video/webmap.mp4" type="video/mp4"/>
                            Construa seu mapa acesse: https://www.irrd.org/geodinamica
                        </video>
                    </div>
                </a>
            </div>
        )
    }
}
