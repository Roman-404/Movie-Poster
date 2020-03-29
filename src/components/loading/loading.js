import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import './loading.css';

const Loading = ({ loading }) => {
    return (
        <div className = {loading ? 'loading' : 'loaded'}>
            <LinearProgress color='secondary'/>
        </div>
    )
}

export default Loading;