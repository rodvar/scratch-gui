import {STAGE_VISIBILITY_MODES} from '../lib/layout-constants.js';

const SET_STAGE_VISIBILITY = 'scratch-gui/StageVisibility/SET_STAGE_VISIBILITY';

const initialState = {
    stageVisibility: STAGE_VISIBILITY_MODES.visible
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SET_STAGE_VISIBILITY:
        return {
            stageVisibility: action.stageVisibility
        };
    default:
        return state;
    }
};

const setStageVisibility = function (stageVisibility) {
    return {
        type: SET_STAGE_VISIBILITY,
        stageVisibility: stageVisibility
    };
};

export {
    reducer as default,
    initialState as stageVisibilityInitialState,
    setStageVisibility
};
