import { CarrouselHobby } from './carrouselHobby';

export function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center text-center w-2/3 mx-auto">
      <h2 className="font-title text-3xl font-extrabold border-b solid w-full my-6">QUI SUIS-JE</h2>
      <p className="font-text text-xl w-2/3">
        Étudiant en deuxième année en <span className="text-secondary">BUT MMI</span> (Métiers du Multimédia et de
        l'Internet) à l'IUT Nancy-Charlemagne, je souhaite me spécialiser en tant que{' '}
        <span className="text-secondary">développeur full-stack</span>.{' '}
      </p>
      <a href="/Odin_ALEXANDRE_CV.pdf" target="blank" className="font-title border solid p-3 mt-12 font-bold text-lg">
        TÉLÉCHARGER MON CV
      </a>
      <a
        href="/Odin_ALEXANDRE_CV_ANGLAIS.pdf"
        target="blank"
        className="font-title border solid p-3 mb-8 mt-4 font-bold text-lg"
      >
        VERSION ANGLAISE
      </a>
      <CarrouselHobby></CarrouselHobby>
    </div>
  );
}
