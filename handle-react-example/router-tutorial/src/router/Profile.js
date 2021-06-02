import React from 'react';

const data = {
  spaceboy: {
    name: 'atom',
    description: '우주소년 아톰',
  },
  hunter: {
    name: 'gone',
    description: '헌터헌터의 사라진 주인공',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
