import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ results, onImageClick }) {
  return (
    <ul className={css.list}>
      {results.map((obj) => (
        <li key={obj.id}>
          <ImageCard obj={obj} onClick={() => onImageClick(obj)} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;