// React Hooks
import React, { Component } from 'react'
import DatePicker from "react-date-picker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faUndoAlt} from "@fortawesome/free-solid-svg-icons";
import TwentyTwenty from "react-twentytwenty";
import {compareAsc, compareDesc, format, parse} from "date-fns";
import {toast, ToastContainer} from "react-toastify";

const images = [
    {date: "01/04/2020", img: "img/confirmados/01.04.png"},
    {date: "05/04/2020", img: "img/confirmados/05.04.png"},
    {date: "05/05/2020", img: "img/confirmados/05.05.png"},
    {date: "10/04/2020", img: "img/confirmados/10.04.png"},
    {date: "10/05/2020", img: "img/confirmados/10.05.png"},
    {date: "15/04/2020", img: "img/confirmados/15.04.png"},
    {date: "15/05/2020", img: "img/confirmados/15.05.png"},
    {date: "20/04/2020", img: "img/confirmados/20.04.png"},
    {date: "20/05/2020", img: "img/confirmados/20.05.png"},
    {date: "25/04/2020", img: "img/confirmados/25.04.png"},
    {date: "30/04/2020", img: "img/confirmados/30.04.png"},
];

export default class Slider extends Component {

    defaultBeforeDate = null;
    defaultAfterDate = null;

    timeout = 0;
    timeoutDateInterval = 0;

    constructor(props) {
        super(props);

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
        const dates = images.map(i => parse(i.date, 'dd/MM/yyyy', new Date()));
        return dates.sort(compareAsc)[0]
    }

    getMaxDate = () => {
        const dates = images.map(i => parse(i.date, 'dd/MM/yyyy', new Date()));
        return dates.sort(compareDesc)[0]
    }

    dateExists = (date) => {
        console.log('dateExists')
        const dateFormatted = format(date, 'dd/MM/yyyy');
        return images.find((img) => img.date === dateFormatted) || null;
    }

    validInterval() {
        if (this.state.beforeDateCurrent < this.state.afterDateCurrent) return true;
        console.log('validInterval')
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
        return images.map(img => {
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
        return images.find((img) => img.date === dateFormatted).img;
    }

    showDateErrorMessage(date, message) {
        toast.error(message || "A data informada não é válida", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    render() {
        return (
            <div className="slider section" id="section-4">

                <div className="container-lg">
                    <h4 className="my-4 text-center">Distribuição Espaço-temporal dos casos confirmados do Coronavírus Covid-19 no Recife</h4>

                    <form className="">
                        <div className="form-row justify-content-between">
                            <div className="col-6 col-md-3 col-lg-2 my-1">
                                <label className="cvd-label">Antes</label>
                                <div>
                                    <DatePicker
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

                            <div className="col-6 col-md-3 col-lg-2 my-1">
                                <label className="cvd-label">Depois</label>
                                <div>
                                    <DatePicker
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

                <div className="twentytwenty-wrapper my-2">
                    <TwentyTwenty
                        defaultPosition={0.35}
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
        )
    }
}
