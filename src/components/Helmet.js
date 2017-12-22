import React from 'react';
import Helmet from 'react-helmet';

const HM = t => (
  <div>
    <Helmet
      defaultTitle="Taitle"
      titleTemplate="Taitle | %s"
    >
      <title>{t}</title>
    </Helmet>
  </div>
);

export default HM;
