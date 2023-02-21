import React, { useEffect, useState } from 'react';
// components
import StoriesEntry from './StoriesEntry';
// styled-components
import { SlickCustom } from '../../styles/components/StoriesSt';
// react-slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
  };

  useEffect(() => {
    setMock(mockData);
  }, []);

  return (
    <>
      <SlickCustom>
        <Slider {...settings}>
          {mock.map((data, idx) => {
            return <StoriesEntry key={idx} data={data} />;
          })}
        </Slider>
      </SlickCustom>
    </>
  );
};

export default Stories;
