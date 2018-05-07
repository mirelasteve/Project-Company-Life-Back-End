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
                jobTypeId: 2,
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
                jobTypeId: 3,                
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
            },
            {
                title: 'Aircraft Component Technician',
                description: `
        We are seeking Technicians to test, fault find and repair a range of aircraft components including instrumentation, avionics, electrical, electro-mechanical, hydraulics & mechanical systems

The successful candidate will be self-motivated & a flexible member of the team with good communication skills and good attention to detail.

Skills Required:

    ONC in an engineering related discipline; or an equivalent qualification or experience.
    Component level fault diagnosis capability.
    Ability to read and understand circuit and engineering diagrams.
    Computer literate.

Previous experience is desired but not essential.
      `,
                status: 'open',
                jobTypeId: 5,                
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Logistics Operative',
                description: `
        We have an exciting opportunity for a Logistics Operative to join our team, working with our client site based in Porton Down, Salisbury. The site boasts fantastic facilities, such as subsidised gym membership and onsite restaurants.
         This role will support our client in maintaining their critical defence sites and making our customers’ lives easier. At Emcor we believe in the power of collaboration to build relationships, solve problems, improve performance and achieve real value.

        The working hours for this role are from 8am-4.30pm Monday-Thursday and 8am-4pm Friday
        
        Job Purpose: To provide a professional and effective service in support of the contract's Logistics/ Concierge operation. Duties are across all of the contract's sites, to and from multiple locations, utilising the appropriate manual handling equipment to affect the most efficient service.
      `,
                status: 'open',
                jobTypeId: 2,          
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Corporate Logistics Assistant',
                description: `
        Supporting the team, you'll make sure that they have everything they need to keep our stores
         supplied and our business running smoothly.
From checking invoices and keeping important documents secure, to organising filing and backing up
 information, you'll make sure everything's well organised. Managers won't interfere – they'll trust you to make the right decisions.
We do things our own way at Aldi. But whatever we're doing, we must be getting it right. With a wave 
of impressive sales figures behind us, we're opening new stores at lightning speed. And without our Corporate Logistics team, there'd simply be no products in those stores.`,
                status: 'open',
                jobTypeId: 3,                
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Finance Manager',
                description: `Open Road provides drug and alcohol treatment services across Essex, Suffolk,
                Norfolk and Kent including a range of outreach services that deliver support, advice, 
        information and structured treatment programmes. Our mission is to empower individuals, 
        families and communities in their journey of recovery from the harmful effects of drugs,
         alcohol and other addictions.
         Currently we are recruiting for a Finance Manager.
        `,
                status: 'open',
                jobTypeId: 4,                
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Finance Administrator',
                description: `Description

                The main responsibilities for the Credit Control role will be:
                
                    Maintain a high volume of calling
                    Be able to communicate firmly and clearly.
                    Build and maintain relationships internally and externally.
                    Understand and escalate issues as soon they arise to management.
                    Taking ownership of customer needs and issues
                    Have a good grasp of credit terms offered to clients
                
                Profile
                
                For the Credit Control role my client is looking for someone with:
                
                    Experience of Credit Control would be advantagous
                
                    Excellent communication skills
                    Organised
                    Team Player
                    Ability to work under pressure
                    Provide detailed credit reports for number of calls made and potential outcomes.
        `,
                status: 'open',
                jobTypeId: 5,                
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Finance Graduate',
                description: `The role will be to support the production of accurate
                 financial and regulatory reporting and analysis within required timescales. 
                 In addition the successful candidate will work towards completion of relevant accountancy
                  qualifications. As part of a hardworking and committed team your key duties as
                   Financial Reporting Assistant are outlined below.

                General Responsibilities
                
                To undertake all activities following Society procedures, policies, and guidelines and
                 to adhere to the regulators Rules, Codes of Practice and Policy Statements including
                  the principles of Treating Customers Fairly and the Society Code of Ethics.
        `,
                status: 'closed',
                jobTypeId: 5,                
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Digital Marketing Executive',
                description: `We have an excellent opportunity for a Digital Marketing Executive.

                Main duties will include:
                
                Help develop and manage digital marketing campaigns, promotions and strategies to engage, reach and attract targeted audiences.
                
                Understanding our range of audiences, their sectors and challenges, to inform marketing activities and share insight with the marketing and sales teams.
                
                Delivering lead generation, engagement and amplification activities via our website, Email marketing tool and social channels (google, Instagram, Twitter, Facebook)
                
                Running on-going tracking, reporting and analysis in Google Analytics, Google Webmasters and Mailchimp
                
                Content writing for our websites, press, social media and articles in a timely, creative manner.
                
                Please email cv
        `,
                status: 'open',
                jobTypeId: 3,                
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Graduate Marketing Trainee',
                description: `Uptake Strategies is an award-winning specialist healthcare marketing consultancy.
                 We aim to inspire excellence in healthcare marketing and support 
                our clients by generating competitive strategies underpinned with
                 excellent customer insight, clear objectives and measures of success 
                 with actionable implementation for their healthcare brands.

                In this Graduate Trainee role, you will be using your strategic,
                 analytic and creative skills to support in all aspects of the marketing consultancy
                  business including operational support for client work and Uptake Strategies’ 
                  own Marketing Communications plan.
        `,
                status: 'open',
                jobTypeId: 1,                
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Accreditation Administrator',
                description: `Accreditation Administrator Responsibilities:

                Coordinating accreditation activities to secure efficiency and compliance 
                to company procedures.                
                We are looking for a reliable Accreditation Administrator.
                 They will undertake administrative tasks, ensuring customers applications for 
                 accreditations are properly processed and issued in a timely manner.                
                The tasks of the accreditation administrator will include helping customers with 
                questions regarding the accreditation of training courses and activities.
                 The ideal candidate will possess a high degree of professionalism, attention to detail 
                 and be competent in prioritizing and working with little supervision. 
                 They will be self-motivated and trustworthy. A confident telephone manner 
                 is highly desirable.
                                The accreditation administrator will ensure smooth
                                 running of the accreditation process and contribute in driving 
                                 sustainable growth.
        `,
                status: 'closed',
                jobTypeId: 4,                
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Maths Teacher for September 2018',
                description: `Equate Education Solutions is a unique Education Recruitment Company
                 as we all have experience as Senior Leaders in schools. We have the knowledge of
                  the education sector that other recruitment agencies simply don’t have.
                   We can match you with the best school employer for the next step in your teaching career.
                A new opportunity for a Maths Teacher who is looking to work in an strong Maths 
                department in a Bristol Secondary Academy.                
                Are you an experienced English Teacher looking for a move into a new role?
                                    Maths Teacher
                    Bristol Secondary Academy
                    September 2018
                    Permanent position
                    First class CPD available
                    Plenty of scope for personal development
                    Main Pay Scale
        `,
                status: 'open',
                jobTypeId: 5,                
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Science Teacher for September 2018',
                description: `Equate Education Solutions is a unique Education Recruitment Company as we all have experience as Senior Leaders in schools. We have the knowledge of the education sector that other recruitment agencies simply don’t have. We can match you with the best school employer for the next step in your teaching career.

                A new opportunity for a Science Teacher who is looking to work in an strong Science department in a Bristol Secondary Academy.
                
                Are you an experienced Science Teacher looking for a move into a new role and school?
                
                    Science Teacher
                    Bristol Secondary Academy
                    September 2018
                    Permanent position
                    First class CPD available
                    Plenty of scope for personal development
                    Main Pay Scale
        `,
                status: 'open',
                jobTypeId: 4,                
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Accountant',
                description: `Hero Renewables is a leading renewable energy company and to continued 
                growth an opportunity has arrisen for a Management Accounts Assistant who has knowledge
                 of producing full accounts using Sage. This post requires extensive knowledge of
                  Sage accounting systems. Our candidate must have the ability to post to the Sales 
                  and Purchase Ledger and have a full understanding of the Nominal Ledger/Vat requirements 
                  etc. and be adept at producing Management Accounts including Profit & Loss/Trial
                   Balance/Balance Sheet with precision. Your skills must be adaptive to allow your
                    time to be spent assisting in other areas of the business including company compliance 
                    and general day to day office work. The salary is negotiable and is strictly subject
                     to knowledge and experience in the above field. Excellent IT skills are a primary 
                     requirement for this job role and a natural flair for number skills is essential.
        `,
                status: 'open',
                jobTypeId: 1,                
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ], {});
    },
};