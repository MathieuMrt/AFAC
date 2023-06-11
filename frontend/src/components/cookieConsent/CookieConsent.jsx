import CookieConsent from "react-cookie-consent";

function Cookie() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="J'ai compris"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#b982ae" }}
      buttonStyle={{
        color: "white",
        fontSize: "80%",
        backgroundColor: "#277594",
      }}
      expires={150}
    >
      Ce site utilise des cookies pour améliorer l'expérience utilisateur.
    </CookieConsent>
  );
}

export default Cookie;
