import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

class Tintuc extends Component {
    constructor(props) {
        super(props);
        this.state =
          {editting: false,
          tieudebv: this.props.tieude}
        
    }
    Slugurl = (str)=>{
      // Chuyển hết sang chữ thường
str = str.toLowerCase();     

// xóa dấu
str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
str = str.replace(/(đ)/g, 'd');

// Xóa ký tự đặc biệt
str = str.replace(/([^0-9a-z-\s])/g, '');

// Xóa khoảng trắng thay bằng ký tự -
str = str.replace(/(\s+)/g, '-');

// xóa phần dự - ở đầu
str = str.replace(/^-+/g, '');

// xóa phần dư - ở cuối
str = str.replace(/-+$/g, '');

// return
return str;
  }

  renderNomal =()=>{
    return(
      <div>
<button className="btn btn-primary" onClick={()=>{this.btnUp()}}>Sửa</button>
      </div>
    )
  }
  renderForm = ()=>{
    return (
      <div>
<input type="text" className="form-control" id="pwd" defaultValue={this.props.tieude} ref={(tieude)=>{this.txtTD = tieude}} />      
  <textarea className="form-control" rows="5" id="comment" defaultValue={this.props.trichdan} ref={(trichdan)=>{this.txtTrD = trichdan}}></textarea>
  <button className="btn btn-primary" onClick={()=>{this.btnSave()}}>Lưu</button>
      </div>
    )
  }
  Show_data =()=>{
    if(this.state.editting ===false){
      return this.renderNomal();
    }
    else{
      return this.renderForm();
    }
  }    
  btnUp =()=>{
    this.setState({editting: true})
  }
  btnSave = ()=>{
    this.setState({editting:false, tieudebv: this.txtTD.value})
    console.log(this.txtTD.value );
    
  }
 
    render() {
        return (
            
               
      <div className="col-sm-4">
        <Link to={"/xemct/"+this.Slugurl(this.props.tieude)+"."+this.props.id+".html"}><img className="text-center" src={this.props.anh} alt="" width="300px" height="250px" /></Link>
        {}
        <h4 className="text-center">{this.state.tieudebv} </h4>
        <p>{this.props.trichdan} </p>
        {this.Show_data()}
      </div>
            
        );
    }
}

export default Tintuc;