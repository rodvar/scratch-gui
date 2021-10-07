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

const StageWrapperComponent = function (props) {
    const {
        isFullScreen,
        isRtl,
        isRendererSupported,
        loading,
        stageSize,
        vm
    } = props;

    // let pos1, pos2, pos3, pos4;

    // const elementDrag = (e) => {
    //     e = e || window.event;
    //     e.preventDefault();
    //     // calculate the new cursor position:
    //     pos1 = pos3 - e.clientX;
    //     pos2 = pos4 - e.clientY;
    //     pos3 = e.clientX;
    //     pos4 = e.clientY;
    //     // set the element's new position:
    //     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    //     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    //   }
    
    // const closeDragElement = () => {
    //     // stop moving when mouse button is released:
    //     document.onmouseup = null;
    //     document.onmousemove = null;
    // }

    // const handleMouseDown = (e) => { 
    //     console.log(`Handling mouse down ${JSON.stringify(e)}`);
    //     e = e || window.event;
    //     e.preventDefault();
    //     // get the mouse cursor position at startup:
    //     pos3 = e.clientX;
    //     pos4 = e.clientY;
    //     document.onmouseup = closeDragElement;
    //     // call a function whenever the cursor moves:
    //     document.onmousemove = elementDrag;
    // };

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
                stageSize={stageSize}
                vm={vm}
            />
        </Box>
        <Box className={styles.stageCanvasWrapper}>
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

    return (
        // <div onClick={(e) => {handleMouseDown(e);}}
        //     onMouseDown={(e) => {handleMouseDown(e);}}
        //     >
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
