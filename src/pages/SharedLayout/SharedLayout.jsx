import Header from "../../components/Header/Header.jsx";
import {Outlet} from "react-router-dom";

const SharedLayout = () => {
    return (
        <>
            <Header/>

            <Outlet/>
        </>

    );
};

export default SharedLayout;