import { useAppContext } from "../context/AppContext";
import Wrapper from "../wrappers/Landing";
const Landing = () => {
  const { myContacts } = useAppContext();
  return (
    <Wrapper>
      <div className="contacts__box">
        <div className="search__box">
          <input className="search__input" type="text" placeholder="search" />
          <button className="search__btn">Search</button>
        </div>
        <div className="contact__list">
          <div className="each__contact">
            <div className="avatar">
              <img src="/" alt="avatar" />
            </div>
            <div className="contact__details">
              <h1>full name</h1>
              <div className="contact__phone__number">
                <p>08036093620</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
