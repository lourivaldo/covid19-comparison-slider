// React Hooks
import React, { Component } from 'react'
import DatePicker from "react-date-picker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faUndoAlt} from "@fortawesome/free-solid-svg-icons";
import TwentyTwenty from "react-twentytwenty";
import {compareAsc, compareDesc, format, parse} from "date-fns";
import {toast} from "react-toastify";
import "./Home2.scss";

export default class Home2 extends Component {

    config = null;

    defaultBeforeDate = null;
    defaultAfterDate = null;

    timeout = 0;
    timeoutDateInterval = 0;

    constructor(props) {
        super(props);

        this.config = props.config;

        this.defaultBeforeDate = format(this.getMinDate(), 'dd/MM/yyyy');
        this.defaultAfterDate = format(this.getMaxDate(), 'dd/MM/yyyy');

        this.state = {
            beforeDateHover: this.getMinDate(),

            beforeDate: this.getMinDate(),
            afterDate: this.getMaxDate(),

            beforeDateCurrent: this.getMinDate(),
            afterDateCurrent: this.getMaxDate(),
        };
    }

    getMinDate = () => {
        const dates = this.config.images.map(i => parse(i.date, 'dd/MM/yyyy', new Date()));
        return dates.sort(compareAsc)[0]
    }

    getMaxDate = () => {
        const dates = this.config.images.map(i => parse(i.date, 'dd/MM/yyyy', new Date()));
        return dates.sort(compareDesc)[0]
    }

    dateExists = (date) => {
        const dateFormatted = format(date, 'dd/MM/yyyy');
        return this.config.images.find((img) => img.date === dateFormatted) || null;
    }

    validInterval() {
        if (this.state.beforeDateCurrent < this.state.afterDateCurrent) return true;

        clearTimeout(this.timeoutDateInterval);
        this.timeoutDateInterval = setTimeout(() => {
            if (!this.state.beforeDateCurrent < this.state.afterDateCurrent) this.showDateErrorMessage(null, 'Intervalo de datas inválido');
        }, 1500);

        return false
    }

    validDate(date) {
        if (this.dateExists(date)) return true;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            if (!this.dateExists(this.state.beforeDate) || !this.dateExists(this.state.afterDate)) this.showDateErrorMessage(date);
        }, 1500);
    }

    handleChangeBefore = beforeDate => {

        if (!beforeDate) {
            beforeDate = parse(this.defaultBeforeDate, 'dd/MM/yyyy', new Date())
            this.setState(
                { beforeDateHover: beforeDate },
                () => console.log(`Option selected:`, this.state.beforeDate)
            );
            // this.forceUpdate();
        }

        this.setState(
            { beforeDate },
            () => console.log(`Option selected:`, this.state.beforeDate)
        );

        if (!this.validDate(beforeDate)) return;

        this.setState(
            { beforeDateCurrent: beforeDate },
            () => console.log(`Option selected:`, this.state.beforeDate)
        );
    };

    handleChangeAfter = afterDate => {

        if (!afterDate) afterDate = parse(this.defaultAfterDate, 'dd/MM/yyyy', new Date());

        this.setState(
            {afterDate},
            () => console.log(`Option selected:`, this.state.afterDate)
        );

        if (!this.validDate(afterDate)) return;

        this.setState(
            {afterDateCurrent: afterDate},
            () => console.log(`Option selected:`, this.state.afterDate)
        );

        this.forceUpdate();
    };

    mapOptions() {
        return this.config.images.map(img => {
            return {value: img.img, label: img.date, isDisabled: false};
        })
    }

    handleDateChangeRaw = (e) => {
        e.preventDefault();
    }

    tileDisabled = ({date, view }) => {
        return !this.dateExists(date);
    }

    getImage = (date) => {
        const dateFormatted = format(date, 'dd/MM/yyyy');
        return this.config.images.find((img) => img.date === dateFormatted).img;
    }

    showDateErrorMessage(date, message) {
        toast.error(message || "A data informada não é válida", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    render() {

        return (
            <div className="home-2 section" id="section-2">

                <div className="container-lg">
                    <h4 className="my-4 text-center">Distribuição Espaço-temporal dos casos confirmados do Coronavírus Covid-19 no Estado de Pernambuco</h4>
                </div>

                <div className="cvd-map-container">

                    <div className="w-100">

                        <div className="w-100 container-lg">
                            <form className="">
                                <div className="form-row justify-content-between">

                                    <div className="col-6 col-lg-3 -my-1 -px-2">
                                        <label className="cvd-label">Antes</label>
                                        <div>
                                            <DatePicker
                                                minDetail="year"
                                                className={`${this.dateExists(this.state.beforeDate) && this.validInterval() ? '' : 'react-date-picker--error'}`}
                                                calendarType="US"
                                                minDate={this.getMinDate()}
                                                maxDate={this.getMaxDate()}
                                                hover={this.state.beforeDateHover}
                                                clearIcon={<FontAwesomeIcon icon={faUndoAlt}/>}
                                                calendarIcon={<FontAwesomeIcon icon={faCalendarAlt}/>}
                                                onChange={this.handleChangeBefore}
                                                value={this.state.beforeDate}
                                                tileDisabled={this.tileDisabled}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6 col-lg-3 -my-1 -px-2">
                                        <label className="cvd-label">Depois</label>
                                        <div>
                                            <DatePicker
                                                minDetail="year"
                                                className={`${this.dateExists(this.state.afterDate) && this.validInterval() ? '' : 'react-date-picker--error'}`}
                                                calendarType="US"
                                                minDate={this.getMinDate()}
                                                maxDate={this.getMaxDate()}
                                                clearIcon={<FontAwesomeIcon icon={faUndoAlt}/>}
                                                calendarIcon={<FontAwesomeIcon icon={faCalendarAlt}/>}
                                                onChange={this.handleChangeAfter}
                                                value={this.state.afterDate}
                                                tileDisabled={this.tileDisabled}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className="w-100">
                            <div className="twentytwenty-wrapper">
                                <TwentyTwenty
                                    defaultPosition={this.config.defaultPosition}
                                    left={<img className="cvd-map-image" src={this.getImage(this.state.beforeDateCurrent)} alt="Imagem antes" />}
                                    right={<img className="cvd-map-image" src={this.getImage(this.state.afterDateCurrent)} alt="Imagem depois" />}
                                    slider={
                                        <div className="twentytwenty-bar">
                                            <div className="twentytwenty-handle">
                                                <span className="twentytwenty-left-arrow"></span>
                                                <span className="twentytwenty-right-arrow"></span>
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="cvd-caption d-flex flex-wrap justify-content-between">
                        <img className="" src="img/pernambuco/COVID19_PE_TEM_LEGENDA-1.png" alt="Legenda"/>
                        <img className="" src="img/pernambuco/COVID19_PE_TEM_LEGENDA-2.png" alt="Legenda"/>
                    </div>
                </div>

            </div>
        )
    }
}
