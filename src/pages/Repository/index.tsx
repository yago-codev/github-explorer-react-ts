import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Animated } from 'react-animated-css';

import api from '../../services/api';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';
interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`/repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });

    // async function loadData(): Promise<void> {
    //   const response = await Promise.all([
    //     api.get(`/repos/${params.repository}`),
    //     api.get(`/repos/${params.repository}/issues`),
    //   ]);
    // }

    // loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <Link to="/" className="animated fadeInLeft">
          <img src={logoImg} alt="Github Explorer" />
        </Link>
        <Link to="/" className="animated fadeInRight">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <Animated
          animationIn="zoomIn"
          animationOut="fadeOut"
          animationInDelay={1000}
          isVisible={true}
        >
          <RepositoryInfo>
            <Animated
              animationIn="zoomIn"
              animationOut="fadeOut"
              animationInDelay={1500}
              isVisible={true}
            >
              <header>
                <img
                  src={repository.owner.avatar_url}
                  alt={repository.owner.login}
                />
                <div>
                  <strong>{repository.full_name}</strong>
                  <p>{repository.description}</p>
                </div>
              </header>
            </Animated>

            <Animated
              animationIn="zoomIn"
              animationOut="fadeOut"
              animationInDelay={2000}
              isVisible={true}
            >
              <ul>
                <li>
                  <strong>{repository.stargazers_count}</strong>
                  <span>Stars</span>
                </li>
                <li>
                  <strong>{repository.forks_count}</strong>
                  <span>Forks</span>
                </li>
                <li>
                  <strong>{repository.open_issues_count}</strong>
                  <span>Issues abertas</span>
                </li>
              </ul>
            </Animated>
          </RepositoryInfo>
        </Animated>
      )}

      {issues.map((issue) => (
        <Animated
          animationIn="zoomIn"
          animationOut="fadeOut"
          animationInDelay={2500}
          isVisible={true}
          key={issue.id}
        >
          <Issues>
            <a href={issue.html_url} target="_blank">
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>

              <div>
                <FiChevronRight size={20} />
              </div>
            </a>
          </Issues>
        </Animated>
      ))}
    </>
  );
};

export default Repository;
