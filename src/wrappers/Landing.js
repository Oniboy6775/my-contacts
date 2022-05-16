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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    max-width: 90%;
    width: 100%;
  }
  .search__input {
    width: 100%;
    max-width: 80%;
    /* min-width: 250px; */
    height: 40px;
    border: none;
    margin: 0.5rem 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;
  }
  .each__contact {
    box-shadow: var(--shadow-3);
    padding: 0.2rem 0 1.2rem;
    margin-bottom: 1rem;
  }

  .contact__info {
    display: flex;
  }
  .avatar {
    display: flex;
    height: 20px;
    width: 20%;
    border-radius: 50%;

    * {
      margin: auto;
      font-size: 3rem;
    }
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-self: center;
    gap: 1rem;
    flex-wrap: wrap;
    svg {
      margin-right: 0.2rem;
    }
  }
  .edit__btn {
    background-color: var(--grey-900);
  }
  .delete__btn {
    background-color: var(--red-dark);
  }
  .contact__name {
    font-weight: 800;
    text-shadow: var(--textShadow);
    text-transform: uppercase;
  }
  .contact__number {
    font-weight: 700;
  }
  .add__contact__btn {
    align-items: center;

    background-color: purple;

    svg {
      margin-right: 0.5rem;
    }
  }
  .no__contact {
    padding: 3rem;
  }
`;
export default Wrapper;
