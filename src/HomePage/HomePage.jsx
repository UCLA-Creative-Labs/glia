import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, momentActions } from '../_actions';


class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(momentActions.getByUsername(this.props.user.username));
    }

    constructor(props) {
        super(props);

        this.state = {
            entry: {
                username: props.user.username,
                text: '',
                emoji: 1
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { entry } = this.state;
        this.setState({
            entry: {
                ...entry,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { entry } = this.state;
        const { dispatch } = this.props;
        if (entry.username && entry.text && entry.emoji) {
            dispatch(momentActions.create(entry));
        }
    }

    /*handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }*/

    render() {
        const { user, moments, creating } = this.props;
        const { entry, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>reflection✎</h1>
                <h3>Hi {user.username}!</h3>
                <h3>What is something you're grateful for today?</h3>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !entry.text ? ' has-error' : '')}>
                        {/*<label htmlFor="entry">Entry</label>*/}
                        <input type="text" className="form-control" name="text" value={entry.text} onChange={this.handleChange} />
                        {submitted && !entry.text &&
                            <div className="help-block">You didn't write anything!</div>
                        }
                    </div>
                    {/*<div className={'form-group' + (submitted && !entry.emoji ? ' has-error' : '')}>
                        <label htmlFor="entry">Emoji</label>
                        <input type="text" className="form-control" name="entry" value={entry.emoji} onChange={this.handleChange} />
                        {submitted && !entry.text &&
                            <div className="help-block">You didn't select an emoji!</div>
                        }
                    </div>*/}
                    <div className="form-group">
                        <button className="btn btn-primary">Submit</button>
                        {creating && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                </form>
                <h3>All created moments:</h3>
                {moments.loadingUsername && <em>Loading moments...</em>}
                {moments.error && <span className="text-danger">ERROR: {moments.error}</span>}
                {moments.items &&
                    <ul>
                        {moments.items.map((moment, index) =>
                            <li key={moment.id}>
                                {moment.text + ' ' + moment.emoji}
                                {/*
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                */}
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { moments, momentCreation, authentication } = state;
    const { user } = authentication;
    const { creating } = momentCreation;
    return {
        user,
        moments,
        creating
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };