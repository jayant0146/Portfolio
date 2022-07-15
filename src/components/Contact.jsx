import React from "react";
import Myself from "./myself";

function Contact() {
    return (
        <div>

        <Myself />
            <div className="form">
                <h1 className="common" id="contact"> Contact Details</h1>
                <h2 className="common"> Let us be in Contact</h2>
                <form className="common">
                    <input type="text" placeholder="Name" required />
                    <br /><br /><br />

                    <input type="Email" placeholder="Email Id" required />
                    <br /><br />

                    <input type="text" placeholder="Subject" required />
                    <br /><br /><br />

                    <textarea placeholder="Message" ></textarea>  <br /><br />
                    <input type="submit" value="Send Message" className="button" />
                </form>
            </div> <br /><br /><br />

            <footer className="foot">

                <table>
                    <thead>
                        <tr>
                            <th>Contact</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <img src="http://bhartiyamvidyapeethdatia.in/wp-content/uploads/2020/04/Contact-Us.png" alt="Contact" width="70px" height="70px" />
                                +916386172096
                            </td>

                            <td>
                                <img src="https://www.pcworld.com/wp-content/uploads/2021/09/gmail_logo-100758589-orig-1.jpg?quality=50&strip=all" alt="Email" width="70px" height="70px" />2020uee0146@iitjammu.ac.in
                            </td>
                        </tr>
                    </tbody>

                </table> <br /><br /><br />

                <table className="media">
                    <tbody>
                        <tr>
                            <td>
                                <a href="https://www.linkedin.com/in/jayant-sahu-48a426200/"><img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="linkedin" width="70px" height="70px" /></a>
                            </td>

                            <td><a href="https://www.instagram.com/the_devil_mind_._/"><img src="https://parentzone.org.uk/sites/default/files/Instagram%20logo.jpg" alt="Instagram" width="70px" height="70px" /></a>
                            </td>

                            <td><a href="https://www.facebook.com/jayant.sahu.507027"><img src="https://pyxis.nymag.com/v1/imgs/11d/582/c7b0487c6e26db4f5be6eb679e3620d2ce-facebook.rsquare.w330.jpg" alt="facebook" width="70px" height="70px" /></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </footer>
        </div>
    );
}

export default Contact;