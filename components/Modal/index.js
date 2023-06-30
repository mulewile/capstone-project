import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
  position: fixed;
  max-width: 375px;
  border-radius: 15px;
  padding: 0.5rem;
  margin: 1rem;
  margin-top: 12rem;
  background-color: peachpuff;
  opacity: 90%;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.4);
  border: 2px solid transparent;
  transition: border-color 0.4s ease-in-out;

  &:hover {
    border-color: coral;
    opacity: 100%;
  }
`;

export const StyledModalContent = styled.div`
  background-color: #7c677f;
  color: white;
  border-radius: 10px;
  text-align: center;
  p {
    font-size: 1.5rem;
  }
`;
