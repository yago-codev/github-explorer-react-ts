import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Animated } from 'react-animated-css';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

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
  const [animateError, setAnimateError] = useState(false);
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Por favor, informe o autor/nome do repositório.');
      setAnimateError(true);
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewRepo('');

      setInputError('');
    } catch (error) {
      setInputError('Não foi possível encontrar o repositório.');
      setAnimateError(true);
      setNewRepo('');
    }
  }

  return (
    <>
      <Animated
        animationIn="fadeInLeft"
        animationOut="fadeOut"
        animationInDelay={500}
        isVisible={true}
      >
        <Link to="/">
          <img src={logoImg} alt="Github Explorer" />
        </Link>
      </Animated>

      <Animated
        animationIn="fadeInRight"
        animationOut="fadeOut"
        animationInDelay={1000}
        isVisible={true}
      >
        <Title>Explore repositórios no Github</Title>
      </Animated>

      <Animated
        animationIn="fadeInLeft"
        animationOut="fadeOut"
        animationInDelay={1500}
        isVisible={true}
      >
        <Form
          onSubmit={handleAddRepository}
          className={animateError ? 'animated tada' : ''}
          hasError={!!inputError}
        >
          <input
            type="text"
            placeholder={
              inputError ? inputError : 'Digite o nome do repositório'
            }
            value={newRepo}
            onChange={(e) => setNewRepo(e.target.value)}
            autoFocus
          />
          <button type="submit">Pesquisar</button>
        </Form>
      </Animated>

      <Repositories>
        {repositories.map((repository) => (
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            animationInDelay={2000}
            isVisible={true}
          >
            <Link
              key={repository.full_name}
              to={`/repository/${repository.full_name}`}
            >
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
            </Link>
          </Animated>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
