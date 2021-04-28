import styled, { keyframes } from 'styled-components';

const progressBarStripes = keyframes`
  0% {
    background-position: 40px 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const Wrapper = styled.div`
  width: 280px;
  height: 280px;
  perspective: 800px;
  position: relative;
  .card {
    width: 280px;
    height: 280px;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-140px);
    transition: transform 350ms cubic-bezier(0.39, 0.575, 0.565, 1);
    cursor: pointer;
    > div {
      position: absolute;
      width: 270px;
      height: 280px;
      transition: all 350ms cubic-bezier(0.39, 0.575, 0.565, 1);
    }
    &:hover {
      transform: translateZ(-160px) rotateY(-90deg);
      .front {
        opacity: 0;
      }
      .back {
        opacity: 1;
      }
    }

    .front {
      background-color: #fff;
      border-radius: 50px 3px 0 0;
      transform: rotateY(0deg) translateZ(160px);
      p {
        text-align: center;
        color: #031827;
      }
      .image-div {
        width: 270px;
        max-width: 270px;
        height: 200px;

        img {
          width: 100%;
          object-fit: cover;
          height: 100%;
          border-radius: 50px 3px 0 0;
        }
      }
      .progress-bar-striped {
        width: 80%;
        margin: 0 auto 20px;
        overflow: hidden;
        height: 20px;
        background-color: #f5f5f5;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        > div {
          background-image: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.15) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.15) 75%,
            transparent 75%,
            transparent
          );
          background-size: 40px 40px;
          float: left;
          width: 0%;
          height: 100%;
          font-size: 12px;
          line-height: 20px;
          color: #ffffff;
          text-align: center;
          -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
          -moz-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
          -webkit-transition: width 3s ease;
          -moz-transition: width 3s ease;
          -o-transition: width 3s ease;
          transition: width 3s ease;
          animation: ${progressBarStripes} 2s linear infinite;
          background-color: #0095eb;
        }
        p {
          margin: 0;
        }
      }
    }

    .back {
      background-position: center;
      background-repeat: no-no-repeat;
      background-size: cover;
      opacity: 0.08;
      transform: rotateY(90deg) translateZ(160px);
      border-radius: 0 0 3px 34px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Button = styled.button`
  outline: none;
  width: 150px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 4px;
  background-color: transparent;
  color: #fff;
  font-weight: 300;
  font-size: 1rem;
  transition: all 0.5s;
  font-family: 'Karla', sans-serif;
  &:hover {
    color: #fff;
    background-color: #0095eb;
    border: none;
    transition: all 0.5s;
    transform: scale(1.2);
  }
`;

export { Button, Wrapper };
