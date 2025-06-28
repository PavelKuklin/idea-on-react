import React from 'react';
import ContentLoader from 'react-content-loader';

const PreLoader = props => (
  <ContentLoader
  speed={1}
  width={400}
  height={460}
  viewBox="0 0 400 460"
  backgroundColor="#bdbcbc"
  foregroundColor="#ecebeb"
  {...props}
>
  <rect x="-4" y="3" rx="2" ry="2" width="400" height="400" />
  <rect x="6" y="416" rx="0" ry="0" width="390" height="38" />
</ContentLoader>
);

export default PreLoader;
