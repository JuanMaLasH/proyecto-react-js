import foto1 from '../assets/home/1.jpg';
import foto2 from '../assets/home/2.jpg';
import foto3 from '../assets/home/3.jpg';
import foto4 from '../assets/home/4.jpg';
import foto5 from '../assets/home/5.jpg';

const Carrousel = () => {
    return (
        <div id="carouselHome" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a href="./sites/tienda.html"><img src={foto1} class="d-block w-100" alt="Banner de la tienda"/></a>
              </div>
              <div className="carousel-item">
                <a href="./sites/tienda.html"><img src={foto2} class="d-block w-100" alt="Banner de la tienda"/></a>
              </div>
              <div className="carousel-item">
                <a href="./sites/tienda.html"><img src={foto3} class="d-block w-100" alt="Banner de la tienda"/></a>
              </div>
              <div className="carousel-item">
                <a href="./sites/tienda.html"><img src={foto4} class="d-block w-100" alt="Banner de la tienda"/></a>
              </div>
              <div className="carousel-item">
                <a href="./sites/tienda.html"><img src={foto5} class="d-block w-100" alt="Banner de la tienda"/></a>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carrousel;