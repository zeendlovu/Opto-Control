import React from 'react'
import './list.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/datatable/DataTable";

const List = ({title, name}) => {
    return(
        <div className='list'>
            <Sidebar />
            <div className='listContainer'>
                <Navbar />
                <DataTable title={title} name={name}/>
            </div>
        </div>
    )
}

export default List;