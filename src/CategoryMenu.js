import { Link } from "react-router-dom"

export function CategoryMenu(props) {
    return (
        <div className="dropdown category-dropdown show is-on" data-visible="true">
            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" 
            aria-haspopup="true" aria-expanded="false" data-display="static" 
            title="Voir les categories">
                Voir les categories
            </a>

            <div className="dropdown-menu show">
                <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows">
                        {props.categories.map((category, index) => {
                            return (
                                <li className={category.children?.length > 0 ? 'megamenu-container' : ''} key={index}>
                                    <Link to={`/categories/${category.slug}`}>
                                        <i className="icon-laptop"></i>{category.name}
                                    </Link>
                                    {!category.children ?? 
                                    <div className="megamenu">
                                        <div className="row no-gutters">
                                            <div className="col-md-8">
                                                <div className="menu-col">
                                                    <div className="row">
                                                        <ul>
                                                            {category.children.map((subCategory, index) => {
                                                            return <li><Link to={`/categories/${subCategory.slug}`}>{subCategory.name}</Link></li>
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="banner banner-overlay">
                                                    <a href="category.html" className="banner banner-menu">
                                                        <img src="assets/images/demos/demo-13/menu/banner-1.jpg" alt="Banner" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                </li>
                            )
                        })}
                    </ul>

                </nav>
            </div>
        </div>
    )
}