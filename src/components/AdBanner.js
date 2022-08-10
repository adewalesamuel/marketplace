import { Link } from "react-router-dom";
import { Api } from "../services/Api";

export function AdBanner(props) {
    const banner = props.banner ?? {};
    const bannerImg = banner.img_url ? `${Api.URL}/${props.banner.img_url}` : null;

    return (
        <div className="banner banner-overlay">
            <Link to={`/${banner.url ?? ''}`}>
                {/* <img src="assets/images/demos/demo-14/banners/banner-2.jpg" alt="Banner img desc" /> */}
                {/* TODO: Add api url */}
                <img src={bannerImg ?? "assets/images/demos/demo-14/banners/banner-2.jpg"} 
                alt={banner.name ?? "Publicité"} />
            </Link>

            <div className="banner-content">
                <h4 className="banner-subtitle text-white d-none d-sm-block"><Link to="/boots">Boost</Link></h4>
                <h3 className="banner-title text-white"><Link to={`/${banner.url ?? ''}`}>
                    {banner.name ?? "Publicité"}<br />
                    <span>{banner.description ?? "Donnez de la visibilité à vos articles"}</span></Link>
                </h3>
                {props.banner ?
                    <Link to={`/${banner.url ?? ''}`} className="banner-link">
                        Acheter <i className="icon-long-arrow-right"></i>
                    </Link>
                :
                <Link to={`/boosts`} className="banner-link">
                    Voir les Pack <i className="icon-long-arrow-right"></i>
                </Link>
                }
            </div>
        </div>
    )
}