import React, { FC } from 'react';
import classes from './Wrapper.module.scss';

type PropTypes = {
  children: React.ReactNode;
};

const Wrapper: FC<PropTypes> = ({ children }): JSX.Element => {
  return (
    <div className={classes.wrapper}>
      {children}
    </div>
  );
};

export default Wrapper;