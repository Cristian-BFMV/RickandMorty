import React from 'react';
import Button from './Button';

const ListPagination = ({ prevFunct, prevDisable, nextFunct, nextDisable }) => (
  <>
    <Button text="Previous" onClick={prevFunct} className="pagination-button" disable={prevDisable} />
    <Button text="Next" onClick={nextFunct} className="pagination-button" disable={nextDisable} />
  </>
);

export default ListPagination;
