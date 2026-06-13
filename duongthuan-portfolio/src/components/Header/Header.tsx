"use client";

import { useEffect, useState } from "react";
import headerItems from "./HeaderItemsData";

const Header = function () {
  const [currentSection, setCurrentSection] = useState<string>("home");
  useEffect(function () {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = function (entries: IntersectionObserverEntry[]) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          const id = e.target.id;
          setCurrentSection(id);
          window.history.replaceState(null, "", `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    headerItems.forEach(function (item, index) {
      const e = document.querySelector(item.href);
      if (e) {
        observer.observe(e);
      }
    });
  }, []);

  return (
    <div className="flex justify-center gap-3 py-1 backdrop-blur-sm bg-white/30 text-xl sticky top-0 z-50">
      {headerItems.map(function (item, index) {
        return (
          <a
            href={item.href}
            key={item.display}
            className={`px-3 py-0.5 rounded-2xl 
              after:w-0 after:h-0.5 after:content-[''] after:block
              hover:after:w-full after:transition-all after:duration-200
              ${currentSection == item.href.substring(1) ? "bg-my-primary text-white after:bg-background" : "text-black/60 after:bg-my-primary"}`}
          >
            <div className="flex items-center gap-1">
              <item.icon className="w-5 h-5" />
              <div>{item.display}</div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Header;
