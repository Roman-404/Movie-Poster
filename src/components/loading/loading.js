import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import './loading.css';

const LoadLinearProgress = withStyles({
    colorPrimary: {
      height: 7,
      backgroundColor: '#b2dfdb',
    },
    barColorPrimary: {
      backgroundColor: '#0a97a1',
    },
  })(LinearProgress);

const Loading = ({ loading }) => {
    return (
        <div className = {loading ? 'loading' : 'loaded'}>
            <LoadLinearProgress/>
        </div>
    )
}

export default Loading;