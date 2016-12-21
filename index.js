/*
*	index.js
*
*	flylib
*
*	Created by Louis Benoist--Foucher on 20/12/2016
*/

'use strict';

var SYSLog  = require('./lib/log.js');
var SYSFile = require('./lib/file.js');
var SYSCom  = require('./lib/communication.js');
var PIReal  = require('./lib/real.js');
var PIPilot = require('./lib/pilot.js');

module.exports.SYSLog  = SYSLog;
module.exports.SYSFile = SYSFile;
module.exports.SYSCom  = SYSCom;
module.exports.PIReal  = PIReal;
module.exports.PIPilot = PIPilot;