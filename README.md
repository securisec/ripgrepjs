[![Build Status](https://travis-ci.com/securisec/ripgrepjs.svg?branch=master)](https://travis-ci.com/securisec/ripgrepjs)
[Documentation](https://www.mankier.com/1/rg)

# ripgrep-node

`ripgrep-node` is a node js interface for ripgrep. 
It is written in TypeScript and is built on ripgrep version **11.0.1**

For complete usage and details, refer to the docs at 

## Install
Use npm to install
```
npm install ripgrep-node
```

## Requirements
`ripgrep-node` leverages the system ripgrep to run its commands. So either the standalone binary, rg in $PATH or a path to ripgrep needs to be provided in the constructor. 

## Usage
Ripgrep is a simple module that allows chaining ripgrep options on top of each other and get the result back. There is a couple of helper methods included to help in parsing, such as the `as_dict` module which shows all valid matches as a dictionary object.

To instantiate the class, use:
```
const {RipGrep} = require('ripgrep-node')
// The RipGrep class takes two arguments. The regex to search for and the folder path to search in
// A third argument can be provided if ripgrep is not install in $PATH

let rg = new RipGrep('he[l]{2}o', '/some/path/to/files')
```

The syntax for ripgrep-node is simliar to that of ripgrep itself. 
```
rg.with_filename().line_number()...run().as_string()
// or
rg.options...run().asObject() // get an object of matches back
```
The above is eqivalent to running 
```
rg --with-filename --line-number "he[l]{2}o" /path/to/some/files
```
**Important** `run()` should always be the last method that is being run followed by one of the output methods. If ripgrep options are placed after run, they will not be part of the command being executed. The docs are obtained from ripgreps man pages itself.

#### Output methods
Output can be obtained using the following three methods
- `as_dict`
- `as_json`
- `as_string`

Not all ripgrep output is compitable with `as_dict` and `as_json` output formats