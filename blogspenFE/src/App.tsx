import { useState } from "react";
import MainNavbar from "./component/MainNavbar";
import { BlogPost } from "./component/BlogPost";
import { PreviewProfile } from "./component/PreviewProfile";
import { TabsList } from "./component/TabsList";
import { BookMarkCard } from "./component/BookMarkCard";
import { TrendingCard } from "./component/TrendingCard";

function App() {
  const [theme, setTheme] = useState<boolean>(true);
  return (
    <main className={`${theme ? 'dark' : 'light'} text-foreground bg-background h-full w-full overflow-y-auto`}>
      <MainNavbar setTheme={setTheme} />
      <div className="gap-5">
        <TabsList />
        <div className="flex justify-evenly">
          <div className="pr-4">
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </div>
          <div className="hidden sm:flex flex-col gap-2">
            <div>
              <PreviewProfile />
              <PreviewProfile />
              <PreviewProfile />
              <PreviewProfile />
              <PreviewProfile />
            </div>
            <div>
              <BookMarkCard />
            </div>
            <div className="mt-5">
              <TrendingCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;