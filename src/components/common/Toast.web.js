import React, { Component } from 'react';
import { toast } from 'react-toastify';

export default props => {
    const {type="default", delay=4000, message=""} = props;
    const object = {
        position: "top-right",
        autoClose: delay,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        }
    type==="error"?toast.error(message, object ) :
    toast.warn(message, object )
}