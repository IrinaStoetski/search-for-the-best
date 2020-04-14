export const fetchRepositoriesByName = async name => {
    const response = await fetch(`https://api.github.com/search/repositories?q=${name}&sort=stars`);
    return response.json();
}


