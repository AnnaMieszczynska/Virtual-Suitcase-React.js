import React from 'react';

class ListHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <button></button>
            <button className="btn hide"><i className="fa fa-minus" aria-hidden="true"></i></button>
            <button className="btn close" onClick={closeList}><i className="fa fa-times" aria-hidden="true"></i></button>
            {this.props.title}
        </div>
    }
}

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <button className="btn"><i className="fa fa-cloud"></i></button>
            <button className="btn close"><i className="fa fa-times" aria-hidden="true"></i></button>
            <button></button>
            <input type="text"/>
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
        return <div>
            <ListHeader title={this.props.title} />
            {
                this.state.items.map(item => {
                    return <ListItem value={item}/>
                })
            }

            <div>
                <button onClick={this.addNewItem}>Add</button>
            </div>
        </div>
    }

}

export default CategoryList;