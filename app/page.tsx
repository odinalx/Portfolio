import { metadata } from './layout';
import { Home } from './home';
import { AboutMe } from './aboutMe';
import { Skills } from './skills';
import { ContactMe } from './contactMe';
import { Footer } from './footer';
import { FixedMenu } from './fixedMenu';
import { Works } from './works';
import { fetchProjects, Project } from '../lib/api';

metadata.title = 'Portfolio of Odin ALEXANDRE';
metadata.description =
  'Portfolio of web developper Odin ALEXANDRE, showcasing his skills and experience, the portfolio has been build in Next.js and use Strapi as an Headless CMS.';

export default async function Page() {
  const projects: Project[] = await fetchProjects();
  return (
    <div>
      <FixedMenu />
      <Home />
      <AboutMe />
      <Works initialProjects={projects} />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}
