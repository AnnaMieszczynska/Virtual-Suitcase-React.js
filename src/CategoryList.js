import React from 'react';

import uuid from 'uuid';

class ListHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        const styles = {
            background: this.props.isCollapsed ? 'tomato' : 'white',
            color: this.props.isCollapsed ? 'white' : 'gray',
            borderRadius: this.props.isCollapsed ? '5px' : 'none',
        }

        return <div className="ListHeader">
            <p className="ListHeader-title"> {this.props.title} </p>
            <button className="ListHeader-check-final" onClick={() => this.props.finalCheck(this.props.title)}><i className="far fa-check-circle fa-2x"></i></button>
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
            <button className="btn close ListItem-close" onClick={() => this.props.closeItem(this.props.item.id)}><i className="fa fa-times fa-1"></i></button>
            <button className="btn ListItem-debate"><i className="fa fa-cloud fa-1"></i></button>
            <input onChange={(e) => this.props.handleCheckboxChange(e, this.props.item.id)} className="ListItem-checkbox" type="checkbox"/>
            <input placeholder="Type item..." className="ListItem-input" type="text" onChange={(e) => this.props.handleChange(e, this.props.item.id)}/>
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

    handleCheckboxChange = (e, id) => {
        e.preventDefault();

        const changedEl = this.state.items.find(elem => elem.id === id);
        changedEl.checked = e.target.checked;

        const index = this.state.items.indexOf(changedEl);

        const newItems = [
            ...this.state.items.slice(0, index - 1),
            changedEl,
            ...this.state.items.slice(index + 1, this.state.items.length)
        ]
    }

    handleChange = (e, id) => {
        e.preventDefault();

        const changedEl = this.state.items.find(elem => elem.id === id);
        changedEl.text = e.target.value;

        const index = this.state.items.indexOf(changedEl);


        const newItems = [
            ...this.state.items.slice(0, index - 1),
            changedEl,
            ...this.state.items.slice(index + 1, this.state.items.length)
        ]
    }

    addNewItem = (value) => {
        this.setState({
            items: this.state.items.concat({
                id: uuid(),
                text: '',
                checked: false,
                category: this.props.title
            }) // ['sweter', 'buty']
        })
    }

    handleCloseItem = (id) => {
        console.log(this.state.items)
        this.setState({
            items: this.state.items.filter(item => item.id !== id)
        })
    }

    render() {

        const isDisplay = {
            display: this.state.collapse ? 'none' : 'block'
        }

        return <div className="category-list">
            <ListHeader title={this.props.title} finalCheck={this.props.finalCheck}closeList={this.props.closeList} collapseList={this.collapseList} isCollapsed={this.state.collapse}/>

            <div className="ListItem-container" style={isDisplay}>
            {
                this.state.items.map((item, index) => {
                    return <ListItem key={index} item={item} handleCheckboxChange={this.handleCheckboxChange} handleChange={this.handleChange} closeItem={this.handleCloseItem}/>
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