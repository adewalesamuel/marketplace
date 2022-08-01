export function FooterMiddle(props) {
    return (
        <div className="footer-middle border-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-lg-4">
                        <div className="widget widget-about">
                            <img src="assets/images/demos/demo-14/logo-footer.png" className="footer-logo" alt="Footer Logo" width="105" height="25" />
                            <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. </p>
                            
                            <div className="widget-about-info">
                                <div className="row">
                                    <div className="col-sm-6 col-md-4">
                                        <span className="widget-about-title">Got Question? Call us 24/7</span>
                                        <a href="tel:123456789">+0123 456 789</a>
                                    </div>
                                    <div className="col-sm-6 col-md-8">
                                        <span className="widget-about-title">Payment Method</span>
                                        <figure className="footer-payments">
                                            <img src="assets/images/payments.png" alt="Payment methods" width="272" height="20" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-2">
                        <div className="widget">
                            <h4 className="widget-title">Useful Links</h4>

                            <ul className="widget-list">
                                <li><a href="about.html">About Molla</a></li>
                                <li><a href="#">How to shop on Molla</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="contact.html">Contact us</a></li>
                                <li><a href="login.html">Log in</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-2">
                        <div className="widget">
                            <h4 className="widget-title">Customer Service</h4>

                            <ul className="widget-list">
                                <li><a href="#">Payment Methods</a></li>
                                <li><a href="#">Money-back guarantee!</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Terms and conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-2">
                        <div className="widget">
                            <h4 className="widget-title">My Account</h4>

                            <ul className="widget-list">
                                <li><a href="#">Sign In</a></li>
                                <li><a href="cart.html">View Cart</a></li>
                                <li><a href="#">My Wishlist</a></li>
                                <li><a href="#">Track My Order</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-2">
                        <div className="widget widget-newsletter">
                            <h4 className="widget-title">Sign Up to Newsletter</h4>

                            <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan.</p>
                            
                            <form action="#">
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                    <div className="input-group-append">
                                        <button className="btn btn-dark" type="submit"><i className="icon-long-arrow-right"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}