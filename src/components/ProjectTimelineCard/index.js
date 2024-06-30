// Write your code here
import {Component} from 'react'
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

class ProjectTimelineCard extends Component {
  render() {
    const {projectDetails} = this.props
    console.log(projectDetails)
    const {
      description,
      duration,
      id,
      imageUrl,
      projectTitle,
      projectUrl,
      title,
    } = projectDetails
    return (
      <div className="project-card-con">
        <img src={imageUrl} className="image-set" alt="project" />
        <div className="row-con">
          <h3 className="course-title-head">{projectTitle}</h3>
          <div className="icon-duration-con">
            <AiFillCalendar />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="description">{description}</p>
        <a href={projectUrl}>Visit</a>
      </div>
    )
  }
}

export default ProjectTimelineCard
