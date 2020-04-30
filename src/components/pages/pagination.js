import React, { useState, useEffect } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';
import { Link, Route } from 'react-router-dom';
import { setCurrPage } from '../../actions';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    root: {
        color: 'orange',
        borderColor: 'orange',
        width: 95,
        height: 95,
        background: 'rgba(255, 215, 0, 5%)',
        '&:hover': {
            color: 'aliceblue',
            backgroundColor: 'rgba(218, 165, 32, .3)'
        }
    }
})

const ModPagination = ({ total_pages, setCurrPage }) => {
    
    const classes = useStyles()
    const [sibling_count, setSiblingCount] = useState(3)

    const handleResize = () => {
        const range = window.innerWidth;

        switch (true) {
            case (range > 1290):
                setSiblingCount(3)
                break;
            case (1080 < range && range <= 1290):
                setSiblingCount(2)
                break;
            case (876 < range && range <= 1080):
                setSiblingCount(1)
                break;
            case (range <= 876):
                setSiblingCount(null)
                break;
        
            default:
                break;
        }
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener("resize", handleResize);
    })

    return (
        <Route>
            {({ location }) => {
                const query = new URLSearchParams(location.search);
                const page = parseInt(query.get('page'), 10) || 1;

                return (
            <Pagination count={total_pages}
                        onChange={(e, page) => setCurrPage(page)}
                        siblingCount={sibling_count}
                        page={page}
                        variant='outlined' shape='rounded'
                        renderItem={(item) => (
                            <PaginationItem
                                    className={classes.root}
                                    component={Link}
                                    to={`/movies/${item.page === 1 ? '' : `?page=${item.page}`}`}
                                    {...item}
                                />
                            )}
                        />
                    );
                }}
        </Route>
    )
}

const mapDispatchToProps = {
    setCurrPage
}

export default connect(null, mapDispatchToProps)(ModPagination);