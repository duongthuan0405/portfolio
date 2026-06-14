"use client";

import { useEffect, useState } from "react";
import headerItems, { HeaderItem } from "./HeaderItemsData";
import { Menu, X } from "lucide-react";
import { LightDarkModeToggle } from "./ToggleDarkLightMode";

const EHeaderItem = function ({
  item,
  currentItem,
  onClick,
}: {
  item: HeaderItem;
  currentItem: HeaderItem;
  onClick?: (selectedItem: HeaderItem) => void;
}) {
  function handleOnClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ): void {
    onClick?.(currentItem);
  }

  return (
    <a
      href={item.href}
      key={item.href}
      onClick={handleOnClick}
      className={`px-3 py-1 rounded-2xl 
                after:w-0 after:h-0.5 after:content-[''] after:block
                hover:after:w-full after:transition-all after:duration-200
                ${currentItem.href == item.href ? "bg-background text-foreground after:bg-foreground" : "text-background/60 after:bg-background"}`}
    >
      <div className="flex items-center gap-1">
        <item.icon className="w-5 h-5" />
        <div>{item.display}</div>
      </div>
    </a>
  );
};

const Header = function () {
  const [currentItem, setCurrentItem] = useState<HeaderItem>(headerItems[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          setCurrentItem(
            headerItems.find((e, i) => e.href === `#${id}`) ?? headerItems[0],
          );
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

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Màn hình rộng (Desktop) */}
      <div className="hidden lg:flex justify-center items-center gap-3 py-2 bg-foreground text-xl fixed top-2 z-50 w-fit rounded-3xl px-5">
        {headerItems.map(function (item, index) {
          return (
            <EHeaderItem
              item={item}
              currentItem={currentItem}
              key={item.href}
            />
          );
        })}

        <LightDarkModeToggle />
      </div>

      {/* Màn hình hẹp (Mobile): Thêm mới dạng collapse */}
      <div className="hidden max-lg:flex fixed top-2 z-50 w-full px-4 flex-col items-center">
        <div className="w-full max-w-lg bg-foreground text-background rounded-2xl shadow-lg px-4 py-2 transition-all duration-300">
          <div className="flex items-center justify-between py-1">
            <div className="font-semibold text-lg flex gap-2">
              <currentItem.icon></currentItem.icon>
              {currentItem.display}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 rounded-full hover:bg-background/10 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              <LightDarkModeToggle />
            </div>
          </div>

          {isOpen && (
            <nav className="flex flex-col gap-1 mt-2 pt-2 border-t border-background/10">
              {headerItems.map(function (item) {
                const isActive = currentItem.href === item.href;
                return (
                  <EHeaderItem
                    item={item}
                    currentItem={currentItem}
                    key={item.href}
                    onClick={(se) => setIsOpen(false)}
                  />
                );
              })}
            </nav>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
