import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableRow, TableCell, TableContainer, TableHead, makeStyles } from '@material-ui/core';

const classes = makeStyles({
    table: {
        minWidth: 1080,
        width: 2000
    },
})

export class PatientsList extends Component {
    static displayName = PatientsList.name;

    constructor(props) {
        super(props);
        this.state = { patients: [], loading: true }
    }

    componentDidMount() {
        this.populatePatientsData();
    }

    renderPatients() {
        return (
            <TableContainer>
                <Table className={classes.Table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Identification</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Birthdate</TableCell>
                            <TableCell>Source</TableCell>
                            <TableCell>Active</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.patients.map(patient =>
                            <TableRow>
                                <TableCell>
                                    {
                                        patient.identification.map(identification =>
                                        <div>{identification.system} {identification.value}</div>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {
                                        patient.name.map(name =>
                                            <p>{name.familyName}, {name.givenName}</p>
                                    )}
                                </TableCell>
                                <TableCell>{patient.birthDate}</TableCell>
                                <TableCell>{patient.source}</TableCell>
                                <TableCell>{patient.active ? 'Yes' : 'No'}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p>Loading...</p>
            : this.renderPatients();

        return contents;
    }

    async populatePatientsData() {
        const response = await fetch('api/patients');
        const data = await response.json();
        this.setState({patients: data, loading: false})
    }
}
