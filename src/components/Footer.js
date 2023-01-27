import React from "react";
class Footer extends React.Component {
render() {
return (
<div className="row" style={{ marginTop: "2rem" }}>
<footer className="page-footer font-small blue-grey lighten-5">
   <div class="" style={{background:"#01192b"}}>
      <div className="container-fluid">
         <div className="row py-4 d-flex ">
            <div className="col-md-6 col-lg-5  text-md-left mb-4 mb-md-0">
               <h5 className="mb-0 text-white" style={{ marginBot: "1em" }}>
               Testing sample application Made by Steven Temani. Powered by React JSX!
               </h5>
            </div>
            <div className="col-md-6 ">
               <ul id="socialhandle">
                  <li>
                     <i class="fab fa-facebook-f"></i>{" "}
                  </li>
                  <li>
                     <i class="fab fa-twitter fa-lg"></i>{" "}
                  </li>
                  <li>
                     {" "}
                     <i class="fab fa-instagram fa-lg"></i>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   <div className="container-fluid text-center text-md-left mt-5">
      <div className="row mt-3 dark-grey-text">
         <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-uppercase font-weight-bold">
               Demo Footer
            </h6>
            <p>
               Sample footer text just to make  afooter looks appearing a bit
               <br />
               <a
               href="https://neytechsolutions.com"
               style={{ color: "orange" }}
               >
               <strong> Another Product From Solicy.</strong>
               </a>
            </p>
         </div>
         <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">
               Useful links
            </h6>
            <p>
               <a className="dark-grey-text" href="/contact">
               Contact
               </a>
            </p>
            <p>
               <a className="dark-grey-text" href="register.php">
               Register
               </a>
            </p>
            <p>
               <a
                  className="dark-grey-text"
                  href="login"
                  data-toggle="modal"
                  data-target="#modalLoginForm"
                  >
               Login
               </a>
            </p>
         </div>
         <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">
               Services
            </h6>
            <p>
               <a className="dark-grey-text" href="all.php">
               Web Development
               </a>
            </p>
            <p>
               <a className="dark-grey-text" href="all.php">
               Block-Chain
               </a>
            </p>
            <p>
               <a className="dark-grey-text" href="all.php">
               FinTech
               </a>
            </p>
         </div>
         <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase font-weight-bold">
               NewsLetter Subscription
            </h6>
            <p>
               Enter Your Email address in the input field below in order to
               recieve,News and Updates directli in your Email{" "}
            </p>
            <form>
               <div className="form-group">
                  <input type="email" className="form-control" />
               </div>
               <div className="form-group">
                  <input
                     type="submit"
                     value="subscribe"
                     className="form-control" style={{background:'orange',marginTop:'1em'}} 
                     />
               </div>
            </form>
         </div>
      </div>
   </div>
   <div className=" container-fluid footer-copyright text-center text-black-50 py-3">
      {" "}
      Copyright: © 2023
      <a className="dark-grey-text" href="/books">
      {" "}
      </a>
   </div>
</footer>
</div>
);
}
}
export default Footer;