import c from './LoadMore.module.css'
function LoadMore({onClick }) {
  return (
    <div>
      <button className={c.loadMoreBtn} onClick={onClick}>Load more</button>
    </div>
  )
}

export default LoadMore
