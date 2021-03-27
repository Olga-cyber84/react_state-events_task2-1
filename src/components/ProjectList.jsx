import React from 'react'
import PropTypes from 'prop-types'

function ProjectList({projects, selected}) {
    const selected_category = projects.filter(project => selected === "All" ? projects : project["category"] === selected);
    return (
        <div>
            { 
                selected_category.map((project, i) => 
                    <img
                        key={i}
                        src={project["img"]}
                        alt={`Portfolio ${i}`}
                        className={project["category"]}
                        style={{margin: "20px 0 0 10px"}}
                    />      
                )
            }
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    selected_category: PropTypes.array
}

export default ProjectList

