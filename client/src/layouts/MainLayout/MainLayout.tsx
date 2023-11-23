import React, { FC } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import classes from './MainLayout.module.scss'

type PropTypes = {
  children: React.ReactNode;
};

const MainLayout: FC<PropTypes> = ({ children }) => {
  return (
    <div className={classes.mainLayout}>
      <Header />
      <main>
        <Wrapper>
          {children}
        </Wrapper>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;