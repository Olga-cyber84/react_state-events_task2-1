import React from 'react'
import PropTypes from 'prop-types'

function Toolbar(props) {
    const {filters, selected, onSelectFilter} = props;
    return (
        <div>
            {
                filters.map((filter, i) => 
                    <button key={i}>{filter}</button>               
                )
            }
            <button key={5} className="selected">Тест</button>
        </div>
    )
}

Toolbar.propTypes = {

}

export default Toolbar

