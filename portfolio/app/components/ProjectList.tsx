import { Project } from "../types/Project";

interface Props {
  projects: Project[];
}

const ProjectsList = ({ projects }: Props) => {
  return (
    <section
      id='portfolio'
      className='font-Montserrat pt-12 md:pt-24 lg:pt-32 mx-16'
    >
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-normal mb-6'>
        My Projects
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='bg-white shadow p-6 rounded-lg font-thin'
          >
            <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-2 font-extralight'>
              {project.name}
            </h3>
            <p className='text-sm text-gray-600'>{project.description}</p>
            <a
              href={project.website}
              className='text-sm text-gray-600 hover:no-underline underline font-thin my-1'
            >
              {project.website}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
