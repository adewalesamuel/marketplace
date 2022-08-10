import { Components } from ".";

export function HeaderBottom(props) {
    return (
        <div className="header-bottom sticky-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-auto col-lg-3 col-xl-3 col-xxl-2 header-left">
                        <Components.CategoryMenu categories={props.categories} />
                    </div>

                    <div className="col col-lg-6 col-xl-6 col-xxl-8 header-center">
                       <Components.MainMenu />
                    </div>

                    <div className="col col-lg-3 col-xl-3 col-xxl-2 header-right">
                        <i className="la la-lightbulb-o"></i><p><span>Clearance Up to 30% Off</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}