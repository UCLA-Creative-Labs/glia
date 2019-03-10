import { momentConstants } from '../_constants';
import { momentService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const momentActions = {
    create,
    getByUsername,
    getByDate,
    getRandom
};

function create(moment) {
    return dispatch => {
        dispatch(request(moment));

        momentService.create(moment)
            .then(
                moment => { 
                    dispatch(success());
                    history.push('/');
                    dispatch(alertActions.success('Moment Creation successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(moment) { return { type: momentConstants.CREATE_REQUEST, moment } }
    function success(moment) { return { type: momentConstants.CREATE_SUCCESS, moment } }
    function failure(error) { return { type: momentConstants.CREATE_FAILURE, error } }
}

function getByUsername(username) {
    return dispatch => {
        dispatch(request());

        momentService.getByUsername(username)
            .then(
                moments => dispatch(success(moments)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: momentConstants.GETBYUSERNAME_REQUEST } }
    function success(moments) { return { type: momentConstants.GETBYUSERNAME_SUCCESS, moments } }
    function failure(error) { return { type: momentConstants.GETBYUSERNAME_FAILURE, error } }
}

function getByDate(username, date) {
    return dispatch => {
        dispatch(request());

        momentService.getByDate(username, date)
            .then(
                moment => dispatch(success(moment)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: momentConstants.GETBYDATE_REQUEST } }
    function success(moment) { return { type: momentConstants.GETBYDATE_SUCCESS, moment } }
    function failure(error) { return { type: momentConstants.GETBYDATE_FAILURE, error } }
}

function getRandom(username) {
    return dispatch => {
        dispatch(request());

        momentService.getRandom(username)
            .then(
                moment => dispatch(success(moment)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: momentConstants.GETRANDOM_REQUEST } }
    function success(moment) { return { type: momentConstants.GETRANDOM_SUCCESS, moment } }
    function failure(error) { return { type: momentConstants.GETRANDOM_FAILURE, error } }
}