import { Link } from 'react-router-dom'
import { useZdjecia } from '../hooks/useZdjecia.js'

function ZdjecieDnia() {
  const { zdjecia, isLoading, error } = useZdjecia()

  if (isLoading || error || zdjecia.length === 0) return null

  const zdjecie = zdjecia[0]

  return (
    <section className="card shadow-sm">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={zdjecie.image}
            className="img-fluid rounded-start w-100 h-100 object-fit-cover"
            alt={zdjecie.alt}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <p className="text-uppercase text-body-secondary small mb-1">
              Zdjęcie dnia
            </p>
            <h2 className="card-title h4">{zdjecie.title}</h2>
            <p className="card-text">{zdjecie.description}</p>
            <Link className="btn btn-outline-primary" to={`/zdjecie/${zdjecie.id}`}>
              Zobacz zdjęcie
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ZdjecieDnia
