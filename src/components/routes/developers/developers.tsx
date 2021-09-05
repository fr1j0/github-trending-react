import { useQuery } from "react-query";
import * as api from "../../../api/github";
import { Developer } from "../../../types/types";
import ErrorMessage from "../../errorMessage";
import DeveloperRow from "../../rows/developerRow";
import Spinner from "../../spinner";

const Developers = () => {
    const { data, isLoading, isError, error } = useQuery<Developer[], Error>("developers", api.getDevelopers);

    return <div>
        {isLoading && <Spinner />}
        {isError && <ErrorMessage error={error!} />}
        {data && data.map((repoData, index) => <DeveloperRow key={index} data={repoData} index={index} />)}
    </div>

}
export default Developers;