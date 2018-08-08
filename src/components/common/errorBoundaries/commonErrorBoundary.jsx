import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState(state => ({
      error,
      errorInfo,
    }));
  }

  render() {
    console.log("LOL2");
    console.log(this.state);
    if (this.state.errorInfo) {
      return (
        <div>
          <h1>
            Oops, something went wrong :(
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
