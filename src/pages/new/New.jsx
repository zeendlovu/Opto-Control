import React, {useState} from 'react'
import './new.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({inputs, title}) => {
    const[file, setFile] = useState("");

    console.log(file)

    return(
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file
                            ? URL.createObjectURL(file)
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"}
                             alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadIcon className="icon" />
                                </label>
                                <input type="file" id="file" style={{display: "none"}} onChange={event=>setFile(event.target.files[0])} />
                            </div>

                            {inputs.map((input)=>(
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder}/>
                                </div>
                            ))}


                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;