import { Components } from '.';
import payments from '../assets/images/payments.png';

export function FooterMiddle(props) {
    return (
        <div className="footer-middle border-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-lg-4">
                        <div className="widget widget-about">
                            <Components.Logo />
                            <p>La plus grande plateforme d'achat et vente en ligne en Côte d’Ivoire vous propose un large choix de produits issus des plus grandes marques mondiales. Elle est la première société technologique africaine à être cotée à la bourse de New York.</p>
                            
                            <div className="widget-about-info">
                                <div className="row">
                                    <div className="col-sm-6 col-md-4">
                                        <span className="widget-about-title">Des Questions? Applez nous !</span>
                                        <a href="tel:123456789">+0123 456 789</a>
                                    </div>
                                    <div className="col-sm-6 col-md-8">
                                        <span className="widget-about-title">Moyens de paiement</span>
                                        <figure className="footer-payments">
                                            <img src={payments} alt="Moyens de paiement" width="272" height="20" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-2">
                        <div className="widget">
                            <h4 className="widget-title">Liens Utiles</h4>

                            <ul className="widget-list">
                                <li><a href="about.html">A propos</a></li>
                                <li><a href="/">Comment commander</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="contact.html">Contactez-nous</a></li>
                                <li><a href="login.html">Connexion</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-2">
                        <div className="widget">
                            <h4 className="widget-title">Service client</h4>

                            <ul className="widget-list">
                                <li><a href="/">Moyens de paiment</a></li>
                                <li><a href="/">Rembousement</a></li>
                                <li><a href="/">Retous</a></li>
                                <li><a href="/">Livraison</a></li>
                                <li><a href="/">Conditions d'utilisation</a></li>
                                <li><a href="/">Politique de confidentialité</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-2">
                        <div className="widget">
                            <h4 className="widget-title">Mon compte</h4>

                            <ul className="widget-list">
                                <li><a href="/">Inscription</a></li>
                                <li><a href="cart.html">Mon panier</a></li>
                                <li><a href="/">Suivre ma commande</a></li>
                                <li><a href="/">Aide</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-2">
                        <div className="widget widget-newsletter">
                            <h4 className="widget-title">Lettre d'information</h4>

                            <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan.</p>
                            
                            <form action="#">
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Entrez votre e-mail" aria-label="Adresse Mail" required />
                                    <div className="input-group-append">
                                        <button className="btn btn-dark" type="submit"><i className="icon-long-arrow-right"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}