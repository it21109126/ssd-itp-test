import React from 'react';

function Header() {
    return (
        <header className="ltn__header-area ltn__header-5 ltn__header-transparent-- gradient-color-4---">

        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black plr--9---">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="site-logo-wrap">
                            <div className="site-logo">
                                </div>
                        </div>
                    </div>
                    <div className="col header-menu-column menu-color-white---">
                        <div className="header-menu d-none d-xl-block">
                            <nav>
                                <div className="ltn__main-menu">
                                    <ul>
                                        <li><a href="#">Home</a>
                                            
                                        </li>
                                        <li><a href="#">About</a>
                                            
                                        </li>
                                        <li ><a href="#">Shop</a>
                                            
                                        </li>                                
                                        <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="ltn__header-options ltn__header-options-2 mb-sm-20">
                        <div className="header-search-wrap">
                            <div className="header-search-1">
                                <div className="search-icon">
                                    <i className="icon-search for-search-show"></i>
                                    <i className="icon-cancel  for-search-close"></i>
                                </div>
                            </div>
                            <div className="header-search-1-form">
                                <form id="#" method="get"  action="#">
                                    <input type="text" name="search" value="" placeholder="Search here..."/>
                                    <button type="submit">
                                        <span><i className="icon-search"></i></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="ltn__drop-menu user-menu">
                            <ul>
                                <li>
                                    <a href="#"><i className="icon-user"></i></a>
                                    <ul>
                                        <li><a href="login.html">Sign in</a></li>
                                        <li><a href="register.html">Register</a></li>
                                        <li><a href="account.html">My Account</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="mini-cart-icon">
                            <a href="#ltn__utilize-cart-menu" className="ltn__utilize-toggle">
                                <i className="icon-shopping-cart"></i>
                                <sup>2</sup>
                            </a>
                        </div>
                        <div className="mobile-menu-toggle d-xl-none">
                            <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                                <svg viewBox="0 0 800 600">
                                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                                    <path d="M300,320 L540,320" id="middle"></path>
                                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
    )
}

export default Header;