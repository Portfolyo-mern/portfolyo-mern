import React from 'react';

import { BackTop } from 'antd';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
        
          <a href="#"><b>Portfolyo</b></a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/Portfolyo-107113391726117"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/akshaymurari2"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/portfolyo_builder/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2021 Portfolyo</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;