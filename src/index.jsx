import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Footer from "./footer";
import Middle from "./middle";
import "./style.css"

class Main extends React.Component{
    render(){
        return(
              <>
                <Header></Header>
                <Middle></Middle>
                <Footer></Footer>
              </>
            
          
        )
    }
}





var root = document.getElementById("root");

ReactDOM.createRoot(root).render(<Main></Main>);