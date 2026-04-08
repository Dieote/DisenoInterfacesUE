export default function CarouselBanner() {
  const slides = [
    { src: '/img/baner2.jpg', alt: 'Café 1' },
    { src: '/img/banner1.jpg', alt: 'Café 2' },
    { src: '/img/cafe3.jpg', alt: 'Café 3' },
  ]

  return (
    <div id="carouselCafe" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div key={i} className={`carousel-item${i === 0 ? ' active' : ''}`}>
            <img
              src={slide.src}
              className="d-block w-100"
              style={{ height: '500px', objectFit: 'cover' }}
              alt={slide.alt}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselCafe"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselCafe"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  )
}
