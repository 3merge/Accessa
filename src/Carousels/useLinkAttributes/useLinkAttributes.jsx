import React from 'react';

export default ({ title, href, redirect }) => {
  const label = title.toLowerCase().replace(/\s/gi, '-');
  const navigate = React.useCallback(() => {
    if (href && typeof redirect === 'function')
      redirect(href);
  }, [href, redirect]);

  return href
    ? {
        'role': undefined,
        'aria-labelledby': label,
        'data-href': href,
        onClick: navigate,
        onKeyPress: navigate,
        'aria-selected': undefined,
      }
    : {};
};
