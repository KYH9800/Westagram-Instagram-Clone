import React, { useEffect } from 'react';
// react-slick
import Slider from 'react-slick';
// styled-components
import {
  AddPostModalWrapper,
  AddImageBox,
  AddText,
  AddImageLogo,
  AddImageButton,
  DownloadOutlinedSt,
  CloudUploadOutlinedSt,
  SlickCustom,
} from '../../styles/components/AddPostModalSt';
// component
import AddPostImages from './AddPostImages';

const mockImages = [
  {
    src: 'https://image.yes24.com/goods/107995463/XL',
  },
  {
    src: 'https://image.yes24.com/goods/107995463/XL',
  },
  {
    src: 'https://image.yes24.com/goods/107995463/XL',
  },
  {
    src: 'https://image.yes24.com/goods/107995463/XL',
  },
  {
    src: 'https://image.yes24.com/goods/107995463/XL',
  },
  {
    src: 'https://image.yes24.com/goods/107995463/XL',
  },
];
const mockImages2 = [
  {
    src: 'https://www.anewsa.com/news_images/2019/06/29/mark/20190629224118727840195d176a7e7e2ea7.07244251.jpg',
  },
  {
    src: 'https://www.anewsa.com/news_images/2019/06/29/mark/20190629224118727840195d176a7e7e2ea7.07244251.jpg',
  },
  {
    src: 'https://www.anewsa.com/news_images/2019/06/29/mark/20190629224118727840195d176a7e7e2ea7.07244251.jpg',
  },
  {
    src: 'https://www.anewsa.com/news_images/2019/06/29/mark/20190629224118727840195d176a7e7e2ea7.07244251.jpg',
  },
  {
    src: 'https://www.anewsa.com/news_images/2019/06/29/mark/20190629224118727840195d176a7e7e2ea7.07244251.jpg',
  },
  {
    src: 'https://www.anewsa.com/news_images/2019/06/29/mark/20190629224118727840195d176a7e7e2ea7.07244251.jpg',
  },
];

// 게시글 생성 모달 창
const AddPostModal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // antd text 강제 수정
    document.querySelector('.ant-btn-primary').textContent = '게시글 생성';
    document.querySelector('.ant-btn >span').textContent = '취소';
  }, []);

  /*****************************************************
   * 이미지 업로드 시 선택한 이미지들로 화면 전환
   * react cropper 활용 (이미지 비율 4:5)
   * 참고 링크: https://hengxi.tistory.com/15
   * 게시글 작성 시 줄바꿈 '\n' 포함 서버에 보낸 후 database에 저장
   *****************************************************/
  return (
    <AddPostModalWrapper>
      <AddImageBox>
        <label>이미지 선택 박스</label>

        {false ? (
          <SlickCustom>
            <label>이미지가 있을 때</label>
            <Slider {...settings}>
              {mockImages2.map((image) => {
                return <AddPostImages src={image.src} />;
              })}
            </Slider>
          </SlickCustom>
        ) : (
          <>
            <label>이미지가 없을 떄</label>
            <AddImageLogo>
              <CloudUploadOutlinedSt />
            </AddImageLogo>
            <AddImageButton>
              <button>
                <DownloadOutlinedSt />
                이미지 업로드
              </button>
            </AddImageButton>
          </>
        )}
      </AddImageBox>

      <AddText>
        <div>게시글 작성</div>
        <textarea placeholder="게시글을 작성하세요" />
      </AddText>
    </AddPostModalWrapper>
  );
};

export default AddPostModal;
