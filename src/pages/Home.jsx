import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Initial page</p>
      <ul>
        <li>
          <Link to="/about"> About </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/profiles/velopert"> Velopert's profile </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/profiles/gildong"> Gildong's profile </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/profiles/void"> Not in profiles </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;