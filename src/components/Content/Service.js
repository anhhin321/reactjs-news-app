import React, { Component } from 'react';

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xemthem: false
    }
  }

  renderAdd = ()=>{
    return (
      <div id="long-description"><p>Giới thiệu vể React JS - thư viện javascript phát triển bởi Facebook.<br />- Sức mạnh khủng khiếp mà Facebook mang đến trong React, đó chính là mô hình DOM, làm tăng khả năng trình diễn các đối tượng trên nền web một cách hiệu quả &amp; tốc độ mượt hơn bất kì Java Script Framework nào trước đây.<br />- Mục đích mà Facebook nhắm đến trong React là "Learn Once, Write Anywhere" - Có nghĩa là sau khi hoàn tất khóa học React JS, ngoài việc bạn thiết kế được layout web, bạn còn sẽ có nền tảng vững chắc để tiếp cận React Native (Mobile App) mà không cần phải mất nhiều thời gian </p>
              <button onClick={()=>{this.Xemthem1()}} className="btn btn-outline-primary">rut gon</button>

      </div>
    )
  }
  show_data = () => {
    if(this.state.xemthem === true){
      return this.renderAdd();
    }
  }
  show_data1 = () => {
    if(this.state.xemthem === false){
      return (
        <button onClick={()=>{this.Xemthem()}} className="btn btn-outline-primary">xem them</button>
        
      )
    }
  }
  Xemthem = () => {
    this.setState(
      {xemthem: true}
    );
  }
  Xemthem1 = () => {
    this.setState(
      {xemthem: false}
    );
  }
    render() {
        return (
            <div>
               <h3 className="panel-title">Mô tả khoá học</h3>
               <h4 className="panel-title-sub">Tổng quát</h4>
               <div id="short-description"><p>Giới thiệu vể React JS - thư viện javascript phát triển bởi Facebook.<br />- Sức mạnh khủng khiếp mà Facebook mang đến trong React, đó chính là mô hình DOM, làm tăng khả năng trình diễn các đối tượng trên nền web một cách hiệu quả &amp; tốc độ mượt hơn bất kì Java Script Framework nào trước đây.<br />- Mục đích mà Facebook nhắm đến trong React là "Learn Once, Write Anywhere" - Có nghĩa là sau khi hoàn tất khóa học React JS, ngoài việc bạn thiết kế được layout web, bạn còn sẽ có nền tảng vững chắc để tiếp cận React Native (Mobile App) mà không cần phải mất nhiều thời gian.</p></div>
               {this.show_data()}
              {this.show_data1()}
            </div>
        );
    }
}

export default Service;