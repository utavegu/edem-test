import Wrapper from '../Wrapper/Wrapper';
import { Logo } from '../../components/Logo';
import classes from './Header.module.scss';
import { UserMenu } from '../../components/UserMenu';

export const Header = () => {
  return (
    <header className={classes.header}>
      <Wrapper>
        <div className={classes.franchise}>
          <Logo />
          <h1 className={classes.mainHeading}>
            <span className={classes.visuallyHidden}>Едем.рф - </span>
            Лучший способ путешествовать дешевле
          </h1>
        </div>
        <UserMenu />
      </Wrapper>
    </header>
  );
};
