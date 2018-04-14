'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('jobads', [{
      title: 'Sales Assistant with FRENCH and English - Summer opportunity',
      description: `If you dream of:
      Working for a famous international rent-a-car company
      Communicating and assisting customers by answering various requests, via phone and e-mail
      Achieving great customer satisfaction, focusing on clients’ needs
      Actively and creatively contributing to the whole support process, thus providing the best services and products for our clients
      Practicing your language skills on a daily basis
      Summer opportunity – April- September`,
      status: 'open',
      jobTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Consultant Email Support for Spotify with German (NON-VOICE)',
      description: `WE WILL GIVE YOU
      Very competitive salary
      Attractive performance incentives
      Top-notch training
      Other than the statutory taxes, we also offer our employees a unique social benefits package which includes: Additional Health Insurance; Life Insurance; Food Vouchers; Gift Vouchers; Transportation Allowance
      Employee recognition programs`,
      status: 'open',
      jobTypeId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Senior Developer',
      description: `
      6+ years of experience in commercial software developing industry
      3+ years of working experience with WEB applications 
      based on ASP.NET, C# and JavaScript
      Excellent C# knowledge. Dev practices understanding.
      Good working experience with JavaScript and JavaScript frameworks
      Experience and desire to write testable code: C# and JavaScript
      Experience with DB Development: MS SQL preferably
      Solid debugging and troubleshooting skills
      Very good English both verbal and written`,
      status: 'open',
      jobTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Senior NodeJS Developer',
      description: `
      We are currently seeking bright, self-motivated senior developers to join our expanding team. 
Non-technical skill requirements:
Strong English verbal and written communication skills (both to a technical and non-technical audience) – interviews will be in English only
A keen desire to learn new methodologies, tools and languages
Analytical Thinking
Attention to Detail
Problem Solving
Innovative Thinking
Ability to work with minimal supervision
Technical skill requirements:
Strong professional experience in JavaScript
Strong professional experience in NodeJS
Professional experience in building APIs
Good knowledge of SQL`,
      status: 'closed',
      jobTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
};
