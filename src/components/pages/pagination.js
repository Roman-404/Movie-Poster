import React from 'react';
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
    return (
        <Route>
            {({ location }) => {
                const query = new URLSearchParams(location.search);
                const page = parseInt(query.get('page'), 10) || 1;

                return (
            <Pagination count={total_pages}
                        onChange={(e, page) => setCurrPage(page)}
                        siblingCount={3}
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