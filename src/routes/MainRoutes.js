import { useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layouts } from "../layouts";
import { Services } from "../services";
import { Views } from "../views";

export function MainRoutes(props) {
    const abortController = useMemo(() => new AbortController(), []);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        Services.CategoryService.getAll(abortController.signal)
        .then(response => setCategories(response.categories))
        .catch(err => console.log(err));
    
      return () => {
        //
      }
    }, [abortController])
    
    return (
        <Layouts.MainLayout categories={categories}>
            <Routes>
                <Route exact path="/articles/:slug" element={<Views.ArticleView />}/>
                <Route exact path="/" element={<Views.HomeView categories={categories}/>}/>
            </Routes>
        </Layouts.MainLayout>
    )
}