import CookieConsent from "react-cookie-consent";

function Cookie() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="J'ai compris"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#b982ae", fontFamily: "Montserrat" }}
      buttonStyle={{
        color: "white",
        fontSize: "80%",
        backgroundColor: "#277594",
        fontFamily: "Montserrat",
      }}
      expires={150}
    >
      Ce site utilise des cookies pour améliorer l'expérience utilisateur.
    </CookieConsent>
  );
}

export default Cookie;
