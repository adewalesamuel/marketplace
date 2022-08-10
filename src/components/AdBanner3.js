import { Link } from "react-router-dom";
import { Api } from "../services/Api";

export function AdBanner3(props) {
    const banner = props.banner ?? {};
    const bannerImg = banner.img_url ? `${Api.URL}/${props.banner.img_url}` : null;

    return (
        <div className="widget widget-banner-sidebar">
            <div className="banner-sidebar-title">publicité 280 x 280</div>
            
            <div className="banner-sidebar banner-overlay">
                <Link to={banner.url ?? "/"}>
                    <img src={bannerImg ?? "../assets/images/blog/sidebar/banner.jpg"} alt="Publicité" />
                </Link>
            </div>
        </div>
    )
}