import {useParams} from 'react-router-dom';

const data = {
  velopert: {
    name: 'Kim min jun',
    description: 'Developer that like react',
  },
  gildong: {
    name: 'Hong gil dong',
    description: 'Old story Hong gil dong hero',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>User profile</h1>
      {
        profile? (
          <div>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
          </div>
        ) : (
          <p>Not found profile</p>
        )
      }
    </div>
  );
};

export default Profile;