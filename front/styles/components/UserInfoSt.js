import styled from 'styled-components';
// antd
import { Avatar } from 'antd';

// Avatar
export const AvatarSt = styled(Avatar)`
  cursor: pointer;
`;

// UserInfoCard
export const UserInfoCardBox = styled.div`
  width: 270px;
`;

// 내 정보
export const MyInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  height: 57px;
`;

// 내 아이콘/계정 정보
export const MyLogoName = styled.div`
  display: flex;
`;

// 내 계정 박스
export const NameWrapper = styled.div`
  margin: 17px 5px;
  font-size: 13px;
`;

// 사용자 계정
export const UserID = styled.div`
  cursor: pointer;
  font-weight: 700;
`;

// 사용자 이름
export const UserName = styled.div`
  color: gray;
`;

export const ChangeBtn = styled.a`
  cursor: pointer;
  line-height: 60px;
  font-size: 11px;
  font-weight: 600;
  color: rgb(0 150 246);
  :hover {
    color: rgb(33 78 107);
    font-weight: 700;
  }
`;

export const RecommendImpormation = styled.div`
  display: flex;
  justify-content: space-between;

  margin-left: 9px;

  height: 50px;

  h4 {
    font-size: 13px;
    font-weight: 700;

    line-height: 20px;

    color: gray;
  }

  h5 {
    cursor: pointer;
    font-size: 11px;
    line-height: 20px;
    :hover {
      color: gray;
    }
  }
`;

// 내 정보
export const RecommendMyInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

export const RecommendLists = styled.div`
  margin-left: 3px;
`;

// 추천 계정 박스
export const RecommendNameWrapper = styled.div`
  margin: 8px 5px;
`;

// 추천 사용자 계정
export const RecommendUserID = styled.div`
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
`;

// 추천 사용자 이름
export const RecommendUserName = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: gray;
`;

// footer
export const UserInfoFooter = styled.div`
  margin: 6px 9px;
  width: 180px;

  div {
    margin: 17px 0;
  }

  p {
    font-size: 10px;
    font-weight: 600;
    color: #bbbbbb;
  }

  span {
    cursor: pointer;
    user-select: none;
    :hover {
      color: gray;
      text-decoration: underline;
    }
  }
`;
