import { NavLink } from "react-router-dom";

const ListsHeader = () => {
    return <div className="list-header">
        <nav>
            <NavLink to="/repositories" activeClassName="selected">Repositories</NavLink>
            <NavLink to="/developers" activeClassName="selected">Developers</NavLink>
        </nav>
        <div className="filters">Filters</div>
    </div>
}

export default ListsHeader;