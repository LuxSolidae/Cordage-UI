// @flow
import * as React from 'react';
import classnames from 'classnames';
import { t as typy } from 'typy';

export type Props = {
  /** The avatar image url. Optional. */
  src?: string,
  /** The title to be displayed when the cursor hovers the avatar. Required. */
  alt: string,
  /** Completely optional. This is the absolute url where the avatar component will try to load the auto-generated images. */
  defaultBaseURL?: string,
};

const Avatar = ({ src, alt, defaultBaseURL }: Props) => {
  const [realSrc, setRealSrc] = React.useState(src);
  React.useEffect(() => {
    if (typy(src).isNullOrUndefined && typy(alt).isString) {
      setRealSrc(`${defaultBaseURL || ''}${alt.charAt(0)}.png`);
    } else {
      setRealSrc(src);
    }
  }, [src, alt])
  return (
    <div className='avatar'>
      <img src={realSrc} alt={alt} title={alt} />
    </div>
  );
}

Avatar.defaultProps = {
  src: undefined,
  defaultBaseURL: '/assets/',
};

// const Avatar = null;

export default Avatar;
