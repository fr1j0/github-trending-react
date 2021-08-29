import {
    BrowserRouter as Router, Redirect, Route, Switch,
} from "react-router-dom";
import Developers from "../developers";
import ListHeader from '../listsHeader';
import Repositories from "../repositories";

const Layout = () => {
    return <Router>
        <main>
            <div className="main__content">
                <ListHeader />
                <Switch>
                    <Route exact path="/repositories">
                        <Repositories />
                    </Route>
                    <Route path="/developers">
                        <Developers />
                    </Route>
                    <Redirect from="/" to="/repositories" />
                </Switch>
            </div>
        </main>
    </Router>
}

export default Layout;