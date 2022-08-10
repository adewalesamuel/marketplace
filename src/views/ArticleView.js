import { Fragment, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Components } from "../components";
import { Hooks } from "../hooks";
import { Services } from "../services";
import { Api } from "../services/Api";
import { Utils } from "../utils";
import { Auth } from "../utils/Auth";

export function ArticleView(props) {
    const abortController = useMemo(() => new AbortController(), [])

    const {slug} = useParams();
    const useArticle = Hooks.useArticle();
    const useOrder = Hooks.useOrder();

    const [bestArticles, setBestArticles] = useState([]);
    const [relatedArticles, setRelatedArticles] = useState([]);
    const [hasLoadedBestArticles, setHasLoadedBestArticles] = useState(false);
    const [isOrderModalHidden, setIsOrderModalHidden] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleOrderClick = e => {
        e.preventDefault();

        if (!Auth.isLoggedIn()) 
            return window.document.querySelector('#auth-btn').click();

        const quantity = Number.isInteger(parseInt(useOrder.quantity)) ? 
        Math.abs(parseInt(useOrder.quantity)) : 1

        useOrder.setPrice(quantity * useArticle.price);
        setIsOrderModalHidden(false);
    }
    const handleOrderSubmit = e => {
        e.preventDefault();

        const payload = {
            client_id: Auth.getUser().id,
            article_id: useArticle.id,
            price: useOrder.price,
            quantity: useOrder.quantity,
            shipping_place: useOrder.shipping_place,
            additionnal_informations: useOrder.additionnal_informations
        };

        setErrorMessage('');
        useOrder.setIsDisabled(true);
        Services.OrderService.create(JSON.stringify(payload), abortController.signal)
        .then(() => {
            alert("Votre commande a bien été  envoyée !");
            setErrorMessage('');
            useOrder.setIsDisabled(false);
            setIsOrderModalHidden(true);
            useOrder.setAdditionnal_informations("");
        })
        .catch(err => {
            err.message.then(msg => setErrorMessage(msg));
            useOrder.setIsDisabled(false);
        })
    }

    useEffect(() => {
        if (!hasLoadedBestArticles) return;
        
        (async function(){
            setRelatedArticles([]);

            const {articles} = await Services.CategoryService
            .getArticles(abortController.signal, useArticle.category.slug)
            .catch(err => console.log(err));
            
            setRelatedArticles(articles.data);

        })()
    }, [hasLoadedBestArticles, slug])

    useEffect(() => {
        if (bestArticles.length < 1) return;
        Utils.Dom.owlCarousel('[data-toggle="owl2"]');
    }, [bestArticles.length])

    useEffect(() => {
        (async function() {
            useArticle.emptyArticle();
            setHasLoadedBestArticles(false);

            await useArticle.getArticle(slug, abortController.signal)
            .catch(err => console.log(err));

            if (bestArticles.length < 1) {
                //Replace with best articles
                const {articles} = await Services.ArticleService.getAll(abortController.signal)
                .catch(err => console.log(err));
    
                setHasLoadedBestArticles(true);
                setBestArticles(articles.data);
            }
        })();
    
      return () => {
        //
      }
    }, [abortController, slug])
    
    return (
        <>
        <Components.Breadcrumb />
        <div className="page-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <Components.ArticleDetailsTop article={useArticle} useOrder={useOrder}
                        handleOrderClick={handleOrderClick}/>
                        <Components.ArticleTab article={useArticle} />

                        <h2 className="title text-center mb-4">Vous pourriez aussi aimer</h2>
                        <Components.Carousel options={{responsive:{"1200": 4}}}>
                            {bestArticles.map((article, index) => {
                                return (
                                    <Fragment key={index}>
                                        <Components.ArticleItem article={article} category={article.category}/>
                                    </Fragment>
                                )
                            })}
                        </Components.Carousel>
                    </div>

                    <aside className="col-lg-3">
                        <Components.ArticleSideBar useArticle={useArticle} relatedArticles={relatedArticles}/>
                    </aside>
                </div>

            </div>
        </div>
        <Components.Modal isHidden={isOrderModalHidden} modalTitle="Formulaire de commande"
        closeModal={() => setIsOrderModalHidden(true)}confirmModal={handleOrderSubmit} 
        isDisabled={useOrder.isDisabled}>
            <>
            <Components.ErrorMessage message={errorMessage}/>
            <label>Résumé de la commande</label>
            <div className="row justify-content-center mb-2">
                <div className="col-2">
                    <img src={useArticle.img_urls ? `${Api.URL}/${JSON.parse(useArticle.img_urls)[0]}` : ""} 
                    className="rounded" alt={useArticle.name} width={"70px"} height={"70px"}/>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-10">
                            <div className="product-title">
                                <h6 className="mb-1 pt-1">{useArticle.name}</h6>
                            </div>
                        </div>
                        <div className="col-2 pt-1">X {useOrder.quantity}</div>

                    </div>
                    <div className="product-price">{useOrder.price} FCFA</div>
                </div>
            </div>
            <Components.OrderForm useOrder={useOrder} handleOrderSubmit={handleOrderSubmit}/>
            </>
        </Components.Modal>
        </>
    )
}