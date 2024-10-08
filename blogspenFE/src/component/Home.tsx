import { useEffect, useRef } from "react";
import { BlogPost } from "./BlogPost";
import { Divider } from "@nextui-org/react";
import { Cards } from "./Cards";
import { PreviewProfile } from "./PreviewProfile";

export const Home = () => {
    const rightSideRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const rightSide = rightSideRef.current;
  
      const handleScroll = () => {
        if (rightSide) {
          rightSide.scrollTop = window.scrollY;
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return(
      <div className="flex justify-center pl-2 pr-2 md:pl-0 md:pr-0">
      <div>
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
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
      <div className="p-9 hidden md:block">
        <Divider orientation="vertical" />
      </div>
      <div ref={rightSideRef} className="hidden md:block sticky overflow-y-hidden top-0  h-screen">
        <Cards title={"Who to follow"} buttonText={"See more suggestions"} className="" isDivider={false}>
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="mt-2 flex justify-center">
              <PreviewProfile />
            </div>
          ))}
        </Cards>
        <Divider orientation="horizontal" className="mt-4 mb-4" />
        <Cards title={"Bookmarks"} buttonText={"See all bookmarks"}>
          {Array(2).fill(0).map((_, i) => (
            <div key={i} className="pt-3 pb-3">
              <p>Make beautiful websites regardless of your design experience.</p>
              <p className="text-sm text-gray-500">by John Doe</p>
            </div>
          ))}
        </Cards>
        <Divider orientation="horizontal" className="mt-4 mb-4" />
        <Cards title={"Trending Article"} buttonText={"See more"}>
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className="pt-3 pb-3">
              <p>Make beautiful websites regardless of your design experience.</p>
              <p className="text-sm text-gray-500">by John Doe</p>
            </div>
          ))}
        </Cards>
      </div>
    </div>
    )
  }