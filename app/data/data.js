const {
    contactDetail,
    jobAds,
    jobApplication,
    jobType,
    link,
    user,
} = require('../../models');

const Data = require('./generic-data');

module.exports = {
    contactDetails: new Data(contactDetail),
    jobAds: new Data(jobAds),
    jobApplications: new Data(jobApplication),
    jobTypes: new Data(jobType),
    links: new Data(link),
    users: new Data(user),
};
