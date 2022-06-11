import { IFooterMarvelFeatureControlItem } from "interfaces/footer";

import MarvelInsiderImage from 'assets/images/marvel-insider.png';
import MarvelUnlimitedImage from 'assets/images/marvel-unlimited.png';

const marvelFeatureControl: IFooterMarvelFeatureControlItem[] = [
  {
    title: 'Marvel Insider',
    description: 'Get Rewarded for Being a Marvel Fan',
    imagePath: MarvelInsiderImage,
    url: 'https://www.marvel.com/insider?cid=Dcom_navigation_20200929_insider_footer'
  },
  {
    title: 'Marvel Unlimited',
    description: 'Access Over 29,000+ Digital Comics',
    imagePath: MarvelUnlimitedImage,
    url: 'https://www.marvel.com/unlimited?cid=dcom_navigation_20210909_unlimited_footer'
  }
];

export default marvelFeatureControl;