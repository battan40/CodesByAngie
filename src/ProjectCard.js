import React from 'react';


const ProjectCard = ({ image, title, description, techStack, deployed, repo }) => {
  // const cardfilter = deployed ? 'deployed' : 'repo'
  return (
    <article className='project-card'>
      <img className='project-image' src='' alt=''/>
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>{techStack}</h4>
      <h5>{deployed}</h5>
      <h5>{repo}</h5>
    </article>
  )
}

export default ProjectCard;
