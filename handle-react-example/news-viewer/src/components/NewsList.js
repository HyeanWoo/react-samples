import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import NewsItem from './NewsItem';
import { getAllArticles } from '../lib/articles';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMaximumRequest, setIsMaximumRequest] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // try {
      //   const query = category === 'all' ? '' : `&category=${category}`;
      //   const response = await axios.get(
      //     `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2a0f950e51a54f5c86c981a24e402e71`,
      //   );
      //   setArticles(response.data.articles);
      // } catch (e) {
      //   console.log(e.message);
      //   const errorCode = e.message.replace(/^\D+/g, '');
      //   if (Number(errorCode) === 429) {
      //     setIsMaximumRequest(true);
      //   }
      // }
      try {
        const response = await getAllArticles();
        setArticles(response.articles);
      } catch (e) {
        console.log(e);
        setIsMaximumRequest(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <NewsListBlock>불러오는 중...</NewsListBlock>;
  }

  if (isMaximumRequest) {
    return <NewsListBlock>API 요청량 초과</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
