import { useHttp } from "../hooks/http.hooks";

const useGitService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://api.github.com/";

  const getSearchUsers = async (login) => {
    const res = await request(`${_apiBase}search/users?q=${login}`);

    return res.items.map(_transformUsers);
  };

  const getUser = async (id) => {
    const res = await request(`${_apiBase}user/${id}`);

    return _transformUser(res);
  };

  const getRepos = async (id) => {
    const res = await request(`${_apiBase}user/${id}/repos`);

    return res.map(_transformRepos);
  };

  const _transformRepos = (repos) => {
    let created = new Date(repos.created_at).toString().slice(4, 15);
    let updated = new Date(repos.updated_at).toString().slice(4, 15);

    return {
      id: repos.id,
      name: repos.name,
      language: repos.language,
      visibility: repos.visibility,
      created,
      updated,
    };
  };

  const _transformUsers = (user) => {
    return { login: user.login, id: user.id, avatar: user.avatar_url };
  };

  const _transformUser = (user) => {
    return {
      id: user.id,
      login: user.login,
      name: user.name,
      blog: user.blog,
      url: user.html_url,
      avatar: user.avatar_url,
      reposCount: user.public_repos,
      followers: user.followers,
      following: user.following,
      location: user.location,
    };
  };

  return { getSearchUsers, getUser, getRepos, loading, error };
};

export default useGitService;
