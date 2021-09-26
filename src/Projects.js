import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  console.log('projects folder', projects)

  const projectDisplay = projects.map(project => {
    return (
      <ProjectCard
        key={project.id}
        id={project.id}
        image={project.image}
        title={project.title}
        description={project.description}
        techStack={project.techStack}
        deployed={project.deployed}
        repo={project.repo}
      />
    )
  })
  return (
    <article className='projects-box'>
      { projectDisplay }
    </article>
  )
}

export default Projects;
