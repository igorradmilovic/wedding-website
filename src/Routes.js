import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FloatingIcon from "./components/layout/FloatingIcon";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Loader from "./components/layout/Loader";

const Home = React.lazy(() => import("./components/pages/Home"));
const Details = React.lazy(() => import("./components/pages/Details"));
const Bagel = React.lazy(() => import("./components/pages/Bagel"));
const WeddingParty = React.lazy(() => import("./components/pages/WeddingParty"));
const Registry = React.lazy(() => import("./components/pages/Registry"));

export default function Routes() {
    return <Router>
        <Loader />
        <Suspense fallback={<div></div>}>
            <Header />
            <FloatingIcon />
            <Switch>
                {/* Home */}
                <Route exact path="/" component={Home} />
                {/* Details */}
                <Route path="/details" component={Details} />
                {/* Bagel */}
                <Route path="/bagel" component={Bagel} />
                {/* Wedding Party */}
                <Route path="/wedding-party" component={WeddingParty} />
                {/* Registry */}
                <Route path="/registry" component={Registry} />
                {/* Catch all alse */}
                <Route exact path="*" component={Home} />
            </Switch>
            <Footer />
        </Suspense>
    </Router>
}