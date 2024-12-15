function Banner(){
  return <section id="banner">
    <div className="container">

      <div className="row">
        
        <div className="col-lg-6">
          <h1>Uma plataforma de CRM simples de configurar e fácil de usar.</h1>
          <h4>Gerencie seus clientes em um único lugar.</h4>
          <a href="/app/CriarConta" className="btn btn-primary btn-lg btn-banner">Criar uma conta</a>
          <a href="/app" className="btn btn-outline-light btn-lg btn-banner">Fazer Login</a>
        </div>

        <div className="col-lg-6">
          <img src="img/screenshot-crm.png" alt="Imagem Banner"></img>
        </div>

      </div>
    </div>    
  </section>
};

export default Banner;