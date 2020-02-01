import React from "react";
import Classes from "../Css/video.module.css";

class Video extends React.Component{

    render(){
        if(!this.props.video){
         return <div className={Classes.vp}> </div>
        }
        let srcVideo = `http://www.youtube.com/embed/${this.props.video.id.videoId}`;
        return (
            <React.Fragment>
                <div className={Classes.videoPlayer}>
                    <h2>{this.props.video.snippet.title}</h2>
                    <iframe title="video Player" src={srcVideo} width="100%" height="400px"/>    
                </div>
            </React.Fragment>
           
        );
    }
}

export default Video;