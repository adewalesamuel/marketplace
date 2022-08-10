import { useEffect, useMemo, useState } from "react";
import { Components } from "../components";
import { init as initPageScripts} from "../assets/js/main";
import { Services } from "../services";

export function HomeView(props) {
    const abortController = useMemo(() => new AbortController, []);

    const [boosts, setBoosts] = useState([]);
    const [bestArticles, setBestArticles] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [featuredCategories, setFeaturedCategories] = useState([])
    const [featuredCategoryArticle1, setFeaturedCategoryArticle1] = useState([]);
    const [featuredCategoryArticle2, setFeaturedCategoryArticle2] = useState([]);
    const [featuredCategoryArticle3, setFeaturedCategoryArticle3] = useState([]);
    const [featuredCategoryArticle4, setFeaturedCategoryArticle4] = useState([]);
    const [isFeaturedCategoryArticlesLoaded, setIsFeaturedCategoryArticlesLoaded] = useState(false);

    const loadArtclesByCategories = async (categories, index = 1) => {
        if (!categories || categories.length < 1) return;

        const {articles} = await Services.CategoryService
        .getArticles(abortController.signal, categories[0].slug);

        switch (index) {
            case 1:
                setFeaturedCategoryArticle1(articles.data);
                break;
            case 2:
                setFeaturedCategoryArticle2(articles.data);
                break;
            case 3:
                setFeaturedCategoryArticle3(articles.data);
                break;
            case 4:
                setFeaturedCategoryArticle4(articles.data);
                setIsFeaturedCategoryArticlesLoaded(true);
                break;
            default:
                break;
        }

        categories.shift();
        loadArtclesByCategories(categories, index + 1);
    }

    useEffect(() => {
        if (!isFeaturedCategoryArticlesLoaded) return;

        //Replace with getBestArticles
        Services.ArticleService.getAll(abortController.signal)
        .then(response => {
            setBestArticles(response.articles.data);
        })
        .catch(err => console.log(err))

    }, [isFeaturedCategoryArticlesLoaded, abortController])

    useEffect(() => {
        initPageScripts();

        if (props.categories.length < 1) {
            return;
        } else {    
            if (categoryProducts.length < 1) {
                setBoosts(
                    [
                        {
                            name: "Mon Produit Boost",
                            description: "Promotion 30%",
                        }
                    ]);

                Services.ArticleService.getTrendingArticles(abortController.signal)
                .then(response => {
                    setCategoryProducts(response.categories);
    
                    let categories = [];
    
                    if (props.categories.length >= 7) {
                        categories = [...props.categories].splice(4);
                    }else {
                        categories = [...props.categories];
                    }

                    setFeaturedCategories([...props.categories]);
                    loadArtclesByCategories(categories);
                })
                .catch(err => console.log(err));
            }else {
                window.setTimeout(() => {
                    window.document.getElementById(`trending-${categoryProducts[0].slug}-link`).click();
                }, 0)
            }
        };

        
      return () => {
        //
      }
    }, [abortController, 
        props.categories.length,
        categoryProducts.length])
    
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-9 col-xxl-8 offset-lg-3 offset-xxl-2">
                    <Components.HomeSlider />
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-9 col-xxl-10">
                    <div className="row">
                        <div className="col-lg-12 col-xxl-4-5col">
                            <div className="row">
                                <div className="col-md-6">
                                    <Components.AdBanner banner={boosts[0] ?? null}/>
                                </div>

                                <div className="col-md-6">
                                    <Components.AdBanner banner={boosts[0] ?? null}/>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mb-3"></div>
                    <Components.BrandCarousel />
                    <div className="mb-5"></div>
                    <Components.TrendingArticles categories={categoryProducts}/>
                    <div className="mb-5"></div>
                    <Components.FeaturedCategorySection category={featuredCategories[0]}
                    articles={featuredCategoryArticle1} index={1}/>
                    <div className="mb-3"></div>
                    <Components.FeaturedCategorySection category={featuredCategories[1]}
                    articles={featuredCategoryArticle2} index={2}/>
                    <div className="mb-3"></div>
                    <div className="row">
                        <div className="col-md-6">
                            <Components.AdBanner banner={boosts[1] ?? null}/>
                        </div>

                        <div className="col-md-6">
                            <Components.AdBanner banner={boosts[1] ?? null}/>
                        </div>
                    </div>
                    <div className="mb-3"></div>
                    <Components.FeaturedCategorySection category={featuredCategories[2]}
                    articles={featuredCategoryArticle3} index={3}/>
                    <div className="mb-3"></div>
                    <Components.FeaturedCategorySection category={featuredCategories[3]}
                    articles={featuredCategoryArticle4} index={4}/>
                    <div className="mb-3"></div>

                    <Components.IconBoxes />

                    <div className="mb-5"></div>
                </div>

                <aside className="col-xl-3 col-xxl-2 order-xl-first">
                    <Components.HomeSideBar banners={boosts} bestArticles={bestArticles}/>
                </aside>
            </div>
        </div>
        </>
    )
}