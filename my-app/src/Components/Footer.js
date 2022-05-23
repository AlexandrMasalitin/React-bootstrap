import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const FooterPage = () => {
  return (
      <div className="styleFooter">
    <MDBFooter  className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p className="footerColor">
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul className="hr">
              <li className="list-unstyled">
                <a href="/">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="/about">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="/contacts">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="/blog">Link 4</a>
              </li>
              <li className="list-unstyled">
                <a href="/info">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid className="footerColor">
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;