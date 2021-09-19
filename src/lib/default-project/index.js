// import projectData from './project-data';

/* eslint-disable import/no-unresolved */
import popWav from '!arraybuffer-loader!./83a9787d4cb6f3b7632b4ddfebf74367.wav';
import meowWav from '!arraybuffer-loader!./83c36d806dc92327b9e7049a565c6bff.wav';
import sprite from '!raw-loader!./b09be2cb035143c870f8d4f6e2fbc32f.svg';
import backdrop from '!raw-loader!./e7fa32cb05ba9ddc8d5f75bdf1694790.svg';
/* eslint-enable import/no-unresolved */
import * as maze from '../maze/index'

// const defaultProject = translator => {
//     let _TextEncoder;
//     if (typeof TextEncoder === 'undefined') {
//         _TextEncoder = require('text-encoding').TextEncoder;
//     } else {
//         /* global TextEncoder */
//         _TextEncoder = TextEncoder;
//     }
//     const encoder = new _TextEncoder();

//     const projectJson = projectData(translator);
//     return [{
//         id: 0,
//         assetType: 'Project',
//         dataFormat: 'JSON',
//         data: JSON.stringify(projectJson)
//     }, {
//         id: '83a9787d4cb6f3b7632b4ddfebf74367',
//         assetType: 'Sound',
//         dataFormat: 'WAV',
//         data: new Uint8Array(popWav)
//     }, {
//         id: '83c36d806dc92327b9e7049a565c6bff',
//         assetType: 'Sound',
//         dataFormat: 'WAV',
//         data: new Uint8Array(meowWav)
//     }, {
//         id: 'e7fa32cb05ba9ddc8d5f75bdf1694790',
//         assetType: 'ImageVector',
//         dataFormat: 'SVG',
//         data: encoder.encode(backdrop)
//     }, {
//         id: 'b09be2cb035143c870f8d4f6e2fbc32f',
//         assetType: 'ImageVector',
//         dataFormat: 'SVG',
//         data: encoder.encode(sprite)
//     }];
// };

export default maze.default;
