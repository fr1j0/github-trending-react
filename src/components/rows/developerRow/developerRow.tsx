import { Developer } from "../../../types/types";

type Props = { data: Developer, index: number }

const DeveloperRow = ({ data, index }: Props) =>
    <div className="row row-devs">
        <div className="developer">
            <span className="index">{index + 1}</span>
            <img src={data.avatar} alt={data.username} />
            <div>
                <a href={data.url} className="name">{data.name}</a>
                <a href={data.url} className="username">{data.username}</a>
            </div>
        </div>
        <div className="repo">
            <p className="flag">POPULAR REPO</p>
            <a href={data.repo.url}>{data.repo.name}</a>
            <p className="description">{data.repo.description}</p>
        </div>
        <div className="follow">
            <button className="btn sponsor">sponsor</button>
            <button className="btn follow">follow</button>
        </div>
    </div>

export default DeveloperRow;