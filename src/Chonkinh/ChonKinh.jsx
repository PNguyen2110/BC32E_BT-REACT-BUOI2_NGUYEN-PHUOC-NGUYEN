import React, { Component } from 'react'
import data from './dataGlasses.json'

export default class ChonKinh extends Component {
    state = {
        Item :{

            id: '',
            price: '',
            name: "",
            url: "",
            desc: ""
        }

    }
  render() {
    return (
      <div className="container">
        <h2 className="text-center bg-dark text-white mb-0 ">TRY GLASSES APP ONLINE</h2>
        <div className="row mx-0 bg-dark d-flex align-items-center flex-column">
            <div className='bg-dark my-5 d-flex flex-column justify-content-between position-relative'>
                <img style={{width:'300px'}} src="./glassesImage/model.jpg" alt="model" />
                
                    <div >

                        <div>

                            <img style={{width:'150px', position:'absolute',top:'92px', left:'74px'}} src={this.state.Item.url} alt="" />
                        </div>
                        <div style={{bottom:'0', }} className="opacity-4 bg-light position-absolute m-2 mb-lg-0 text-center">
                            <h3 className="mb-0">{this.state.Item.name }</h3>
                                <span className="fs-3 mb-0 text-danger text-center">{this.state.Item.price }</span>
                            <p className="mb-0">{this.state.Item.desc}</p>
                        </div>
                    </div>
               
                
            </div>
            <div className="container px-0">
                <div className="row d-flex  ">

                    {data.map(list => (
                   
                        <div key={list.id} className="col-4 d-flex justify-content-center my-3" onClick={() =>{this.setState({Item:list})}}>
                            <img style={{width:'50px'}} src={list.url} alt="" />
                        </div>
                    
                    ))}
                </div>
            </div>
        </div>

      </div>
    )
  }
}
