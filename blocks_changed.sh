#!/bin/bash

cd ../scratch-blocks
npm run prepublish
cd ../scratch-gui
npm run build
npm run start

exit 0
