/* eslint-disable no-undef */
export const fetchRepositoriesByName = async (name, page) => {
  const response = await fetch(`https://api.github.com/search/repositories?page=${page || 1}&q=${name}&sort=stars`);
  return response.json();
};

