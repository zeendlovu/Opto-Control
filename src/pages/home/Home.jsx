import './home.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Tablelist from "../../components/table/TableList";
import Recent from "../../components/recent/Recent";

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
                  <Recent />
              </div>
              <div className='listContainer'>
                  <div className='listTitle'>
                      Quick View
                        <Tablelist />
                  </div>
              </div>
          </div>
      </div>

  )
}

export default Home;