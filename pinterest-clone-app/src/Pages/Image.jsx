import React, { useMemo, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDropzone } from "react-dropzone";

const baseStyle = {
    flex: 1,
    width:"330px",
    height:"430px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: "10px",
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#EFEFEF",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out"
};

const activeStyle = {
    borderColor: "#2196f3"
};

const acceptStyle = {
    borderColor: "#00e676"
};

const rejectStyle = {
    borderColor: "#ff1744"
};

const thumbsContainer = {
    display: "flex",
    width:"330px",
    height:"430px",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
    maxWidth:200
};

const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    maxWidth:"320px",
    maxHeight:"400px",
    marginBottom: 8,
    marginRight: 8,
    padding: 4,
    boxSizing: "border-box"
};

const thumbInner = {
    display: "flex",
    minWidth: 0,
    maxWidth:"320px",
    maxHeight:"400px",
    overflow: "hidden"
};

const img = {
    maxWidth:"320px",
};

function AddImage(props) {
    const [files, setFiles] = useState([]);
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        acceptedFiles,
        open
    } = useDropzone({
        accept: "image/*",
        noClick: true,
        noKeyboard: true,
        onDrop: acceptedFiles => {
            setFiles(
                acceptedFiles.map(file =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )
            );
        }
    });

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {})
        }),
        [isDragActive, isDragReject]
    );
    if(files.length>0)console.log(files[0].preview)
    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img src={file.preview} style={img} />
            </div>
        </div>
    ));

    useEffect(
        () => () => {
            // Make sure to revoke the data uris to avoid memory leaks
            files.forEach(file => URL.revokeObjectURL(file.preview));
        },
        [files]
    );

    const filepath = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    if (files.length == 0) {
        return (
            <div className="container" style={{width:"350px", height:"450px",border:"3px dashed #aaa",padding:"10px",borderRadius:"10px"}}>
                <div {...getRootProps({ style })} >
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here</p>
                    <button type="button" onClick={open} style={{border:"none"}}>
                        Or Click to Upload
            </button>
                </div>

            </div>
        );
    }
    else {
        return (
            <div className="container" style={{width:"350px", height:"450px",border:"1px solid #ddd",padding:"10px",borderRadius:"10px"}}>
                <aside style={thumbsContainer}>{thumbs}</aside>
            </div>
        );
    }
}

export { AddImage }