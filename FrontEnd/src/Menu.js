import React, { Component } from 'react'
import { BrowserRouter, Link, Route} from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
<div>
  <aside className="main-sidebar">
    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">
      {/* Sidebar user panel */}
      <div className="user-panel">
        <div className="pull-left image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
        </div>
        <div className="pull-left info">
          <p>Huy Pham</p>
          <a href="#"><i className="fa fa-circle text-success" /> Online</a>
        </div>
      </div>
      {/* search form */}
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
          <span className="input-group-btn">
            <button type="submit" name="search" id="search-btn" className="btn btn-flat">
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form>
      {/* /.search form */}
      {/* sidebar menu: : style can be found in sidebar.less */}
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">MAIN MENU</li>
        <li className="">
          <a href="/"><i className="fa fa-dashboard" /> Trang chủ</a>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-pie-chart" />
            <span>Quản lý</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="/QuanLyHangHoa"><i className="fa fa-circle-o" /> Quản lý hàng hóa</a></li>
            <li><a href="/QuanLyGiaoDich"><i className="fa fa-circle-o" /> Quản lý giao dịch</a></li>
            <li><a href="/QuanLyNhanVien"><i className="fa fa-circle-o" /> Quản lý nhân viên</a></li>
            <li><a href="/QuanLySoQuy"><i className="fa fa-circle-o" /> Quản lý sổ quỹ</a></li>
            <li><a href="/QuanLyDoiTac"><i className="fa fa-circle-o" /> Quản lý đối tác</a></li>
          </ul>
        </li>
        <li className="">
          <a href="/ThongKe">
            <i className="fa fa-edit" /> <span>Thống kê</span>
          </a>
        </li>
      </ul>
    </section>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
