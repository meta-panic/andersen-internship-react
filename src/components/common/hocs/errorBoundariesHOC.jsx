import React from 'react';

import ErrorBoundary from '../errorBoundaries/commonErrorBoundary';

const errorBoundariesHOC = WrappedComponent => (props) => {
  class ErrorBoundariesHOC extends React.Component {
    render() {
      return (
        <ErrorBoundary>
          <WrappedComponent {...props}>
            {
              (typeof props !== 'undefined') && (typeof props.children !== 'undefined')
                ? props.children
                : null
            }
          </WrappedComponent>
        </ErrorBoundary>
      );
    }
  }

  const getDisplayName = (wc) => {
    return wc.displayName || wc.name || 'Component';
  };

  ErrorBoundariesHOC.displayName = getDisplayName(WrappedComponent);

  return ErrorBoundariesHOC;
};

export default errorBoundariesHOC;
