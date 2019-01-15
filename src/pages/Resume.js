import React, { Component } from 'react';
import Iframe from 'react-iframe'
import '../css/Resume.css';
import BaileySiberResume from '../BaileySiberResume.pdf'

class Resume extends Component {
  render() {
    return (
      <div>
        <div>
          <hr className="Line"/>
          <br/>
          <br/>
          {/* <p className="Mission-header"> <strong> My Mission </strong></p>
          <p className="Mission">
          Make a higher quality of life more accessible by working at the intersections of technology, advocacy, and health
        </p>
      </div>

      <p className="Header"> <strong> Education </strong> </p>
      <hr className="Line"/>

      <div className="Row">
      <div className="Left">
      <p className="DescL"><strong>Tufts University</strong></p>
      <p className="Desc-info-L">B.A. Clinical Psychology, Community Health, Minor in Computer Science</p>
      <p className="Desc-info-L">GPA: 3.81 | Honors: Summa Cum Laude, Psi Chi Society, Dean's List</p>
    </div>
    <div className="Right">
    <p className="DescR">Medford, MA</p>
    <p className="DescR">Graduated May 2018</p>
  </div>
</div>

<div className="Row">
<div className="Left">
<p className="DescL"><strong>Horizons School of Technology</strong></p>
<p className="Desc-info-L">Fullstack Software Engineering Fellowship</p>
</div>
<div className="Right">
<p className="DescR">San Francisco, CA</p>
<p className="DescR">Graduated August 2018</p>
</div>
</div>

<p className="Header"> <strong> Work Experience </strong> </p>
<hr className="Line"/>

<div className="Row">
<div className="Left">
<p className="DescL"><strong>Collective Health, Operations Associate</strong></p>
<p className="Desc-info-L">- Spearhead strategies to optimize efficiency and scalability</p>
<p className="Desc-info-L">- Build internal tools to improve workflows: slackbot to schedule meetings, </p>
<p className="Desc-extra-L"> emails automatically triggered by gsheet inputs, etc </p>
<p className="Desc-info-L">- Track accuracy and timeliness around core metrics and troubleshoot operational challenges</p>
<p className="Desc-info-L"><strong>Software: Excel, Javascript, Python, SQL</strong></p>
</div>
<div className="Right">
<p className="DescR">San Francisco, CA</p>
<p className="DescR">Oct 2018 - present</p>
</div>
</div>

<div className="Row">
<div className="Left">
<p className="DescL"><strong>Ergbot, Web Designer and Front-End Engineer</strong></p>
<p className="Desc-info-L">- Design and develop website for automatic erg logger that records erg data from photo upload </p>
<p className="Desc-info-L">- Integrate RESTful APIs for computer vision capability and employ Google API for secure logins </p>
<p className="Desc-info-L">- Deploy express server on Heroku and mlab to store and access user information and events </p>
<p className="Desc-info-L">- Launched mobile application on App Store and launched website </p>
<p className="Desc-info-L"><strong>Software: CSS, HTML, Javascript, React, React Native</strong></p>
</div>
<div className="Right">
<p className="DescR">San Francisco, CA</p>
<p className="DescR">September 2018 - present</p>
</div>
</div>

<div className="Row">
<div className="Left">
<p className="DescL"><strong>Head Smart, Full Stack Engineer</strong></p>
<p className="Desc-info-L">- Design and develop mobile-based mental health tool that allows users to journal, track their moods,</p>
<p className="Desc-extra-L"> and receive suggestions and exercises to improve their wellbeing	</p>
<p className="Desc-info-L">- Develop RESTful APIs to provide appropriate suggestions to users depending on their mood </p>
<p className="Desc-extra-L"> and react to user feedback on suggestion effectiveness </p>
<p className="Desc-info-L">- Deploy express server on Heroku and mlab to store and access user information and events </p>
<p className="Desc-info-L"><strong>Software: CSS, HTML, Javascript, React Native </strong></p>
</div>
<div className="Right">
<p className="DescR">San Francisco, CA</p>
<p className="DescR">July 2018 - present</p>
</div>
</div>

<div className="Row">
<div className="Left">
<p className="DescL"><strong>Freelance, Web Designer and Front-End Engineer</strong></p>
<p className="Desc-info-L">- Consult with clients to outline website goals, illustrate wireframes, and discuss site functionality</p>
<p className="Desc-info-L">- Develop user-friendly architecture by programming site navigation, social media links, and organizing </p>
<p className="Desc-extra-L"> site content into logical catalogs and flows.</p>
<p className="Desc-info-L"><strong>Software: CSS, HTML, Javascript, React, React Native</strong></p>
</div>
<div className="Right">
<p className="DescR">San Francisco, CA</p>
<p className="DescR">2017 - present</p>
</div>
</div>

<div className="Row">
<div className="Left">
<p className="DescL"><strong>Massachusetts General Hospital, Disparities Research Unit, Research Assistant</strong></p>
<p className="Desc-info-L">- Conducted qualitative & quantitative research with participants in marginalized communities</p>
<p className="Desc-info-L">- Developed worksheets, surveys, & questionnaires administered to participants</p>
<p className="Desc-info-L">- Contributed to literature reviews, systematic reviews, manuscripts, & presentations</p>
<p className="Desc-info-L"><strong>Software: Python, R, REDCap, Stata, Tableau</strong></p>
</div>
<div className="Right">
<p className="DescR">Boston, MA</p>
<p className="DescR">2017 - 2018</p>
</div>
</div>

<div className="Row">
<div className="Left">
<p className="DescL"><strong>Harvard University, Intergroup Relations Lab, Research Assistant</strong></p>
<p className="Desc-info-L">- Recruited and ran study protocol with 100+ participants</p>
<p className="Desc-info-L">- Contributed to literature reviews & presentations</p>
<p className="Desc-info-L"><strong>Software: Excel, SPSS, Stata</strong></p>
</div>
<div className="Right">
<p className="DescR">Cambridge, MA</p>
<p className="DescR">2017 - 2018</p>
</div>
</div>

<div className="Row">
<div className="Left">
<p className="DescL"><strong>Tufts University, Office for Equal Opportunity, Intern</strong></p>
<p className="Desc-info-L">- Compiled resources for marginalized sexual assault survivors (undocumented, ESL, disabled, POC)</p>
<p className="Desc-info-L">- Contributed to presentations & pamphlets given to 1000+ undergraduate students per year</p>
</div>
<div className="Right">
<p className="DescR">Medford, MA</p>
<p className="DescR">2016 - 2017</p>
</div>
</div>

<div className="Row">
<div className="Left">
<p className="DescL"><strong>Nairobi Women’s Hospital, Gender Violence Recovery Center, Research Assistant</strong></p>
<p className="Desc-info-L">- Administered sexual violence climate surveys to 200+ community members</p>
<p className="Desc-info-L">- Conducted FGDs, key informant interviews, and in-depth interviews with 40+ stakeholders</p>
<p className="Desc-info-L">- Completed literature review & wrote report with findings/recommendations</p>
<p className="Desc-info-L">Presentations: United Nations Women Gender-Based Violence Conference, School for International Training Conference,</p>
<p className="Desc-extra-L"> Tufts University Beyond the Classroom, Tufts University Research Symposium</p>
<p className="Desc-info-L"><strong>Software: Excel, Python, Stata</strong></p>
</div>
<div className="Right">
<p className="DescR">Nairobi, Kenya</p>
<p className="DescR">2016 - 2017</p>
</div>
</div>

<div className="Row">
<div className="Left">
<p className="DescL"><strong>McLean Hospital, Gunderson Residence, Community Residence Counselor</strong></p>
<p className="Desc-info-L">- Utilized Dialectical Behavioral Therapy for treatment of Borderline Personality Disorder patients</p>
<p className="Desc-info-L">- Led/co-led group-based therapy sessions & individual check-ins with patients</p>
<p className="Desc-info-L">- Collaborated with clinical care team to construct tailored treatment plans</p>
<p className="Desc-info-L"><strong>Software: Epic, REDCap</strong></p>
</div>
<div className="Right">
<p className="DescR">Cambridge, MA</p>
<p className="DescR">2015 - 2017</p>
</div>
</div>

<p className="Header"> <strong> Leadership Positions </strong> </p>
<hr className="Line"/>

<div className="Row">
<div className="Left">
<p className="DescL"><strong>Every Voice Coalition, Steering Committee Member</strong></p>
<p className="Desc-info-L">- Co-lead grassroots organization focused on political advocacy and community building around sexual violence prevention</p>
<p className="Desc-info-L">- Plan, organize, and spearhead all grant-based, peer-to-peer, and philanthropic fundraising efforts </p>
<p className="Desc-info-L">- Manage budgets, financial resources, and expenses for all Every Voice  initiatives</p>
</div>
<div className="Right">
<p className="DescR">2018 - 2019</p>
</div>
</div>

<div className="Row">
<div className="Left">
<p className="DescL"><strong>Tufts University, Action for Sexual Assault Prevention, President</strong></p>
<p className="Desc-info-L">- Developed survivor disclosures, perpetrator accountability, & community culture workshops; hosted for 30+ groups</p>
<p className="Desc-info-L">- Hosted annual event It Happens Here, attended by 1000+ students per year</p>
</div>
<div className="Right">
<p className="DescR">2014 - 2018</p>
</div>
</div>

<div className="Row">
<div className="Left">
<p className="DescL"><strong>Tufts University, Presidential Steering Committee on Sexual Violence, Student Representative</strong></p>
<p className="Desc-info-L">- Advocated for student needs while collaborating with administration to propose University policy changes</p>
</div>
<div className="Right">
<p className="DescR">2016 - 2018</p>
</div>
</div>

<div className="Row">
<div className="Left">
<p className="DescL"><strong>Tufts University, Computer Science Department, Teaching Assistant</strong></p>
<p className="Desc-info-L">- Led lab sessions, graded homework/exams, & hosted office hours for Introduction to C++ course</p>
</div>
<div className="Right">
<p className="DescR">2016 - 2017</p>
</div>
</div>

<div className="Row">
<div className="Left">
<p className="DescL"><strong>Samaritans & Call2Talk, Volunteer</strong></p>
<p className="Desc-info-L">- Answered phone calls from individuals with intent, plans, or means for suicide</p>
<p className="Desc-info-L">- Assessed caller risk levels, de-escalated crises, suggested short term solutions & offered relevant resources to callers</p>
</div>
<div className="Right">
<p className="DescR">2013 - 2018</p>
</div>
</div>

<p className="Header"> <strong> Skills </strong> </p>
<hr className="Line"/>

<div className="Row">
<div className="Left">
<p className="Desc-info-L">Languages: Limited working proficiency in Arabic, Spanish, Swahili, American Sign Language</p>
<p className="Desc-info-L">Programming Languages: Javascript, C++, HTML5, CSS3, Stata, SPSS, Python, R</p>
<p className="Desc-info-L">Software/Tooling: React, React Native, Node.js, Express.js, Passport.js, AJAX, jQuery, MongoDB, Git, Heroku, Webpack</p>
<p className="Desc-info-L">Certifications: CITI for Human Research Subjects & Behavioral Research, Rape Crisis Counseling, Suicide Prevention Counseling</p>
</div>
*/}

<iframe title="resume" width="700" height="600" src={BaileySiberResume} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

</div>

<br></br>

<a className="Button" download href={BaileySiberResume}>download</a>

</div>
)
}
}

export default Resume;
