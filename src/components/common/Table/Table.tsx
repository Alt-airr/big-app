import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, makeStyles } from '@material-ui/core';
import { ITableRow } from "../../../typings/types";


export function MaterialTable({ rows } : { rows : Array<ITableRow> }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="a dense table">
                <TableBody>
                    {rows.map((row: ITableRow) => (
                        <TableRow key={row.name} className={classes.row}>
                            <TableCell component="th" align='right' className={classes.row} scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left" className={classes.row}>{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const useStyles = makeStyles({
    table: {
        backgroundColor: '#203351',
    },
    row: {
        color: 'white',
        fontWeight: 600,
        fontSize: '16px'
    }
});
