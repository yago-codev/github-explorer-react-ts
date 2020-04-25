import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Animated } from 'react-animated-css';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
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
        <Form>
          <input type="text" placeholder="Digite o nome do repositório" />
          <button type="submit">Pesquisar</button>
        </Form>
      </Animated>

      <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
        <Repositories>
          <a href="teste">
            <img
              src="https://avatars0.githubusercontent.com/u/42048838?s=460&u=72fc229cc4165fdae722029565b387e42bb56b81&v=4"
              alt="Yago Milano"
            />
            <div>
              <strong>rocketseat/unform</strong>
              <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
            </div>

            <div>
              <FiChevronRight size={20} />
            </div>
          </a>

          <a href="teste">
            <img
              src="https://avatars0.githubusercontent.com/u/42048838?s=460&u=72fc229cc4165fdae722029565b387e42bb56b81&v=4"
              alt="Yago Milano"
            />
            <div>
              <strong>rocketseat/unform</strong>
              <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
            </div>

            <div>
              <FiChevronRight size={20} />
            </div>
          </a>

          <a href="teste">
            <img
              src="https://avatars0.githubusercontent.com/u/42048838?s=460&u=72fc229cc4165fdae722029565b387e42bb56b81&v=4"
              alt="Yago Milano"
            />
            <div>
              <strong>rocketseat/unform</strong>
              <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
            </div>

            <div>
              <FiChevronRight size={20} />
            </div>
          </a>
        </Repositories>
      </Animated>
    </>
  );
};

export default Dashboard;
