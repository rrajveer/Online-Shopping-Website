import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
             <div className="row">
               <div className="col-10 mx-auto text-center text-title text-uppercase pt-3">
                  <h1 className="display-3 text-faded">404</h1>
                    <h1>error</h1>
                    <h2>Page not found</h2>
                      <h3> the requested url {" "}
                          <span className="text-danger">
                              { this.props.location.pathname}
                              </span>
                              {" "}
                              was not found
                               </h3>
                </div>
            </div>
            </div>
        )
    }
}
