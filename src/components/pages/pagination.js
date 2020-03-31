import React from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        color: 'orange',
        borderColor: 'orange',
        width: 95,
        height: 95
    }
})

const ModPagination = ({ total_pages, page, handleChangePage }) => {
    const classes = useStyles()
    return (
        <Pagination count={total_pages}
                    onChange={handleChangePage}
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
    )
}

export default ModPagination;