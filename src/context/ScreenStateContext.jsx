import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const ScreenStateContext = createContext();

export default function ScreenStateProvider({ children }) {
  const [isMobile, setMobile] = useState(checkMobile());

  const handleResize = useCallback(() => {
    setMobile(checkMobile());
  }, []);

  useEffect(() => {
    handleResize();
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <ScreenStateContext.Provider value={{ isMobile }}>
      {children}
    </ScreenStateContext.Provider>
  );
}

export const useScreenStateContext = () => useContext(ScreenStateContext);

const checkMobile = () => {
  return window.innerWidth < 768 ? true : false;
};
