import { Link } from "react-router-dom";

export function ArticleList(props) {
    const articles = props.articles ? props.articles.slice(0, 6) : [];

    return (
        <div className="widget widget-products">
            <h4 className="widget-title"><span>{props.title ?? ""}</span></h4>

            {articles.map((article, index) => {
                return (
                    <div className="products" key={index}>
                        <div className="product product-sm">
                            <figure className="product-media">
                                <Link to={`/articles/${article.slug}`}>
                                    <img src={article.imgs_urls ?  JSON.parse(article.imgs_urls)[0] : 
                                        "../assets/images/demos/demo-14/products/small/product-1.jpg"} 
                                        alt={article.name} className="product-image" />
                                </Link>
                            </figure>

                            <div className="product-body">
                                <h5 className="product-title">
                                    <Link to={`/articles/${article.slug}`}>{article.name}</Link>
                                </h5>
                                <div className="product-price">
                                    {article.price} FCFA
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}