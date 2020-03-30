import React from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import {styled} from '@material-ui/core';
import { Link } from 'react-router-dom';


const ModPaginationItem = styled(PaginationItem)(theme => ({
    color: 'orange',
    borderColor: 'orange',
    height: 95,
    width: 95
}));

const ModPagination = ({ total_pages, page, handleChangePage }) => {
    return (
        <Pagination count={total_pages}
                    onChange={handleChangePage}
                    siblingCount={3}
                    page={page}
                    variant='outlined' shape='rounded'
                    renderItem={(item) => (
                        <ModPaginationItem
                        //   component={Link}
                        //   to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                          {...item}
                    />
                )
            }
        />
    )
}

export default ModPagination;