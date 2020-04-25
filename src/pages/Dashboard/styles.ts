import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  max-width: 450px;
  font-size: 48px;
  margin-top: 80px;
  line-height: 56px;
`;

export const Form = styled.form`
  max-width: 700px;
  margin-top: 40px;
  display: flex;
  box-shadow: 5px 5px 10px #5140a9, -5px -5px 10px #9678ff;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    background: #fdfdfd;
    color: #362c73;
    font-weight: bold;
    border: none;
    border-radius: 5px 0 0 5px;
    transition: all 0.1s;

    &::placeholder {
      color: #a8a8b3;
      font-weight: 500;
    }

    &:focus {
      box-shadow: inset 5px 5px 10px #b1b1b1, inset -5px -5px 10px #ffffff;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #362c73;
    font-weight: bold;
    border: none;
    border-radius: 0 5px 5px 0;
    transition: all 0.1s;

    &:hover {
      filter: brightness(1.1);
    }

    &:active {
      box-shadow: inset 5px 5px 10px #261f51, inset -5px -5px 10px #463996;
      filter: brightness(1.1);
    }
  }
`;

export const Repositories = styled.div`
  max-width: 700px;
  margin-top: 80px;

  a {
    width: 100%;
    background: #fdfdfd;
    border-radius: 5px;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    box-shadow: 5px 5px 10px #5140a9, -5px -5px 10px #9678ff;
    transition: background-color 0.1s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      background: ${shade(0.02, '#fdfdfd')};
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #ffffff;
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
