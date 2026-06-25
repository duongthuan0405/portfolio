import socialMediaInformation from "@/dataProvider/socialMedia";
import mySelfInformation from "@/dataProvider/mySelf";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 mt-auto border-t border-border/40 flex flex-col items-center gap-2 text-muted-foreground bg-foreground/15">
      <div className="flex gap-x-4 gap-y-2 flex-wrap justify-center">
        <a
          href={socialMediaInformation.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-2 md:py-1 py-2 rounded-full text-xs font-semibold bg-foreground text-background hover:bg-fb hover:text-white transition-all duration-300 border border-border/20"
          aria-label="Facebook"
        >
          <FaFacebookF className="w-3 h-3" />
          <span className="hidden sm:inline w-px h-3 bg-background/30 group-hover:bg-white/30 transition-colors" />
          <span className="hidden sm:inline">Facebook</span>
        </a>
        <a
          href={socialMediaInformation.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-2 md:py-1 py-2 rounded-full text-xs font-semibold bg-foreground text-background hover:bg-linkedin hover:text-white transition-all duration-300 border border-border/20"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="w-3 h-3" />
          <span className="hidden sm:inline w-px h-3 bg-background/30 group-hover:bg-white/30 transition-colors" />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
        <a
          href={socialMediaInformation.gitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-2 md:py-1 py-2 rounded-full text-xs font-semibold bg-foreground text-background hover:bg-github/70 hover:text-white transition-all duration-300 border border-border/20"
          aria-label="GitHub"
        >
          <BsGithub className="w-3 h-3" />
          <span className="hidden sm:inline w-px h-3 bg-background/30 group-hover:bg-white/30 transition-colors" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <a
          href={`mailto:${socialMediaInformation.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-2 md:py-1 py-2 rounded-full text-xs font-semibold bg-foreground text-background hover:bg-gmail hover:text-white transition-all duration-300 border border-border/20"
          aria-label="Email"
        >
          <SiGmail className="w-3 h-3" />
          <span className="hidden sm:inline w-px h-3 bg-background/30 group-hover:bg-white/30 transition-colors" />
          <span className="hidden sm:inline">Email</span>
        </a>
      </div>
      <p className="text-sm font-poppins text-center opacity-80 wrap-break-word">
        &copy; {currentYear} {mySelfInformation.fullName}. All rights reserved.
      </p>
    </footer>
  );
}
