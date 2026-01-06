import { MainPage } from "./pages/MainPage/MainPage.tsx";
import { Header } from "./components/Header/Header.tsx";
import { useDispatch } from "./services/store.ts";
import { useEffect } from "react";
import { fetchGetCards } from "./services/thunks/fetchGetCards.ts";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetCards());
  }, [dispatch]);

  return (
    <>
      <Header />
      <MainPage />
    </>
  );
};
