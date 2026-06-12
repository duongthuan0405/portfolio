"use client";

import Link from "next/link";
import { SyntheticEvent, useEffect, useState } from "react";

type HeaderItem = {
  display: string;
  href: string;
};

const headerItems: HeaderItem[] = [
  {
    display: "Home",
    href: "#home",
  },
  {
    display: "About",
    href: "#about",
  },
  {
    display: "Skills",
    href: "#skills",
  },
  {
    display: "Experiences",
    href: "#experiences",
  },
  {
    display: "Achievements",
    href: "#achievements",
  },
  {
    display: "Projects",
    href: "#projects",
  },
];

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
    <div className="flex justify-center gap-3 py-1 backdrop-blur-sm bg-white/30 text-2xl sticky top-0 z-50">
      {headerItems.map(function (item, index) {
        return (
          <a
            href={item.href}
            key={item.display}
            className={`px-3 py-0.5 rounded-xl ${currentSection == item.href.substring(1) ? "bg-purple-800 text-white" : ""}`}
          >
            {item.display}
          </a>
        );
      })}
    </div>
  );
};

export default Header;
