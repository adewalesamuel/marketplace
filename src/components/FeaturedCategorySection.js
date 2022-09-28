import { Fragment, useEffect} from "react";
import { Link } from "react-router-dom";
import { Components } from ".";
import { Api } from "../services/Api";
import { Utils } from "../utils";

export function FeaturedCategorySection(props) { 
    const category = props.category ?? {};   
    const categoryBgImgUrl = category.img_url ? `${Api.URL}/${category.img_url}` : null;
    const subCategories = category.categories ?? [];
    const articles = props.articles ?? [];

    useEffect(() => {
      if (articles.length > 0) {
        Utils.Dom.owlCarousel(`[data-index=carousel-${props.index}]`);
      };
      return () => {
        //
      }
    }, [articles.length])
        
    if (!category) return null;
    
    return (
        <div className="row cat-banner-row electronics">
            <div className="col-xl-3 col-xxl-4">
                <div className="cat-banner row no-gutters">
                    <div className="cat-banner-list col-sm-6 d-xl-none d-xxl-flex" 
                    style={{backgroundImage: categoryBgImgUrl ?? "url(assets/images/demos/demo-14/banners/banner-bg-1.jpg)"}}>
                        <div className="banner-list-content">
                            <h2><Link to={`/categories/${category.slug}`}>{category.name}</Link></h2>

                            <ul>
                                {subCategories.map((subCategorie, index) => {
                                    return (<li key={index}>
                                        <Link to={`/categories/${subCategorie.slug}`}>{subCategorie.name}</Link>
                                        </li>)
                                })}
                                <li className="list-all-link">
                                    <Link to={`/categories/${category.slug}`}>Voir tous les produits</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-6 col-xl-12 col-xxl-6">
                        <div className="banner banner-overlay">
                            <Link to={`/categories/${category.slug}`}>
                                <img src={categoryBgImgUrl ?? "assets/images/demos/demo-14/banners/banner-5.jpg"} 
                                alt={category.name} />
                            </Link>

                            <div className="banner-content">
                                <h4 className="banner-subtitle text-white"><a href="/">Category</a></h4>
                                <h3 className="banner-title text-white">
                                    <Link to={`/categories/${category.slug}`}>
                                        {category.name}
                                        <br /><span>{category.description ?? ""}</span>
                                    </Link>
                                </h3>
                                <Link to={`/categories/${category.slug}`} className="banner-link">
                                    Voir les produits <i className="icon-long-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-9 col-xxl-8">
                <Components.Carousel dataIndex={props.index}>
                    {articles.map((article, index) => {
                        return (
                            <Fragment key={index}>
                                <Components.ArticleItem article={article} category={category} />
                            </Fragment>
                        )
                    })}
                </Components.Carousel>
            </div>
        </div>
    )
}   