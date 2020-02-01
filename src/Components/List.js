import React from "react";
import Classes from "../Css/list.module.css";

class List extends React.Component{

    handleClick=(element)=>{
        this.props.playVideo(element);
    }

    renderList=()=>{
        let list = this.props.images.map((element) =>{
                let img = element.snippet.thumbnails.default.url;
                return (
                    <div onClick={()=>this.handleClick(element)} className={Classes.listGrid}  >
                        <img src={img} alt={element.snippet.title} />
                        <p>{element.snippet.title}</p>
                    </div>
                )
                });
         return list;
    }

    render(){
        return (
            <React.Fragment>
                <div>
                    {this.renderList()}       
                </div>
            </React.Fragment>
           
        );
    }
}

export default List;