function Testimonials(){
  return <section id="testimonials">
    <div className="container">

    <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        <div className="carousel-item active" data-bs-interval="5000">         
          <h2>Excelente ferramenta para acompanhamento do dia a dia. Muito flexível!</h2>
          <img src="img/cliente.jpg" alt="Imagem cliente"/>
          <em>Márcio Martins - São Paulo</em>
        </div>

        <div className="carousel-item">
          <h2>Excelente ferramenta para acompanhamento do dia a dia. Muito flexível! É uma ferramenta muito útil e bastante intuitiva.</h2>
          <img src="img/cliente.jpg" alt="Imagem cliente"/>
          <em>Victor Lucas - Minas Gerais</em>
        </div>

      
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
   </div>

    </div>
  </section>
};

export default Testimonials;