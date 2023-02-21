import styled from 'styled-components';

// Stories
export const SlickCustom = styled.div`
  width: 470px;

  .slick-prev:before,
  .slick-next:before {
    color: #a0a0a0;
  }

  .slick-dots {
    bottom: -19px;
  }

  .slick-dots li button:before {
    font-size: 30px;
    content: '-';
  }

  .slick-next {
    right: 0px;
  }

  .slick-prev {
    left: 0px;
    z-index: 999;
  }
`;
// StoriesEntry
export const IconWrapper = styled.div`
  cursor: pointer;
  margin: 0px 5px;
`;
// StoriesEntry
export const UserNickname = styled.div`
  cursor: pointer;
  font-size: 12px;
  margin-top: 8px;
`;
