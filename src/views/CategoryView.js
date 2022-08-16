import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Components } from "../components";
import { Services } from '../services';

export function CategoryView(props) {
    const abortController = useMemo(() => new AbortController(), []);

    const { pathname } = useLocation();
    const { slug } = useParams();

    const category = props.categories ? 
    props.categories.find((category) => category.slug === slug) : {};

    const [articles, setArticles] = useState([]);
    const [isArticlesLoading, setIsArticlesLoading] = useState(true);
    const [articlesResponseInfo, setArticlesResponseInfo] = useState({});

    useEffect(() => {
        setIsArticlesLoading(true);
        Services.CategoryService.getArticles(abortController.signal, slug)
        .then(response => {
            setIsArticlesLoading(false);
            setArticles(response.articles.data);

            const responseInfo = {
                current_page: response.articles.current_page,
                first_page_url: response.articles.first_page_url,
                from: response.articles.from,
                last_page: response.articles.last_page,
                last_page_url: response.articles.last_page_url,
                links: response.articles.links,
                next_page_url: response.articles.next_page_url,
                path: response.articles.path,
                per_page: response.articles.per_page,
                prev_page_url: response.articles.prev_page_url,
                to: response.articles.to,
                total: response.articles.total
            };

            setArticlesResponseInfo(responseInfo);
        })
        .catch(err => {
            setIsArticlesLoading(false);
            console.log(err);
        })
    }, [pathname, abortController]);

    return (
        <>
        <Components.Breadcrumb />

        <div className="page-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="toolbox">
                            <div className="toolbox-left">
                                <div className="toolbox-info">
                                    Affichage de 
                                    <span> {articlesResponseInfo.to ?? 0} sur {articlesResponseInfo.total}</span> Articles
                                </div>
                            </div>

                            <div className="toolbox-right">
                                <div className="toolbox-layout">
                                    <a href="category-list.html" className="btn-layout">
                                        <svg width="16" height="10">
                                            <rect x="0" y="0" width="4" height="4" />
                                            <rect x="6" y="0" width="10" height="4" />
                                            <rect x="0" y="6" width="4" height="4" />
                                            <rect x="6" y="6" width="10" height="4" />
                                        </svg>
                                    </a>

                                    <a href="category-2cols.html" className="btn-layout">
                                        <svg width="10" height="10">
                                            <rect x="0" y="0" width="4" height="4" />
                                            <rect x="6" y="0" width="4" height="4" />
                                            <rect x="0" y="6" width="4" height="4" />
                                            <rect x="6" y="6" width="4" height="4" />
                                        </svg>
                                    </a>

                                    <a href="category.html" className="btn-layout">
                                        <svg width="16" height="10">
                                            <rect x="0" y="0" width="4" height="4" />
                                            <rect x="6" y="0" width="4" height="4" />
                                            <rect x="12" y="0" width="4" height="4" />
                                            <rect x="0" y="6" width="4" height="4" />
                                            <rect x="6" y="6" width="4" height="4" />
                                            <rect x="12" y="6" width="4" height="4" />
                                        </svg>
                                    </a>

                                    <a href="category-4cols.html" className="btn-layout active">
                                        <svg width="22" height="10">
                                            <rect x="0" y="0" width="4" height="4" />
                                            <rect x="6" y="0" width="4" height="4" />
                                            <rect x="12" y="0" width="4" height="4" />
                                            <rect x="18" y="0" width="4" height="4" />
                                            <rect x="0" y="6" width="4" height="4" />
                                            <rect x="6" y="6" width="4" height="4" />
                                            <rect x="12" y="6" width="4" height="4" />
                                            <rect x="18" y="6" width="4" height="4" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="products mb-3">
                            <div className="row justify-content-start">
                                {articles.map((article, index) => {
                                    return (
                                        <div className="col-6 col-md-4 col-lg-4 col-xl-3" key={index}>
                                            <Components.ArticleItem article={article} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>


                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link page-link-prev" href="#" aria-label="Précédent" tabIndex="-1" 
                                    aria-disabled="true">
                                        <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Précédent
                                    </a>
                                </li>
                                <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item-total">of 6</li>
                                <li className="page-item">
                                    <a className="page-link page-link-next" href="#" aria-label="Next">
                                        Suivant <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <aside className="col-lg-3 order-lg-first">
                        <Components.CategorySideBar categories={props.categories} category={category}/>
                    </aside>
                </div>
            </div>
        </div>
        </>
    )
}