import { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function FilterColumns(props) {
    return (
        <DropdownButton
        title="Last X Games"
        id="filterGames"
        onSelect={(evt) => props.handleChange(evt)}
        >
            <Dropdown.Item eventKey="3">3</Dropdown.Item>
            <Dropdown.Item eventKey="5">5</Dropdown.Item>
            <Dropdown.Item eventKey="10">10</Dropdown.Item>
            <Dropdown.Item eventKey="all">All</Dropdown.Item>
        </DropdownButton>
    )
}

export default FilterColumns;