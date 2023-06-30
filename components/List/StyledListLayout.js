import styled from "styled-components";

export const StyledListItem = styled.li`
  display: grid;
  max-width: 100%;
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  background-color: #f2f2f2;
  color: #114037;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  z-index: 2;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.4);
    background-color: #2a4f72;
    color: #f2f2f2;
  }
`;

export const StyledList = styled.ul`
  max-width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  padding: 80px 0 0 0;
`;
