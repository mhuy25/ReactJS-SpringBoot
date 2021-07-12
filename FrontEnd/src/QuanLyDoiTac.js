import React, { Component } from 'react'
import PartnerService from './services/PartnerService';

export default class QuanLyDoiTac extends Component {

  constructor(props){
    super(props)
    this.state = {
      partners:[]
    }
  } 

    componentDidMount () {
        const script = document.createElement("script");
        script.src = `js/QuanLyHangHoa.js`;
        script.async = true;
        document.body.appendChild(script);
        PartnerService.getPartners().then((response) => {
          this.setState({ partners: response.data})
        });
    }
    render() {
        return (
<div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        Quản lý đối tác
      </h1>
      <ol className="breadcrumb">
        <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
        <li><a href="QuanLyDoiTac">Quản lý</a></li>
        <li className="active">Quản lý đối tác</li>
      </ol>
    </section>
    {/* Main content */}
    <section className="content">
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Danh sách đối tác</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body">
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Mã đối tác</th>
                    <th>Tên đối tác</th>
                    <th>SĐT</th>
                    <th>Khu vực</th>
                    <th>Trạng Thái</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.partners.map(
                      partner =>
                        <tr key ={partner.id}>
                          <td>{partner.id}</td>
                          <td>{partner.name}</td>
                          <td>{partner.sdt}</td>
                          <td>{partner.zone}</td>
                          <td>{partner.status}</td>
                        </tr>
                    )}
                </tbody>
              </table>
              <td>
                    <button type="button" class="btn btn-block btn-primary">Thêm đối tác</button>
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
