// Write your code here
// Write your code here
import {Component} from 'react'
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

class CourseTimelineCard extends Component {
  render() {
    const {courseDetails} = this.props
    const {
      id,
      title,
      courseTitle,
      description,
      duration,
      tagsList,
    } = courseDetails
    return (
      <div className="card-con">
        <div className="row-con">
          <h3 className="course-title-head">{courseTitle}</h3>
          <div className="icon-duration-con">
            <AiFillClockCircle />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="description">{description}</p>
        <ul className="tags-con">
          {tagsList.map(eachTag => (
            <p className="tag-container">{eachTag.name}</p>
          ))}
        </ul>
      </div>
    )
  }
}

export default CourseTimelineCard
