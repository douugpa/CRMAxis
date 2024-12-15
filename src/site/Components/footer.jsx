function Footer(){
  let ano = new Date().getUTCFullYear();

  return <section id="footer">
    <div>
      <ul className="list-unstyled list-inline social-text-center">
        <li className="list-inline-item"><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook fa-2x"></i></a></li>
        <li className="list-inline-item"><a href="https://x.com/" target="_blank"><i className="fa fa-twitter fa-2x"></i></a></li>
        <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram fa-2x"></i></a></li>
        <li className="list-inline-item"><a href="https://hotmail.com/" target="_blank"><i className="fa fa-envelope fa-2x"></i></a></li>
      </ul>
    </div>
    <a href="mailto:dougupbh@gmail.com">dougupbh@gmail.com</a>
    <p>Powered By DougX - {ano}</p>
    
  </section>
};

export default Footer;