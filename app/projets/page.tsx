import { metadata } from '../layout';
import { WorkList } from './workList';
import { fetchProjects, Project } from '../../lib/api';
import Breadcrumbs from '../breadcrumbs';

metadata.title = 'Portfolio of Odin ALEXANDRE';
metadata.description =
  'Portfolio of web developper Odin ALEXANDRE, showcasing his skills and experience, the portfolio has been build in Next.js and use Strapi as an Headless CMS.';

export default async function Page() {
  const projects: Project[] = await fetchProjects();
  const breadcrumbs = [
    { name: 'Accueil', href: '/' },
    { name: 'Projets', href: '/projets' },
  ];
  return (
    <div>
      <div className="p-16">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <h1 className="font-cursive text-9xl py-4 ">My Works :</h1>
      </div>

      <WorkList initialProjects={projects}></WorkList>
    </div>
  );
}
