import React from 'react';
import NewCategoryListCreator from './NewCategoryListCreator';
import Suitcase from './Suitcase';
import CategoryList from './CategoryList';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            suitCaseList: []
        }
        //const listId = () => {lists.forEach(`${[i]+1}`)}
    }

    finalCheck = (title) => {
        this.setState({
            lists: this.state.lists.filter(item => item !== title),
            suitCaseList: this.state.suitCaseList.concat(title)
        });
    }

    createNewList = (value) => {
        this.setState({
            lists: this.state.lists.concat(value) // ['kosmetyki', 'ubrania']
        })
    }

    handleCloseList = (value) => {
        this.setState({
           lists: this.state.lists.filter(list => list !== value) // ['kosmetyki', 'ubrania']
        })
        console.log(value)
    }

    render() {
        return (
            <div className="App">
                <h1 className="App-header"> My Suitcase </h1>
                <NewCategoryListCreator createList={this.createNewList} />
                <div className="content-container">
                    <div className="List-container">
                        {
                            this.state.lists.map(list => {
                                return (
                                    <CategoryList finalCheck={this.finalCheck} title={list} className="CategoryList" /*id={listId}*/ closeList={this.handleCloseList}/>
                                )
                            })
                        }
                    </div>
                    <Suitcase suitCaseList={this.state.suitCaseList}/>
                </div>
            </div>
        );
    }
}

export default App;
