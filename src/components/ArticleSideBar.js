import { Link } from "react-router-dom";
import { Components } from ".";

export function ArticleSideBar(props) {
    return (
        <div className="sidebar sidebar-product">
            <div className="widget widget-products">
                <h4 className="widget-title">Produits Liés</h4>

                <div className="products">
                    <Components.ArticleList articles={props.relatedArticles}/>
                </div>

                <Link to={`/categories/${props.useArticle.category.slug}`} className="btn btn-outline-dark-3">
                    <span>View plus d'artilces</span><i className="icon-long-arrow-right"></i>
                </Link>
            </div>

            <Components.AdBanner3 />
        </div>
    )
}