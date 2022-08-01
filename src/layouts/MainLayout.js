import "../assets/vendor/line-awesome/line-awesome/line-awesome/css/line-awesome.min.css";

import "../assets/css/bootstrap.min.css";
import "../assets/css/plugins/owl-carousel/owl.carousel.css";
import "../assets/css/plugins/magnific-popup/magnific-popup.css";
import "../assets/css/plugins/jquery.countdown.css";

import "../assets/css/style.css";
import "../assets/css/skins/skin-demo-14.css";
import "../assets/css/demos/demo-14.css";

import { Components } from "../components";

export function MainLayout(props) {
    return (
        <>
        <div className="page-wrapper">
            <Components.Header />
            <main className="main">
                <div className="mb-lg-2"></div>
                <div className="container-fluid">
                    {props.children}
                </div>
            </main>
            <Components.Footer />
        </div>
        </>
    )
}