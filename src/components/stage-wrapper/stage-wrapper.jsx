import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import VM from 'scratch-vm';

import Box from '../box/box.jsx';
import {STAGE_DISPLAY_SIZES} from '../../lib/layout-constants.js';
import StageHeader from '../../containers/stage-header.jsx';
import Stage from '../../containers/stage.jsx';
import Loader from '../loader/loader.jsx';

import styles from './stage-wrapper.css';
import Draggable from 'react-draggable';

const stageId = "stage-wrapper";
const VISIBLE = "visible";
const HIDDEN = "hidden";

const StageWrapperComponent = function (props) {
    const {
        isFullScreen,
        isRtl,
        isRendererSupported,
        loading,
        stageSize,
        vm
    } = props;

    const swapStageVisibility = () => {
        const currentVisibility = document.getElementById(stageId).style.visibility;
        let visible = false;
        if (currentVisibility === "" || currentVisibility === VISIBLE) {
            document.getElementById(stageId).style.visibility = HIDDEN;
        } else {
            document.getElementById(stageId).style.visibility = VISIBLE;
            visible = true;
        }
        return visible;
    };
 
    const content = <Box
        className={classNames(
            styles.stageWrapper,
            {[styles.fullScreen]: isFullScreen}
        )}
        style={{
            position: 'absolute',
            bottom: "10%",
            right: "0%",
            zIndex: 1000,
        }}
        dir={isRtl ? 'rtl' : 'ltr'}
    >
        <Box className={styles.stageMenuWrapper}>
            <StageHeader
                id="stage_header"
                handleSwapStageVisibility={swapStageVisibility}
                stageSize={stageSize}
                vm={vm}
            />
        </Box>
        <Box id={stageId} className={styles.stageCanvasWrapper}>
            {
                isRendererSupported ?
                    <Stage
                        stageSize={stageSize}
                        vm={vm}
                    /> :
                    null
            }
        </Box>
        {loading ? (
            <Loader isFullScreen={isFullScreen} />
        ) : null}
    </Box>

//  disables={true} to disable
    return (
        <Draggable
            initialPos={{x: 100, y: 200}}
            className="my-draggable"
            style={{
                border: '2px solid #aa5',
                padding: '10px'
            }}
            children={content}
        />
    );
};

StageWrapperComponent.propTypes = {
    isFullScreen: PropTypes.bool,
    isRendererSupported: PropTypes.bool.isRequired,
    isRtl: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    stageSize: PropTypes.oneOf(Object.keys(STAGE_DISPLAY_SIZES)).isRequired,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default StageWrapperComponent;
