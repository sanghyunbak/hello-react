import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Initial page</p>
      <Link to="/about"> About </Link>
    </div>
  );
}

export default Home;