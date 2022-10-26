import Card from "../components/UIElements/Card";
import { useState } from "react";
import "./Upload.css";
import { Link } from "react-router-dom";

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    // const handleChange = (event: any) => {
	// 	setSelectedFile(event.target.files[0]);
	// 	setIsFilePicked(true);
	// };

	return (
        <>
            <Card className='uploadCard'>
                <p style={{margin:'10px 10px 0', fontSize:'40px'}}>Upload notes</p>
                <form action="/" method="post" style={{margin: '20px'}}>
                    <div className="course-info">
                        <p className="input-title">Title</p>
                        <input className="input-box" type="text" name='cName' placeholder="Enter name of the note..." />
                    </div>

                    <div className="course-info">
                        <p className="input-title">Description</p>
                        <input className="input-box" type="text" name='cDescription' placeholder="Enter a short description..." />
                    </div>
                    
                    <div className="course-info">
                        <p className="input-title">Contents</p>
                        <input id="uploadPrompt" className="inputfile" type="file" name="file"/>                        
                        <label htmlFor="file" className="custom-button"></label>
                    </div>
                    
                </form>
                <Link to='/my_note'><button type="submit" className="upload-btn">Upload</button></Link>
	
            </Card>
        </>
	);
};

export default Upload;
function dispatch(arg0: { type: string; payload: { username: string; password: string; }; }) {
    throw new Error("Function not implemented.");
}

