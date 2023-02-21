import React from 'react';
// styled-components
import { ImageSt } from '../../styles/components/AddPostModalSt';

const AddPostImages = ({ src }) => {
  return (
    <div>
      <ImageSt src={src} />
    </div>
  );
};

export default AddPostImages;
