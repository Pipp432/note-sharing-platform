import Card from "../components/UIElements/Card";
import Button from "../components/UIElements/Button";
import React, { useState } from "react";
import "./Upload.css";
import Input from "../components/FormElements/Input";

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const handleChange = (event: any) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

    const handleUpload = () => {
	};

	return (
        <>
            <Card className='uploadCard'>
                <h1 style={{margin:'30px'}}>Upload note</h1>
                <form action="/" method="post">
                    <div className="course-info">
                        <label htmlFor="cName">Course Name: </label>
                        <input type="text" name='cName' placeholder="Enter course name..." />
                    </div>

                    <div className="course-info">
                        <label htmlFor="cID">Course Id: </label>
                        <input type="text" name='cID' placeholder="Enter course ID" />
                    </div>

                    <div className="course-info">
                        <label htmlFor="cDescription">Description: </label>
                        <input type="text" name='cDescription' placeholder="Enter a short description" />
                    </div>

                    <input className="course-info" type="file" name="file" onChange={handleChange}/>
                </form>
                <button type="submit" className="upload-btn">Upload</button>
	
            </Card>
        </>
	);
};

export default Upload;
function dispatch(arg0: { type: string; payload: { username: string; password: string; }; }) {
    throw new Error("Function not implemented.");
}

