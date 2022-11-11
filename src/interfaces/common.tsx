export interface IToastMessageProps {
  children: JSX.Element
}

export interface ISpinnerProps {
  fullscreen?: boolean
}

export interface IApplicationCardProps {
  imagePath: string,
  title: string,
  onClick: () => void
}