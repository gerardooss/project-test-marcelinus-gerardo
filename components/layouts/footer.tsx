import LinkedinIcon from "../icons/linkedin";
import PortofolioIcon from "../icons/portofolio";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-7 px-10 border-t-2">
      <div className="flex items-center space-x-3">
        <h1 className="text-zinc-500">Marcelinus Gerardo</h1>
        <a
          className="flex text-orange-500 hover:scale-125 transition-transform"
          href="https://www.linkedin.com/in/marcelinus-gerardo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
        <a
          className="flex text-orange-500 hover:scale-125 transition-transform"
          href="https://gerardooss.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PortofolioIcon />
        </a>
      </div>
      <h1 className="text-zinc-500 text-center md:text-left">
        Submission for Suitmedia FE Developer Intern 2024
      </h1>
    </div>
  );
}
