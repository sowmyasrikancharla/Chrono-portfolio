// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import './index.css'

class TimeLineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    console.log(timelineItemsList)

    const renderTimeLineView = eachItem => {
      if (eachItem.categoryId === 'COURSE') {
        return <CourseTimeLineCard key={eachItem.id} courseDetails={eachItem} />
      }
      return <ProjectTimeLineCard key={eachItem.id} projectDetails={eachItem} />
    }

    return (
      <div className="timeline-con">
        {/* <h1 className="journey-heading">MY JOURNEY OF</h1>
        <h1 className="ccbp-heading">CCBP 4.0</h1> */}
        <h1 className="journey-heading">MY JOURNEY OF CCBP 4.0</h1>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimeLineView(eachItem))}
        </Chrono>
      </div>
    )
  }
}
export default TimeLineView
