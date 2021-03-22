import React from 'react'
import PropTypes from 'prop-types'

function ProjectList({img, category}) {
    return (
        <div>
            {
                img.map((item, i) => 
                    <img
                        key={i}
                        src={item}
                        className={category[i]}
                        style={{margin: "20px 0 0 10px"}}
                    />      
                )
            }
        </div>
    )
}

ProjectList.propTypes = {

}

export default ProjectList

