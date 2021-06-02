import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 쿼리문 맨앞의 ? 생략
  });

  const showDetail = query.detail === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>소개 페이지!</p>
      <h3>{query.detail}</h3>
    </div>
  );
};

export default About;
