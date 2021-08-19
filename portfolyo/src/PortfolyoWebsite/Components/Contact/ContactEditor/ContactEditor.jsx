import React from "react";
import "./ContactEditor";
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SubjectIcon from '@material-ui/icons/Subject';
import EmailIcon from '@material-ui/icons/Email';
import {useSelector, useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const ContactEditor = () => {
  const classes = useStyles();
  const ContactText = useSelector(state=>state.ContactText);
  const ContactTextFont = useSelector(state=>state.ContactTextFont);
  const ContactBgColors = useSelector(state=>state.ContactBgColors);
  const ContactAnimation = useSelector(state=>state.ContactAnimations);
  return (
    <div className="ContactEditor">
              <div class="card mb-0 pt-3" data-aos-delay={ContactAnimation.delay} data-aos-duration={ContactAnimation.duration} data-aos={ContactAnimation.animation} style={{background:ContactBgColors.bgcolor,boxShadow:ContactAnimation.shadow,borderRadius:`${ContactAnimation.radius}px`}}>
                <div class="h4 text-center title" style={{fontFamily:ContactTextFont.Title,color:ContactBgColors.title}}>{ContactText.Title}</div>
                <div class="row" >
                  <div class="col-md-6">
                    <div class="card-body" >
                      <div
                      >
                        <div class="p pl-3 pb-3">
                          <strong style={{fontFamily:ContactTextFont.dialogue,color:ContactBgColors.dialogue}}>{ContactText.dialogue}</strong>
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
                                    <SubjectIcon />
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
                                    <EmailIcon />
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
                            {
                              (ContactBgColors.border[0]=="border")?(
                                <Button
                                      variant="contained"
                                      style={{backgroundColor:ContactBgColors.button}}
                                  >
                                      Send
                                      <ChevronRightIcon/>
                                  </Button>
                              ):(ContactBgColors.border[1]=="border")?(
                                <Button
                                style={{color:ContactBgColors.button}}
                            >
                                Send
                                <ChevronRightIcon/>
                            </Button>
                              ):(
                                <Button
                                variant="outlined"
                                style={{border:`1px solid ${ContactBgColors.button}`,color:ContactBgColors.button}}
                            >
                                Send
                                <ChevronRightIcon/>
                            </Button>
                              )
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <p class="mb-0">
                        <strong style={{fontFamily:ContactTextFont.addressh,color:ContactBgColors.headers}}>{ContactText.addressh}</strong>
                      </p>
                      <p class="pb-2" style={{fontFamily:ContactTextFont.address,color:ContactBgColors.describe}}>
                      {ContactText.address}
                      </p>
                      <p class="mb-0">
                        <strong style={{fontFamily:ContactTextFont.phoneh,color:ContactBgColors.headers}}>{ContactText.phoneh}</strong>
                      </p>
                      <p class="pb-2" style={{fontFamily:ContactTextFont.phone,color:ContactBgColors.describe}}>{ContactText.phone}</p>
                      <p class="mb-0">
                        <strong style={{fontFamily:ContactTextFont.emailh,color:ContactBgColors.headers}}>{ContactText.emailh}</strong>
                      </p>
                      <p style={{fontFamily:ContactTextFont.email,color:ContactBgColors.describe}}>{ContactText.email}</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
  );
};

export default ContactEditor;
