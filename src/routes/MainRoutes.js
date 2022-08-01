import { Route, Routes } from "react-router-dom";
import { Layouts } from "../layouts";

export function MainRoutes(props) {
    return (
        <Layouts.MainLayout>
            <Routes>
                <Route exact path="/" element={null}/>
            </Routes>
        </Layouts.MainLayout>
    )
}