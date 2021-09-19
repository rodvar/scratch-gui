import projectData from './project-data';

/* eslint-disable import/no-unresolved */
import sound from '!arraybuffer-loader!./83a9787d4cb6f3b7632b4ddfebf74367.wav';
import image1 from '!raw-loader!./174e3330f4abf784cbf6035e15f17f70.svg';
import image2 from '!raw-loader!./b6c854d67fbfdc4f93ce5165c8f1fd97.svg';
import image3 from '!raw-loader!./b7b57428f411bfec74b540425bf21dbf.svg';
import image4 from '!raw-loader!./27efd313c3b05eb3e3498bd20da809d9.svg';
import image5 from '!raw-loader!./f24cdac9007587527f2e7c31b7e463b9.svg';
/* eslint-enable import/no-unresolved */

const defaultProject = translator => {
    let _TextEncoder;
    if (typeof TextEncoder === 'undefined') {
        _TextEncoder = require('text-encoding').TextEncoder;
    } else {
        /* global TextEncoder */
        _TextEncoder = TextEncoder;
    }
    const encoder = new _TextEncoder();

    const projectJson = projectData(translator);
    return [{
        id: 0,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectJson)
    }, {
        id: '83a9787d4cb6f3b7632b4ddfebf74367',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(sound)
    }, {
        id: '174e3330f4abf784cbf6035e15f17f70',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(image1)
    }, {
        id: 'b6c854d67fbfdc4f93ce5165c8f1fd97',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(image2)
    }, {
        id: 'b7b57428f411bfec74b540425bf21dbf',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(image3)
    }, {
        id: '27efd313c3b05eb3e3498bd20da809d9',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(image4)
    }, {
        id: 'f24cdac9007587527f2e7c31b7e463b9',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(image5)
    }];
};

export default defaultProject;