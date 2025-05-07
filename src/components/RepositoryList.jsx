import { RepositoryItem } from "./RepositoryItem";

const repository = 
  {
    name: "unform",
    description: "forms in react",
    link: "https://github.com/unform/unform",
  }

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
