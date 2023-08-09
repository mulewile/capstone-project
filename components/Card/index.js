import styled from "styled-components";

export const StyledCard = styled.article`
  max-width: 375px;
  border-radius: 20px;
  padding: 1.5rem;
  margin: 0.25rem;
  margin-top: 70px;
  margin-bottom: 40%;
  background-color: #f5f5f5;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 24px;
    margin-bottom: 12px;
    border-radius: 10px;
    padding: 1rem;
    background-color: #2a4f72;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
    text-align: justify;
    color: #333333;
  }

  span {
    font-weight: normal;
    color: #7c677f;
  }

  dl {
    background-color: #ffffff;
    border-radius: 20px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  dt {
    font-weight: bold;
    padding: 0.5rem 0;
    background-color: transparent;
  }

  dd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6px;
    gap: 0.5rem;
  }
`;

export default function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}
