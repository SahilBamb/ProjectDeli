const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const morgan = require('morgan');
const AppError = require('./AppError');
const cookieParser = require('cookie-parser'); // for Client Cookies
const session = require('express-session'); // for Server Cookies
const flash = require('connect-flash'); // for Flash Messages





module.exports = {express, app, path, mongoose, ejsMate, methodOverride, morgan, AppError};