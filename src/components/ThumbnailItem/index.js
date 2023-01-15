// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeActiveImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const imgClassName = isActive ? 'open-img' : 'close-img'
  const onClickChangeImage = () => {
    changeActiveImage(id)
  }
  return (
    <li className="thumbnail-image">
      <button type="button" className="btn" onClick={onClickChangeImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={imgClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
