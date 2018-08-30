import React from 'react';

class ListHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        const styles = {
            background: this.props.isCollapsed ? 'tomato' : 'white',
            color: this.props.isCollapsed ? 'white' : 'gray',
        }

        return <div className="ListHeader">
            <p className="ListHeader-title"> {this.props.title} </p>
            <button className="ListHeader-check-final"><i className="fa fa-check-double" aria-hidden="true"></i></button>
            <button className="btn hide ListHeader-collapse" style={styles} onClick={() => this.props.collapseList(this.props.title)}><i className="fa fa-minus" aria-hidden="true"></i></button>
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
            <button className="btn close ListItem-close" onClick={() => this.props.closeItem(this.props.title)}><i className="fa fa-times" aria-hidden="true"></i></button>
            <button className="btn ListItem-debate"><i className="fa fa-cloud"></i></button>
            <input className="ListItem-checkbox" type="checkbox"/>
            <input placeholder="Type item..." className="ListItem-input" type="text"/>
        </div>
    }
}


class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            show: true,
            collapse: false
        }
    }

    collapseList = () => {
        this.setState({
            collapse: !this.state.collapse
        })
    }

    addNewItem = (value) => {
        this.setState({
            items: this.state.items.concat(value) // ['sweter', 'buty']
        })
    }

    handleCloseItem = (value) => {
        console.log(value)
        console.log(this.state.items)
        this.setState({
            items: this.state.items.filter(item => item !== value)
        })
    }

    render() {

        const isDisplay = {
            display: this.state.collapse ? 'none' : 'block'
        }

        return <div className="category-list">
            <ListHeader title={this.props.title} closeList={this.props.closeList} collapseList={this.collapseList} isCollapsed={this.state.collapse}/>

            <div className="ListItem-container" style={isDisplay}>
            {
                this.state.items.map((item, index) => {
                    return <ListItem key={index} title={item} closeItem={this.handleCloseItem}/>
                })
            }
            </div>
            <div style={isDisplay}>
                <button className="newTask-btn" onClick={this.addNewItem}>Add</button>
            </div>
        </div>
    }

}

export default CategoryList;