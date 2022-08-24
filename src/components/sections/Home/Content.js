import React, { Fragment } from 'react';
import "./style.scss";

import { daysUntilWedding } from '../../../utils/daysUntil';
import { ourStoryTimeline } from '../../../data/ourStoryTimeline';


const Content = () => {
    return (
        <div className="section">
            <div className="home-title">
                <div className="big-text">The Radmilovic Wedding</div>
                <div className="small-text">Saturday, July 16th, 2022</div>
                <div className="small-text">{`${daysUntilWedding()} days away`}</div>
            </div>
            <br />
            <div className="about-us">
                <div className="sub-title text-center section-header">Our Story</div>
                <div className="gallery-break" />
                <br />
                <div className="our-story">
                    {
                        ourStoryTimeline.map((timeline, i) => {
                            return (
                                <Fragment key={i}>
                                    <div className="our-story-row" key={timeline.index}>
                                        <div className="image">
                                            <img src={timeline.img} alt={timeline.title} />
                                        </div>
                                        <div className="text">
                                            <div className="subheader">
                                                {timeline.title}
                                            </div>
                                            <hr className="subheader-break" />
                                            <div className="subheader-small">
                                                {timeline.date}
                                            </div>
                                            <div className="description">
                                                {timeline.description}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gallery-break" />
                                </Fragment>
                            )

                        })
                    }
                </div>
            </div>
        </div>

    );
};

export default Content;