import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Animated } from 'react-animated-css';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [animated, setAnimated] = useState(false);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`/repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);

    setAnimated(true);

    setNewRepo('');
  }

  return (
    <>
      <Animated
        animationIn="fadeInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
        <img src={logoImg} alt="Github Explorer" />
      </Animated>

      <Animated
        animationIn="fadeInRight"
        animationOut="fadeOut"
        isVisible={true}
      >
        <Title>Explore repositórios no Github</Title>
      </Animated>

      <Animated
        animationIn="fadeInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
        <Form onSubmit={handleAddRepository}>
          <input
            type="text"
            placeholder="Digite o nome do repositório"
            value={newRepo}
            onChange={(e) => setNewRepo(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </Form>
      </Animated>

      <Animated
        animationIn="fadeInUp"
        animationOut="fadeOut"
        isVisible={animated}
      >
        <Repositories>
          {repositories.map((repository) => (
            <a key={repository.full_name} href="teste">
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <div>
                <FiChevronRight size={20} />
              </div>
            </a>
          ))}
        </Repositories>
      </Animated>
    </>
  );
};

export default Dashboard;
