import c from './ImageCard.module.css'

function ImageCard({ obj }) {
  return (
    <div>
      <img src={obj.urls.raw} alt={obj.alt_description} className={ c.cart}/>
    </div>
  );
}

export default ImageCard;