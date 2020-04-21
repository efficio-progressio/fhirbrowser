import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableRow, TableCell, TableContainer, TableHead, makeStyles, TablePagination, Paper } from '@material-ui/core';

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
        this.state = { patients: [], page: 0, rowsPerPage: 10, numberOfAvailableItems: 0, loading: true }
    }

    componentDidMount() {
        this.populatePatientsData();
    }

    handleChangeRowsPerPage = event => {
        this.setState({ page: 0, rowsPerPage: parseInt(event.target.value, 10) });
    };

    renderPatients() {
        return (
            <Paper>
                <TableContainer>
                    <Table stickyHeader className={classes.Table} size="small">
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
                                <TableRow hover>
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
                <TablePagination
                    component="div"
                    count={this.state.numberOfAvailableItems}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onChangeRowsPerPage={(event) => { this.setState({ patients: [], page: 0, rowsPerPage: parseInt(event.target.value, 10) }, this.populatePatientsData); }}
                    onChangePage={(event, newPage) => { this.setState({ patients: [], page: newPage, loading: true }, this.populatePatientsData); }}
                />
            </Paper>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p>Loading...</p>
            : this.renderPatients();

        return contents;
    }

    async populatePatientsData() {
        const response = await fetch('api/patients?from=' + (this.state.page * this.state.rowsPerPage) + '&to=' + ((this.state.page * this.state.rowsPerPage) + this.state.rowsPerPage));
        const data = await response.json();
        this.setState({ patients: data.items, numberOfAvailableItems: data.numberOfAvailableItems, loading: false })
    }
}
