import { Link } from "react-router-dom";
import { Api } from "../services/Api";

export function ArticleItem(props) {
    const imgUrls = props.article.img_urls ? JSON.parse(props.article.img_urls) : [];
    const firstArticleImg = imgUrls[0] ? `${Api.URL}/${imgUrls[0]}` : null;
    const article = props.article ?? {};
    const category = props.category ?? article.category;

    return (
        <div className={`product text-center ${props.class ?? ""}`}>
            <figure className="product-media">
                <Link to={`/articles/${article.slug}`} style={{
                    width:"230px", 
                    height:"202px", 
                    objectFit:"contain"}}>
                    <img src={firstArticleImg ?? "assets/images/demos/demo-14/products/product-3.jpg"} 
                    alt={article.name} className="product-image" width="230px" height="202px"/>
                </Link>

                <div className="product-action-vertical">
                    {/* <a href="/" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a> */}
                    {/* <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a> */}
                    {/* <a href="/" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a> */}
                </div>

                <div className="product-action">
                    <Link to={`/articles/${article.slug}`} className="btn-product btn-cart" 
                    title="Voir l'article"><span>Voir l'article</span></Link>
                </div>
            </figure>

            <div className="product-body">
                <div className="product-cat">
                    <Link to={`/categories/${category.slug}`}>{category.name}</Link>
                </div>
                <h3 className="product-title">
                    <Link to={`/articles/${article.slug}`}>{article.name}</Link>
                </h3>
                <div className="product-price">
                    {article.price} FCFA
                </div>
                <div className="ratings-container">
                    <div className="ratings">
                        <div className="ratings-val w-60"></div>
                    </div>
                    <span className="ratings-text">( 8 Avis )</span>
                </div>
            </div>
        </div>
    )
}