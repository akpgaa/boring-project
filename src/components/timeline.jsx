import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Softwate developer at Optisol Business Solutions <span>May,2022-present</span></h2>
                        <p>Working as a software developer specialized in NextJS, React , AwsAmplify</p>
                      </div>
                    </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-3">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>Associate developer at TRAXERP/Consortia22 <span>Nov,2020-May 2022</span></h2>
                          <p>Worked as Associate developer at TRAXERP/Consortia22 in the DevOps team. My major works are developing, evaluating new programs, and deploying into the Server</p>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-4">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>UG at UCE Tindivanam <span>2016-2020</span></h2>
                          <p>I completed my B.E in Computer Science & Engineering from the University College of Engineering Tindinvanam</p>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-5">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>Primary and Higher Education <span>2003-2016</span></h2>
                          <p>I have completed my higher secondary education with major subjects as Physics,Chemistry,Maths &Computer Science.</p>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-none">
                        </div>
                      </div>
                    </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
