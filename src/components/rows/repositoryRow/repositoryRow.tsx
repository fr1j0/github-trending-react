import { Repository } from "../../../types/types";

type Props = { data: Repository }

const RepositoryRow = ({ data }: Props) => {
    return <div className="row">
        <div className="general">
            <a href={data.url}>{data.name}</a>
            <p className="description">{data.description}</p>
            <div className="info">
                <p className="language">{data.language}</p>
                <p className="stars">{data.stars}</p>
                <p className="forks">{data.forks}</p>
                <span className="built-by">
                    <p>Built by</p>
                    {data.builtBy.map(by => <img className="built-by__img" src={by.avatar} alt={by.username} />)}
                </span>
            </div>
        </div>
        <div className="star-repo">
            <button className="btn btn-star">Star</button>
            <p className="daily-stars">{data.currentPeriodStars} stars today</p>
        </div>
    </div>
}

export default RepositoryRow;