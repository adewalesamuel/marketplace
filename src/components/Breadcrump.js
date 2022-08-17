export function Breadcrumb(props){
    return (
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
            <div className="container d-flex align-items-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Acceuil</a></li>
                    <li className="breadcrumb-item"><a href="/">Articles</a></li>
                    <li className="breadcrumb-item active" aria-current="page">With Sidebar</li>
                </ol>

                <nav className="product-pager ml-auto" aria-label="Product">
                    <a className="product-pager-link product-pager-prev" href="/" aria-label="Previous" tabIndex="-1">
                        <i className="icon-angle-left"></i>
                        <span>Prev</span>
                    </a>

                    <a className="product-pager-link product-pager-next" href="/" aria-label="Next" tabIndex="-1">
                        <span>Next</span>
                        <i className="icon-angle-right"></i>
                    </a>
                </nav>
            </div>
        </nav>
    )
}