import React, { Component } from 'react'
import ProductService from './services/ProductService';

export default class QuanLyHangHoa extends Component {

    constructor(props){
      super(props)
      this.state = {
        products:[]
      }
    } 
    componentDidMount () {
        const script = document.createElement("script");
        script.src = `js/QuanLyHangHoa.js`;
        script.async = true;
        document.body.appendChild(script);
        ProductService.getProducts().then((response) => {
          this.setState({ products: response.data})
        });
    }
    render() {
        return (
<div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        Quản lý hàng hóa
      </h1>
      <ol className="breadcrumb">
        <li><a href="/"><i className="fa fa-dashboard" /> Home</a></li>
        <li><a href="QuanLyHangHoa">Quản lý</a></li>
        <li className="active">Quản lý hàng hóa</li>
      </ol>
    </section>
    {/* Main content */}
    <section className="content">
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Danh sách hàng hóa</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body">
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá bán</th>
                    <th>Giá vốn</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.products.map(
                  product =>
                    <tr key ={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.amount}</td>
                      <td>{product.price}</td>
                      <td>{product.invest}</td>
                    </tr>
                )}
                </tbody>
              </table>
              <td>
                    <button type="button" class="btn btn-block btn-primary">Thêm sản phẩm</button>
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
