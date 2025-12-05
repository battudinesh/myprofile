import { useEffect, useState } from "react";
import Card from "./temps/rough";
import Mobile from "./temps/mobileview"; // your mobile component

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 660);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 660);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ?<Card />: <Mobile />  ;
}

export default App;

