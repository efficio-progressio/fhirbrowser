import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class PatientsList extends Component {
    static displayName = PatientsList.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>List of patients go here!</p>
        );
    }
}
