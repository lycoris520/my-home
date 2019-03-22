import React, { Component } from 'react';
import './index.scss';

class Header extends Component{
  render(){
    let arr = [1,2,3,4];
    let imgList = arr.map(el=> (
      <div className="img-content">
        <img src={require("./t"+el+".jpg")} alt="1"/>
      </div>
    ));
    let showList = [1,2,3,4,5].map(el=>(
      <div className="line-content">
        {imgList}
      </div>
    ))
    return(
      <div className="content">
      {showList}
        {/* <div className="img-content">
          <img src={require("./t1.jpg")} alt="1"/>
        </div>
        <div className="img-content">
          <img src={require("./t3.jpg")} alt="2"/>
        </div>
        <div className="img-content">
          <img src={require("./t2.jpg")} alt="3"/>
        </div> */}
      </div>
    )
  }
}

export default Header;