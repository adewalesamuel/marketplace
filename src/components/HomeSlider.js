import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function HomeSlider(props) {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        let slides = [
            {
                'img_url': 'assets/images/demos/demo-14/slider/slide-1.jpg',
                'title': "Titre de la bannière",
                'description': "Descrption de la bannière",
                'url' : "/"
            }
        ];

        setSlides(slides);
    
      return () => {
        //
      }
    }, [])
    
    return (
        <div className="intro-slider-container slider-container-ratio mb-2">
            <div className="intro-slider owl-carousel owl-simple owl-nav-inside" data-toggle="owl" 
            data-owl-options='{
                    "nav": false, 
                    "dots": true
                }'>
                    {slides.map((slide, index) => {
                        return (
                            <div className="intro-slide" key={index}>
                                <figure className="slide-image">
                                    <picture>
                                        {/* <source media="(max-width: 480px)" srcSet="assets/images/demos/demo-14/slider/slide-1-480w.jpg" /> */}
                                        <img src={slide.img_url ?? ""} alt={slide.title ?? ""} />
                                    </picture>
                                </figure>

                                <div className="intro-content">
                                    <h3 className="intro-subtitle">Banière {index + 1}</h3>
                                    <h1 className="intro-title text-white">
                                       {slide.title}
                                    </h1>

                                    <div className="intro-text text-white">
                                        {slide.description}
                                    </div>

                                    <Link to={slide.url} className="btn btn-primary">
                                        <span>Voir plus</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>

                        )
                    })}
            </div>
            
            <span className="slider-loader"></span>
        </div>
    )
}