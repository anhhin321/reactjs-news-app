import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
               <div>
  <header className="masthead tintuc">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-1 text-center">Trang Liên hệ</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin contact */}
  <section id="contact">
    <div className="container">
      <h2 className="text-center text-uppercase text-secondary mb-0">Liên hệ với chúng tôi</h2>
      <hr className="star-dark mb-5" />
      <div className="row">
        <div className="col-lg-8 mx-auto">
          {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
          {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
          <form name="sentMessage" id="contactForm" noValidate="novalidate">
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Name</label>
                <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." aria-invalid="false" />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Email Address</label>
                <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." aria-invalid="false" />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Phone Number</label>
                <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Message</label>
                <textarea className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                <p className="help-block text-danger" />
              </div>
            </div>
            <br />
            <div id="success" />
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* end  contact */}
</div>
 
            </div>
        );
    }
}

export default Contact;