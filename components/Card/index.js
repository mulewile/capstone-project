import styled from "styled-components";

export const StyledCard = styled.article`
  max-width: 368px;
  border: 2px solid #7c677f;
  border-radius: 20px;
  padding: 1rem;
  margin: 0.25rem;
  margin-top: 70px;
  margin-bottom: 70px;
  background-color: #f9c5bd;

  h2 {
    font-size: 18px;
    margin-bottom: 8px;
    color: #3a4660;
  }

  p {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export default function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}
