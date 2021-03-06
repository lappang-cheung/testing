import styled from 'styled-components'

const Experience = () => {
    return (
        <section id="experience" className="sections">
            <span className="section-left">
                <h2 className="large-heading">Experience</h2>
                <p className="small-heading">What have I done</p>
            </span>
            <span className="section-right">
                <div className="timeline">
                    <ul>
                        <li>
                            <div className="content">
                                <h3>Web Developer </h3>
                                <p className="info">University of Toronto (Intern)</p>
                                <p>Implemented the new responsive website re-design and removal of the old m.sites, also site maintenance after development projects.</p>
                                <p>Technology: JS, HTML5, CSS, Adobe Dreamweaver</p>
                            </div>
                            <div className="time">
                                <h4>Mar 2011 - Mar 2012</h4>
                            </div>
                        </li>
                        <li>
                            <div className="content">
                                <h3>Admin Assistant</h3>
                                <p className="info">University of Toronto (Work-Study)</p>
                                <p>I had worked as one of the administrative assistant in the Religion department and worked under for both the Undergraduates and the Master/PhD coordinator. My task included filing, scheduling and data entry.
                                    <br /><br/>
                                    I made a small contribution for the fall/winter semester for the current students of the upcoming year, as I had the responsibility of scheduling the classes for the professors &amp; teaching assistant 
                                    and made sure each course was prepared in full detail high level plan. Also including the correct enrollments of students and the prerequisite into the courses</p>
                                <p>Technology: Microsoft Office</p>
                            </div>
                            <div className="time">
                                <h4>Mar 2012 - Sep 2012</h4>
                            </div>
                        </li>
                        <li>
                            <div className="content">
                                <h3>Application Support Developer</h3>
                                <p className="info">SunLife Financial</p>
                                <p>Collaboration with multiple internal business clients to coordinate the deployments and 
                                    load testing of business applications in the ESB infrastructure.
                                    <br /><br/>
                                    My responsibilities include the 
                                    scheduling and maintenance of all the ESB applications in the VM &amp; physical Windows R12 servers. 
                                    Yearly infrastructure &amp; mainframe automation scripting updates, disaster recovery and bi-yearly onboarding training for offshore support</p>
                                <p>Technology: ESB Websuite, Windows R12, SQL, DB2, Java, Mainframe</p>
                            </div>
                            <div className="time">
                                <h4>Apr 2014 - Apr 2017</h4>
                            </div>
                        </li>
                        <li>
                            <div className="content">
                                <h3>Jr Rail Developer</h3>
                                <p className="info">Contact</p>
                                <p> Had worked on a small project while I was developing my developer skills and was still in the infrastructure support team.
                                    Met a client through a hackathon event to create proof of concept on job recruiting agency.
                                </p>    
                                <p>Technology: Rails 4, Heroku, Dropbox, AWS EC2, Sass, Postgresql</p>
                            </div>
                            <div className="time">
                                <h4>May 2016 - Jun 2016</h4>
                            </div>
                        </li>
                        <li>
                            <div className="content">
                                <h3>Jr Web Developer</h3>
                                <p className="info">SunLife Financial</p>
                                <p>Collaboration with the business marketing to bring new features and promote new products in the corporate websites. 
                                My team used Agile Scrum methodology for fast prototyping of the products and better client deliverables. <br /><br/>
                                My contributions to different projects include: SEO, Web Accessibility, 
                                Browser caching and implementation of 3rd party tools &amp; RESTful API from Adobe.
                                </p>
                                <p>Technology: AIX, OpenTxt WEM, Java Server Pages, HTML5, CSS3, JavaScript, Dimensions</p>
                            </div>
                            <div className="time">
                                <h4>Apr 2017 - Feb 2018</h4>
                            </div>
                        </li>
                    <div style={{clear:"both"}}></div>
                    </ul>
                </div>
            </span>
        </section>
    )
}

export default Experience