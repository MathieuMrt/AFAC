import React from "react";
import AFAC from "../../../public/assets/img/apropos/logo_afac_noir.png";
import IHOI from "../../../public/assets/img/footer/logo_ihoi.jpg";
import OBJET_TEMOIN from "../../../public/assets/img/footer/logo_objet_temoin.png";

function Apropos() {
  return (
    <section className="apropos-container">
      <article className="apropos-afac">
        <img className="apropos-afac-logo" src={AFAC} alt="logo AFAC" />

        <p className="apropos-afac-partie1">
          L'AFAC 974 est une association à but non-lucratif basée à La Réunion,
          département français d'outre-mer situé dans l'océan Indien. la
          promotion de l'éducation, la formation et l'engagement citoyen dans la
          région est notre objectif.
        </p>
        <br />
        <p className="apropos-afac-partie2">
          {" "}
          Nous travaillons en partenariat avec des institutions éducatives, des
          collectivités locales et d'autres acteurs de la société civile pour
          mettre en place des programmes et des activités variés. L'association
          se concentre sur plusieurs domaines d'action, tels que l'éducation
          populaire, la formation professionnelle, l'insertion sociale et
          professionnelle, la culture et la citoyenneté.{" "}
        </p>
        <br />
        <p className="apropos-afac-partie2">
          Nous proposons des formations, des ateliers, des conférences, des
          projets culturels et artistiques, ainsi que des actions de
          sensibilisation sur des questions sociales et environnementales.
          L'AFAC 974 s'adresse à un large public, des jeunes aux adultes, en
          passant par les professionnels et les bénévoles. Notre objectif
          principal est de renforcer les compétences individuelles et
          collectives des participants, de favoriser leur inclusion sociale et
          de les encourager à devenir des citoyens actifs et responsables. En
          collaborant avec divers partenaires locaux et en nous appuyant sur une
          équipe de professionnels et de bénévoles engagés, nous souhaitons
          oeuvrer à la promotion d'une société plus solidaire et participative à
          La Réunion.
        </p>
        <br />
        <p className="apropos-afac-mentions">
          Mentions légales : Les images visibles sur le site ne sont pas libres
          de droit.
        </p>
      </article>

      <article className="apropos-partenaires">
        <h4>Nos partenaires : </h4>

        <div className="apropos-partenaires-logo-container">
          <a
            href="https://museo.vandanjon.com/index.php/en/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={OBJET_TEMOIN} alt="Objet Temoin" />
          </a>

          <a
            href="https://www.ihoi.org/app/photopro.sk/ihoi_icono/?"
            target="_blank"
            rel="noreferrer"
          >
            <img src={IHOI} alt="IHOI" />
          </a>
        </div>
      </article>
    </section>
  );
}

export default Apropos;
