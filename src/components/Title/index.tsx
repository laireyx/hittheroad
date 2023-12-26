import { titleStyle } from './index.css';

type TitleProps = React.PropsWithChildren & {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export default function Title({ variant = 'h1', children }: TitleProps) {
  switch (variant) {
    case 'h1':
      return <h1 className={titleStyle[variant]}>{children}</h1>;
    case 'h2':
      return <h2 className={titleStyle[variant]}>{children}</h2>;
    case 'h3':
      return <h3 className={titleStyle[variant]}>{children}</h3>;
    case 'h4':
      return <h4 className={titleStyle[variant]}>{children}</h4>;
    case 'h5':
      return <h5 className={titleStyle[variant]}>{children}</h5>;
    case 'h6':
      return <h6 className={titleStyle[variant]}>{children}</h6>;
    default:
      return <h1 className={titleStyle[variant]}>{children}</h1>;
  }
}
