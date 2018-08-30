import React from 'react';

class NewCategoryListCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    readValue = (event) => {
         this.setState({value: event.target.value})
    }

    render() {
        return <div className="NewCategory">
            <label htmlFor="">
                <input className="NewCategory-input" placeholder="type category (e.g. clothes)..." type="text" value={this.state.value} onChange={this.readValue}/>
                <input className="NewCategory-button-submit" type="submit" value="Add" onClick={() => this.props.createList(this.state.value)}/>
            </label>
        </div>
    }
}


export default NewCategoryListCreator;