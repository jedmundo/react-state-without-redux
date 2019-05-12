import React, { useContext } from 'react'
import { DashboardContext } from '../context/dashboard-context';
import { GithubRepository } from './repos.model'

const mapRepos = (repos: GithubRepository[]) => {
  return repos && repos.map((repo: GithubRepository) => (
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
  const { state } = useContext<any>(DashboardContext);
  return (
    <>
      {state.isLoading && <h4>Loading...</h4>}
      {!state.isLoading && mapRepos(state.repos)}
      {state.repos && state.repos.length === 0 && <h4>This user have zero repos</h4>}
      {state.notFound && <h4>User not found</h4>}
    </>
  );
};
