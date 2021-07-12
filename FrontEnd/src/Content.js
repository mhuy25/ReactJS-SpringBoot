import React, { Component } from 'react'

export default class Content extends Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = `js/ThongKe.js`;
    script.async = true;
    document.body.appendChild(script);
}
    render() {
        return (
<div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        Trang chủ
      </h1>
      <ol className="breadcrumb">
        <li><a href="/"><i className="fa fa-dashboard" /> Trang chủ</a></li>
      </ol>
    </section>
    {/* Main content */}
    <section className="content">
      {/* Info boxes */}
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline" /></span>
            <div className="info-box-content">
              <span className="info-box-text">Hàng hóa</span>
              <span className="info-box-number">1900<small> sản phẩm</small></span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon bg-red"><i className="fa fa-google-plus" /></span>
            <div className="info-box-content">
              <span className="info-box-text">Đối tác</span>
              <span className="info-box-number">10</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        {/* fix for small devices only */}
        <div className="clearfix visible-sm-block" />
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon bg-green"><i className="ion ion-ios-cart-outline" /></span>
            <div className="info-box-content">
              <span className="info-box-text">Hóa đơn</span>
              <span className="info-box-number">760</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="info-box">
            <span className="info-box-icon bg-yellow"><i className="ion ion-ios-people-outline" /></span>
            <div className="info-box-content">
              <span className="info-box-text">Thành viên</span>
              <span className="info-box-number">9</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      <div className="row">
        <div className="col-md-12">
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Báo cáo doanh số hằng tháng</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
              </div>
            </div>
            {/* /.box-header */}
            <div className="box-body">
              <div className="row">
                <div className="col-md-8">
                  <p className="text-center">
                    <strong>Sales: 1 Jan, 2020 - 30 Jul, 2020</strong>
                  </p>
                  <div className="chart">
                    {/* Sales Chart Canvas */}
                    <canvas id="salesChart" style={{height: 180}} />
                  </div>
                  {/* /.chart-responsive */}
                </div>
                {/* /.col */}
                <div className="col-md-4">
                  <p className="text-center">
                    <strong>Thành quả</strong>
                  </p>
                  <div className="progress-group">
                    <span className="progress-text">Só lượng sản phẩm nhập vào</span>
                    <span className="progress-number"><b>160</b>/200</span>
                    <div className="progress sm">
                      <div className="progress-bar progress-bar-aqua" style={{width: '80%'}} />
                    </div>
                  </div>
                  {/* /.progress-group */}
                  <div className="progress-group">
                    <span className="progress-text">Số lượng giao dịch</span>
                    <span className="progress-number"><b>250</b>/300</span>
                    <div className="progress sm">
                      <div className="progress-bar progress-bar-red" style={{width: '80%'}} />
                    </div>
                  </div>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* ./box-body */}
            <div className="box-footer">
              <div className="row">
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-green"><i className="fa fa-caret-up" /> 17%</span>
                    <h5 className="description-header">$35,210.43</h5>
                    <span className="description-text">TOTAL REVENUE</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-yellow"><i className="fa fa-caret-left" /> 0%</span>
                    <h5 className="description-header">$10,390.90</h5>
                    <span className="description-text">TOTAL COST</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-green"><i className="fa fa-caret-up" /> 20%</span>
                    <h5 className="description-header">$24,813.53</h5>
                    <span className="description-text">TOTAL PROFIT</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block">
                    <span className="description-percentage text-red"><i className="fa fa-caret-down" /> 18%</span>
                    <h5 className="description-header">1200</h5>
                    <span className="description-text">GOAL COMPLETIONS</span>
                  </div>
                  {/* /.description-block */}
                </div>
              </div>
              {/* /.row */}
            </div>
            {/* /.box-footer */}
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
