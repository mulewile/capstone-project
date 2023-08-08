import styled from "styled-components";

export const StyledCard = styled.article`
  max-width: 375px;
  border-radius: 20px;
  padding: 1rem;
  margin: 0.25rem;
  margin-top: 70px;
  margin-bottom: 40%;
  background-color: whitesmoke;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.4);

  h2 {
    font-size: 18px;
    margin-bottom: 8px;
    border-radius: 5px;
    padding: 1rem;
    background-color: lightgrey;
    color: #2a4f72;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  }

  p {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    text-align: justify;
    color: #2a4f72;
  }

  span {
    font-weight: normal;
    color: #7c677f;
  }

  dl {
    background-color: lightgrey;
    border-radius: 20px;
    padding: 0.5rem 0.5rem;
    padding-bottom: 8px;
  }
  dt {
    font-weight: bold;
    padding: 0.5rem 0.5rem;
    background-color: lightgrey;
  }

  dd {
    gap: 0.5rem;
  }
`;

export default function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}
