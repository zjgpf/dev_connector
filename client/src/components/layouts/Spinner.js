import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => <Fragment>
                        <img src={spinner}  alt='Loading' className='m-auto w-64 p-4' /> 
                      </Fragment>

export default Spinner;
