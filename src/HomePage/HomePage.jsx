import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { momentActions } from '../_actions';
import moment from 'moment'
import styled from 'styled-components';

const Button = styled.button`
  padding: 0;
  margin: 0;
  border: 0;
  background-color:transparent;
`;

const Submit = styled.button`
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
    border-color:transparent;
    background: #E0F2FF;
    color: #000000;
  }
`;

const StyledLink = styled(Link)`
  font-family: News Cycle;
  font-style: normal;
  font-weight: bold;
  color: #000000;
  width: 100%;
  font-size: 24px;
  &:hover {
    text-decoration: underline;
    color: #000000;
  }
`;

const Img = styled.img`
  width:100%;
  max-width:200px;
`;

const StyledDate = styled.h4`
  font-family: News Cycle;
  font-style: normal;
  font-weight: bold;
  color: #FE9391;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.03em;
`;

const Reflection = styled.h1`
  font-family: News Cycle;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 48px;
  color: #2E2E2E;
`;

const H3 = styled.h3`
  font-family: News Cycle;
  font-style: normal;
  color: #2E2E2E;
  font-size: 32px;
`;

const Name = styled(H3)`
  text-align: center;
`;

const Label = styled.label`
  font-family: News Cycle;
  font-style: normal;
  font-weight: bold;
  color: #2E2E2E;
`;

const Textarea = styled.textarea`
  border-color: transparent;
  font-family: News Cycle;
  font-style: normal;
  font-weight: normal;
  color: #A4A4A4;
  background: #E5E5E5;
`;


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
        emoji: '',
      },
      submitted: false,
      charactersLeft: 240,
      feeling: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick0 = this.handleClick0.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);
    this.handleClick7 = this.handleClick7.bind(this);
  }

  handleClick0() {
    const { entry } = this.state;
    this.setState({
      entry: {
        ...entry,
        emoji: "../../assets/sick.png"
      },
      feeling: "Sick"
    });
  }

  handleClick1() {
    const { entry } = this.state;
    this.setState({
      entry: {
        ...entry,
        emoji: "../../assets/happy.png"
      },
      feeling: "Happy"
    });
  }

  handleClick2() {
  const { entry } = this.state;
  this.setState({
    entry: {
      ...entry,
      emoji: "../../assets/sad.png"
    },
    feeling: "Sad"
  });
  }

  handleClick3() {
  const { entry } = this.state;
  this.setState({
    entry: {
    ...entry,
    emoji: "../../assets/lovely.png"
    },
    feeling: "Lovely"
  });
  }

  handleClick4() {
  const { entry } = this.state;
  this.setState({
    entry: {
    ...entry,
    emoji: "../../assets/exhausted.png"
    },
    feeling: "Exhausted"
  });
  }

  handleClick5() {
  const { entry } = this.state;
  this.setState({
    entry: {
    ...entry,
    emoji: "../../assets/angry.png"
    },
    feeling: "Angry"
  });
  }

  handleClick6() {
  const { entry } = this.state;
  this.setState({
    entry: {
    ...entry,
    emoji: "../../assets/studious.png"
    },
    feeling: "Studious"
  });
  }

  handleClick7() {
  const { entry } = this.state;
  this.setState({
    entry: {
    ...entry,
    emoji: "../../assets/sleepy.png"
    },
    feeling: "Sleepy"
  });
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { entry } = this.state;
    this.setState({
      entry: {
        ...entry,
        [name]: value
      },
      charactersLeft: 240 - value.length
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { entry } = this.state;
    const { dispatch } = this.props;
    if (entry.emoji && entry.username && entry.text && entry.text.length < 240) {
      dispatch(momentActions.create(entry));
    }
  }

  render() {
    const { user, creating } = this.props;
    const { entry, submitted, charactersLeft, feeling } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Reflection>reflection✎</Reflection>
            <StyledDate>{moment(Date(Date.now())).format('dddd MMMM Do, YYYY')}</StyledDate>
            <Name>Hi <b>{user.username}</b>!</Name>
            <H3>Today, I am <b>feeling</b>: {feeling}</H3>
          </div>
        </div>
          <div className="row">
            <div className="col-md-3">
              <Button onClick={this.handleClick0}>
                <Img src="../../assets/sick.png"/>
              </Button>
            </div>
            <div className="col-md-3">
              <Button onClick={this.handleClick1}>
                <Img src="../../assets/happy.png"/>
              </Button>
            </div>
            <div className="col-md-3">
              <Button onClick={this.handleClick2}>
                <Img src="../../assets/sad.png"/>
              </Button>
            </div>
            <div className="col-md-3">
              <Button onClick={this.handleClick3}>
                <Img src="../../assets/lovely.png"/>
              </Button>
            </div>
          <div className="row">
            <div className="col-md-3">
              <Button onClick={this.handleClick4}>
                <Img src="../../assets/exhausted.png"/>
              </Button>
            </div>
            <div className="col-md-3">
              <Button onClick={this.handleClick5}>
                <Img src="../../assets/angry.png"/>
              </Button>
            </div>
            <div className="col-md-3">
              <Button onClick={this.handleClick6}>
                <Img src="../../assets/studious.png"/>
              </Button>
            </div>
            <div className="col-md-3">
              <Button onClick={this.handleClick7}>
                <Img src="../../assets/sleepy.png"/>
              </Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <H3>Today, I am <b>grateful</b> for: </H3>
            <form name="form" onSubmit={this.handleSubmit}>
              <div className={'form-group' + (submitted && !entry.text ? ' has-error' : '')}>
                <Label htmlFor="entry">{charactersLeft} characters Left</Label>
                <Textarea className="form-control" rows="3" name="text" value={entry.text} onChange={this.handleChange} />
                {submitted && !entry.text &&
                  <div className="help-block">You didn't write anything!</div>
                }
                {submitted && entry.text.length > 240 &&
                  <div className="help-block">You can't write more than 240 characters!</div>
                }
              </div>
              {submitted && !entry.emoji &&
                <div className="help-block">You didn't pick an emoji!</div>
              }
              <div className="form-group">
                <Submit>save</Submit>
                {creating && 
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                }
              </div>
            </form>
            <p>
              <StyledLink to="/feed">feed</StyledLink>
            </p>
            <p>
              <StyledLink to="/login">log out</StyledLink>
            </p>
          </div>
        </div>
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