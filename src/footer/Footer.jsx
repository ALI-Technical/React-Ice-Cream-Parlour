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
                            <li><a href="">Delicious Flavours</a></li>
                            <li><a href="">Natural Flavours</a></li>
                            <li><a href="">Customer Staisfaction</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="">Company</a></li>
                            <li><a href="">Team</a></li>
                            <li><a href="">Legacy</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="">Job openings</a></li>
                            <li><a href="">Employee success</a></li>
                            <li><a href="">Benefits</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 item social"><a href=""><FaFacebookF /></a><a href=""><FaInstagram /></a><a href=""><FaTwitter /></a><a href=""><FaGithub /></a>
                        <p class="copyright">Royal Scoops © 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>       
)
}

export default Footer