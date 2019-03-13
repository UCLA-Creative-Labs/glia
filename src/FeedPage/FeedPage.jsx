import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { momentActions } from '../_actions';
import styled from 'styled-components';
import moment from 'moment'


const H1 = styled.h1`
  font-family: News Cycle;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 48px;
  color: #2E2E2E;
`;

const StyledDate = styled.h4`
  font-family: News Cycle;
  font-style: normal;
  font-weight: bold;
  color: #FE9391;
  font-size: 24px;
  letter-spacing: 0.03em;
`;

const P = styled.p`
  font-family: News Cycle;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 24px;
  color: #000000;
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

class FeedPage extends React.Component {
   componentDidMount() {
      this.props.dispatch(momentActions.getByUsername(this.props.user.username));
   }

   constructor(props) {
      super(props);
   }

   render() {
      const { moments } = this.props;
      return (
         <div className="col-md-12">
            <H1>reflections</H1>
            {moments.loadingUsername && <em>Loading moments...</em>}
            {moments.error && <span className="text-danger">ERROR: {moments.error}</span>}
            {moments.items &&
               <div>
                  {moments.items.map((mom, index) =>
                    <ul key={mom.createdDate}>
                      <StyledDate>{moment(mom.createdDate).format('dddd MMMM Do, YYYY @ h:mm a')}</StyledDate>
                      <div className="row">
                        <div className="col-md-10">
                          <P>{mom.text}</P>
                        </div>
                        <div className="col-md-2">
                          <Img src={mom.emoji}/>
                        </div>
                      </div>
                    </ul>
                  )}
               </div>
            }
            <p>
               <StyledLink to="/">Home</StyledLink>
            </p>
            <p>
               <StyledLink to="/login">Logout</StyledLink>
            </p>
         </div>
      );
   }
}

function mapStateToProps(state) {
   const { moments, /*momentCreation,*/ authentication } = state;
   const { user } = authentication;
   return {
      user,
      moments//,
   };
}

const connectedFeedPage = connect(mapStateToProps)(FeedPage);
export { connectedFeedPage as FeedPage };