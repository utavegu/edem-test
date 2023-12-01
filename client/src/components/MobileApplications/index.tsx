import classNames from 'classnames';
import classes from './MobileApplications.module.scss';

export const MobileApplications = () => {
  // В идеале должны прилетать из админки и пробрасываться в компонент пропсами. Класс тогда будет иначе вычисляться, конечно
  const mobileApplicationsData = [
    {
      name: 'AppStore',
      url: 'https://apple.com/app-store/',
      class: classes.appStore,
    },
    {
      name: 'GooglePlay',
      url: 'https://play.google.com',
      class: classes.googlePlay,
    },
  ];

  return (
    <ul>
      {mobileApplicationsData.length &&
        mobileApplicationsData.map((mobileApplication) => (
          <li>
            <a
              className={classNames([classes.getApp, mobileApplication.class])}
              href={mobileApplication.url}
              title={mobileApplication.name}
              target="_blank"
              rel="noreferrer"
            >
              <span className={classes.visuallyHidden}>{mobileApplication.name}</span>
            </a>
          </li>
        ))}
    </ul>
  );
};
