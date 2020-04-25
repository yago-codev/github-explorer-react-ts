import React, { useState, FormEvent } from 'react';
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
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [animateError, setAnimateError] = useState(false);
  const [inputError, setInputError] = useState('');

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

      {/* {inputError && <Error>{inputError}</Error>} */}

      <Repositories>
        {repositories.map((repository) => (
          <a
            key={repository.full_name}
            href="teste"
            className="animated zoomInUp"
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
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
