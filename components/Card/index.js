import styled from "styled-components";

export const StyledCard = styled.article`
  max-width: 375px;
  border-radius: 20px;
  padding: 1rem;
  margin: 0.25rem;
  margin-top: 70px;
  margin-bottom: 80px;
  background-color: #fee2e2;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.4);

  h2 {
    font-size: 18px;
    margin-bottom: 8px;
    color: #3a4660;
  }

  p {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    text-align: justify;
  }

  span {
    font-weight: normal;
  }
`;

export default function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}
