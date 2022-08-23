#!/bin/bash
npm remove @electron/get
npm install @electron/get@1.14.1
rm -rf node_modules && npm install