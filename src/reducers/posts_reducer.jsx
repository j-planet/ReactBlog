/**
 * Created by jj on 1/19/16.
 */

import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const _INITIAL_STATE = { all: [], active: null};

export default function(myState=_INITIAL_STATE, action)
{
    console.log('Reducer (Posts) received an action: ', action);

    switch(action.type)
    {
        case FETCH_POST:
            return {...myState, active: action.payload.data};
        case FETCH_POSTS:
            return { ...myState, all: action.payload.data };
        default:
            return myState;
    }

}