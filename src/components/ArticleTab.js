import { Components } from ".";

export function ArticleTab(props) {
    const article = props.article ?? null;

    return (
        <div className="product-details-tab">
            <ul className="nav nav-pills justify-content-center" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="product-desc-link" data-toggle="tab" 
                    href="#product-desc-tab" role="tab" aria-controls="product-desc-tab" 
                    aria-selected="true">Description</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="product-shipping-link" data-toggle="tab" 
                    href="#product-shipping-tab" role="tab" aria-controls="product-shipping-tab" 
                    aria-selected="false">Livraison & Retours</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="product-review-link" data-toggle="tab" 
                    href="#product-review-tab" role="tab" aria-controls="product-review-tab" 
                    aria-selected="false">Avis (2)</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="product-desc-tab" role="tabpanel" 
                aria-labelledby="product-desc-link">
                    <div className="product-desc-content">
                        <h3>Description</h3>
                        <p>{article.description ?? ""}</p>
                    </div>
                </div>
                <div className="tab-pane fade" id="product-shipping-tab" role="tabpanel" 
                aria-labelledby="product-shipping-link">
                    <div className="product-desc-content">
                        <h3>Livraison et retours</h3>
                        <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <a href="#">Delivery information</a><br />
                        We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <a href="#">Returns information</a></p>
                    </div>
                </div>
                <div className="tab-pane fade" id="product-review-tab" role="tabpanel" 
                aria-labelledby="product-review-link">
                <Components.ArticleReviews />
                </div>
            </div>
        </div>
    )
}