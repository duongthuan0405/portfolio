"use client";
import { User, ArrowRight, Sparkles, Link } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import mySelfInformation from "@/dataProvider/mySelf";

const HomeSection = function () {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-between overflow-hidden bg-background lg:pt-0 "
    >
      {/* Desktop Diagonal split layout */}
      <div className="w-full h-full max-w-7xl pt-20 flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        {/* Left Side: Portrait with Diagonal Cut (Desktop) / Rounded image (Mobile) */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center h-87.5 sm:h-112.5 lg:h-160 group">
          {/* Border accent behind the image with diagonal cut */}
          <div className="absolute inset-0 bg-linear-to-tr from-primary to-chart-1 rounded-3xl lg:rounded-none lg:clip-path-diagonal opacity-80 transition-transform duration-700 group-hover:scale-[1.01] pointer-events-none" />

          {/* Glowing border outline */}
          <div className="absolute top-0.75 right-0.75 bottom-0.75 left-0.75 bg-background rounded-3xl lg:rounded-none lg:clip-path-diagonal pointer-events-none" />

          {/* Main Portrait Container */}
          <div className="absolute top-2 left-2 right-2 bottom-2 overflow-hidden rounded-2xl lg:rounded-none lg:clip-path-diagonal">
            <img
              src={mySelfInformation.avatar_home}
              alt={mySelfInformation.fullName}
              className="object-cover transition-transform duration-700 group-hover:scale-105 w-full h-full"
            />
          </div>
        </div>

        {/* Right Side: Introduction & Links */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              {"Hi, I'm"}
              <br></br>
              {mySelfInformation.fullName}
            </h1>
            <div className="text-xl sm:text-2xl font-semibold text-muted-foreground">
              {mySelfInformation.position.map(function (p, i) {
                return <p key={i}>{p}</p>;
              })}
            </div>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {mySelfInformation.short_bio}
          </p>

          {/* Social Links & Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-foreground text-background font-semibold px-8 py-3.5 rounded-xl hover:bg-foreground/70 transition-all duration-300 shadow-lg shadow-foreground/10 hover:shadow-foreground/20"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/duong.q.thuan.9"
                target="_blank"
                aria-label="Facebook"
                className="group inline-flex items-center justify-center p-3.5 rounded-[50%] bg-foreground text-foreground border border-border/50 hover:bg-fb transition-all duration-300"
              >
                <FaFacebookF className="w-6 h-6 text-background group-hover:text-white" />
              </a>

              <a
                href="https://www.linkedin.com/in/thu%E1%BA%ADn-d%C6%B0%C6%A1ng-58737940b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMGWoQrBlRbmvtzMCY2lNaQ%3D%3D"
                target="_blank"
                aria-label="Linked In"
                className="group inline-flex items-center justify-center p-3.5 rounded-[50%] bg-foreground text-foreground border border-border/50 hover:bg-linkedin transition-all duration-300"
              >
                <FaLinkedinIn className="w-6 h-6 text-background group-hover:text-white" />
              </a>

              <a
                href="https://www.github.com/duongthuan0405"
                target="_blank"
                aria-label="Git Hub"
                className="group inline-flex items-center justify-center p-3.5 rounded-[50%] bg-foreground text-foreground border border-border/50 hover:bg-github/70 transition-all duration-300"
              >
                <BsGithub className="w-6 h-6 text-background group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
