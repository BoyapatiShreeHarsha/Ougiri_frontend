import HomeImage1 from '../../images/Homepic1.jpg'
import HomeImage2 from '../../images/Home2.jpg'
import HomeImage3 from '../../images/Home3.png'
import HomeImage4 from '../../images/Home4.jpg'


// images must be of same size
import './Home.css'
function Home() {
  return <>
  {/* nit part */}
  <div className='nit'>
  <div id="carouselExampleDark" className="carousel carousel-dark slide ct">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <img src={HomeImage1} className="rounded mx-auto d-block" alt="..." />
      
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={HomeImage2} className="rounded mx-auto d-block" alt="..." />
     
    </div>
    <div className="carousel-item">
    <img src={HomeImage3} className="rounded mx-auto d-block" alt="..." />
     
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="container text-center my-4">
<div className="row">

  <div className="col">
    <h2>NIT Manipur</h2>
  </div>

</div>
<div className="row">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi numquam maxime laboriosam porro, nemo dolore, fugiat quam veniam ipsam hic, dicta neque fuga temporibus sapiente. Perferendis earum ab nobis.Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi numquam maxime laboriosam porro, nemo dolore, fugiat quam veniam ipsam hic, dicta neque fuga temporibus sapiente. Perferendis earum ab nobis.Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi numquam maxime laboriosam porro, nemo dolore, fugiat quam veniam ipsam hic, dicta neque fuga temporibus sapiente. Perferendis earum ab nobis.Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi numquam maxime laboriosam porro, nemo dolore, fugiat quam veniam ipsam hic, dicta neque fuga temporibus sapiente. Perferendis earum ab nobis.</p>
</div>
</div>
</div>

      {/* ogri part */}
      <div className='Home_ogri'>
      <div id="carouselExampleDark1" className="carousel carousel-dark slide ct">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <img src={HomeImage4} className="rounded mx-auto d-block" alt="..." />
      
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={HomeImage2} className="rounded mx-auto d-block" alt="..." />
     
    </div>
    <div className="carousel-item">
    <img src={HomeImage3} className="rounded mx-auto d-block" alt="..." />
     
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="container text-center my-4">
<div className="row">

  <div className="col">
    <h2>Ogri</h2>
  </div>

</div>
<div className="row">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi numquam maxime laboriosam porro, nemo dolore, fugiat quam veniam ipsam hic, dicta neque fuga temporibus sapiente. Perferendis earum ab nobis.Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi numquam maxime laboriosam porro, nemo dolore, fugiat quam veniam ipsam hic, dicta neque fuga temporibus sapiente. Perferendis earum ab nobis.Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi numquam maxime laboriosam porro, nemo dolore, fugiat quam veniam ipsam hic, dicta neque fuga temporibus sapiente. Perferendis earum ab nobis.Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi numquam maxime laboriosam porro, nemo dolore, fugiat quam veniam ipsam hic, dicta neque fuga temporibus sapiente. Perferendis earum ab nobis.</p>
</div>
</div>
{/* judges */}
<div className='Home_judge'>
  <div className='judge-title'><h2>Our Judges</h2></div>
  <div className='Home_judges'>
<div className="Home_card" >
<img src={HomeImage1} className="rounded  card-img-top" alt="..." />
  
  <div className="card-body">
    <h5 className="card-title">XYZ</h5>
    <p className="card-text">Some quick example text to build </p>
  </div>
</div>

<div className="Home_card" >
<img src={HomeImage1} className="rounded  card-img-top" alt="..." />
 
  <div className="card-body">
    <h5 className="card-title">ABC</h5>
    <p className="card-text">Some quick example text to build </p>
  </div>
</div>

<div className="Home_card" >
<img src={HomeImage1} className="rounded card-img-top" alt="..." />
 
  <div className="card-body">
    <h5 className="card-title">PQR</h5>
    <p className="card-text">Some quick example text to build </p>
  </div>
</div>
</div>
</div>
</div>
  </>
}
export default Home