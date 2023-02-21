import styled from 'styled-components';

// Stories
export const SlickCustom = styled.div`
  width: 470px;
  .slick-prev:before,
  .slick-next:before {
    color: #a0a0a0;
  }

  .slick-dots {
    bottom: -10px;
  }

  .slick-dots li button:before {
    font-size: 27px;
    content: '-';
  }
`;
// StoriesEntry
export const IconWrapper = styled.div`
  margin: 5px 5px;
`;
// StoriesEntry
export const UserNickname = styled.div`
  font-size: 12px;
  margin-top: 8px;
`;
