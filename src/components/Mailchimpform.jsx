"use client"
import React, { Component } from 'react';

class MailchimpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        });
    };

    render() {
        return (
            <div id="mc_embed_shell">
                <link
                    href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
                    rel="stylesheet"
                    type="text/css"
                />
                <style type="text/css">
                    {`
          #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
             We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
          `}
                </style>
                <div id="mc_embed_signup">
                    <form
                        action="https://njit.us17.list-manage.com/subscribe/post?u=73f7d4425d490ffb24143d396&amp;id=0e4604ad05&amp;f_id=007905e0f0"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_blank"
                    >
                        <div id="mc_embed_signup_scroll">
                            <h2 style={{ color: 'black' }}>Subscribe</h2>
                            <div style={{ color: 'black' }} className="indicates-required">
                                <span className="asterisk">*</span> indicates required
                            </div>
                            <div className="mc-field-group">
                                <label style={{ color: 'black' }} htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                                <input
                                    type="email"
                                    name="EMAIL"
                                    className="required email"
                                    id="mce-EMAIL"
                                    required=""
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                            <div id="mce-responses" className="clear foot">
                                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                            </div>
                            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                                <input
                                    type="text"
                                    name="b_73f7d4425d490ffb24143d396_0e4604ad05"
                                    tabIndex="-1"
                                    value=""
                                />
                            </div>
                            <div className="optionalParent">
                                <div className="clear foot">
                                    <input
                                        type="submit"
                                        name="subscribe"
                                        id="mc-embedded-subscribe"
                                        className="button"
                                        value="Subscribe"
                                    />
                                    <p style={{ margin: '0px auto' }}>
                                        <a
                                            href="http://eepurl.com/ixtK_6"
                                            title="Mailchimp - email marketing made easy and fun"
                                        >
                                            <span
                                                style={{
                                                    display: 'inline-block',
                                                    backgroundColor: 'transparent',
                                                    borderRadius: '4px',
                                                }}
                                            >
                                                <img
                                                    className="refferal_badge"
                                                    src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                                                    alt="Intuit Mailchimp"
                                                    style={{
                                                        width: '220px',
                                                        height: '40px',
                                                        display: 'flex',
                                                        padding: '2px 0px',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                />
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <script
                    type="text/javascript"
                    src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
                ></script>
                <script
                    type="text/javascript"
                >{`(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`}</script>
            </div>
        );
    }
}

export default MailchimpForm;
