import React from 'react';
import NewCategoryListCreator from './NewCategoryListCreator';
import Suitcase from './Suitcase';
import CategoryList from './CategoryList';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: []
        }
    }

    createNewList = (value) => {
        this.setState({
            lists: this.state.lists.concat(value) // ['kosmetyki', 'ubrania']
        })
    }

    handleCloseList = () => {
        this.setState({
            lists: this.state.lists.filter(onclick)
        })
    }

    render() {
        return (
            <div className="App">
                <NewCategoryListCreator createList={this.createNewList} />
                <Suitcase />
                {
                    this.state.lists.map(list => {
                        return (
                            <CategoryList title={list} className="CategoryList" closeList={this.handleCloseList}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default App;
