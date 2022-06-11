import { IFooterSocialChannel } from "interfaces/footer";

import {ReactComponent as FacebookIcon} from 'assets/images/facebook.svg';
import {ReactComponent as YoutubeIcon} from 'assets/images/youtube.svg';
import {ReactComponent as InstagramIcon} from 'assets/images/instagram.svg';
import {ReactComponent as TwitterIcon} from 'assets/images/twitter.svg';

const marvelSocialChannelsLinks: IFooterSocialChannel[] = [
  {
    Icon: FacebookIcon,
    url: 'https://www.facebook.com/MarvelIndia/?brand_redir=6883542487'
  },
  {
    Icon: TwitterIcon,
    url: 'https://twitter.com/marvel'
  },
  {
    Icon: InstagramIcon,
    url: 'https://www.instagram.com/marvel/'
  },
  {
    Icon: YoutubeIcon,
    url: 'https://www.youtube.com/marvel'
  }
];

export default marvelSocialChannelsLinks;