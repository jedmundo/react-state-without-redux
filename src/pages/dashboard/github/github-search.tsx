import React, { useContext } from "react";

import { DashboardContext } from "../context/dashboard-context";
import { MainTitle } from '../../../app.styles'

export const GithubSearch: React.FC = () => {

  const { actions } = useContext(DashboardContext);

  const searchSubmit = async (event: any) => {
    event.preventDefault();
    const username = event.target.username.value;
    await actions.searchGithub(username);
  };

  return (
    <>
      <MainTitle> Async request </MainTitle>
      <form onSubmit={searchSubmit}>
        <input name="username" placeholder="username" autoComplete="off" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
