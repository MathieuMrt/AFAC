import React from "react";
import AFAC from "../../assets/img/footer/logo_afac.png";
import IHOI from "../../assets/img/footer/logo_ihoi.jpg";
import OBJET_TEMOIN from "../../assets/img/footer/logo_objet_temoin.png";

function Footer() {
  return (
    <footer className="footer-main">
      {/* ************** FOOTER PARTIE GAUCHE ************  */}

      <section className="footer-mentions.rgpd">
        <a href="https://www.wildcodeschool.com/fr-FR/campus/nantes?utm_source=google&utm_medium=cpc&utm_campaign=brand-nantes&utm_campaign=FR_SEARCH+-+Marque&utm_term=wild%20code%20school%20nantes&utm_source=adwords&utm_medium=ppc&hsa_grp=127727580662&hsa_src=g&hsa_cam=14821000047&hsa_ad=629206314182&hsa_ver=3&hsa_kw=wild%20code%20school%20nantes&hsa_net=adwords&hsa_tgt=aud-1387390045139:kwd-731198544407&hsa_mt=e&hsa_acc=4421706736&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0xf6uFSHq00sSok1TZLOnGIxVA6uw1cECSIRjhhgCyj8XCcZk7yAUAaAlM7EALw_wcB">
          © Wild Code School
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR/campus/nantes?utm_source=google&utm_medium=cpc&utm_campaign=brand-nantes&utm_campaign=FR_SEARCH+-+Marque&utm_term=wild%20code%20school%20nantes&utm_source=adwords&utm_medium=ppc&hsa_grp=127727580662&hsa_src=g&hsa_cam=14821000047&hsa_ad=629206314182&hsa_ver=3&hsa_kw=wild%20code%20school%20nantes&hsa_net=adwords&hsa_tgt=aud-1387390045139:kwd-731198544407&hsa_mt=e&hsa_acc=4421706736&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0xf6uFSHq00sSok1TZLOnGIxVA6uw1cECSIRjhhgCyj8XCcZk7yAUAaAlM7EALw_wcB">
          Mentions Légales
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR/campus/nantes?utm_source=google&utm_medium=cpc&utm_campaign=brand-nantes&utm_campaign=FR_SEARCH+-+Marque&utm_term=wild%20code%20school%20nantes&utm_source=adwords&utm_medium=ppc&hsa_grp=127727580662&hsa_src=g&hsa_cam=14821000047&hsa_ad=629206314182&hsa_ver=3&hsa_kw=wild%20code%20school%20nantes&hsa_net=adwords&hsa_tgt=aud-1387390045139:kwd-731198544407&hsa_mt=e&hsa_acc=4421706736&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0xf6uFSHq00sSok1TZLOnGIxVA6uw1cECSIRjhhgCyj8XCcZk7yAUAaAlM7EALw_wcB">
          Politique RGPD
        </a>
      </section>

      {/*  ************** FOOTER PARTIE CENTRALE ************  */}
      <section className="footer-logo-afac">
        <img src={AFAC} alt="logo AFAC" />
      </section>

      {/*  /* ************* FOOTER PARTIE DROITE ************  */}

      <section className="footer-partenaires">
        <h3>Nos Partenaires: </h3>

        <img src={IHOI} alt="IHOI" />

        <img src={OBJET_TEMOIN} alt="Objet Temoin" />
      </section>
    </footer>
  );
}

export default Footer;
