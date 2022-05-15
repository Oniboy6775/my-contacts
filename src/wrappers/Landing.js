import styled from "styled-components";
const Wrapper = styled.div`
  background-color: var(--bodyColor);
  display: flex;
  min-height: 100vh;
  .contacts__box {
    margin: auto;
    width: 80%;
    max-width: var(--fixed-width);
    border: 2px solid var(--primary-500);
    border-radius: var(--borderRadius);
    padding: 1rem;
  }
  .search__box {
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    /* gap: 1rem; */
    max-width: 100%;
  }
  .search__input {
    ::placeholder {
      color: red;
      align-items: center;
      width: 100%;
    }
  }
  .search__btn {
  }
`;
export default Wrapper;
