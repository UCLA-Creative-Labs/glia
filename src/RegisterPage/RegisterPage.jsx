import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import styled from 'styled-components';

const Name = styled.h1`
  font-family: News Cycle;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 100px;
  letter-spacing: 0.1em;
  color: #FE9391;
`;

const H2 = styled.h2`
  font-family: News Cycle;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 48px;
  color: #000000;
`;

const Label = styled.label`
  font-family: News Cycle;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #A4A4A4;
`;

const Input = styled.input`
  border-color: transparent;
  font-family: News Cycle;
  font-style: normal;
  font-weight: normal;
  color: #A4A4A4;
  background: #E5E5E5;
  border-radius: 5px;
`;

const Register = styled.button`
  border-color:transparent;
  background: #E0F2FF;
  border-radius: 5px;
  font-family: News Cycle;
  font-style: normal;
  font-weight: bold;
  color: #000000;
  width: 100%;
  font-size: 24px;
  max-width: 1000px;
  &:hover {
    text-decoration: underline;
    border-color: transparent;
    background: #E0F2FF;
    color: #000000;
  }
`;

const Cancel = styled(Link)`
  margin: 200px,
  border-color: transparent;
  background: #E0F2FF;
  border-radius: 5px;
  font-family: News Cycle;
  font-style: normal;
  font-weight: bold;
  color: #000000;
  width: 100%;
  font-size: 24px;
  max-width: 1000px;
  &:hover {
    text-decoration: underline;
    border-color: transparent;
    background: #E0F2FF;
    color: #000000;
  }
`;

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    user: {
      //firstName: '',
      //lastName: '',
      email: '',
      username: '',
      password: ''
    },
    submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
    user: {
      ...user,
      [name]: value
    }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.email && user.username && user.password) {
    dispatch(userActions.register(user));
    }
  }

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className ="row">
      <div className="col-md-6 row-height">
        <Name>glia</Name>
        <H2>welcome!</H2>
      </div>
      <div className="col-md-6">
        <H2>sign up</H2>
        <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
              <Label htmlFor="email">Email</Label>
              <Input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
              {submitted && !user.email &&
                <div className="help-block">Email is required</div>
              }
            </div>
            <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
              <Label htmlFor="username">Username</Label>
              <Input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
              {submitted && !user.username &&
                <div className="help-block">Username is required</div>
              }
            </div>
            <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
              <Label htmlFor="password">Password</Label>
              <Input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
              {submitted && !user.password &&
                <div className="help-block">Password is required</div>
              }
            </div>
            <div className="form-group">
              <Register className="btn btn-primary">sign up</Register>
              {registering && 
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            }
            </div>
        </form>
        <p>
            <Cancel to="/login" className="btn btn-link">cancel</Cancel>
        </p>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
    registering
  };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };