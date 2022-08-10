import { Fragment } from "react"
import { Components } from "."

export function TrendingArticles(props) {
    return (
        <div className="bg-lighter trending-products">
            <div className="heading heading-flex mb-3">
                <div className="heading-left">
                    <h2 className="title">Nouveaux Articles</h2>
                </div>

                <div className="heading-right">
                    <ul className="nav nav-pills justify-content-center" role="tablist">
                        {props.categories.map((category, index) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <a className="nav-link" id={`trending-${category.slug}-link`} 
                                    data-toggle="tab" href={`#trending-${category.slug}-tab`} role="tab" 
                                    aria-controls={`trending-${category.slug}-tab`} 
                                    aria-selected={index === 0 ? "true" : "false"}>{category.name ?? ""}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="tab-content tab-content-carousel">
                {props.categories.map((category, index) => {
                    return (
                        <div className="tab-pane p-0 fade" id={`trending-${category.slug}-tab`} 
                        role="tabpanel" aria-labelledby={`trending-${category.slug}-link`} key={index}>
                            <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" 
                            data-toggle="owl" data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":1
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":3,
                                            "nav": true
                                        },
                                        "1600": {
                                            "items":5,
                                            "nav": true
                                        }
                                    }
                                }'>
                                    {category.articles.map((article, jndex) => {
                                        return (
                                            <Fragment key={jndex}>
                                                <Components.ArticleItem article={article} category={category}/>
                                            </Fragment>
                                        )
                                    })}
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}