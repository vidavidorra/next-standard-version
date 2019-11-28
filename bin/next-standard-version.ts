#!/usr/bin/env node

import { nextStandardVersion } from '../src';

nextStandardVersion()
  .then((newVersion: string) => {
    console.log(newVersion);
  })
  .catch(error => console.log(error));
