import classNames from 'classnames';
import classes from './SocialNetworks.module.scss';

export const SocialNetworks = () => {
  // В идеале должны прилетать из админки и пробрасываться в компонент пропсами
  const socialNetworksData = [
    {
      name: 'VK',
      url: 'https://vk.com/',
      class: classes.vk,
    },
    {
      name: 'Одноклассники',
      url: 'https://ok.ru/',
      class: classes.ok,
    },
    {
      name: 'Telegram',
      url: 'https://web.telegram.org/',
      class: classes.tg,
    },
  ];

  return (
    <ul className={classes.socialList}>
      {socialNetworksData.map((socialNetwork, i) => (
        <li key={i}>
          <a
            className={classNames([classes.socialItem, socialNetwork.class])}
            title={socialNetwork.name}
            href={socialNetwork.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className={classes.visuallyHidden}>{socialNetwork.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
