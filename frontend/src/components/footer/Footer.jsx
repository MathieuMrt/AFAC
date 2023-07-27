import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section className="footer-mentions-rgpd">
        <a
          id="link-wild"
          href="https://www.wildcodeschool.com/fr-FR/campus/nantes?utm_source=google&utm_medium=cpc&utm_campaign=brand-nantes&utm_campaign=FR_SEARCH+-+Marque&utm_term=wild%20code%20school%20nantes&utm_source=adwords&utm_medium=ppc&hsa_grp=127727580662&hsa_src=g&hsa_cam=14821000047&hsa_ad=629206314182&hsa_ver=3&hsa_kw=wild%20code%20school%20nantes&hsa_net=adwords&hsa_tgt=aud-1387390045139:kwd-731198544407&hsa_mt=e&hsa_acc=4421706736&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0xf6uFSHq00sSok1TZLOnGIxVA6uw1cECSIRjhhgCyj8XCcZk7yAUAaAlM7EALw_wcB"
          target="_blank"
          rel="noreferrer"
        >
          © Wild Code School.
        </a>
      </section>
      <NavLink to="/">
        <section className="footer-logo-afac">
          <img src="/assets/img/footer/logo_afac.png" alt="logo AFAC" />
        </section>
      </NavLink>
      <section className="footer-partenaires">
        <h4>Nos Partenaires: </h4>
        <a
          href="https://www.ihoi.org/app/photopro.sk/ihoi_icono/?"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/img/footer/logo_ihoi.jpg" alt="IHOI" />
        </a>

        <a
          href="https://museo.vandanjon.com/index.php/en/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/img/footer/logo_objet_temoin.png"
            alt="Objet Temoin"
          />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
