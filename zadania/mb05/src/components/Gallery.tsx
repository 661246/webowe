import { Fragment } from 'react'
import type { Photo } from '../App.tsx'
import PhotoCard from './PhotoCard.tsx'
import PhotoModal from './PhotoModal.tsx'

interface GalleryProps {
  zdjecia: Photo[]
  onUsun: (id: number) => void
}

function Gallery({ zdjecia, onUsun }: GalleryProps) {
  return (
    <div id="galeria" className="row g-4">
      {zdjecia.map(zdjecie => (
        <Fragment key={zdjecie.id}>
          <div className="col-12 col-md-6 col-lg-4">
            <PhotoCard {...zdjecie} onUsun={() => onUsun(zdjecie.id)} />
          </div>
          <PhotoModal {...zdjecie} />
        </Fragment>
      ))}
    </div>
  )
}

export default Gallery
