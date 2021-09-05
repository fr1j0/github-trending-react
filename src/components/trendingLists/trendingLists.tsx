import {
    BrowserRouter as Router, Redirect, Route, Switch,
} from "react-router-dom";
import ListHeader from '../listsHeader';
import Developers from "../routes/developers";
import Repositories from "../routes/repositories";

const TrendingLists = () => {
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

export default TrendingLists;