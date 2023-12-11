import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(5px);
`;

export const Wraper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 547px;
  height: 752px;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 5px 7px 15px -6px rgb(24, 26, 32);
`;

export const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  background-color: red;
`;
