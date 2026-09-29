const KATEGORIE = [
  { value: 'gory', label: 'Góry' },
  { value: 'morze', label: 'Morze' },
  { value: 'miasto', label: 'Miasto' },
]

interface CategoryBarProps {
  aktywna: string
  onWybierz: (kat: string) => void
}

function CategoryBar({ aktywna, onWybierz }: CategoryBarProps) {
  return (
    <div id="kategorie" className="d-flex flex-wrap gap-2 mb-4">
      <button
        type="button"
        className={`btn btn-outline-primary${aktywna === 'wszystkie' ? ' active' : ''}`}
        aria-pressed={aktywna === 'wszystkie'}
        onClick={() => onWybierz('wszystkie')}
      >
        Wszystkie
      </button>
      {KATEGORIE.map(kategoria => (
        <button
          key={kategoria.value}
          type="button"
          className={`btn btn-outline-primary${aktywna === kategoria.value ? ' active' : ''}`}
          aria-pressed={aktywna === kategoria.value}
          onClick={() => onWybierz(kategoria.value)}
        >
          {kategoria.label}
        </button>
      ))}
    </div>
  )
}

export default CategoryBar
