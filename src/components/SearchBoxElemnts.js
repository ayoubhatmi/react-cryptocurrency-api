import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;
export const Title = styled.h1`
  font-size: 3rem;
  @media screen and (max-width: 768px) {
    font-size: 1.75rem;
  }
`;
export const SearchBox = styled.input`
  background-image: linear-gradient(
    -225deg,
    #ac32e4 0%,
    #7918f2 48%,
    #4801ff 100%
  );
  width: 300px;
  height: 50px;
  border-radius: 4px;
  border: none;
  padding-left: 1rem;
  color: #e2e2e2;
  margin-top: 2rem;
  ::placeholder {
    color: #e2e2e2;
  }
`;
