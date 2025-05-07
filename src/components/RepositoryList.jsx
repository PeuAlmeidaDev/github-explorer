import '../styles/repositories.scss'
import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

export function RepositoryList() {

  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/PeuAlmeidaDev/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        {repositories.map(repository => {
          return(
            <RepositoryItem key={repository.name} repository={repository} />
          )
        })}
      </ul>
    </section>
  );
}
