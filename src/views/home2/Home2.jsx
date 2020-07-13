import React, { Component } from 'react'
import DatePicker from "react-date-picker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBackward,
    faCalendarAlt,
    faChevronRight,
    faExpand,
    faMinus,
    faPlus,
    faUndoAlt
} from "@fortawesome/free-solid-svg-icons";
import TwentyTwenty from "react-twentytwenty";
import {compareAsc, compareDesc, format, parse} from "date-fns";
import {toast} from "react-toastify";
import "./Home2.scss";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default class Home2 extends Component {

    state = {
        aPositionX: 0,
            aPositionY: 0,
            aScale: 1,

        // b: {
        //     positionX: 0,
        //     positionY: 0,
        //     scale: 1,
        // }
    };

    currentMap = {
        type: 'before',
        positionX: null,
        positionY: null,
        scale: null,
    };
    config = null;

    defaultBeforeDate = null;
    defaultAfterDate = null;

    timeout = 0;
    timeoutDateInterval = 0;

    setTransformBefore = undefined;
    setTransformAfter = undefined;

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
            beforeDate = parse(this.defaultBeforeDate, 'dd/MM/yyyy', new Date());
            this.setState({beforeDateHover: beforeDate});
        }

        this.setState({beforeDate});

        if (!this.validDate(beforeDate)) return;

        this.setState({beforeDateCurrent: beforeDate});
    };

    handleChangeAfter = afterDate => {

        if (!afterDate) afterDate = parse(this.defaultAfterDate, 'dd/MM/yyyy', new Date());

        this.setState({afterDate});

        if (!this.validDate(afterDate)) return;

        this.setState({afterDateCurrent: afterDate});

        this.forceUpdate();
    };

    mapOptions() {
        return this.config.images.map(img => {
            return {value: img.img, label: img.date, isDisabled: false};
        })
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

    onZoomChange(type, args, setTransformFunc) {

        let {positionX, positionY, scale} = args;
        if (scale === 1 && positionX) {

        }
        setTransformFunc(positionX, positionY, scale, 1);

        this.currentMap.type = type;
        this.currentMap.positionX = positionX;
        this.currentMap.positionY = positionY;
        this.currentMap.scale = scale;
    }

    onZoomChangeA(type, args, setTransformFunc) {
        this.currentType = type;
        console.log('onZoomChangeA')
        // console.log(args)
        let {positionX, positionY, scale} = args;
        console.log(positionX, positionY, scale)
        // if (positionX > 0) positionX = 0;
        // if (positionY > 0) positionY = 0;

        setTransformFunc(positionX, positionY, scale, 1);
    }

    render() {

        return (
            <div className="home-2 section" id={`section-${this.config.id}`}>

                <div className=" d-none container-lg">
                    <div className="w-100">
                        <TransformWrapper
                            options={{limitToBounds: true, limitToWrapper: true, minPositionX: 0, minPositionY: 0, centerContent: true}}
                            zoomOut={{animation: false}}
                            pan={{
                                lockAxisX: true,
                                lockAxisY: true,
                            }}
                            defaultScale={1}
                            // onZoomChange={(args) => this.onZoomChange('before', args, this.setTransformAfter)}
                            // onWheel={(args) => this.onZoomChange('before',args, this.setTransformAfter)}
                            // onWheelStop={(args) => this.onZoomChange('before',args, this.setTransformAfter)}
                            // onPanning={(args) => this.onZoomChange('before',args, this.setTransformAfter)}
                            // onPanningStop={(args) => this.onZoomChangeA('before',args, this.setTransformAfter)}
                            // onPinching={(args) => this.onZoomChange('before',args, this.setTransformAfter)}
                            // onPinchingStop={(args) => this.onZoomChange('before',args, this.setTransformAfter)}
                        >
                            {({ zoomIn, zoomOut, resetTransform, setTransform, ...rest }) => {
                                this.setTransformBefore = setTransform;
                                return (
                                    <React.Fragment>
                                        <div className="tools">
                                            <button onClick={zoomIn}>+</button>
                                            <button onClick={zoomOut}>-</button>
                                            <button onClick={resetTransform}>x</button>
                                        </div>
                                        <TransformComponent
                                            limitToWrapper={true}
                                            enablePadding={false}
                                            enableVelocity={false}
                                            velocityTimeBasedOnMove={false}
                                            velocityAnimationSpeed={0}
                                            minVelocity={0}
                                            minVelocityScale={0}
                                            velocitySensitivity={0}
                                        >
                                            <img src={this.getImage(this.state.beforeDateCurrent)} alt="test" className="w-100"/>
                                            <div>Example text</div>
                                        </TransformComponent>
                                    </React.Fragment>
                                )
                            }}
                        </TransformWrapper>

                        <TransformWrapper
                            defaultScale={1}
                        >
                            {({ zoomIn, zoomOut, resetTransform, setTransform, ...rest }) => {
                                this.setTransformAfter = setTransform;
                                return (
                                    <React.Fragment>
                                        <div className="tools">
                                            <button onClick={zoomIn}>+</button>
                                            <button onClick={zoomOut}>-</button>
                                            <button onClick={resetTransform}>x</button>
                                        </div>
                                        <TransformComponent>
                                            <img src={this.getImage(this.state.afterDateCurrent)} alt="test" className="w-100"/>
                                        </TransformComponent>
                                    </React.Fragment>
                                )
                            }}
                        </TransformWrapper>
                    </div>

                </div>

                <div className="container-lg">
                    <h4 className="my-4 text-center">{this.config.title}</h4>
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
                                                minDetail="month"
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
                                                minDetail="month"
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
                                    // left={<img className="cvd-map-image" src={this.getImage(this.state.beforeDateCurrent)} alt="Imagem antes" />}
                                    left={(
                                        <TransformWrapper
                                            defaultScale={1}
                                            pinch={{disabled: true}}
                                            pan={{disabled: true}}
                                        >
                                            {({ zoomIn, zoomOut, resetTransform, setTransform, ...rest }) => {
                                                this.setTransformAfter = setTransform;
                                                return (
                                                    <React.Fragment>
                                                        <div className="flex tools">
                                                            <button className="btn btn-primary btn-sm" onClick={(e) => { e.stopPropagation(); zoomOut(e)}}>
                                                                <FontAwesomeIcon icon={faMinus} size={"sm"}/>
                                                            </button>
                                                            <button className="btn btn-primary btn-sm" onClick={(e) => { e.stopPropagation(); zoomIn(e)}}>
                                                                <FontAwesomeIcon icon={faPlus} size={"sm"}/>
                                                            </button>
                                                            <button className="btn btn-primary btn-sm" onClick={resetTransform}>
                                                                <FontAwesomeIcon icon={faExpand} size={"sm"}/>
                                                            </button>
                                                        </div>
                                                        <TransformComponent>
                                                            <div className="img-content"><img src={this.getImage(this.state.beforeDateCurrent)} alt="test" className="cvd-map-image w-100"/></div>
                                                        </TransformComponent>
                                                    </React.Fragment>
                                                )
                                            }}
                                        </TransformWrapper>
                                    )}
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

                    <div className="cvd-caption d-flex flex-wrap justify-content-center justify-content-md-between">
                        {this.config.captions.map(((caption, i) => {
                            return (
                                <img className="" src={caption.img_url} alt={caption.description} key={i}/>
                            )
                        }))}
                    </div>
                </div>

            </div>
        )
    }
}
