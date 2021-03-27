import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import data from '../data/Portfolio.json';

function Portfolio(props) {
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    let selected = filters[0];
    const [filter, setFilter] = useState(selected);
    const onFilter = (filter) => {
        setFilter(filter)
    }

    return (
        <div>
            <Toolbar
                filters={[...filters]}
                selected={filter}
                onSelectFilter={onFilter}
            />
            <ProjectList
                projects={data}
                selected={filter}
            />
        </div>
    )
}

Portfolio.propTypes = {
    filters: PropTypes.array,
    selected: PropTypes.string,
    filter: PropTypes.string,
    onFilter: PropTypes.func
}

export default Portfolio

