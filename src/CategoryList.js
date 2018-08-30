import React from 'react';

class ListHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="ListHeader">
            <p className="ListHeader-title"> {this.props.title} </p>
            <button className="ListHeader-check-final"><i className="fa fa-check-double" aria-hidden="true"></i></button>
            <button className="btn hide ListHeader-collapse"><i className="fa fa-minus" aria-hidden="true"></i></button>
            <button className="btn close ListHeader-close" onClick={() => this.props.closeList(this.props.title)}><i className="fa fa-times" aria-hidden="true"></i></button>
        </div>
    }
}

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="ListItem">
            <button className="btn ListItem-close"><i className="fa fa-cloud"></i></button>
            <button className="btn close ListItem-debate"><i className="fa fa-times" aria-hidden="true"></i></button>
            <input className="ListItem-checkbox" type="checkbox"/>
            <input placeholder="Type task..." className="ListItem-input" type="text"/>
        </div>
    }
}


class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            show: true
        }
    }

    addNewItem = (value) => {
        this.setState({
            items: this.state.items.concat(value) // ['sweter', 'buty']
        })
    }

    render() {
        return <div className="category-list">
            <ListHeader title={this.props.title} closeList={this.props.closeList}/>

            <div className="ListItem-container">
            {
                this.state.items.map(item => {
                    return <ListItem value={item}/>
                })
            }
            </div>
            <div>
                <button className="newTask-btn" onClick={this.addNewItem}>Add</button>
            </div>
        </div>
    }

}

export default CategoryList;