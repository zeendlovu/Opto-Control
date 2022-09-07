import * as React from 'react';
import './table.scss'
//import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

function createData(TankName, location, product, event, level_status, level, freeCapacity, MaxFill) {
    return {
        TankName,
        location,
        product,
        event,
        level_status,
        level,
        freeCapacity,
        MaxFill,
        history: [
            {
                lastFill: '2020-01-05',
                tankID: '11091700',
                plantOperator: "Zibusiso Ndlovu",
                region: "Harare",
                country: "Zimbabwe",
                transportDate: "2020-01-10"
            },
            {
                lastFill: '2020-01-02',
                tankID: 'Anonymous',
                plantOperator: "Njabulo",
                region: "Bulawayo",
                country: "Zimbabwe",
                transportDate: "2020-01-17"
            },
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell className="tableCell">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        className="arrowDown"
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" className="tableCell">
                    {row.TankName}
                </TableCell>
                <TableCell align="right" className="tableCell">{row.location}</TableCell>
                <TableCell align="right" className="tableCell">{row.product}</TableCell>
                <TableCell align="right" className="tableCell">
                    <LocalShippingIcon></LocalShippingIcon>
                    <HourglassBottomIcon></HourglassBottomIcon>
                </TableCell>
                <TableCell align="right" className="tableCell">{row.level_status}</TableCell>
                <TableCell align="right" className="tableCell">{row.level}</TableCell>
                <TableCell align="right" className="tableCell">{row.freeCapacity}</TableCell>
                <TableCell align="right" className="tableCell">{row.MaxFill}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 3, paddingTop: 0 }} colSpan={9}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="tableCell">Last Filling</TableCell>
                                        <TableCell className="tableCell">Tank ID</TableCell>
                                        <TableCell align="right" className="tableCell">Plant Operator</TableCell>
                                        <TableCell align="right" className="tableCell">Region</TableCell>
                                        <TableCell align="right" className="tableCell">Country</TableCell>
                                        <TableCell align="right" className="tableCell">Next Transportation Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row" className="tableCell">
                                                {historyRow.lastFill}
                                            </TableCell>
                                            <TableCell className="tableCell">{historyRow.tankID}</TableCell>
                                            <TableCell align="right" className="tableCell">{historyRow.plantOperator}</TableCell>

                                            <TableCell align="right" className="tableCell">
                                                {historyRow.region}
                                            </TableCell>
                                            <TableCell align="right" className="tableCell">{historyRow.country}</TableCell>
                                            <TableCell align="right" className="tableCell">{historyRow.transportDate}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

/*
Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};
*/
const rows = [
    createData('TD-H254', 159, 6.0, "refuelling", 4.0, 3.99, 1, 1),
    createData('TD-H143', 237, 9.0, "delivery", 4.3, 4.99, 7, 6),
    createData('TD-B173', 262, 16.0, "error", 6.0, 3.79,3 , 4),
    createData('TD-B105', 305, 3.7, "normal", 4.3, 2.5, 6, 8),
    createData('TD-H149', 356, 16.0, "running low", 3.9, 1.5, 7, 8),
];

export default function TableList() {
    return (
        <TableContainer component={Paper} className="table">
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell className="tableCell">Tank Name</TableCell>
                        <TableCell align="right" className="tableCell">Location</TableCell>
                        <TableCell align="right" className="tableCell">Product</TableCell>
                        <TableCell align="right" className="tableCell">Event</TableCell>
                        <TableCell align="right" className="tableCell">Level Status&nbsp;(L)</TableCell>
                        <TableCell align="right" className="tableCell">Level&nbsp;(L)</TableCell>
                        <TableCell align="right" className="tableCell">Free Capacity&nbsp;(L)</TableCell>
                        <TableCell align="right" className="tableCell">Max. Fill Limit&nbsp;(L)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
