import './home.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Tablelist from "../../components/table/TableList";

const Home = () => {
  return(
      <div className="home">
        <Sidebar />
          <div className='homeContainer'>
              <Navbar />
              <div className='widgets'>
                  <Widget type='user' />
                  <Widget type='order' />
                  <Widget type='devices' />
                  <Widget type='alarm' />
              </div>
              <div className='charts'>
                <Featured />
                  <Chart title="User spending last 6 month" aspect={2}/>
              </div>
              <div className='listContainer'>
                  <div className='listTitle'>
                      Latest Transactions
                        <Tablelist />
                  </div>
              </div>
          </div>
      </div>

  )
}

export default Home;