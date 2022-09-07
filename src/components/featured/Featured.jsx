import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {Popover, PopoverTrigger, PopoverContent, PopoverBody} from '@chakra-ui/popover'


const Featured = () => {
    return(
        <div className="featured">
            <div className='top'>
                <h1 className='title'>Notifications</h1>
                <Popover>
                    <PopoverTrigger>
                        <button><MoreVertIcon fontSize='small'/></button>
                    </PopoverTrigger>
                    <PopoverContent className='popoverBackground'>
                        <PopoverBody className='body'>
                            <button>Clear here</button><br/>
                            <button>Click here 2</button><br/>
                            <button>Click here 3</button><br/>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>

            </div>
            <div className='bottom'>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">This is an error alert — check it out!</Alert>
                    <Alert severity="warning">This is a warning alert — check it out!</Alert>
                    <Alert severity="info">This is an info alert — check it out!</Alert>
                    <Alert severity="success">This is a success alert — check it out!</Alert>
                </Stack>
                <button>Clear</button>
            </div>
        </div>

    )
}

export default Featured;