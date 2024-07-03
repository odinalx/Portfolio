interface ImageFormats {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

interface ImageAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    small: ImageFormats;
    thumbnail: ImageFormats;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

interface Image {
  data: {
    id: number;
    attributes: ImageAttributes;
  };
}

export interface Project {
  id: number;
  attributes: {
    titre: string;
    description: string;
    date: string;
    slug: string;
    metadescription: string;
    metatitle: string;
    image: Image;
  };
}

export async function fetchProjects(): Promise<Project[]> {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `https://strapi.odinalx.fr/api/projects?populate=image&timestamp=${new Date().getTime()}`,
      options
    );

    if (!res.ok) {
      throw new Error(`An error has occurred: ${res.statusText}`);
    }

    const data = await res.json();
    console.log('Data fetched from Strapi:', data.data);
    return data.data;
  } catch (err: any) {
    console.error('Failed to fetch data from Strapi:', err.message);
    return [];
  }
}
