'use client';
import React from 'react';
import Link from 'next/link';

interface Breadcrumb {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center ">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="inline-flex items-center text-lg italic">
            {index !== breadcrumbs.length - 1 ? (
              <>
                <Link
                  href={breadcrumb.href}
                  className="inline-flex items-center  font-medium text-primary hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  {breadcrumb.name}
                </Link>
                <span className="px-1 ">/</span>
              </>
            ) : (
              <span className="inline-flex items-center  font-medium text-primary dark:text-gray-400">
                {breadcrumb.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
