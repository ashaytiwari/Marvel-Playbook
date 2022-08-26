import React from 'react';

import { IFooterSocialChannel } from 'interfaces/footer';

import marvelSocialChannelsLinks from 'assets/data/footer-marvel-social-channels';

import styles from './MarvelSocialChannels.module.scss';

const MarvelSocialChannels = () => {

  function renderSocialChannel(channel: IFooterSocialChannel, index: number) {

    const socialChannelControlAttributes = {
      className: styles.socialChannelControl,
      href: channel.url,
      target: '_blank',
      key: index
    };

    return (
      <a {...socialChannelControlAttributes}>
        <channel.Icon className={styles.socialChannelIcon} />
      </a>
    );
  }

  return (
    <div className={styles.marvelSocialChannelsMain}>
      <label>Follow Marvel</label>

      <div className={styles.socialChannelContainer}>
        {
          marvelSocialChannelsLinks.map((channel: IFooterSocialChannel, index: number) => (
            renderSocialChannel(channel, index)
          ))
        }
      </div>

    </div>
  );

};

export default MarvelSocialChannels;