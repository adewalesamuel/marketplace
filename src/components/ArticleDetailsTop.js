import { Link } from "react-router-dom";
import { Api } from "../services/Api";

export function ArticleDetailsTop(props){
    const article = props.article ?? null;
    const imgUrls = article.img_urls ? JSON.parse(article.img_urls) : [];

    return (
        <div className="product-details-top">
            <div className="row">
                <div className="col-md-6">
                    <div className="product-gallery">
                        <figure className="product-main-image">
                            {/* <span className="product-label label-top">Top</span> */}
                            <img id="product-zoom" src={imgUrls[0] ? `${Api.URL}/${imgUrls[0]}` : 
                            "../assets/images/products/single/sidebar-gallery/1.jpg"} alt={article.name ?? ""}/>

                            <Link to="" id="btn-product-gallery" className="btn-product-gallery">
                                <i className="icon-arrows"></i>
                            </Link>
                        </figure>

                        <div id="product-zoom-gallery" className="product-image-gallery">
                            {imgUrls.map((imgUrl, index) => {
                                return (
                                    <Link className="product-gallery-item active" to="" 
                                    data-image={`${Api.URL}/${imgUrl}`} key={index}>
                                        <img src={`${Api.URL}/${imgUrl}`} alt={article.name} />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="product-details product-details-sidebar">
                        <h1 className="product-title">{article.name === '' ? "Chargement en cours .." : article.name}</h1>

                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val w-80"></div>
                            </div>
                            <a className="ratings-text" href="#product-review-link" id="review-link">( 2 Avis )</a>
                        </div>

                        <div className="product-price">
                            {article.price ?? ""} FCFA
                        </div>

                        <div className="product-content">
                            <p>{article.description ?? ""}</p>
                        </div>

                        <div className="product-details-action">
                            <div className="details-action-col">
                                <label htmlFor="quantity">Qte:</label>
                                <div className="product-details-quantity">
                                    <input type="number" id="quantity" className="form-control" defaultValue="1" 
                                    min="1" step="1" data-decimals="0" name="quantity" required 
                                    onChange={e => props.useOrder.setQuantity(e.target.value)}/>
                                </div>

                                <button className="btn-product btn-cart" onClick={props.handleOrderClick ?? null}>
                                    <span>Commander</span>
                                </button>
                            </div>
                        </div>

                        <div className="product-details-footer details-footer-col">
                            <div className="product-cat">
                                <span>Category:</span>
                                <Link to={`/categories/${article.category?.slug ?? ""}`}>
                                    {article.category?.name ?? ""}
                                </Link>
                            </div>
                            <div className="product-author mb-2 w-100">
                                <span>Artisan:</span>
                                {article.artisan ? 
                                <div className="row align-items-center mt-1 justify-content-start px-2">
                                    <Link to={`/artisans/${article.artisan.id}`}>
                                        <img src={article.artisan.img_url ? `${Api.URL}/${article.artisan.img_url}` : 
                                        "../assets/images/products/single/sidebar-gallery/1.jpg"} alt={article.artisan.name} 
                                        width='65px' height={'65px'} className="rounded-circle"/>
                                    </Link>
                                    <div className="ml-4">
                                        <h6 className="pb-0 mb-0"><Link to={`/artisans/${article.artisan.id}`}>{article.artisan.name}</Link></h6>
                                        <small>Membre depuis le {new Date(article.artisan.created_at)
                                        .toLocaleDateString('fr', {dateStyle: 'long'}) ?? ""}</small>
                                    </div>
                                </div>
                                : null}
                            </div>

                            <div className="social-icons social-icons-sm">
                                <span className="social-label">Partager:</span>
                                <a href="https://facebook.com" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                <a href="https//twitter.com" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                <a href="https://instagram.com" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                <a href="https//pinterest.com" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}