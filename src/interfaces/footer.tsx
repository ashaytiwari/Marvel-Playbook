import React from "react";

export interface IFooterExternalControlItem {
  title: string,
  url: string
};

export interface IFooterMarvelFeatureControlItem {
  title: string,
  description: string,
  url: string,
  imagePath: string
}

export interface IFooterSocialChannel {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }>,
  url: string
};