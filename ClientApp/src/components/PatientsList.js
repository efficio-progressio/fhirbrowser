import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableRow, TableCell, TableContainer, TableHead, makeStyles } from '@material-ui/core';

const classes = makeStyles({
    Table: {
        minWidth: 650,
    },
})

export class PatientsList extends Component {
    static displayName = PatientsList.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableContainer>
                <Table className={classes.Table} size="small">
                    <TableHead>
                        <TableRow><TableCell>Identification</TableCell><TableCell>Name</TableCell><TableCell>Birthdate</TableCell><TableCell>Source</TableCell><TableCell>Active</TableCell></TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell> HSPRO 123456<br />FNR 12345678901</TableCell><TableCell>Bob Saggypants</TableCell><TableCell>2000/01/01</TableCell><TableCell>HsPro</TableCell><TableCell>Yes</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell> HSPRO 234567</TableCell><TableCell>Fiona Mixalot</TableCell><TableCell>2003/03/03</TableCell><TableCell>HsPro</TableCell><TableCell>Yes</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell> HSPRO 345678<br />DNR 32345678901</TableCell><TableCell>Dave Hazelnuts</TableCell><TableCell>1980/06/06</TableCell><TableCell>HsPro</TableCell><TableCell>No</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell> HSPRO 456789</TableCell><TableCell>Pete Parking</TableCell><TableCell>2012/12/12</TableCell><TableCell>HsPro</TableCell><TableCell>Yes</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}
