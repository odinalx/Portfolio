import { metadata } from './layout';
import { Home } from './home';
import { AboutMe } from './aboutMe';
import { Skills } from './skills';
import { ContactMe } from './contactMe';
import { Footer } from './footer';
import { FixedMenu } from './fixedMenu';
import { Works } from './works';

metadata.title = 'Portfolio of Odin ALEXANDRE';
metadata.description =
  'Portfolio of web developper Odin ALEXANDRE, showcasing his skills and experience, the portfolio has been build in Next.js and use Strapi as an Headless CMS.';

export default function Page() {
  return (
    <div className="w-full">
      <FixedMenu></FixedMenu>
      <Home></Home>
      <AboutMe></AboutMe>
      <Works></Works>
      <Skills></Skills>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}
