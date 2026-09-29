import { Fragment } from 'react'
import { Photo } from '../App.tsx'
import PhotoCard from './PhotoCard.tsx'
import PhotoModal from './PhotoModal.tsx'

interface GalleryProps {
  zdjecia: Photo[]
  onUsun: (id: number) => void
  onPrzelacz: (id: number) => void
}

function Gallery({ zdjecia, onUsun, onPrzelacz }: GalleryProps) {
  return (
    <div id="galeria" className="row g-4">
      {zdjecia.map(zdjecie => (
        <Fragment key={zdjecie.id}>
          <div className="col-12 col-md-6 col-lg-4">
            <PhotoCard
              {...zdjecie}
              onUsun={() => onUsun(zdjecie.id)}
              onPrzelacz={() => onPrzelacz(zdjecie.id)}
            />
          </div>
          <PhotoModal {...zdjecie} />
        </Fragment>
      ))}
    </div>
  )
}

export default Gallery
