import styled from "styled-components";

export const CoinContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  width: 100%;
  align-items: center;
  border-bottom: 2px solid white;
  padding: 1rem;
  flex-wrap: wrap;

  p {
  }
  img {
    width: 5%;
    margin-right: 1rem;
  }
  h1 {
    font-size: 1rem;
  }

  .red {
    color: red;
  }
  .green {
    color: green;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;
