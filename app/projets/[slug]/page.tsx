import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Project, fetchProjects } from '../../../lib/api';
import Breadcrumbs from '../../breadcrumbs';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const projects = await fetchProjects();
  const project = projects.find((proj) => proj.attributes.slug === params.slug);

  if (!project) {
    return {
      title: 'Project not found',
      description: 'This project does not exist.',
    };
  }

  return {
    title: project.attributes.metatitle,
    description: project.attributes.metadescription,
  };
}

export async function generateStaticParams() {
  const projects = await fetchProjects();

  return projects.map((project) => ({
    slug: project.attributes.slug,
  }));
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const projects = await fetchProjects();
  const project = projects.find((proj) => proj.attributes.slug === params.slug);

  if (!project) {
    notFound();
  }
  const breadcrumbs = [
    { name: 'Accueil', href: '/' },
    { name: 'Projets', href: '/projets' },
    { name: project.attributes.titre, href: `/projets/${project.attributes.slug}` },
  ];
  return (
    <div className="p-4 lg:p-16">
      <div className="mb-24">
        <Breadcrumbs breadcrumbs={breadcrumbs}></Breadcrumbs>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:max-w-[90rem] mx-auto ">
        <img
          src={`https://strapi.odinalx.fr${project.attributes.image.data.attributes.url}`}
          alt={project.attributes.image.data.attributes.alternativeText || project.attributes.titre}
          className="mb-2 lg:mb-0 lg:mr-4 w-full lg:w-1/2 p-10"
        />
        <div className="lg:w-1/2 ">
          <h1 className="text-7xl font-serif mb-10 text-center">{project.attributes.titre}</h1>
          <div className="text-2xl font-text text-justify">{project.attributes.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
