import React, { useContext } from "react";
import { StoreContext } from "../context/store-context";
import { MainTitle } from '../app.styles'

export const GithubSearch: React.FC = () => {

  const { actions } = useContext<any>(StoreContext);

  const searchSubmit = async (e: any) => {
    e.preventDefault();
    const username = e.target.username.value;
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
