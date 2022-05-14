import React, { useEffect, useState } from "react";

import useGitService from "../services/GitService";

const Repos = ({ id, repos }) => {
  const [repositories, setRepositories] = useState([]);
  const { getRepos } = useGitService();

  useEffect(() => {
    onReposLoaded();
  }, [id]);

  const onReposLoaded = () => {
    getRepos(id).then((res) => setRepositories((items) => [...res]));
  };

  return (
    <>
      <div className="repos__list">
        {repos > 30 ? <h1>First 30 repositories:</h1> : null}
        {repositories.map((item) => (
          <View key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

const View = ({ item }) => {
  const { name, language, visibility, created, updated } = item;

  return (
    <div className="repos">
      <div className="repos__top">
        <h2>{name}</h2>
        <div className="repos__top-right">
          <span>{visibility}</span>
          <p>{language}</p>
        </div>
      </div>
      <div className="repos__bottom">
        <p>Created on {created}</p>
        <p>Updated on {updated}</p>
      </div>
    </div>
  );
};

export default Repos;
