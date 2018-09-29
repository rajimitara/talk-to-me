//render section will have script tag using bundle.js

//Root class for all React components, js for it is given by webpack.

import React,{Component} from "react";

class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <html>
                <head>
                    <div><h1>HelloWorld</h1></div>
                </head>
                <body>
                    <script src='../build/bundle.js' />
                </body>
            </html>
        );
    }
} 