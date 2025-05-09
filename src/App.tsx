import "./styles/global.scss";
import { RepositoryList } from "./components/RepositoryList";
import React from "react";
import { BuscaUmPokemon } from "./components/BuscaUmPokemon";

export function App() {
  return (
    <>
      <RepositoryList />
      <BuscaUmPokemon />
    </>
  );
}
