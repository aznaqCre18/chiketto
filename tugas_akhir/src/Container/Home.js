import React, {Component} from 'react';
import HomePage from './homepage/homepage';
import { BrowserRouter, Route } from 'react-router-dom'; 
import HomePageAL from '../Container/homepage/homepageAL';
import TiketSaya from '../Container/tiketview/tiketSaya';
import Payment from '../Container/invoice/payment';
import AdminAl from './admin/landing/adminAL';
import AddTiket from './admin/addTiket/addTiket';

class Home extends Component {
    render() {
        return(
            <>
                <BrowserRouter>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/homepageAL" component={HomePageAL}/>
                    {/* <Route path="/homepageAL" component={AddTiket}/> */}
                    <Route path="/tiketSaya" component={TiketSaya}/>
                    <Route path="/payment" component={Payment}/>
                    <Route path="/admin" component={AdminAl}/>
                    <Route path="/add_tiket" component={AddTiket}/>
                </BrowserRouter>
            </>
        )
    }
}

export default Home;