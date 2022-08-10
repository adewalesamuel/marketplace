export function Carousel(props) {
    const owlOptions = {
        "nav": false, 
        "dots": true,
        "margin": 20,
        "loop": false,
        "responsive": {
            "0": {
                "items": props.options?.responsive['0'] ?? 2,
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
                "items": props.options?.responsive['1200'] ?? 3,
                "nav": true
            },
            "1600": {
                "items":5,
                "nav": true
            }
        }
    }
    return (
        <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" 
        data-toggle={props.dataToggle ?? 'owl2'} data-owl-options={JSON.stringify(owlOptions)}
        data-index={props.dataIndex ? "carousel-" + props.dataIndex : ""}>
                {props.children}
        </div>
    )
}