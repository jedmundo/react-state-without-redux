import React, { useContext } from 'react'
import { StoreContext } from '../../context/store-context';

const mapRepos = (repos: any) => {
  return repos && repos.map((repo: any) => (
    <a
      key={repo.id}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3>{repo.name}</h3>
    </a>
  ));
};

export const GithubRepos: React.FC = () => {
  const { state } = useContext<any>(StoreContext);
  return (
    <>
      {state.isLoading && <h4>Loading...</h4>}
      {!state.isLoading && mapRepos(state.repos)}
      {state.repos && state.repos.length === 0 && <h4>This user have zero repos</h4>}
      {state.notFound && <h4>User not found</h4>}
    </>
  );
};
