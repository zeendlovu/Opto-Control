import './recent.scss'
import {data} from './data'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import * as React from "react";

const Recent = () => {
    return (
        <TableContainer component={Paper} className='recent'>
            <h1 className='title'>Latest Orders</h1>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Tank Name</TableCell>
                        <TableCell className='tableCell'>Location</TableCell>
                        <TableCell className='tableCell'>Product</TableCell>
                        <TableCell className='tableCell'>Event</TableCell>
                        <TableCell className='tableCell'>Forecast (H)</TableCell>
                        <TableCell className='tableCell'>Status&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.name}
                        >
                            <TableCell component="th" scope="row" className='tableCell'>
                                {row.tankName}
                            </TableCell>
                            <TableCell className='tableCell'>{row.location}</TableCell>
                            <TableCell className='tableCell'>{row.product}</TableCell>
                            <TableCell className='tableCell'><LocalShippingIcon></LocalShippingIcon></TableCell>
                            <TableCell className='tableCell'>{row.forecast}</TableCell>
                            <TableCell className='tableCell'>
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default Recent;