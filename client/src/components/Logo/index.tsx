import logo from '../../assets/img/Logo.png';

export const Logo = () => {
  // Логотип должен быть кликабельным и вести на главную страницу. Но учитывая, что тут всего одна страница и она же главная - он некликабелен
  return (
    <img
      src={logo}
      width={164}
      height={40}
      alt="Едем.рф"
    />
  );
};
