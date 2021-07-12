import React, { Component } from 'react'
import TransferService from './services/TransferService';

export default class QuanLyGiaoDich extends Component {

  constructor(props){
    super(props)
    this.state = {
      transfers:[]
    }
  } 

    componentDidMount () {
        const script = document.createElement("script");
        script.src = `js/QuanLyHangHoa.js`;
        script.async = true;
        document.body.appendChild(script);
        TransferService.getTransfers().then((response) => {
          this.setState({ transfers: response.data})
        });
    }
    render() {
        return (
<div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        Quản lý giao dịch
      </h1>
      <ol className="breadcrumb">
        <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
        <li><a href="/QuanLyGiaoDich">Quản lý</a></li>
        <li className="active">Quản lý giao dịch</li>
      </ol>
    </section>
    {/* Main content */}
    <section className="content">
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Danh sách giao dịch</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body">
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Mã giao dịch</th>
                    <th>Mã khách hàng</th>
                    <th>Tổng tiền</th>
                    <th>Thời gian</th>
                    <th>Chi nhánh</th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.transfers.map(
                      transfer =>
                        <tr key ={transfer.id}>
                          <td>{transfer.id}</td>
                          <td>{transfer.customerid}</td>
                          <td>{transfer.total}</td>
                          <td>{transfer.time}</td>
                          <td>{transfer.branch}</td>
                        </tr>
                    )}
                </tbody>
              </table>
              <td>
                    <button type="button" class="btn btn-block btn-primary">Thêm giao dịch</button>
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
