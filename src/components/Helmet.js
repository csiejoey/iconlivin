import React from 'react';
import Helmet from 'react-helmet';

const HM = t => (
  <div>
    <Helmet
      defaultTitle="Iconic"
      titleTemplate="Iconic | %s"
    >
      <title>{t}</title>
    </Helmet>
  </div>
);

export default HM;
