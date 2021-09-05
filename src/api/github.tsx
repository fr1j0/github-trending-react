const API_URI = "https://private-anon-db6ed2ce34-githubtrendingapi.apiary-mock.com";

export const getDevelopers = () =>
    fetch(`${API_URI}/developers`).then(res => res.json())

export const getRepositories = () =>
    fetch(`${API_URI}/repositories`).then(res => res.json())
