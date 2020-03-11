import React from "react"
import { connect } from "react-redux"
import axios from "../../config/axios"
import dog from "../../config/dog"

class ListBreeds extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // breeds : [],
            allbreeds : {},
            newbreed : []
        }
    }
    componentDidMount(){
        dog.get('/breeds/list/all')
        .then((response) =>{
            let allbreeds = response.data.message
            
            this.setState({allbreeds})
            console.log(allbreeds, "parse")
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    render(){
       let breeds = Object.values(this.state.allbreeds)
       console.log(breeds, "breeds")
        return(
            <React.Fragment>
                <div className = "row">
                    <div className = "col-md-6"><br/><br/>
                    <img class="card-img" src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1689,w_3000,x_0,y_404/f_auto,q_auto,w_1100/v1563809078/shape/mentalfloss/28865-gettyimages-500694766.jpg" alt="responsive image"/>
                    </div>
                    <div className="col-md-6">
                    <div className="container mt-5">
                <br/>
               <h2> Listing All Dog Breeds - {breeds.length}</h2>
               <br/>
               <table className="table">
                   <thead>
                       <tr>
                           <th scope="col">Name</th>
                           <th scope="col">Image</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           breeds.map((breed, index) =>{
                               if(breed.length != 0){
                                return (<tr key ={index}>
                                    <td style={{color: "#1f7a1f"}}>{breed[0]}</td>
                                    {/* <td>{contact.email}</td>
                                    <td>{contact.phone}</td> */}
                                </tr>
                               )
                               }
                              
                           })
                       }
                   </tbody>

               </table>
               

            </div>
                    </div>
                </div>               
            </React.Fragment>
        )
    }
}


export default connect()(ListBreeds)