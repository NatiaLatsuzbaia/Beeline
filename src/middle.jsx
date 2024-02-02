import React from "react";


class Middle extends React.Component{
    setValue(){

        window.alert("გამარჯობა მსოფლიო");
        
    }
    render(){
        return(
              
            <React.Fragment>
                {
                    <button type="button" className="btn btn-warning w-100 mt-3 font-weight-bold " style={{ height: '50px', fontSize: '20px'}} onClick={() => this.setValue()}>Do not touch!</button>
                    
                }
                

           </React.Fragment>
        )
    }
}

export default Middle;
