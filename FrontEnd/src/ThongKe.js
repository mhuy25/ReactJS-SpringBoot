import React, { Component } from 'react'

export default class ThongKe extends Component {
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
        Thống kê
      </h1>
      <ol className="breadcrumb">
        <li><a href="/"><i className="fa fa-dashboard" /> Trang chủ</a></li>
        <li><a href="/ThongKe">Thống kê</a></li>
      </ol>
    </section>
    {/* Main content */}
    <section className="content">
      <div className="row">
        <div className="col-md-6">
          {/* AREA CHART */}
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Doanh số bán hàng</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
              </div>
            </div>
            <div className="box-body">
              <div className="chart">
                <canvas id="areaChart" style={{height: 250}} />
              </div>
            </div>
            {/* /.box-body */}
          </div>
          {/* /.box */}
          {/* DONUT CHART */}
          <div className="box box-danger">
            <div className="box-header with-border">
              <h3 className="box-title">Doanh số bán hàng</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
              </div>
            </div>
            <div className="box-body">
              <canvas id="pieChart" style={{height: 250}} />
            </div>
            {/* /.box-body */}
          </div>
          {/* /.box */}
        </div>
        {/* /.col (LEFT) */}
        <div className="col-md-6">
          {/* LINE CHART */}
          <div className="box box-info">
            <div className="box-header with-border">
              <h3 className="box-title">Doanh số bán hàng</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
              </div>
            </div>
            <div className="box-body">
              <div className="chart">
                <canvas id="lineChart" style={{height: 250}} />
              </div>
            </div>
            {/* /.box-body */}
          </div>
          {/* /.box */}
          {/* BAR CHART */}
          <div className="box box-success">
            <div className="box-header with-border">
              <h3 className="box-title">Doanh số bán hàng</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
              </div>
            </div>
            <div className="box-body">
              <div className="chart">
                <canvas id="barChart" style={{height: 230}} />
              </div>
            </div>
            {/* /.box-body */}
          </div>
          {/* /.box */}
        </div>
        {/* /.col (RIGHT) */}
      </div>
      {/* /.row */}
    </section>
    {/* /.content */}
  </div>
</div>

        )
    }
}
