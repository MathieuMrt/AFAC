import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Protected = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }
    const utilisateur = jwtDecode(token);
    if (utilisateur.utilisateur.estAdmin === 0) {
      const currentPath = window.location.pathname;
      if (currentPath === "/admin") {
        navigate("/");
      }
    }
  }, []);

  return children;
};

export default Protected;
