import './table.scss'
import {data} from './data'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tablelist = () => {
    return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Dessert (100g serving)</TableCell>
                        <TableCell className='tableCell'>Calories</TableCell>
                        <TableCell className='tableCell'>Fat&nbsp;(g)</TableCell>
                        <TableCell className='tableCell'>Carbs&nbsp;(g)</TableCell>
                        <TableCell className='tableCell'>Protein&nbsp;(g)</TableCell>
                        <TableCell className='tableCell'>Status&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.name}
                        >
                            <TableCell component="th" scope="row" className='tableCell'>
                                {row.name}
                            </TableCell>
                            <TableCell className='tableCell'>{row.calories}</TableCell>
                            <TableCell className='tableCell'>{row.fat}</TableCell>
                            <TableCell className='tableCell'>{row.carbs}</TableCell>
                            <TableCell className='tableCell'>{row.protein}</TableCell>
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

export default Tablelist;