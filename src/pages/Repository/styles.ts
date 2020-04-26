import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: #362c73;
    padding: 10px 15px;
    border-radius: 5px;
    color: #fdfdfd;
    box-shadow: 5px 5px 5px #5140a9, -5px -5px 5px #9678ff;
    transition: all 0.1s;

    &:hover {
      filter: brightness(1.1);
    }

    &:active {
      box-shadow: inset 5px 5px 5px #5140a9, inset -5px -5px 5px #9678ff;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  background-color: #362c73;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 10px 10px 10px #5140a9, -10px -10px 10px #9678ff;
  margin-bottom: 64px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      box-shadow: 5px 5px 5px #292156, -5px -5px 5px #443790;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #fdfdfd;
      }

      p {
        font-size: 18px;
        margin-top: 4px;
        color: #e3e3e3;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    margin-left: 144px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #fdfdfd;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #e3e3e3;
      }
    }
  }
`;

export const Issues = styled.div`
  a {
    width: 100%;
    background: #fdfdfd;
    border-radius: 5px;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    box-shadow: 10px 10px 10px #5140a9, -10px -10px 10px #9678ff;
    transition: background-color 0.1s;
    margin-top: 16px;

    &:hover {
      background: ${shade(0.02, '#fdfdfd')};
    }

    div {
      max-width: 80%;
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #5c5b5b;
      }

      p {
        font-size: 18px;
        color: #828181;
        margin-top: 4px;
      }
    }

    div:last-child {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #362c73;
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 3px 3px 5px #b1b1b1, -3px -3px 5px #ffffff;

      svg {
        color: #fdfdfd;
      }
    }
  }
`;
