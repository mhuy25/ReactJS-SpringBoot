import React, { Component } from 'react'
import CashService from './services/CashService';


export default class QuanLySoQuy extends Component {

  constructor(props){
    super(props)
    this.state = {
      cashs:[]
    }
  } 

    componentDidMount () {
        const script = document.createElement("script");
        script.src = `js/QuanLyHangHoa.js`;
        script.async = true;
        document.body.appendChild(script);
        CashService.getCashs().then((response) => {
          this.setState({ cashs: response.data})
        });
    }
    render() {
        return (
<div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        Quản lý Sổ Quỹ
      </h1>
      <ol className="breadcrumb">
        <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
        <li><a href="/QuanLySoQuy">Quản lý</a></li>
        <li className="active">Quản lý sổ quỹ</li>
      </ol>
    </section>
    {/* Main content */}
    <section className="content">
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Danh sách sổ quỹ</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body">
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Mã phiếu</th>
                    <th>Giá trị</th>
                    <th>Thời gian</th>
                    <th>Người nhận</th>
                    <th>Chi nhánh</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.cashs.map(
                  cash =>
                    <tr key ={cash.id}>
                      <td>{cash.id}</td>
                      <td>{cash.total}</td>
                      <td>{cash.time}</td>
                      <td>{cash.recieve}</td>
                      <td>{cash.branch}</td>
                    </tr>
                )}
                </tbody>
              </table>
              <td>
                    <button type="button" class="btn btn-block btn-primary">Thêm phiếu</button>
                </td>
            </div>
            {/* /.box-body */}
          </div>
          {/* /.box */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </section>
    {/* /.content */}
  </div>
</div>

        )
    }
}
