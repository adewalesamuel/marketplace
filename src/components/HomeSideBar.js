import { Components } from ".";

export function HomeSideBar(props) {
    return (
        <div className="sidebar sidebar-home">
            <div className="row">
                <div className="col-sm-6 col-xl-12">
                    <Components.AdBanner2 banner={props.banners[1]}/>
                </div>

                <div className="col-sm-6 col-xl-12 mb-2">
                    <Components.ArticleList articles={props.bestArticles} title={"Meilleurs Ventes"}/>
                </div>
                
                <div className="col-12">
                    <div className="widget widget-deals">
                        <h4 className="widget-title"><span>Offre spéciales</span></h4>

                        <div className="row">
                            <div className="col-sm-6 col-xl-12">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-sale">Deal of the week</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-14/products/deals/product-1.jpg" 
                                            alt="Product image" className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        </div>

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Audio</a>
                                        </div>
                                        <h3 className="product-title"><a href="product.html">Bose SoundLink Micro speaker</a></h3>
                                        <div className="product-price">
                                            <span className="new-price">$99.99</span>
                                            <span className="old-price">Was $110.99</span>
                                        </div>
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val w-100"></div>
                                            </div>
                                            <span className="ratings-text">( 4 Avis )</span>
                                        </div>

                                        <div className="product-nav product-nav-dots">
                                            <a href="#" className="active" style={{background: "#f3815f"}}><span className="sr-only">Color name</span></a>
                                            <a href="#" style={{background: "#333333"}}><span className="sr-only">Color name</span></a>
                                        </div>
                                    </div>

                                    <div className="product-countdown" data-until="+44h" data-relative="true" data-labels-short="true"></div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-xl-12">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-sale">Deal of the week</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-14/products/deals/product-2.jpg" alt="Product image" className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        </div>

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Cameras</a>
                                        </div>
                                        <h3 className="product-title"><a href="product.html">GoPro HERO Session Waterproof HD Action Camera</a></h3>
                                        <div className="product-price">
                                            <span className="new-price">$196.99</span>
                                            <span className="old-price">Was $210.99</span>
                                        </div>
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val w-100"></div>
                                            </div>
                                            <span className="ratings-text">( 19 Avis )</span>
                                        </div>
                                    </div>

                                    <div className="product-countdown" data-until="+52h" data-relative="true" data-labels-short="true"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-sm-6 col-xl-12">
                    <Components.AdBanner2 banner={props.banners[1]}/>
                </div>
                
            </div>
        </div>
    )
}