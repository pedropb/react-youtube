import React, { Component, PropTypes } from 'react';

/**
 * Component that implements searchbar view.
 * This component handles the state of the term input.
 * When term is changed, it propagates the change to parent component
 * so new videos are loaded with the new search term.
 */
class SearchBar extends Component {

    static propTypes = {
        /**
         * Callback to propagate search term changes
         */
        onInputChange: PropTypes.func.isRequired
    };

    state = {
        term: ''
    };

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} 
                    onChange={(event) => this.onInputChange(event.target.value)}/>
            </div>
        );
    }
    
    onInputChange(term) {
        this.setState({term});
        this.props.onInputChange(term);
    }
}

export default SearchBar;