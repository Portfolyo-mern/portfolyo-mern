import React from "react";
import "./ContactEditor";
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const ContactEditor = () => {
  const classes = useStyles();
  return (
    <div className="ContactEditor">
              <div class="card mb-0 pt-3 aos-init aos-animate" data-aos="zoom-in">
                <div class="h4 text-center title">Contact Me</div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="card-body">
                      <form
                        action="https://formspree.io/f/swapnil6901@gmail.com"
                        method="post"
                      >
                        <div class="p pl-3 pb-3">
                          <strong>Feel free to contact me </strong>
                        </div>
                        <div class="row mb-3 px-3">
                          <div class="col ">
                            <div class="input-group">
                            <TextField
                                style={{width:"100%"}}
                                id="input-with-icon-textfield"
                                label="Name"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <AccountCircle />
                                    </InputAdornment>
                                ),
                                }}
                            />
                            </div>
                          </div>
                        </div>
                        <div class="row mb-3 px-3">
                          <div class="col ">
                            <div class="input-group">
                            <TextField
                                style={{width:"100%"}}
                                id="input-with-icon-textfield"
                                label="Subject"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <AccountCircle />
                                    </InputAdornment>
                                ),
                                }}
                            />
                            </div>
                          </div>
                        </div>
                        <div class="row mb-3 px-3">
                          <div class="col ">
                            <div class="input-group">
                            <TextField
                                style={{width:"100%"}}
                                id="input-with-icon-textfield"
                                label="Gmail"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <AccountCircle />
                                    </InputAdornment>
                                ),
                                }}
                            />
                            </div>
                          </div>
                        </div>
                        <div class="row mb-3 pt-3 px-3">
                          <div class="col ">
                            <div class="input-group">
                                <TextField
                                    style={{width:"100%"}}
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    defaultValue=""
                                    variant="outlined"
                                />
                            </div>
                          </div>
                        </div>
                        <div class="row px-3">
                          <div class="col " >
                          <Button
                                variant="outlined"
                                color="primary"
                            >
                                Send
                                <ChevronRightIcon/>
                            </Button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <p class="mb-0">
                        <strong>Address </strong>
                      </p>
                      <p class="pb-2">
                        Telangana Hyderebad Alwal 500010
                      </p>
                      <p class="mb-0">
                        <strong>Phone</strong>
                      </p>
                      <p class="pb-2">+91 9347680473</p>
                      <p class="mb-0">
                        <strong>Email</strong>
                      </p>
                      <p>akshaymurari184@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
  );
};

export default ContactEditor;
