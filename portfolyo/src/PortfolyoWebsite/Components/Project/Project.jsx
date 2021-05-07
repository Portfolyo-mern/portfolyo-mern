import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import "./Project.scss";
import Layout from './Layouts/Layout';

const Project = () => {

    return (
        <div className="ProjectSection my-5" >
           <Layout/>
        </div>
    )
}

export default Project;

