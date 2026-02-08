import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiLinkedinLine,
  RiMailLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/ahte5ham/",
    Icon: RiInstagramLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ahte5ham/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Email",
    link: "mailto:shammughal811@gmail.com",
    Icon: RiMailLine,
  },
  {
    name: "Github",
    link: "https://github.com/Ehtisham-rn",
    Icon: RiGithubLine,
  },

];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${social.name === "Github"
            ? "bg-accent rounded-full p-[5px] hover:text-white"
            : "hover:text-accent"
            } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
