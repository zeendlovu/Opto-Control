import React from 'react'
import './single.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Tablelist from "../../components/table/TableList";

const Single = () => {
    return(
        <div className='single'>
            <Sidebar />
            <div className='singleContainer'>
                <Navbar />
                <div className='top'>
                    <div className='left'>
                        <div className='editButton'>Edit</div>
                        <h1 className='title'>Information</h1>
                        <div className='item'>
                            <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                 alt='' className='itemImg'/>

                            <div className='details'>
                                <h1 className='itemName'>Jane Doe</h1>
                                <div className='detailItem'>
                                    <span className='itemKey'>Email: </span>
                                    <span className='itemValue'>janedoe@gmail.com</span>
                                </div>

                                <div className='detailItem'>
                                    <span className='itemKey'>Phone: </span>
                                    <span className='itemValue'>+263 2553 32632</span>
                                </div>

                                <div className='detailItem'>
                                    <span className='itemKey'>Address: </span>
                                    <span className='itemValue'>4th Street, Harare</span>
                                </div>

                                <div className='detailItem'>
                                    <span className='itemKey'>Country: </span>
                                    <span className='itemValue'>Zimbabwe</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='right'>
                        <Chart aspect={3} title="User spending (last 6 months)"/>
                    </div>
                </div>
                <div className='bottom'>
                    <h1 className='title'>Last Transactions</h1>
                    <Tablelist />
                </div>
            </div>
        </div>
    )
}

export default Single;