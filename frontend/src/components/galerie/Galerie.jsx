import React, { useState /* useEffect */ } from "react";
import SingleCard from "../singleCard/SingleCard";

function Galerie() {
  // const [oeuvre, setOeuvre] = useState([]);
  const [search, setSearch] = useState("");

  // useEffect(() =>{
  //   fetch("")
  //   .then((response) => response.json())
  //   .then((res) => setOeuvre(res))
  //   .catch((err) => console.error("Une erreur est survenue dans la récupération des données", err))
  // }, [])

  const handleSelector = (e) => {
    setSearch(e.target.value);
  };

  const oeuvres = [
    {
      id: "1",
      ref_archives: "40FI79",
      titre: "Effet de nuit sur la Cheminée usine du Tampon",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "1866",
      format: "20 X 14",
      technique: "Aquarelle",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Usines",
      details:
        "Attribuée parfois à l'usine du Grand Tampon, mais c'est peu probable: l'usine du Grand Tampon ayant été une scierie. Or, ici, il s'agit sans doute de l'usine de Bel Air: on reconnaît les deux corps principaux du bâtiment industriel (purgerie et bâtiment abritant la machine à vapeur) en parallèle, comme sur les figures 2 et 3. La cheminée carrée est sur le côté Nord, construite en basalte, avec intercalation de poutres deux côtés par deux côtés. Devant, un gardien, dont l'ombre se projette sur la cheminée. En arrière-plan, une allée de palmiers, qui semble mener vers la maison de maître. La disposition des lieux correspond à celle qui existait à Bel Air. Scène d'apparence paisible ?",
      resume: "Cheminée du Tampon",
      img: "https://zupimages.net/up/23/23/nvkt.jpg",
    },
    {
      id: "2",
      ref_archives: "40FI78",
      titre: "Arrivée à l'établissement du Tampon",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "1866",
      format: "15 X 13.5",
      technique: "Aquarelle",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Usines",
      details:
        "Le chemin de l'Etablissement existe toujours aujourd'hui, à 400 mètres d'altitude. Les deux cavaliers sont sans doute Ch. H. N; Mortier de Trévise lui-même, et son beau-frère (Denis-André de K/véguen)? En avant, 3 autres personnages cheminent à pied. La route traverse le lit desseché de la Rivière d'Abord, et remonte légèrement vers l'Etablissement (c'est-à-dire l'ensemble du fonds avec usine, bâtiments annexes, et camp des travailleurs engagés, non représenté ici. L'usine elle-même est composée de deux corps parallèles de bâtiments, flanqués chacun d'une cheminée: l'une pour évacuer les fumées de combustion pour la batterie Gimart, l'autre la fumée de la machine à vapeur. En quinconce, un autre bâtiment à l'avant, abritant les \"tables\" pour le séchage du sucre?",
      resume: "L'Établissement",
      img: "https://zupimages.net/up/23/23/86uh.jpg",
    },
    {
      id: "3",
      ref_archives: "40FI80",
      titre: "Tampon- Une usine",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "10 février 1866",
      format: "11.5 X 20.5",
      technique: "Dessin à la mine de plomb",
      lien_page_auteur: "",
      lien_article: "https://view.genial.ly/5fb636d03636f40d7f883f24",
      categorie: "Usines",
      details:
        "Une autre vue de l'usine de Bel Air, au Tampon: on retrouve le bâtiment en quinconce accolé au corps de l'usine, avec ses deux cheminées. Au premier plan, sur le chemin de l'Etablissement (400 m. d'altitude), on distingue un groupe de travailleurs engagés, près d'un point d'eau: un homme, une femme avec un bébé qui porte une jarre sur la tête, et un autre personnage. L'auteur note le nom des arbres et plantes (aloés divers, vacoas, palmiers)",
      resume: "Usine du Tampon",
      img: "https://zupimages.net/up/23/23/nvkt.jpg",
    },
    {
      id: "4",
      ref_archives: "40FI106",
      titre:
        "Quartier St Pierre. Etablissement de la Rivière, montagnes de l'Entre Deux",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "1861 ou 1866",
      format: "19.5 X 16.5",
      technique: "Aquarelle",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Usines",
      details:
        "L'usine (Etablissement) est installée rive gauche de la Rivière Saint-Etienne, au débouché du lieu-dit l'Entre-Deux. Elle semble présenter la même physionomie que les autres établissements achetés ou construits par Gabriel de K/Véguen: 2 corps principaux de bâtiments, ici décalés l'un par rapport à l'autre, avec des ouvertures en arc de cercle pou évacuer la chaleur, la cheminée qui évacue les fumées de la batterie Gimart, et, à l'arrière, un ou deux bâtiments pour le séchage du sucre. Au Premier plan, une escouade (une \"bande\") de travailleurs engagés effectue la \"trouaison\", pour la replantation de cannes à sucre, sous la direction d'un Commandeur, vêtu d'un pantalon de toile bleue. Un vacoa est ici le témoin indispensable de l'usage de ses feuilles pour le tressage de sacs, destinés ensuite à transporter le sucre produit.",
      resume: "Établissement de la Rivière",
      img: "https://zupimages.net/up/23/23/nvkt.jpg",
    },
    {
      id: "5",
      ref_archives: "40FI",
      titre: "Boutchiana- Indien",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "juillet 1871",
      format: "",
      technique: "Aquarelle",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Travailleurs",
      details:
        "Boutchiana est devenu le domestique personnel de Ch.Mortier de Trévise, et il a vieilli de 6 ans.",
      resume: "Établissement de la Rivière",
      img: "https://zupimages.net/up/23/23/sjtp.jpg",
    },
    {
      id: "6",
      ref_archives: "40FI91",
      titre: "Boutchiana- Casernes",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "24 août 1865",
      format: "19.5 X 11",
      technique: "Aquarelle",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Travailleurs",
      details:
        "Travailleur engagé depuis l'Inde à l'Etablissement des Casernes, il tient une lance, peut-être a-t-il une fonction de gardien? Sur sa fiche d'engagement, il était recensé comme tailleur",
      resume: "",
      img: "https://zupimages.net/up/23/23/nvkt.jpg",
    },
    {
      id: "7",
      ref_archives: "40FI90",
      titre: "Boutchiana-Casernes, de face",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "1865",
      format: "19.5 X 8.5",
      technique: "Aquarelle",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Travailleurs",
      details:
        "Complète la précédente aquarelle. On devine la jeunesse de Boutchiana, engagé à l'adolescence. Arrivé à bord de Yanaon, en Inde, à bord du navire de la famille Kerveguen, Le Canova, on le dit âgé de 17 ans",
      resume: "",
      img: "https://zupimages.net/up/23/23/sjtp.jpg",
    },
    {
      id: "8",
      ref_archives: "40FI76",
      titre: "Cafrine et son petit au Tampon",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "1861",
      format: "18 X 13",
      technique: "Aquarelle",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Travailleurs",
      details:
        "C'est une engagée, ou alors une affranchie. Elle porte la robe de toile bleue, dont la fourniture est obligatoire par l'employeur, selon les termes du contrat d'engagement. La pratique ne change guère de ce qui était déjà prévu avant 1848 pour les esclaves, par le \"Code noir\" de 1723.",
      resume: "",
      img: "https://zupimages.net/up/23/23/nvkt.jpg",
    },
    {
      id: "9",
      ref_archives: "40FI52",
      titre: "La vieille (Victorine) Mme Samsi Casernes",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "15 décembre 1865",
      format: "18 X 12",
      technique: "Aquarelle",
      lien_page_auteur: "",
      lien_article: "https://belair.hypotheses.org/389",
      categorie: "Travailleurs",
      details:
        "La vieille dame est assise sur une natte, vêtue de la traditionnelle robe de toile bleue fournie par l'employeur. Son foulard noué sur la tête est taillé dans la même toile.",
      resume: "",
      img: "https://zupimages.net/up/23/23/sjtp.jpg",
    },
    {
      id: "10",
      ref_archives: "40FI66",
      titre: "Elise",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "août 1861",
      format: "",
      technique: "Dessin",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Travailleurs",
      details:
        "Elise est une petite fille de Victorine, issue de sa fille Coralie",
      resume: "",
      img: "https://zupimages.net/up/23/23/nvkt.jpg",
    },
    {
      id: "11",
      ref_archives: "40Fi75",
      titre: "Lucie le ventre plein de cari",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "1866",
      format: "",
      technique: "Dessin",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Travailleurs",
      details:
        "Une autre petite fille de Victorine, sans doute dans la maison des Casernes.",
      resume: "",
      img: "https://zupimages.net/up/23/23/86uh.jpg",
    },
    {
      id: "12",
      ref_archives: "40Fi74",
      titre: "La belle Tina",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "1866",
      format: "",
      technique: "Dessin",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Travailleurs",
      details:
        "Visiblement, Mortier de Trévise a été impressionné par la chevelure de Tina. Encore une petite fille de Victorine, plus jeune. il semble que les fillettes fassent leur apprentissage de domestiques dans la propriété des Kerveguen.",
      resume: "",
      img: "https://zupimages.net/up/23/23/nvkt.jpg",
    },
    {
      id: "13",
      ref_archives: "40Fi60",
      titre: "Jamali, Cafre, Gardien",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "1861",
      format: "26 X 16.5",
      technique: "Aquarelle",
      lien_page_auteur: "",
      lien_article:
        "https://forgetmenot.objettemoin.org/index.php/fr/actus/36-jamali-gardien-de-cannes",
      categorie: "Travailleurs",
      details:
        "\"Cafre\" veut dire que Jamali n'est pas né sur l'Habitation, mais qu'il a vraisemblablement été recruté comme engagé. Il est armé d'une lance, et surveille l'orée des champs, ou les abords du camp des travailleurs.",
      resume: "",
      img: "https://zupimages.net/up/23/23/nvkt.jpg",
    },
    {
      id: "14",
      ref_archives: "40FI55",
      titre: "Le parapluie du pauvre Citoyen",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "1861",
      format: "19 X 11.5",
      technique: "Aquarelle",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Travailleurs",
      details:
        "Le titre de citoyen est une fierté pour les affranchis de 1848 qui travaillent sur la propriété ou dans les Etablissements K/Véguen. La pluie est rare à Saint-Pierre, beaucoup plus fréquente au Tampon (pluies orographiques pendant la saison chaude, celle de la coupe des cannes). Ici, le créole engagé dispose d'une maigre rémunération, juste suffisante pour sa nourriture et de menus frais à la \"boutique\". Depuis 1859, le salaire est en outre versé en kreutzers ( démonétisés, au cours forcé de 1 franc. A l'arrière-plan, sur la droite, la silhouette d'une cheminée d'usine, peut-être celle de Bel-Air, au Tampon.",
      resume: "",
      img: "https://zupimages.net/up/23/23/nvkt.jpg",
    },
    {
      id: "15",
      ref_archives: "40FI53.2",
      titre: "La pli y fait pas rien, ça ! Tampon",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "'27 janvier 1866",
      format: "30 X 20",
      technique: "Dessin",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Travailleurs",
      details:
        'La suite du commentaire est: "Ca ne lui fait rien,... tant pis pour lui ! mais aux cannes ça leur fait du bien tant mieux pour elles !...." Le jeune créole porte un chapeau de feutre déformé, pas de chaussures, comme la majorité des travailleurs. Janvier est en pleine période cyclonique: est-ce le cas ici?',
      resume: "",
      img: "https://zupimages.net/up/23/23/86uh.jpg",
    },
    {
      id: "17",
      ref_archives: "40Fi72",
      titre: "Chanvert descend le chemin de la Plaine, Golo est à ses côtés",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "1861",
      format: "8 X 15.5",
      technique: "Dessin",
      lien_page_auteur: "",
      lien_article: "https://belair.hypotheses.org/1351",
      categorie: "Travailleurs",
      details:
        "Chanvert est peut-etre un ami de la famille. Golo est un domestique qui l'accompagne. A l'arrière du tilbury, il semble qu'il y ait une borne kilométrique sur le côté de la route. Le chemin de la Plaine relie Saint-Pierre à la Plaine des Cafres, et, au-delà, à Saint-Benoît. L'Etablissement de Bel-Air est situé au tiers du parcours, entre La Plaine des Cafres et Saint-Pierre.",
      resume: "Golo et Chanvert",
      img: "https://zupimages.net/up/23/23/86uh.jpg",
    },
    {
      id: "18",
      ref_archives: "40Fi83",
      titre: "Sortie du Bras de Jean Payet en allant vers le Tampon",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "29 janvier 1865",
      format: "30 X 22.5",
      technique: "Dessin",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Lieux",
      details:
        "Le tilbury à quatre roues est tiré par quatre mules (importées du Poitou). La route, encore reconnaissable aujourd'hui, reliait les chmps de canne situés entre la ravin e Jean Payet (ancienne ravine du Tampon), et la ravine des Cafres. au sommet de ces champs, une scierie fournissait le bois et les planches pour les Etablissements K/Véguen",
      resume: "Sortie du Bras de Jean Payet",
      img: "https://zupimages.net/up/23/23/nvkt.jpg",
    },
    {
      id: "19",
      ref_archives: "40Fi77",
      titre: "Le bassin rouge au Tampon, la ravine descend",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "10 février 1866",
      format: "15 X 9,5",
      technique: "Aquarelle",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Lieux",
      details:
        "La cascade alimente un bassin à proximité d'un affluent de la rivière d'Abord",
      resume: "Bassin rouge",
      img: "https://zupimages.net/up/23/23/nvkt.jpg",
    },
    {
      id: "20",
      ref_archives: "40Fi104",
      titre: "Excursion au volcan de Bourbon",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "août 1861",
      format: "24,5 X 32",
      technique: "Dessin",
      lien_page_auteur: "",
      lien_article:
        "https://view.genial.ly/6432b64851cad10018f64868/interactive-image-caverne-lataniers",
      categorie: "Lieux",
      details:
        "Mortier de Trévise et sa belle-famille sont ne excursion au volcan. Il n'y avait pas de route, alors: il faut donc dormir en chemin dans cette caverne autrefois connue des noirs marrons, autrement dit fugitifs -avant  l'abolition de l'escalvage de 1848",
      resume: "Caverne des lataniers",
      img: "https://zupimages.net/up/23/23/nvkt.jpg",
    },
    {
      id: "21",
      ref_archives: "40Fi105bis",
      titre: "Le volcan de Bourbon vu du Pas de Bellecombre",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "août 1861",
      format: "18 X 24",
      technique: "Aquarelle",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Lieux",
      details:
        "Cela ne fait guère longtemps que le passage par le Pas de Bellecombe a été trouvé. Le lieu porte le nom du gouverneur présent au moment de la découverte du passage, mais c'est un esclave, Jacob, qui l'a découvert, en réalité. Bellecombe avait commandité l'expédition.",
      resume: "Pas de Bellecombe",
      img: "https://zupimages.net/up/23/23/sjtp.jpg",
    },
    {
      id: "22",
      ref_archives: "40Fi108",
      titre: "Mamzelle",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "14 avril 1866",
      format: "14.5 X 19.5",
      technique: "Dessin",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Animaux",
      details:
        "Les chevaux sont rares sur les établissements: ils font l'objet de soins attentifs, et ne sont montés que par les propriétaires des Etablissements, et les contremaîtres. Selle et cuirs peuvent être fabriqués sur place: il y eut un atelier sur l'Etablissement du Tampon.",
      resume: "",
      img: "https://zupimages.net/up/23/23/nvkt.jpg",
    },
    {
      id: "23",
      ref_archives: "40FI73",
      titre: "Charrette tirée par des mulets",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "1861",
      format: "6.5 X 15.5",
      technique: "Dessin",
      lien_page_auteur: "",
      lien_article: "",
      categorie: "Animaux",
      details:
        "4 mulets tirent une charrette apportant des cannes frâichement coupées à l'usine. Les mulets sont nombreux dans l'île à l'époque de l'industrialisation sucrière. Importés du Poitou, ce sont des bêtes robustes, qui coûtent moins chers que des boeufs ou des chevaux, pour lesquelles on construit des écuries. Elles ont des noms: on sait que dans l'Etablissement des Casernes, Tec Tec, Langoutil, et Malheur sont des noms de mules.",
      resume: "",
      img: "https://zupimages.net/up/23/23/sjtp.jpg",
    },
    {
      id: "24",
      ref_archives: "40FI53.1",
      titre: "Caille de Bourbon",
      auteur: "Hippolyte Charles Napoléon Mortier, Duc de Trévise",
      date_creation: "21 septembre 1861",
      format: "19 X 23",
      technique: "Aquarelle",
      lien_page_auteur: "",
      lien_article: "https://www.seor.fr/oiseau-25-caille-peinte.html",
      categorie: "Animaux",
      details:
        "En réalité, la caille fut introduite d'Asie, Inde ou chine, vers 1850. C'est la femelle qui est colorée ainsi de rouge au bas des ailes. A l'époque de Mortier de Trévise, c'est donc une curiosité, un peu en disparition, à cause de l'extension des champs cultivés en cannes à sucre.",
      resume: "",
      img: "https://zupimages.net/up/23/23/nvkt.jpg",
    },
  ];

  return (
    <main className="galerie">
      <div className="select-container">
        <select
          className="categorie_selection"
          value={search}
          onChange={handleSelector}
        >
          <option className="option" value="">
            Sélection par catégorie
          </option>
          {[...new Set(oeuvres.map((el) => el.categorie))].map((categorie) => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>
      </div>
      <ul className="galerie_ul">
        {oeuvres
          .filter((el) => search === "" || el.categorie === search)
          .map((el) => {
            return (
              <SingleCard
                key={el.id}
                id={el.id}
                titreResume={el.resume}
                titre={el.titre}
                categorie={el.categorie}
                image={el.img}
              />
            );
          })}
      </ul>
    </main>
  );
}

export default Galerie;
