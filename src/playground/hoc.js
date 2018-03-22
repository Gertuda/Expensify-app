

import React from 'react'
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>chko: {props.info}</p>
        </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p> ochko ogo </p>}
        <WrappedComponent {...props}/>
        </div>
    );
};


const AdminInfo = withAdminWarning(Info);
reau
ReactDOM.render(<AdminInfo isAdmin={false}info='9roslava' />, document.getElementById('app'));