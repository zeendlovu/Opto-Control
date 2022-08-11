const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'tankName', headerName: 'Tank Name', width: 130 },
    { field: 'location', headerName: 'Location', width: 130 },
    {field: 'product', headerName: 'Product', width: 130,},
    {field: 'event', headerName: 'Event', width: 130,},
    {field: 'levelStatus', headerName: 'Level Status', width: 130,},
    {field: 'level', headerName: 'Level', width: 130,},
    {field: 'freeCapacity', headerName: 'Free Capacity', width: 130,},
    {field: 'maxFillingCapacity', headerName: 'Max Filling Limit', type: 'number', width: 130,},
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell: (params) => {
            return (
                <>
                    <span className={`product ${params.row.product}`}>{params.row.product}</span>
                </>

            )

        }
    },
];

export const data = [
    { id: 1, location: 'Snow', tankName: 'Jon', product: 'Gas', event: 'refueling', maxFillingCapacity: 35, levelStatus: 35, level: 35, freeCapacity: 65 },
    { id: 2, location: 'Lannister', tankName: 'Cersei', product: 'Petrol', event: 'refueling', maxFillingCapacity: 42, levelStatus: 35, level: 35, freeCapacity: 65 },
    { id: 3, location: 'Lannister', tankName: 'Jaime', product: 'Oxygen', maxFillingCapacity: 45, levelStatus: 35, level: 35, freeCapacity: 65 },
    { id: 4, location: 'Stark', tankName: 'Arya', product: 'Gas', maxFillingCapacity: 16, levelStatus: 35, level: 35, freeCapacity: 65 },
    { id: 5, location: 'Targaryen', tankName: 'Daenerys', product: 'Gas', maxFillingCapacity: 23, levelStatus: 35, level: 35, freeCapacity: 65 },
    { id: 6, location: 'Stark', tankName: 'Ned', product: 'Diesel', event: 'refueling', maxFillingCapacity: 150, levelStatus: 35, level: 35, freeCapacity: 65 },
    { id: 7, location: 'Clifford', tankName: 'Ferrara', product: 'Petrol', maxFillingCapacity: 44, levelStatus: 35, freeCapacity: 65 },
    { id: 8, location: 'Frances', tankName: 'Rossini', product: 'Gas', event: 'refueling', maxFillingCapacity: 36, levelStatus: 35, level: 35, freeCapacity: 65 },
    { id: 9, location: 'Roxie', tankName: 'Harvey', product: 'Oxygen', event: 'refueling', maxFillingCapacity: 65, levelStatus: 35, level: 35, freeCapacity: 65 },
];
