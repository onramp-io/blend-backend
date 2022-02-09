"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
//Basic ping/pong endpoint to test server functionality
router.get('/ping', (req, res) => {
    res.send('pong');
});
/**************** USER API INTERFACE BEGIN ****************/
router.route('/api/users/new');
/*.post()*/ //Add new user
//Request Body: JSON object containing user data to be added, should match USER DB model
router.route('/api/users/user/:id');
/*.get()*/ //Get specified user
//Parameters: User ID
/*.put()*/ //Update specified user data
//Request Body: JSON object containing user data to be updated, should match USER DB model
//api interface associated with specific user's projects
router.route('/api/users/projects/:id');
/*.get()*/ //Get all projects associated with user
//Parameters: User ID
/*.post()*/ //Submit new project
//Parameters: User ID
//Request Body: JSON object containing project data, should match PROJECT DB model
/***************** USER API INTERFACE END *****************/
/**************** PROJECT API INTERFACE BEGIN ****************/
router.route('/api/projects/interests');
/*.get()*/ //Get all projects that match interests: GET /api/projects/interests
//Request Body: JSON object containing array of interests { interests: [] }
router.route('/api/projects/new');
/*.get()*/ //Get all new projects
router.route('/api/projects/trending');
/*.get()*/ //Get all trending projects
//api interface associated with a specified project
router.route('/api/projects/project/:id');
