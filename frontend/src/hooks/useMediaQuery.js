import { useEffect, useState } from "react";

const useMediaQuery = ({ matchQuery }) => {
  const mediaQuery = window.matchMedia(matchQuery);
  const [matches, setMatches] = useState(mediaQuery.matches);

  useEffect(() => {
    const eventHandler = (event) => {
      setMatches(event.matches);
    };
    mediaQuery.addEventListener("change", eventHandler);

    return () => {
      mediaQuery.removeEventListener("change", eventHandler);
    };
  });

  return {
    matches,
  };
};

export default useMediaQuery;
