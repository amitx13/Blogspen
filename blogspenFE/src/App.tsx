import { useEffect } from "react";
import MainNavbar from "./component/MainNavbar";
import { TabsList } from "./component/TabsList";
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from "./Route";
import { useRecoilState } from "recoil";
import { themeState } from "./state/themeState";
import { SignUp } from "./component/SignUp";
import { Home } from "./component/Home";
import NewStory from "./component/NewStory";

const App = () => {
  const [theme, setTheme] = useRecoilState<boolean>(themeState);

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("theme") || "false");
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <main className={`${theme ? 'dark' : 'light'} text-foreground bg-background`}>
      <MainNavbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path={routes.home} element={
          <>
            <TabsList />
            <Home/>
          </>
        } />
        <Route path={routes.signUp} element={<SignUp/>}/>
        <Route path={routes.write} element={<NewStory/>}/>
        <Route path={routes.profile} element={<Navigate to="/"/>}/>
      </Routes>
    </main>
  );
};

export default App;