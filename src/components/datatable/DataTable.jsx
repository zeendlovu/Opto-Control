import './dataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userColumns} from "../../datatablesource";
import {userRows} from "../../datatablesource";
import {Link} from 'react-router-dom'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverHeader,
    PopoverCloseButton
} from '@chakra-ui/popover'

const DataTable = ({title, name}) => {

    const actionColumn = [
        {field: 'action', headerName: 'Action', width: 200, renderCell:(params)=>{
            return (
               <div className="cellAction">
                   <Link to={'/users/test'} style={{textDecoration: 'none'}}>
                       <div className="viewButton">View</div>
                   </Link>
                   <Popover>
                       <PopoverTrigger>
                           <button><div className="deleteButton">Delete</div></button>
                       </PopoverTrigger>
                       <PopoverContent className='popoverBackground'>
                           <PopoverHeader>Confirmation!</PopoverHeader>
                           <hr />
                           <PopoverBody className='body'>
                               Are you sure you want to delete this user?<br/>
                               <PopoverCloseButton className='close'><button>No</button></PopoverCloseButton>

                               <button className='yes'>Yes</button>
                           </PopoverBody>
                       </PopoverContent>
                   </Popover>

               </div>
            )
            }
        }
    ]

    return(
        <div className='dataTable'>
            <div className='dataTableTitle'>
                {title}
                <Link to={`/${name}/new`} className='link' >
                    Add New
                </Link>
            </div>
                <DataGrid className="datagrid"
                    rows={userRows}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
        </div>
    )
}

export default DataTable;