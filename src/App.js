import TwentyTwenty from 'react-twentytwenty';
import React from 'react';
import DatePicker from 'react-date-picker';
import { format, parse, compareAsc, compareDesc} from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarAlt, faUndo, faUndoAlt} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const images = [
    {date: "01/04/2020", img: "img/confirmados/01.04_casos_confirmados por bairro - Copia.png"},
    {date: "10/04/2020", img: "img/confirmados/10.04 - copia.png"},
    {date: "30/04/2020", img: "img/confirmados/30.04b - Copia.png"},
    {date: "20/05/2020", img: "img/confirmados/20.05b - Copia.png"},
    // {date: "01/04/2020", img: "img/map-01-04-2020.jpeg"},
    // {date: "20/05/2020", img: "img/map-20-05-2020.jpeg"},
    // {date: "13/05/2020", img: "img/map-13-05-2020.png"},
    // {date: "14/05/2020", img: "img/map-14-05-2020.png"},
    // {date: "15/05/2020", img: "img/map-15-05-2020.png"},
    // {date: "20/06/2020", img: "img/map-20-06-2020.png"},
];

class App extends React.Component {

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
            <div className="App">

                <div className="container-lg">
                    <h2 className="my-4">O que é o Lorem Ipsum?</h2>
                    <h6 className="my-4 cvd-subtitle">
                        O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.
                    </h6>

                    <form className="">
                    <div className="form-row justify-content-between">
                        <div className="col-6 col-md-3 col-lg-2 my-1">
                            <label className="cvd-label">Antes</label>

                            {/*<Select*/}
                            {/*    value={beforeDate}*/}
                            {/*    onChange={this.handleChangeBefore}*/}
                            {/*    options={this.mapOptions()}*/}
                            {/*/>*/}
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

                        <div className="col-6 col-md-3 col-lg-2 my-1">
                            <label className="cvd-label">Depois</label>
                            {/*<Select*/}
                            {/*    value={afterDate}*/}
                            {/*    onChange={this.handleChangeAfter}*/}
                            {/*    options={this.mapOptions()}*/}
                            {/*/>*/}
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

                <div className="twentytwenty-wrapper my-2 mb-4">
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

                {/*<div className="container-lg">*/}
                {/*    <div className="row my-3">*/}
                {/*        <div className="col-md-12">*/}
                {/*            <img src="img/confirmados/legenda.png" alt=""/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <ToastContainer />
            </div>
        );
    }
}

export default App;
