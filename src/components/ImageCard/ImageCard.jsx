import c from './ImageCard.module.css';

function ImageCard({ obj, onClick }) {
  return (
    <div>
      <img src={obj.urls.small} alt={obj.alt_description} className={c.cart} onClick={onClick} />
    </div>
  );
}

export default ImageCard;