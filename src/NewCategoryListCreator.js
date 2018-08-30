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
        return <div>
            <label htmlFor="">
                <input type="text" value={this.state.value} onChange={this.readValue}/>
                <input type="submit" value="Add" onClick={() => this.props.createList(this.state.value)}/>
            </label>
        </div>
    }
}


export default NewCategoryListCreator;