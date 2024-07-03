'use client';
import React, { useState } from 'react';
import { Project } from '../../lib/api';
import Link from 'next/link';

export function WorkList({ initialProjects }: { initialProjects: Project[] }) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  return (
    <div className="container mx-auto p-4">
      <ul className="flex flex-wrap">
        {projects.map((project) => (
          <li key={project.id} className="w-full sm:w-1/2 p-2 flex flex-col items-center">
            <Link href={`/projets/${project.attributes.slug}`} className="flex flex-col items-center pb-10">
              <img
                src={`https://strapi.odinalx.fr${project.attributes.image.data.attributes.url}`}
                alt={project.attributes.image.data.attributes.alternativeText || project.attributes.titre}
                className="mb-2  h-96 w-auto grayscale transition duration-300 ease-in-out hover:grayscale-0"
              />
              <span className="uppercase font-serif text-3xl">{project.attributes.titre}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
