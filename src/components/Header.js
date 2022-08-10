import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Components } from ".";

export function Header(props) {
    const { pathname } = useLocation();
    
    useEffect(() => {
      window.scrollTo(0,0);
    
      return () => {
        //
      }
    }, [pathname])
    
    return (
        <header className="header header-14">
            <Components.HeaderTop />
            <Components.HeaderMiddle categories={props.categories}/>
            <Components.HeaderBottom categories={props.categories}/>
        </header>
    )
}