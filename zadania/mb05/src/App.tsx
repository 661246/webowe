import { useState } from 'react'
import Navbar from './components/Navbar.tsx'
import CategoryBar from './components/CategoryBar.tsx'
import Gallery from './components/Gallery.tsx'
import Footer from './components/Footer.tsx'
import AddPhotoModal from './components/AddPhotoModal.tsx'
import FiltersOffcanvas from './components/FiltersOffcanvas.tsx'
import photos from './data/photos.json'
import './App.css'

export interface Photo {
  id: number
  title: string
  description: string
  category: string
  image: string
  imageLarge: string
  alt: string
  favorite?: boolean
}

function App() {
  const [zdjecia, setZdjecia] = useState<Photo[]>(photos)
  const [aktywnaKategoria, setAktywnaKategoria] = useState<string>('wszystkie')

  const widoczne =
    aktywnaKategoria === 'wszystkie'
      ? zdjecia
      : zdjecia.filter(z => z.category === aktywnaKategoria)

  function usunZdjecie(id: number) {
    setZdjecia(zdjecia.filter(z => z.id !== id))
  }

  function dodajZdjecie(nowe: Omit<Photo, 'id' | 'favorite'>) {
    const noweId = zdjecia.length > 0 ? Math.max(...zdjecia.map(z => z.id)) + 1 : 1
    setZdjecia([...zdjecia, { ...nowe, id: noweId, favorite: false }])
  }

  function przelaczUlubione(id: number) {
    setZdjecia(
      zdjecia.map(z => (z.id === id ? { ...z, favorite: !z.favorite } : z))
    )
  }

  return (
    <>
      <Navbar />
      <header className="container py-4 py-lg-5">
        <div className="row align-items-center g-3">
          <div className="col-12 col-lg-8">
            <h1 className="mb-2">Galeria zdjęć</h1>
            <p className="lead text-body-secondary mb-0">
              Zdjęcia z wypraw w góry, nad morze i po mieście. Wybierz kategorię,
              żeby zawęzić widok — albo powiększ zdjęcie, które Ci się spodoba.
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <div className="d-flex flex-wrap gap-2 justify-content-lg-end">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-toggle="offcanvas"
                data-bs-target="#panelFiltrow"
              >
                Filtry
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#dodajZdjecie"
              >
                Dodaj zdjęcie
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="container">
        <CategoryBar aktywna={aktywnaKategoria} onWybierz={setAktywnaKategoria} />
        <p className="text-body-secondary">
          Wyświetlono {widoczne.length} z {zdjecia.length} zdjęć
        </p>
        {widoczne.length === 0 && (
          <div className="alert alert-warning">
            Nie znaleziono zdjęć w tej kategorii.
          </div>
        )}
        <Gallery
          zdjecia={widoczne}
          onUsun={usunZdjecie}
          onPrzelacz={przelaczUlubione}
        />
      </main>
      <Footer />
      <AddPhotoModal onDodaj={dodajZdjecie} />
      <FiltersOffcanvas aktywna={aktywnaKategoria} onWybierz={setAktywnaKategoria} />
    </>
  )
}

export default App
