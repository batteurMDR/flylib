/*
*	lib/log.js
*
*	flylib
*
*	Created by Louis Benoist--Foucher on 20/12/2016
*/

'use strict';


/**
 * Instantiate SYSLog
 * @param      {String}   name
 * @return     {SYSLog} a SYSLog system
 */
var log = function(name){
	this.name = name;
};

/**
 * Add a log of type SYSLog.info
 * @param      {String}   text
 * @return     {Null}
 */
log.prototype.info = function(text){

};

/**
 * Add a log of type SYSLog.warn
 * @param      {String}   text
 * @return     {Null}
 */
log.prototype.warn = function(text){

};

/**
 * Add a log of type SYSLog.danger
 * @param      {String}   text
 * @return     {Null}
 */
log.prototype.danger = function(text){

};

/**
 * Add a log of type SYSLog.log
 * @param      {String}   text
 * @return     {Null}
 */
log.prototype.log = function(text){

};

module.exports = log;