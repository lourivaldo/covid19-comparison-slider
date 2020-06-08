import React, {Component} from 'react'
import './Footer.scss'

export default class Footer extends Component {

    render() {

        return (
            <footer>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%">
                    <polygon fill="#efefef" points="0,100 100,0 100,100"/>
                </svg>

                <div className="container justify-content-center partners">

                    <h2>Apoio e Colaboradores</h2>
                    <hr/>

                    <div className="row justify-content-around">

                        <div className="col-12 col-md-6 col-lg-4"><img src="https://www.irrd.org/wp-content/uploads/2020/04/gov-recife.png" alt=""/></div>
                        <div className="col-12 col-md-6 col-lg-4"><img src="https://www.irrd.org/wp-content/uploads/2020/04/gov-pe.png" alt=""/></div>
                        <div className="col-12 col-md-12 col-lg-4"><img src="https://www.irrd.org/wp-content/uploads/2020/04/ministeriosaude.png" alt=""/></div>

                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img className="partner-2" src="https://www.irrd.org/wp-content/uploads/2020/04/lika.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img className="partner-2" src="https://www.irrd.org/wp-content/uploads/2020/04/ufpe.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img className="partner-2" src="https://www.irrd.org/wp-content/uploads/2020/04/geosere.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img className="partner-2" src="https://www.irrd.org/wp-content/uploads/2020/04/ufrpe.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img className="partner-2" src="https://www.irrd.org/wp-content/uploads/2020/04/if.png" alt=""/></div>

                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/04/unicef.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/05/colaboradores_150x150_jica.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/04/ucl.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/05/colaboradores_150x150nagasaki.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/04/upc.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/04/ines.png" alt=""/></div>

                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/04/fade.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/05/colaboradores_150x150_chesf.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/05/colaboradores_150x150_canon.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/05/colaboradores_150x150_jcpm.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/05/colaboradores_150x150_genomika.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/05/colaboradores_150x150_fiocruzpe.png" alt=""/></div>

                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/05/colaboradores_150x150_epitrack.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/05/colaboradores_150x150_elife.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/05/colaboradores_150x150_nutes.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/05/colaboradores_150x150_circor.png" alt=""/></div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-2"><img src="https://www.irrd.org/wp-content/uploads/2020/05/colaboradores_150x150_privatekit.png" alt=""/></div>

                        <div className="separator">
                        </div>

                        <div className="col-6"><img className="partner-6" src="https://www.irrd.org/wp-content/uploads/2020/04/mpt.png" alt=""/></div>
                        <div className="col-6"><img className="partner-6" src="https://www.irrd.org/wp-content/uploads/2020/04/mpf.png" alt=""/></div>

                    </div>

                </div>

                <div className="copyright">
                    <div className="container">
                        Copyright © 2020. Todos os direitos reservados.
                    </div>
                </div>
            </footer>
        )
    }
}
