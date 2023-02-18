import React from 'react';
// antd
import { Avatar } from 'antd';
// styled-components
import { IconWrapper, UserNickname } from '../../styles/components/StoriesSt';

const StoriesEntry = ({ data }) => {
  return (
    <IconWrapper>
      <Avatar size={57} src={data.src} />
      <UserNickname>{data.user_nickname}</UserNickname>
    </IconWrapper>
  );
};

export default StoriesEntry;
