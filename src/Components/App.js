import React from "react";
import Classes from "../Css/app.module.css";
import List from "./List";
import Video from "./Video";
import Search from "./Search";
import Youtube from "../Apis/youtube";

class App extends React.Component{

    state={
        videos : [],
        playVideo:null
    }

    getQuery= async (query)=>{
      const API_KEY = "API KEY";
      let response = await Youtube.get("/search",{
          params : {
              key: API_KEY ,
              q:query,
              part : "snippet",
              maxResults: 7
          } 
      });
      this.setState({videos : response.data.items, playVideo:response.data.items[0]});
    }

    handleVideo=(video)=>{
        this.setState({playVideo : video});
    }

    render(){
        return (
            <React.Fragment>
                <Search getQuery={this.getQuery}/>
                <main>    
                    <div className={Classes.mainGrid}>
                     <Video video={this.state.playVideo}/>
                     <List playVideo={this.handleVideo} images={this.state.videos} />
                    </div>
                </main>
                
            </React.Fragment>
        );
    }
}

export default App;