import React from 'react'
import PropTypes from 'prop-types'

function Toolbar(props) {
    const {filters, selected} = props;
    const onSelectFilter = (evt) => {
        props.onSelectFilter(evt); // передаём объект
    }
    return (
        <div>
            {
                filters.map((filter, i) => 
                    <button
                        key={i}
                        onClick={(evt) => onSelectFilter(evt.target.value)}
                        value={filter}
                        className={filter === selected ? "selected" : ""} >{filter}</button>               
                )
            }
        </div>
    )
}

Toolbar.propTypes = {
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired
}

export default Toolbar

