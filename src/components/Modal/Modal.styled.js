import styled from 'styled-components';

export const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--overlay);
`;

export const ModalWindow = styled.div`
  width: 50%;
  /* height: 80vh; */
  background-color: transparent;
  border-radius: 10px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;