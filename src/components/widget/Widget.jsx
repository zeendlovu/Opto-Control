import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import DevicesIcon from '@mui/icons-material/Devices';
import BatteryAlertIcon from '@mui/icons-material/BatteryAlert';

const Widget = ({ type }) => {
    let data;
    const amount =100;
    const diff = 20;
    switch(type){
        case "user":
            data={
                title: "USERS",
                isMoney: false,
                link: 'See all users',
                icon: (<PersonOutlineOutlinedIcon className='icon' style={{
                    backgroundColor: 'rgba(0,0,255,0.2)',
                    color: "blue"
                }} />)
            };
            break;

        case "order":
            data={
                title: "ORDER",
                isMoney: false,
                link: 'See all orders',
                icon: (<AddShoppingCartOutlinedIcon className='icon' style={{
                    backgroundColor: 'rgba(218,165,32,0.2)',
                    color: "goldenrod"
                }} />)
            };
            break;

        case "devices":
            data={
                title: "Device Networks",
                isMoney: true,
                link: 'See all devices',
                icon: (<DevicesIcon className='icon' style={{
                    backgroundColor: 'rgba(0,128,0,0.2)',
                    color: "green"
                }} />)
            };
            break;

        case "alarm":
            data={
                title: "Alarm",
                isMoney: true,
                link: 'See all alarms',
                icon: (<BatteryAlertIcon className='icon' style={{
                    backgroundColor: 'rgb(255,0,0,0.2)',
                    color: "red"
                }} />)
            };
            break;

        default:
            break;

    }


    return(
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && '$'} {amount}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className='percentage positive'>
                    <KeyboardArrowUpOutlinedIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;