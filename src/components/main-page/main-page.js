import React from "react";
import Comments from "../comments/comments";
import FillFormAdvisor from "../fill-form-block/fill-form-block";
import Footer from "../footer/footer";
import Header from "../header/header";
import MainPageTrust from "./main-page-trust/main-page-trust";
import MainPageWhy from "./main-page-why/main-page-why";
import { getAuth} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getFirestore, collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "../../loader/loader";
import Languages from "../languages/languages";

const MainPage = () => {

    const db = getFirestore();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const [commentsDb, loadingDb] = useCollectionData(
        collection(db, "comments")
    );

    if (loading || loadingDb) {
        return <Loader />;
    }

    return (
        <React.Fragment>
            <Header activePage={1}/>
            <MainPageWhy/>
            <MainPageTrust/>
            <Languages/>
            <FillFormAdvisor/>
            <Comments user={user} commentsDb={commentsDb}/>
            <Footer/>
        </React.Fragment>
    );
}

export default MainPage;