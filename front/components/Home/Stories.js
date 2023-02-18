import React, { useEffect, useState } from 'react';
// components
import StoriesEntry from './StoriesEntry';
// styled-components
import { StoriesWrapper } from '../../styles/components/StoriesSt';

const mockData = [
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    user_nickname: 'testUser01',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    user_nickname: 'testUser01',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    user_nickname: 'testUser01',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    user_nickname: 'testUser01',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    user_nickname: 'testUser01',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    user_nickname: 'testUser01',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    user_nickname: 'testUser01',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    user_nickname: 'testUser01',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    user_nickname: 'testUser01',
  },
];

const Stories = () => {
  const [mock, setMock] = useState([]);

  useEffect(() => {
    setMock(mockData);
  }, []);

  return (
    <>
      <StoriesWrapper>
        {mock.map((data, idx) => {
          return <StoriesEntry key={idx} data={data} />;
        })}
      </StoriesWrapper>
    </>
  );
};

export default Stories;
