export interface IHeaderItemProps {
  data: IHeaderItem
};

export interface IHeaderItem {
  url: string,
  title: string
};

export interface IHeaderSidebarDrawerProps {
  open: boolean,
  onClose: () => void
};