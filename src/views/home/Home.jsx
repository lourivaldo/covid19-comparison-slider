// React Hooks
import React, { Component } from 'react'
import DatePicker from "react-date-picker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faUndoAlt} from "@fortawesome/free-solid-svg-icons";
import TwentyTwenty from "react-twentytwenty";
import {compareAsc, compareDesc, format, parse} from "date-fns";
import {toast, ToastContainer} from "react-toastify";
import "./Home.css";

const images = [
    /** map-images:start */
 {
  "date": "06/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200306.png"
 },
 {
  "date": "07/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200307.png"
 },
 {
  "date": "08/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200308.png"
 },
 {
  "date": "09/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200309.png"
 },
 {
  "date": "10/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200310.png"
 },
 {
  "date": "11/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200311.png"
 },
 {
  "date": "12/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200312.png"
 },
 {
  "date": "13/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200313.png"
 },
 {
  "date": "14/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200314.png"
 },
 {
  "date": "15/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200315.png"
 },
 {
  "date": "16/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200316.png"
 },
 {
  "date": "17/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200317.png"
 },
 {
  "date": "18/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200318.png"
 },
 {
  "date": "19/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200319.png"
 },
 {
  "date": "20/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200320.png"
 },
 {
  "date": "21/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200321.png"
 },
 {
  "date": "22/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200322.png"
 },
 {
  "date": "23/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200323.png"
 },
 {
  "date": "24/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200324.png"
 },
 {
  "date": "25/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200325.png"
 },
 {
  "date": "26/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200326.png"
 },
 {
  "date": "27/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200327.png"
 },
 {
  "date": "28/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200328.png"
 },
 {
  "date": "29/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200329.png"
 },
 {
  "date": "30/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200330.png"
 },
 {
  "date": "31/03/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200331.png"
 },
 {
  "date": "01/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200401.png"
 },
 {
  "date": "02/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200402.png"
 },
 {
  "date": "03/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200403.png"
 },
 {
  "date": "04/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200404.png"
 },
 {
  "date": "05/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200405.png"
 },
 {
  "date": "06/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200406.png"
 },
 {
  "date": "07/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200407.png"
 },
 {
  "date": "08/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200408.png"
 },
 {
  "date": "09/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200409.png"
 },
 {
  "date": "10/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200410.png"
 },
 {
  "date": "11/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200411.png"
 },
 {
  "date": "12/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200412.png"
 },
 {
  "date": "13/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200413.png"
 },
 {
  "date": "14/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200414.png"
 },
 {
  "date": "15/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200415.png"
 },
 {
  "date": "16/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200416.png"
 },
 {
  "date": "17/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200417.png"
 },
 {
  "date": "18/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200418.png"
 },
 {
  "date": "19/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200419.png"
 },
 {
  "date": "20/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200420.png"
 },
 {
  "date": "21/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200421.png"
 },
 {
  "date": "22/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200422.png"
 },
 {
  "date": "23/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200423.png"
 },
 {
  "date": "24/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200424.png"
 },
 {
  "date": "25/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200425.png"
 },
 {
  "date": "26/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200426.png"
 },
 {
  "date": "27/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200427.png"
 },
 {
  "date": "28/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200428.png"
 },
 {
  "date": "29/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200429.png"
 },
 {
  "date": "30/04/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200430.png"
 },
 {
  "date": "01/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200501.png"
 },
 {
  "date": "02/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200502.png"
 },
 {
  "date": "03/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200503.png"
 },
 {
  "date": "04/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200504.png"
 },
 {
  "date": "05/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200505.png"
 },
 {
  "date": "06/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200506.png"
 },
 {
  "date": "07/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200507.png"
 },
 {
  "date": "08/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200508.png"
 },
 {
  "date": "09/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200509.png"
 },
 {
  "date": "10/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200510.png"
 },
 {
  "date": "11/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200511.png"
 },
 {
  "date": "12/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200512.png"
 },
 {
  "date": "13/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200513.png"
 },
 {
  "date": "14/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200514.png"
 },
 {
  "date": "15/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200515.png"
 },
 {
  "date": "16/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200516.png"
 },
 {
  "date": "17/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200517.png"
 },
 {
  "date": "18/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200518.png"
 },
 {
  "date": "19/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200519.png"
 },
 {
  "date": "20/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200520.png"
 },
 {
  "date": "21/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200521.png"
 },
 {
  "date": "22/05/2020",
  "img": "img/nordeste/BRASIL_NORDESTE_TEMPORAL_200522.png"
 }
/** map-images:end */
];

export default class Home extends Component {

    defaultBeforeDate = '01/04/2020';
    defaultAfterDate = '01/04/2020';

    state = {
        beforeDateHover: parse("01/04/2020", 'dd/MM/yyyy', new Date()),
        beforeDate: parse("01/04/2020", 'dd/MM/yyyy', new Date()),
        afterDate: parse("10/04/2020", 'dd/MM/yyyy', new Date()),

        beforeDateCurrent: parse("01/04/2020", 'dd/MM/yyyy', new Date()),
        afterDateCurrent: parse("10/04/2020", 'dd/MM/yyyy', new Date()),
    };

    timeout = 0;

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

    showDateErrorMessage(date) {
        toast.error("A data informada não é válida", {
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
            <div className="home section" id="section-1">

                <div className="container-lg">
                    <h4 className="my-4 text-center">Distribuição Espaço-temporal dos casos confirmados do Coronavirus Covid-19 no Nordeste do Brasil</h4>
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
                                                className={`${this.dateExists(this.state.beforeDate) ? '' : 'react-date-picker--error'}`}
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
                                                className={`${this.dateExists(this.state.afterDate) ? '' : 'react-date-picker--error'}`}
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
                                    defaultPosition={0.5}
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

                    <div className="-flex-shrink-1 cvd-caption">
                        <div className="d-flex flex-wrap justify-content-start justify-content-sm-between flex-xl-column">
                            <img className="-img-fluid -float-left" src="img/nordeste/BRASIL - NORDESTE - TEMPORAL_LEGENDA-1.png" />
                            <img className="-img-fluid -float-left d-sm-none d-lg-inline-block" src="img/nordeste/BRASIL - NORDESTE - TEMPORAL_LEGENDA-2.png" />
                            <img className="-img-fluid -float-left" src="img/nordeste/BRASIL - NORDESTE - TEMPORAL_LEGENDA-3.png" />
                        </div>
                    </div>
                </div>

                <ToastContainer />

            </div>
        )
    }
}
