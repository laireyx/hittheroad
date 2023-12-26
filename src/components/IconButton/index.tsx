import { iconButtonImgStyle } from './index.css';

interface IconButtonProps {
  href: string;
  src: string;
}

export default function IconButton({ href, src }: IconButtonProps) {
  return (
    <a href={href}>
      <img className={iconButtonImgStyle} src={src} />
    </a>
  );
}
