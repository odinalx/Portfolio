import { metadata } from "./layout";
import { Home } from "./home";
import { AboutMe } from "./aboutMe";
import { Skills } from "./skills";
import { ContactMe } from "./contactMe";


metadata.title = "Portfolio of Odin ALEXANDRE";
metadata.description = "Portfolio of web developper Odin ALEXANDRE, showcasing his skills and experience, the portfolio has been build in Next.js and use Strapi as an Headless CMS.";

export default function Page() {
  return (
    <div>
      <Home></Home>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <ContactMe></ContactMe>
    </div>
  );
}
