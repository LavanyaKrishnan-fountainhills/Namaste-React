import LOGO_URL from "../utils/constants";

const Header = () => {
  return (
    <div>
      <div>
        <img src={LOGO_URL}/>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
}

export default  Header