import React, { Component } from 'react'
import EmployeeService from './services/EmployeeService';

export default class QuanLyNhanVien extends Component {

  constructor(props){
    super(props)
    this.state = {
      employees:[]
    }
  } 

    componentDidMount () {
        const script = document.createElement("script");
        script.src = `js/QuanLyHangHoa.js`;
        script.async = true;
        document.body.appendChild(script);
        EmployeeService.getEmployees().then((response) => {
          this.setState({ employees: response.data})
        });
    }
    render() {
        return (
<div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        Quản lý Nhân Viên
      </h1>
      <ol className="breadcrumb">
        <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
        <li><a href="QuanLyNhanVien">Quản lý</a></li>
        <li className="active">Quản lý nhân viên</li>
      </ol>
    </section>
    {/* Main content */}
    <section className="content">
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Danh sách nhân viên</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body">
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Mã nhân viên</th>
                    <th>Tên nhân viên</th>
                    <th>Giới tính</th>
                    <th>Chức vụ</th>
                    <th>Chi nhánh làm việc</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.employees.map(
                  employee =>
                    <tr key ={employee.id}>
                      <td>{employee.id}</td>
                      <td>{employee.name}</td>
                      <td>{employee.sex}</td>
                      <td>{employee.position}</td>
                      <td>{employee.branch}</td>
                    </tr>
                )}
                </tbody>
              </table>
              <td>
                    <button type="button" class="btn btn-block btn-primary">Thêm nhân viên</button>
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
