import  { useState } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import CustomModal from '../Modal/Modal';

function ImageGallery({ results }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <ul className={css.list}>
        {results.map((obj) => (
          <li key={obj.id} onClick={() => handleImageClick(obj)}>
            <ImageCard obj={obj} />
          </li>
        ))}
      </ul>

      {selectedImage && (
        <CustomModal isOpen={!!selectedImage} onRequestClose={closeModal}>
          <img src={selectedImage.urls.regular} alt={selectedImage.alt_description} />
          <p>{selectedImage.description}</p>
        </CustomModal>
      )}
    </>
  );
}

export default ImageGallery;