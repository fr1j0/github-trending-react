import { useQuery } from "react-query";
import { Repository } from "../../../types/types";
import * as api from "../../../api/github";
import RepositoryRow from "../../rows/repositoryRow";
import Spinner from "../../spinner";
import ErrorMessage from "../../errorMessage";

const Repositories = () => {
    const { data, isLoading, isError, error } = useQuery<Repository[], Error>("repositories", api.getRepositories);

    return <div>
        {isLoading && <Spinner />}
        {isError && <ErrorMessage error={error!} />}
        {data && data.map((repoData, index) => <RepositoryRow key={index} data={repoData} />)}
    </div>

}
export default Repositories;