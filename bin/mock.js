#!/usr/bin/env node

require('..')(process.argv.length>2 && process.argv[2] || (process.cwd()+'mock.json'))
