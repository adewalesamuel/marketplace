import { useNavigate } from "react-router-dom"

export function CategorySideBar(props) {
    const navigate = useNavigate(); 

    return (
        <div className="sidebar sidebar-shop">
            <div className="widget widget-clean">
                <label>Filtres:</label>
            </div>

            <div className="widget widget-collapsible">
                <h3 className="widget-title">
                    <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
                        Categories
                    </a>
                </h3>

                <div className="collapse show" id="widget-1">
                    <div className="widget-body">
                        {props.category?.categories.map((subCategory, index) => {
                            return (
                                <div className="filter-items filter-items-count" key={index}>
                                    <div className="filter-item">
                                        <div className="custom-control custom-checkbox" 
                                        onClick={e => navigate(`/categories/${subCategory.slug}`)}>
                                            <input type="checkbox" className="custom-control-input" id={subCategory.slug} />
                                            <label className="custom-control-label" htmlFor={subCategory.slug}>
                                                {subCategory.name}
                                            </label>
                                        </div>
                                        <span className="item-count">3</span>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="widget widget-collapsible">
                <h3 className="widget-title">
                    <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
                        Artsan
                    </a>
                </h3>

                <div className="collapse show" id="widget-4">
                    <div className="widget-body">
                        <div className="filter-items">
                            <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="brand-1" />
                                    <label className="custom-control-label" htmlFor="brand-1">Next</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="widget widget-collapsible">
                <h3 className="widget-title">
                    <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                        Prix
                    </a>
                </h3>

                <div className="collapse show" id="widget-5">
                    <div className="widget-body">
                        <div className="filter-price">
                            <div className="filter-price-text">
                                Price Range:
                                <span id="filter-price-range"></span>
                            </div>

                            <div id="price-slider"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}