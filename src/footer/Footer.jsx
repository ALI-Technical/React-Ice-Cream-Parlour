import React from 'react'
import './footer.css'
import 'react-icons/fa'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return ( <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="JavaScript:void(0)">Delicious Flavours</a></li>
                            <li><a href="JavaScript:void(0)">Natural Flavours</a></li>
                            <li><a href="JavaScript:void(0)">Customer Staisfaction</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="JavaScript:void(0)">Company</a></li>
                            <li><a href="JavaScript:void(0)">Team</a></li>
                            <li><a href="JavaScript:void(0)">Legacy</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="JavaScript:void(0)">Job openings</a></li>
                            <li><a href="JavaScript:void(0)">Employee success</a></li>
                            <li><a href="JavaScript:void(0)">Benefits</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 item social"><a href="JavaScript:void(0)"><FaFacebookF /></a><a href="JavaScript:void(0)"><FaInstagram /></a><a href="JavaScript:void(0)"><FaTwitter /></a><a href="JavaScript:void(0)"><FaGithub /></a>
                        <p class="copyright">Royal Scoops © 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>       
)
}

export default Footer