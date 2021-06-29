const router = require('express').Router();
const apiRoutes = require('./api');
// const userRoutes = require('/users');


router.use('/api', apiRoutes);
// router.use('/users', userRoutes);


router.use((req,res) => {
    res.status(404).send('404 error!')
});

module.exports = router;