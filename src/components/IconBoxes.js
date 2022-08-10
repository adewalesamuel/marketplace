export function IconBoxes(props) {
    return (
        <div className="icon-boxes-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="icon-box icon-box-side">
                            <span className="icon-box-icon text-dark">
                                <i className="icon-rocket"></i>
                            </span>
                            <div className="icon-box-content">
                                <h3 className="icon-box-title">Livraison Gratuite</h3>
                                <p>Toutes commandes</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="icon-box icon-box-side">
                            <span className="icon-box-icon text-dark">
                                <i className="icon-rotate-left"></i>
                            </span>

                            <div className="icon-box-content">
                                <h3 className="icon-box-title">Retours gratuits</h3>
                                <p>2 à 7 jours</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="icon-box icon-box-side">
                            <span className="icon-box-icon text-dark">
                                <i className="icon-info-circle"></i>
                            </span>

                            <div className="icon-box-content">
                                <h3 className="icon-box-title">Réduction de 20%</h3>
                                <p>À partir de 2 articles</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="icon-box icon-box-side">
                            <span className="icon-box-icon text-dark">
                                <i className="icon-life-ring"></i>
                            </span>

                            <div className="icon-box-content">
                                <h3 className="icon-box-title">Support</h3>
                                <p>7 jours sur 7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}