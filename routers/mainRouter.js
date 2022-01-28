const { Router } = require('express');
const homePageRouter = require('./homePageRouter');
const musicRouter = require('./musicRouter');
const albumRouter = require('./albumRouter');
const singleRouter = require('./singleRouter');
const artistRouter = require('./artistRouter');

const mainRouter = Router();

mainRouter.use('/homePage', homePageRouter);
mainRouter.use('/music', musicRouter);
mainRouter.use('/album', albumRouter);
mainRouter.use('/single', singleRouter);
mainRouter.use('/artist', artistRouter);

module.exports = mainRouter;
