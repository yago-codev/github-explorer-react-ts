import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Animated } from 'react-animated-css';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';
interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

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
                src="https://avatars0.githubusercontent.com/u/42048838?s=460&u=72fc229cc4165fdae722029565b387e42bb56b81&v=4"
                alt="Yago Milano"
              />
              <div>
                <strong>rocketseat/unform</strong>
                <p>descrição do repositório</p>
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
                <strong>1808</strong>
                <span>Stars</span>
              </li>
              <li>
                <strong>48</strong>
                <span>Forks</span>
              </li>
              <li>
                <strong>67</strong>
                <span>Issues abertas</span>
              </li>
            </ul>
          </Animated>
        </RepositoryInfo>
      </Animated>

      <Animated
        animationIn="zoomIn"
        animationOut="fadeOut"
        animationInDelay={2500}
        isVisible={true}
      >
        <Issues>
          <Link to="/">
            <div>
              <strong>dasdsad</strong>
              <p>dasdsad</p>
            </div>

            <div>
              <FiChevronRight size={20} />
            </div>
          </Link>
        </Issues>
      </Animated>
    </>
  );
};

export default Repository;
