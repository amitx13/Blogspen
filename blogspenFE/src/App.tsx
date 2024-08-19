import { useState } from "react";
import MainNavbar from "./component/MainNavbar";
import { BlogPost } from "./component/BlogPost";
import { PreviewProfile } from "./component/PreviewProfile";

function App() {
  const [theme, setTheme] = useState<boolean>(true);
  return (
    <main className={`${theme ? 'dark' : 'light'} text-foreground bg-background h-screen w-full`}>
      <MainNavbar setTheme={setTheme} />
      <div className="flex">
        <BlogPost />
        <div className="hidden sm:flex">
        <PreviewProfile />
        </div>
      </div>
    </main>
  );
}

export default App;
