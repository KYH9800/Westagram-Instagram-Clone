import styled from 'styled-components';
// antd
import { Modal } from 'antd';
import { DownloadOutlined, CloudUploadOutlined } from '@ant-design/icons';

// icon custom
export const DownloadOutlinedSt = styled(DownloadOutlined)`
  font-size: 18px;
  font-weight: 700;
  margin-right: 5px;
`;

export const CloudUploadOutlinedSt = styled(CloudUploadOutlined)`
  font-size: 100px;
  font-weight: 700;
`;

export const ModalSt = styled(Modal)`
  max-width: 1000px;

  .ant-modal-title {
    text-align: center;
  }
`;

export const AddPostModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 600px;
`;

export const AddImageBox = styled.div`
  border: 1px solid #e1e1e1;
  width: 600px;
  height: 598px;

  label {
    display: none;
  }
`;

export const AddText = styled.div`
  width: 350px;
  border: 1px solid #e1e1e1;
  div {
    margin: 5px 0;
    font-weight: 600;
    border-bottom: 1px solid #e1e1e1;
  }
  textarea {
    width: 338px;
    height: 57vh;

    padding: 5px 5px;
    border: 0;
    outline: none;

    font-size: 13px;
    resize: none;
  }
`;

export const AddImageLogo = styled.div`
  width: 600px;
  margin-top: 33%;
`;

// 이미지 추가 버튼
export const AddImageButton = styled.div`
  width: 600px;
  margin-top: 2%;

  button {
    cursor: pointer;
    width: 130px;
    height: 32px;

    background-color: #1677ff;

    border: 0;
    border-radius: 5px;

    color: #e1e1e1;

    font-size: 14px;

    :hover {
      background-color: #5ca0ff;
    }

    :active {
      background-color: #1677ff;
    }
  }
`;

// AddPostImages Component
export const ImageSt = styled.img`
  height: 598px;
  margin: auto;
`;

export const SlickCustom = styled.div`
  /* width: 470px; */
  margin: auto;

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    color: #e6e6e6;
  }

  .slick-dots {
    bottom: -19px;
  }

  .slick-dots li button:before {
    font-size: 30px;
    content: '-';
  }

  .slick-next {
    right: 9px;
  }

  .slick-prev {
    left: 0px;
    z-index: 999;
  }
`;
