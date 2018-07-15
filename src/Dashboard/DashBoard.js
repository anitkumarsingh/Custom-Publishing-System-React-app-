import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { post } from './data'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import LogOut from '../LogoutButton';
import swal from 'sweetalert';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: post,
            name:'',
            redirect: false,
        }
    }
    // 15th july 2018                            
    componentDidMount() {
        let data = JSON.parse(sessionStorage.getItem('userData'));
        if(data){
            console.log(data.name);
            this.setState({name: data.name});
        }
        else{
            // alert("You first need to Login");
            swal("Please Login first !", "You need to first Login to access content!", "error");
        }
    
      }

    render() 
    {
        if(!sessionStorage.getItem('userData') || this.state.redirect){
            return (<Redirect to={'/'}/>)
          }
      
        const items = post.map((item, i) => {
            return (
                <div key={i}>
                    <Table responsive>
                        <tbody>
                            <tr style={{ width: '100%' }}>
                                <td style={{ width: 'auto' }}>
                                <Link to={"post/"+post[i].id}>{post[i].id}</Link></td>
                                <td style={{ width: '70%' }}>{post[i].title}</td>
                                <td style={{ width: '20%' }}>{post[i].time}</td>
                                {/* <a href="/" ><td style={{ width: '5%' }}>{post[i].id}</td></a> */}
                            </tr>
                        </tbody>
                    </Table>
                </div>

            );

        });
        console.log(items);
        return (
            <div className="container ">
            <div style={{display:'inline-flex',alignContent:'center',justifyContent:'center',float:'right',marginRight:'20px'}}>
            <p style={{fontSize:'20px'}}>Welcome, <span style={{color:'green'}}>{this.state.name}</span></p>
            <div style={{marginLeft:'50px',marginTop:'0px',fontSize:'20px',color:'red'}}><LogOut/></div>
            </div>
            <br/><br/><br/>
                <Table responsive>
                    <thead style={{ backgroundColor: 'lightblue' }}>
                        <tr style={{ display: 'block' }} >
                            <th >URL</th>
                            <th style={{ paddingLeft: '250px' }}>Title</th>
                            <th style={{ paddingLeft: '585px' }}>Time of Creation</th>
                            {/* <th style={{ paddingLeft: '100px' }}>URL</th> */}
                        </tr>
                    </thead>


                    {items}

                </Table>

            </div>
        );
    }
}
export default DashBoard;