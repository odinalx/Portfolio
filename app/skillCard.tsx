import HtmlLogo from '../public/logo/html.svg';
import CssLogo from '../public/logo/css.svg';
import JavascriptLogo from '../public/logo/javascript.svg';
import PhpLogo from '../public/logo/php.svg';
import ReactLogo from '../public/logo/react.svg';
import TypescriptLogo from '../public/logo/typescript.svg';
import TailwindLogo from '../public/logo/tailwind.svg';
import AdobeCsLogo from '../public/logo/adobe-cs.svg';

export function SkillCard() {
  const items = [
    { type: 'text', content: 'HTML', SvgComponent: HtmlLogo },
    { type: 'text', content: 'CSS', SvgComponent: CssLogo },
    { type: 'text', content: 'JAVASCRIPT', SvgComponent: JavascriptLogo },
    { type: 'text', content: 'PHP', SvgComponent: PhpLogo },
    { type: 'text', content: 'REACT', SvgComponent: ReactLogo },
    { type: 'text', content: 'TYPESCRIPT', SvgComponent: TypescriptLogo },
    { type: 'text', content: 'TAILWIND', SvgComponent: TailwindLogo },
    { type: 'text', content: 'ADOBE CS', SvgComponent: AdobeCsLogo },
  ];

  return (
    <div className="flex flex-wrap justify-center w-full gap-10">
      {items.map((item, idx) => {
        const SvgIcon = item.SvgComponent;
        return (
          <div
            key={idx}
            className="group w-1/5 h-[19vw] border border-primary rounded flex flex-col justify-between items-start hover:bg-secondary hover:text-black hover:border-secondary transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <SvgIcon className="w-14 h-14 m-4 fill-current text-secondary group-hover:fill-current group-hover:text-background transition-all duration-200 ease-in-out group-hover:blur-0 blur-sm" />
            <span className="uppercase font-text text-3xl pb-4 pl-4 transition-all duration-200 ease-in-out group-hover:blur-0 blur-sm">
              {item.content}
            </span>
          </div>
        );
      })}
    </div>
  );
}
