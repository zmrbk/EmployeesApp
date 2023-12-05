import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearchLocale = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input 
                type="text" 
                className="form-control search-input"
                placeholder="Найти сотрудника"
                onChange={this.onUpdateSearchLocale}
                value={this.state.term}
            />
        )
    } 
}

export default SearchPanel;
