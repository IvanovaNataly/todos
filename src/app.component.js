import React from "react";
import TodoList from "./todoList.component";
import AddTodo from "./addTodo.component";
import Navigation from "./navigation.component";
import Error from "./errors.component";
import {Route} from "react-router";
import CSSTransitionGroup from 'react-addons-css-transition-group';


export default class App extends React.Component {
    render(){
        return (
            <CSSTransitionGroup
                transitionName="todoapp"
                transitionEnter={false}
                transitionAppear={true}
                transitionLeave={false}
                transitionAppearTimeout={500}
            >
                
                <div className="todoapp">
                    <AddTodo/>
                    <Route path="/:filter" component={TodoList}/>
                    <Navigation/>
                    <Error/>
                </div>
            </CSSTransitionGroup>
            )
    }
}
