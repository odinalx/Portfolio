'use client';
import React, { useState } from 'react';
import { Project } from '../lib/api';
import Link from 'next/link';

export function Works({ initialProjects }: { initialProjects: Project[] }) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  return (
    <div className="flex flex-col  w-2/3 mx-auto">
      <h2 className="font-title text-3xl font-extrabold border-b solid w-full mt-6 text-center">TRAVAUX</h2>
      <ul className="pb-32">
        {projects.slice(0, 3).map((project) => (
          <li className="uppercase font-cursive text-8xl border-b pb-4 pt-8 transition-all ease-in-out duration-200 hover:pl-[5vw]">
            <Link href={`/projets/${project.attributes.slug}`}>{project.attributes.titre}</Link>
          </li>
        ))}
        <li className="uppercase font-cursive text-8xl border-b pb-4 pt-8 transition-all ease-in-out duration-200 hover:pl-[5vw]">
          <a href="projets">AUTRE TRAVAUX</a>
        </li>
      </ul>
    </div>
  );
}
