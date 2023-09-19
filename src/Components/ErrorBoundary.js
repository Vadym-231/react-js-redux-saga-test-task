import React from 'react';


class ErrorHandler extends React.Component  {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.error) {
            return <div className={'error_page'}>
                <span className={'error_page__code'}>{'500 '}</span>Something went wrong please reload page and try again</div>;
        }
        return this.props.children;
    }
}
export default ErrorHandler;
