import React from 'react'
import PropTypes from 'prop-types'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

function Portfolio(props) {
    const  {projects} = props;
    const img = projects.reduce((image, project) => {
        return [...image, project["img"]]
    }, [])
    const category = projects.reduce((category, project) => {
        return [...category, project["category"]]
    }, [])

    return (
        <div>
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected="All"
                onSelectFilter={(filter) => {console.log(filter);}}
            />
            <ProjectList
                img={img}
                category={category}
            />
        </div>
    )
}

Portfolio.propTypes = {

}

export default Portfolio

