import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';
import { BrowserRouter, Link, Route} from 'react-router-dom'
import QuanLyHangHoa from './QuanLyHangHoa';
import QuanLyNhanVien from './QuanLyNhanVien';
import QuanLySoQuy from './QuanLySoQuy';
import QuanLyDoiTac from './QuanLyDoiTac';
import QuanLyGiaoDich from './QuanLyGiaoDich';
import ThongKe from './ThongKe';
export default class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header/>
        <Menu/>
        <Route exact path="/" render={() => <div><Content/></div> } />
        <Route exact path="/QuanLyHangHoa" render={() => <div><QuanLyHangHoa/></div> } />
        <Route exact path="/QuanLyNhanVien" render={() => <div><QuanLyNhanVien/></div> } />
        <Route exact path="/QuanLySoQuy" render={() => <div><QuanLySoQuy/></div> } />
        <Route exact path="/QuanLyDoiTac" render={() => <div><QuanLyDoiTac/></div> } />
        <Route exact path="/QuanLyGiaoDich" render={() => <div><QuanLyGiaoDich/></div> } />
        <Route exact path="/ThongKe" render={() => <div><ThongKe/></div> } />
        <Footer/>
      </div>
      </BrowserRouter>
    )
  }
}
