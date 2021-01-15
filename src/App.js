import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import './App.css';

import ruler from './assets/images/ruler-pic.png';
import active from './assets/images/active-people.png';
import cardio from './assets/images/cardio-people.png';
import weight from './assets/images/weights-pic.png';
import plate from './assets/images/diet-plate.png';
import packagePic from './assets/images/package-pic.png';

const PrettoSlider = withStyles({
  root: {
    color: "var(--cfgreen)",
    height: 25,
  },
  thumb: {
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    border: "2px solid #e5e4e9",
    marginTop: -12,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 25,
    borderRadius: 25
  },
  rail: {
    height: 25,
    borderRadius: 25,
    color: '#bebebe'

  }
})(Slider);


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: false,
      imperialMetric: false,
      age: 45,
      bodyFat: 28,
      liftingDaysPerWeek: 3,
      liftingMinutesPerDay: 60,
      cardioDaysPerWeek: 3,
      cardioMinutesPerDay: 60,

      heightInFeet: 66,
      currentWeightInPounds: 305,
      goalWeightInPounds: 305,

      activeJobDayRoutine: [
        { label: 'sedentary', description: 'Desk job, work from home\nVery little activity', active: true },
        { label: 'lightly\nactive', description: 'Teacher, host, usher\nSome standing & moving', active: false },
        { label: 'moderately\nactive', description: 'Server, trainer, nurse\nMostly standing & moving', active: false },
        { label: 'Very\nactive', description: 'Construction worker, farmer\nMostly moving & lifting', active: false }
      ],
      fitness_experience: [
        { label: 'Beginner', active: false },
        { label: 'Intermediate', active: true },
        { label: 'Advanced', active: false }
      ],
      fitness_location: [
        { label: 'The Gym', active: true },
        { label: 'Home', active: false }
      ],
      strength_level: [
        { label: 'Light', description: 'I can hold a conversation', active: true },
        { label: 'Moderate', description: 'I am breathing hard', active: false },
        { label: 'Difficult', description: 'Can\'t talk, busy sweating', active: false },
        { label: 'Intense', description: 'I seriously might die', active: false }
      ]
    }
  }

  toggleGender = () => this.setState({ gender: !this.state.gender });

  toggleimperialMetric = () => this.setState({ imperialMetric: !this.state.imperialMetric });

  selectActiveJobRoutine = async (index) => {
    let a = this.state.activeJobDayRoutine;
    a[0]['active'] = false; a[1]['active'] = false;
    a[2]['active'] = false; a[3]['active'] = false;
    a[index]['active'] = true;
    await this.setState({ activeJobDayRoutine: a })
  }

  selectFitnessExperience = async (index) => {
    let a = this.state.fitness_experience;
    a[0]['active'] = false; a[1]['active'] = false; a[2]['active'] = false;
    a[index]['active'] = true;
    await this.setState({ fitness_experience: a })
  }

  selectFitnessLocation = async (index) => {
    let a = this.state.fitness_location;
    a[0]['active'] = false; a[1]['active'] = false;
    a[index]['active'] = true;
    await this.setState({ fitness_location: a })
  }

  selectStrengthLevel = async (index) => {
    let a = this.state.strength_level;
    a[0]['active'] = false; a[1]['active'] = false;
    a[2]['active'] = false; a[3]['active'] = false;
    a[index]['active'] = true;
    await this.setState({ strength_level: a })
  }

  render() {
    const { heightInFeet, currentWeightInPounds, gender, age, imperialMetric, goalWeightInPounds, bodyFat, liftingDaysPerWeek, liftingMinutesPerDay, cardioDaysPerWeek, cardioMinutesPerDay, activeJobDayRoutine, fitness_experience, fitness_location, strength_level } = this.state
    return (
      <div id="calc_container">
        <div className="CalcContainer" style={{ boxSizing: 'border-box', display: 'flex', }}>
          <div className="CalcPage" style={{ width: '100%', textAlign: 'center', fontSize: '1.3em', color: 'rgb(79, 81, 86)', display: 'flex', alignItems: 'center', flexDirection: 'column', boxSizing: 'border-box', margin: '0px auto', }}>
            <div id="calculate-my-macros" className="cf-discoverSection" style={{ width: '100%', }}>
              <div style={{ display: 'none', }}></div>
              <div className="gradient" style={{ border: 'medium none', zIndex: -10, position: 'absolute', width: '100%', maxWidth: '100%', }}></div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div tabIndex="-1" className="cf-introText">
                <div></div>
                <div className="cf-introText">
                  <h4 className="section-header cfblue">Discover Your Ideal Macros</h4>
                  <h4 className="header-sub-s">
                    <div>(It only takes <b>30 seconds</b>)</div>
                  </h4>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div className="iam-text">I am a</div>
              <div>
                <div className="cf-button-container" style={{ display: 'inline-block' }}>
                  <div tabIndex="-1" className="cf-mask">
                    <div className={gender === true ? 'cf-green-div-transition-gender' : 'cf-green-div-gender'}></div>
                  </div>
                  <button onClick={this.toggleGender} tabIndex="0" className={gender === true ? 'cf-Woman-b-transition slid-font' : 'cf-Woman-b slid-font'} findex="0" kfocus="false">Woman</button>
                  <button onClick={this.toggleGender} tabIndex="0" className={gender === true ? 'cf-Man-b-transition slid-font' : 'cf-Man-b slid-font'} findex="1" kfocus="false">Man</button>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div className="iam-text">I am <font className="cfgreen">{age}</font> years young</div>
              <div className="slider-container" style={{ width: 750, maxWidth: '80%', margin: '0px auto', }}>
                <PrettoSlider defaultValue={age} onChange={(e, v) => this.setState({ age: v })} step={1} min={18} max={75} />
              </div>
              <div style={{ width: 750, maxWidth: '80%', textAlign: 'left', margin: '0px auto', height: 46 }}>
                <div className="cf-toggle-container" style={{ display: 'inline-block', }}>
                  <div className="cf-toggle-mask">
                    <div className="cf-toggle-transition-div untoggled"></div>
                  </div>
                  <button className="cf-toggle" findex="3" kfocus="false"></button>
                </div>
                <div className="iam-text" style={{ marginTop: 0, marginLeft: 4, verticalAlign: 'top', fontSize: 18, lineHeight: '46px', display: 'inline-block' }}>I prefer typing</div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
            </div>
            <div className="cf-sizeSection" style={{ width: '100%' }}>
              <div className="gradient" style={{ border: 'medium none', zIndex: -10, position: 'absolute', width: '100%', maxWidth: '100%' }}></div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div tabIndex="-1" className="cf-introText">
                <img alt="My Stats" className="header-pic" src={ruler} />
                <div className="cf-introText">
                  <h4 className="section-header cfblue">My Stats</h4>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div className="iam-text">I use</div>
              <div>
                <div className="cf-button-container" style={{ display: 'inline-block' }}>
                  <div tabIndex="-1" className="cf-mask">
                    <div className={imperialMetric === true ? 'cf-green-div-transition-system' : 'cf-green-div-system'}></div>
                  </div>
                  <button tabIndex="0" onClick={this.toggleimperialMetric} className={imperialMetric === true ? 'cf-Imperial-b-transition slid-font' : 'cf-Imperial-b slid-font'} findex="4" kfocus="false">Imperial</button>
                  <button tabIndex="0" onClick={this.toggleimperialMetric} className={imperialMetric === true ? 'cf-Metric-b-transition slid-font' : 'cf-Metric-b slid-font'} findex="5" kfocus="false">Metric</button>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div>
                <div className="iam-text">My Height: <font className="cfgreen">{Math.floor(heightInFeet / 12)}</font> feet <font className="cfgreen">{heightInFeet - (Math.floor(heightInFeet / 12) * 12)}</font> inches</div>
                <div className="slider-container" style={{ width: 750, maxWidth: '80%', margin: '0px auto' }}>
                  <PrettoSlider defaultValue={heightInFeet} onChange={(e, v) => this.setState({ heightInFeet: v })} step={1} min={48} max={83} />
                </div>
                <div className="iam-text">Current Weight: <font className="cfgreen">{currentWeightInPounds}</font>{currentWeightInPounds === 550 ? '+' : ''} lbs</div>
                <div className="slider-container" style={{ width: 750, maxWidth: '80%', margin: '0px auto' }}>
                  <PrettoSlider defaultValue={currentWeightInPounds} onChange={(e, v) => this.setState({ currentWeightInPounds: v })} step={1} min={60} max={550} />
                </div>
                <div className="iam-text">Goal Weight: <font className="cfgreen">{goalWeightInPounds}</font>{goalWeightInPounds === 550 ? '+' : ''} lbs</div>
                <div className="slider-container" style={{ width: 750, maxWidth: '80%', margin: '0px auto' }}>
                  <PrettoSlider defaultValue={goalWeightInPounds} onChange={(e, v) => this.setState({ goalWeightInPounds: v })} step={1} min={60} max={550} />
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
            </div>
            <div className="cf-activitySection" style={{ width: '100%' }}>
              <div className="gradient" style={{ border: 'medium none', zIndex: -10, position: 'absolute', width: '100%', maxWidth: '100%' }}></div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div tabIndex="-1" className="cf-introText">
                <div></div>
                <div className="cf-introText">
                  <h4 className="section-header cfblue">What is your</h4>
                  <h4 className="header-sub">estimated body fat?</h4>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div className="iam-text-bfp">
                <span className="bfpspanval"><font className="cfgreen">{bodyFat}</font>%{bodyFat === 50 ? '+' : ''} </span>
                <div style={{ display: 'inline-block', position: 'relative' }}>
                  <div className="bfhdiv" style={{ display: 'inline-block', padding: 0 }}>
                    <button className="bodyfathelper" style={{ padding: 0 }} findex="9" kfocus="false">?</button>
                  </div>
                </div>
              </div>
              <div className="slider-container" style={{ width: 750, maxWidth: '80%', margin: '0px auto' }}>
                <PrettoSlider defaultValue={bodyFat} onChange={(e, v) => this.setState({ bodyFat: v })} step={1} min={6} max={50} />
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
            </div>
            <div className="cf-activitySection" style={{ width: '100%' }}>
              <div className="gradient" style={{ border: 'medium none', zIndex: -10, position: 'absolute', width: '100%', maxWidth: '100%' }}></div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div tabIndex="-1" className="cf-introText">
                <img alt="How active is your job and daily routine?" className="header-pic" src={active} style={{}} />
                <div className="cf-introText">
                  <h4 className="section-header cfblue">How active is your</h4>
                  <h4 className="header-sub">job &amp; daily routine?</h4>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div className="">
                <div className="quad-input-container" style={{ margin: '0px auto' }}>
                  {
                    activeJobDayRoutine.map((item, index) => (
                      <div key={index} className="active-job-day-routine">
                        <button onClick={() => this.selectActiveJobRoutine(index)} style={{ width: '100%' }} id={'daily_activity' + index.toString()} className={item.active === true ? 'cf-button selected' : 'cf-button'} findex="11" kfocus="false">
                          <div className="cf-button-text-wrapper">
                            <div className={item.active === true ? 'with-desc cf-button-label-selected' : 'with-desc cf-button-label'}>{item.label}</div>
                            <div className="cf-center-desc">
                              <div className={item.active === true ? 'cf-button-desc-selected' : 'cf-button-desc'}>{item.description}</div>
                            </div>
                          </div>
                        </button>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
            </div>
            <div className="cf-lossSection" style={{ width: '100%' }}>
              <div className="gradient" style={{ border: 'medium none', zIndex: -10, position: 'absolute', width: '100%', maxWidth: '100%' }}></div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div tabIndex="-1" className="cf-introText">
                <div></div>
                <div className="cf-introText"><h4 className="section-header cfblue">How experienced are you</h4>
                  <h4 className="header-sub">with physical fitness?</h4>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div className="">
                <div className="quad-input-container" style={{ margin: '0px auto' }}>
                  {
                    fitness_experience.map((item, index) => (
                      <div style={{ margin: 5, width: 'calc(23.3333% - 10px)', display: 'inline-block' }}>
                        <button onClick={() => this.selectFitnessExperience(index)} style={{ width: '100%' }} id={'fitness_experience' + index.toString()} className={item.active === true ? 'cf-button selected' : 'cf-button'} findex="15" kfocus="false">
                          <div className="cf-button-text-wrapper">
                            <div className={item.active === true ? 'cf-button-label-selected' : 'cf-button-label'}>{item.label}</div>
                          </div>
                        </button>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div className="iam-text">I work out at...</div>
              <div className="">
                <div className="quad-input-container" style={{ margin: '0px auto' }}>
                  {
                    fitness_location.map((item, index) => (
                      <div style={{ margin: 5, width: 'calc(35% - 10px)', display: 'inline-block' }}>
                        <button onClick={() => this.selectFitnessLocation(index)} style={{ width: '100%' }} id={'fitness_location' + index.toString()} className={item.active === true ? 'cf-button selected' : 'cf-button'} findex="19" kfocus="false">
                          <div className="cf-button-text-wrapper">
                            <div className={item.active === true ? 'cf-button-label-selected' : 'cf-button-label'}>{item.label}</div>
                          </div>
                        </button>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
            </div>
            <div className="cf-weightLiftingSection" style={{ width: '100%' }}>
              <div className="gradient" style={{ border: 'medium none', zIndex: -10, position: 'absolute', width: '100%', maxWidth: '100%' }}></div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div tabIndex="-1" className="cf-introText">
                <img alt="Weight Lifting Frequency Strength Training Only" className="header-pic" src={weight} />
                <div className="cf-introText">
                  <h4 className="section-header cfblue">Weight Lifting Frequency</h4>
                  <h4 className="header-sub-s">(Strength training only)</h4>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div className="iam-text">Days per week: <font className="cfgreen">{liftingDaysPerWeek}</font></div>
              <div className="slider-container" style={{ width: 750, maxWidth: '80%', margin: '0px auto' }}>
                <PrettoSlider defaultValue={liftingDaysPerWeek} onChange={(e, v) => this.setState({ liftingDaysPerWeek: v })} step={1} min={0} max={7} />
              </div>
              {
                liftingDaysPerWeek === 0
                  ? <div />
                  :
                  <div>
                    <div className="iam-text">Minutes per day: <font className="cfgreen">{liftingMinutesPerDay}</font></div>
                    <div className="slider-container" style={{ width: 750, maxWidth: '80%', margin: '0px auto' }}>
                      <PrettoSlider defaultValue={liftingMinutesPerDay} onChange={(e, v) => this.setState({ liftingMinutesPerDay: v })} step={1} min={1} max={120} />
                    </div>
                    <div tabIndex="-1" className="cf-margin"></div>
                    <div className="">
                      <div className="quad-input-container" style={{ margin: '0px auto' }}>
                        {
                          strength_level.map((item, index) => (
                            <div style={{ margin: 5, width: 'calc(50% - 10px)', display: 'inline-block' }}>
                              <button onClick={() => this.selectStrengthLevel(index)} style={{ width: '100%' }} id={'strength_level' + index.toString()} className={item.active === true ? 'cf-button selected' : 'cf-button'} findex="23" kfocus="false">
                                <div className="cf-button-text-wrapper">
                                  <div className={item.active === true ? 'with-desc cf-button-label-selected' : 'with-desc cf-button-label'}>{item.label}</div>
                                  <div className="cf-center-desc">
                                    <div className={item.active === true ? 'cf-button-desc-selected' : 'cf-button-desc'}>{item.description}</div>
                                  </div>
                                </div>
                              </button>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
              }
              <div tabIndex="-1" className="cf-margin"></div>
            </div>
            <div className="cf-cardioSection" style={{ width: '100%' }}>
              <div className="gradient" style={{ border: 'medium none', zIndex: -10, position: 'absolute', width: '100%', maxWidth: '100%' }}></div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div tabIndex="-1" className="cf-introText">
                <img alt="Cardio &amp; Group Fitness Combine them if you do both" className="header-pic" src={cardio} />
                <div className="cf-introText">
                  <h4 className="section-header cfblue">Cardio &amp; Group Fitness</h4>
                  <h4 className="header-sub-s">(Combine them if you do both)</h4>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div className="iam-text">Days per week: <font className="cfgreen">{cardioDaysPerWeek}</font></div>
              <div className="slider-container" style={{ width: 750, maxWidth: '80%', margin: '0px auto' }}>
                <PrettoSlider defaultValue={cardioDaysPerWeek} onChange={(e, v) => this.setState({ cardioDaysPerWeek: v })} step={1} min={0} max={7} />
              </div>
              {
                cardioDaysPerWeek === 0
                  ? <div />
                  :
                  <div>
                    <div className="iam-text">Minutes per day: <font className="cfgreen">{cardioMinutesPerDay}</font></div>
                    <div className="slider-container" style={{ width: 750, maxWidth: '80%', margin: '0px auto' }}>
                      <PrettoSlider defaultValue={cardioMinutesPerDay} onChange={(e, v) => this.setState({ cardioMinutesPerDay: v })} step={1} min={1} max={120} />
                    </div>
                    <div tabIndex="-1" className="cf-margin"></div>
                    <div className="">
                      <div className="quad-input-container" style={{ margin: '0px auto' }}>
                        <div style={{ margin: 5, width: 'calc(50% - 10px)', display: 'inline-block' }}>
                          <button style={{ width: '100%' }} id="cardio_level0" className="cf-button selected" findex="28" kfocus="false">
                            <div className="cf-button-text-wrapper">
                              <div className="with-desc cf-button-label-selected">Light</div>
                              <div className="cf-center-desc">
                                <div className="cf-button-desc-selected">I can hold a conversation</div>
                              </div>
                            </div>
                          </button>
                        </div>
                        <div style={{ margin: 5, width: 'calc(50% - 10px)', display: 'inline-block' }}>
                          <button style={{ width: '100%' }} id="cardio_level1" className="cf-button" findex="29" kfocus="false">
                            <div className="cf-button-text-wrapper">
                              <div className="with-desc cf-button-label">Moderate</div>
                              <div className="cf-center-desc">
                                <div className="cf-button-desc">I am breathing hard</div>
                              </div>
                            </div>
                          </button>
                        </div>
                        <div style={{ margin: 5, width: 'calc(50% - 10px)', display: 'inline-block' }}>
                          <button style={{ width: '100%' }} id="cardio_level2" className="cf-button" findex="30" kfocus="false">
                            <div className="cf-button-text-wrapper">
                              <div className="with-desc cf-button-label">Difficult</div>
                              <div className="cf-center-desc">
                                <div className="cf-button-desc">Can't talk, busy sweating</div>
                              </div>
                            </div>
                          </button>
                        </div>
                        <div style={{ margin: 5, width: 'calc(50% - 10px)', display: 'inline-block' }}>
                          <button style={{ width: '100%' }} id="cardio_level3" className="cf-button" findex="31" kfocus="false">
                            <div className="cf-button-text-wrapper">
                              <div className="with-desc cf-button-label">Intense</div>
                              <div className="cf-center-desc">
                                <div className="cf-button-desc">I seriously might die</div>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              }
              <div tabIndex="-1" className="cf-margin"></div>
            </div>
            <div className="cf-dietSection" style={{ width: '100%' }}>
              <div className="gradient" style={{ border: 'medium none', zIndex: -10, position: 'absolute', width: '100%', maxWidth: '100%' }}></div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div tabIndex="-1" className="cf-introText">
                <img alt="What is your nutritional preference?" className="header-pic" src={plate} />
                <div className="cf-introText">
                  <h4 className="section-header cfblue">What is your</h4>
                  <h4 className="header-sub">nutritional preference?</h4>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div className="quad-multi-container" style={{ margin: '0px auto' }}>
                <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                  <button style={{ width: '100%' }} id="diet" className="cf-button selected" findex="32" kfocus="false">
                    <div className="cf-button-text-wrapper">
                      <div className="cf-button-label-selected">Standard Western</div>
                    </div>
                  </button>
                </div>
                <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                  <button style={{ width: '100%' }} id="diet" className="cf-button" findex="33" kfocus="false">
                    <div className="cf-button-text-wrapper">
                      <div className="cf-button-label">Vegan</div>
                    </div>
                  </button>
                </div>
                <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                  <button style={{ width: '100%' }} id="diet" className="cf-button" findex="34" kfocus="false">
                    <div className="cf-button-text-wrapper">
                      <div className="cf-button-label">Vegetarian</div>
                    </div>
                  </button>
                </div>
                <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                  <button style={{ width: '100%' }} id="diet" className="cf-button" findex="35" kfocus="false">
                    <div className="cf-button-text-wrapper">
                      <div className="cf-button-label">Pescatarian</div>
                    </div>
                  </button>
                </div>
                <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                  <button style={{ width: '100%' }} id="diet" className="cf-button" findex="36" kfocus="false">
                    <div className="cf-button-text-wrapper">
                      <div className="cf-button-label">Pollotarian</div>
                    </div>
                  </button>
                </div>
                <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                  <button style={{ width: '100%' }} id="diet" className="cf-button" findex="37" kfocus="false">
                    <div className="cf-button-text-wrapper">
                      <div className="cf-button-label">Pesce-Pollotarian</div>
                    </div>
                  </button>
                </div>
                <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                  <button style={{ width: '100%' }} id="diet" className="cf-button" findex="38" kfocus="false">
                    <div className="cf-button-text-wrapper">
                      <div className="cf-button-label">Low Carb?</div>
                    </div>
                  </button>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
            </div>
            <div className="cf-dietSection" style={{ width: '100%' }}>
              <div className="gradient" style={{ border: 'medium none', zIndex: -10, position: 'absolute', width: '100%', maxWidth: '100%' }}></div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div tabIndex="-1" className="cf-introText">
                <div></div>
                <div className="cf-introText">
                  <h4 className="section-header cfblue">Medical Diagnosis</h4>
                  <h4 className="header-sub-s">(Only select formal &amp; professional diagnoses)</h4>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div className="quad-multi-container" style={{ margin: '0px auto' }}>
                <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                  <button style={{ width: '100%' }} id="conditions" className="cf-button" findex="39" kfocus="false">
                    <div className="cf-button-text-wrapper">
                      <div className="cf-button-label">Pre-Diabetic</div>
                    </div>
                  </button>
                </div>
                <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                  <button style={{ width: '100%' }} id="conditions" className="cf-button" findex="40" kfocus="false">
                    <div className="cf-button-text-wrapper">
                      <div className="cf-button-label">Hashimoto's</div>
                    </div>
                  </button>
                </div>
                <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                  <button style={{ width: '100%' }} id="conditions" className="cf-button" findex="41" kfocus="false">
                    <div className="cf-button-text-wrapper">
                      <div className="cf-button-label">Diabetic 1 or 2</div>
                    </div>
                  </button>
                </div>
                <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                  <button style={{ width: '100%' }} id="conditions" className="cf-button" findex="42" kfocus="false">
                    <div className="cf-button-text-wrapper">
                      <div className="cf-button-label">Menopause</div>
                    </div>
                  </button>
                </div>
                <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                  <button style={{ width: '100%' }} id="conditions" className="cf-button" findex="43" kfocus="false">
                    <div className="cf-button-text-wrapper">
                      <div className="cf-button-label">PCOS</div>
                    </div>
                  </button>
                </div>
                <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                  <button style={{ width: '100%' }} id="conditions" className="cf-button selected" findex="44" kfocus="false">
                    <div className="cf-button-text-wrapper">
                      <div className="cf-button-label-selected">None</div>
                    </div>
                  </button>
                </div></div>
              <div tabIndex="-1" className="cf-margin"></div></div>
            <div className="cf-motivationSection" style={{ width: '100%' }}>
              <div className="gradient" style={{ border: 'medium none', zIndex: -10, position: 'absolute', width: '100%', maxWidth: '100%' }}></div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div tabIndex="-1" className="cf-introText">
                <div></div>
                <div className="cf-introText">
                  <h4 className="section-header cfblue">What motivates</h4>
                  <h4 className="header-sub">you the most?</h4>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div className="">
                <div className="quad-input-container" style={{ margin: '0px auto' }}>
                  <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="motivation0" className="cf-button" findex="45" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="cf-button-label">My Family</div>
                      </div>
                    </button>
                  </div>
                  <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="motivation1" className="cf-button" findex="46" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="cf-button-label">My Friends</div>
                      </div>
                    </button>
                  </div>
                  <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="motivation2" className="cf-button" findex="47" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="cf-button-label">I Have Always Been{'\n'}Self-Motivated</div>
                      </div>
                    </button>
                  </div>
                  <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="motivation3" className="cf-button" findex="48" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="cf-button-label">My Desire To Change</div>
                      </div>
                    </button>
                  </div>
                  <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="motivation4" className="cf-button selected" findex="49" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="cf-button-label-selected">I'm Not Very Motivated Yet</div>
                      </div>
                    </button>
                  </div>
                  <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="motivation5" className="cf-button" findex="50" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="cf-button-label">Other</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
            </div>
            <div className="cf-dietSection" style={{ width: '100%' }}>
              <div className="gradient" style={{ border: 'medium none', zIndex: -10, position: 'absolute', width: '100%', maxWidth: '100%' }}></div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div tabIndex="-1" className="cf-introText">
                <div></div>
                <div className="cf-introText">
                  <h4 className="section-header cfblue">What would best help</h4>
                  <h4 className="header-sub">you reach your goals?</h4>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div className="">
                <div className="quad-input-container" style={{ margin: '0px auto' }}>
                  <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="help0" className="cf-button" findex="51" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="cf-button-label">Step-by-Step Instructions</div>
                      </div>
                    </button>
                  </div>
                  <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="help1" className="cf-button" findex="52" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="cf-button-label">Meal plans &amp; Recipes</div>
                      </div>
                    </button>
                  </div>
                  <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="help2" className="cf-button" findex="53" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="cf-button-label">Macro Coaching</div>
                      </div>
                    </button>
                  </div>
                  <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="help3" className="cf-button" findex="54" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="cf-button-label">30 Minute Consultation</div>
                      </div>
                    </button>
                  </div>
                  <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="help4" className="cf-button selected" findex="55" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="cf-button-label-selected">None</div>
                      </div>
                    </button>
                  </div>
                  <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="help5" className="cf-button" findex="56" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="cf-button-label">Other</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
            </div>
            <div className="cf-experienceSection" style={{ width: '100%' }}>
              <div className="gradient" style={{ border: 'medium none', zIndex: -10, position: 'absolute', width: '100%', maxWidth: '100%' }}></div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div tabIndex="-1" className="cf-introText">
                <div></div>
                <div className="cf-introText">
                  <h4 className="section-header cfblue">How experienced are you</h4>
                  <h4 className="header-sub">with tracking macros?</h4>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div className="">
                <div className="quad-input-container" style={{ margin: '0px auto' }}>
                  <div style={{ margin: 5, width: 'calc(50% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="experience0" className="cf-button selected" findex="57" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="with-desc cf-button-label-selected">Total Noob</div>
                        <div className="cf-center-desc">
                          <div className="cf-button-desc-selected">I've never tracked macros and barely understand the concept</div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div style={{ margin: 5, width: 'calc(50% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="experience1" className="cf-button" findex="58" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="with-desc cf-button-label">Semi Aware</div>
                        <div className="cf-center-desc">
                          <div className="cf-button-desc">I know about macros but have never been successful tracking</div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div style={{ margin: 5, width: 'calc(50% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="experience2" className="cf-button" findex="59" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="with-desc cf-button-label">Moderate</div>
                        <div className="cf-center-desc">
                          <div className="cf-button-desc">I've tracked macros with some success, but struggle with it</div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div style={{ margin: 5, width: 'calc(50% - 10px)', display: 'inline-block' }}>
                    <button style={{ width: '100%' }} id="experience3" className="cf-button" findex="60" kfocus="false">
                      <div className="cf-button-text-wrapper">
                        <div className="with-desc cf-button-label">Total Pro</div>
                        <div className="cf-center-desc">
                          <div className="cf-button-desc">I've been tracking macros for a while and can teach others too</div>
                        </div>
                      </div>
                    </button>
                  </div></div></div>
              <div tabIndex="-1" className="cf-margin"></div>
            </div>

            {/* <div className="cf-whoSection" style={{ width: '100%' }}>
              <div className="gradient" style={{ border: 'medium none', zIndex: -10, position: 'absolute', width: '100%', maxWidth: '100%' }}></div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div tabIndex="-1" className="cf-introText">
                <img alt="Your macros are now delivered via email" className="header-pic" src={packagePic} />
                <div className="cf-introText">
                  <h4 className="section-header cfblue">Your macros are now</h4>
                  <h4 className="header-sub">
                    <div>delivered via email</div>
                  </h4>
                </div>
              </div>
              <div tabIndex="-1" className="cf-margin"></div>
              <div className="for-fields">
                <div>
                  <div>
                    <input step="1" style={{ display: 'inline-block' }} className="cf-text-input-invalid" type="text" pattern="\w*" placeholder="First Name" value="" findex="61" kfocus="false" />
                  </div>
                </div>
                <div tabIndex="-1" className="cf-margin"></div>
                <div>
                  <div>
                    <input step="1" style={{ display: 'inline-block' }} className="cf-text-input-invalid" type="text" pattern="\w*" placeholder="Valid Email Address" value="" findex="62" kfocus="false" />
                  </div>
                </div>
                <div tabIndex="-1" className="cf-margin"></div>
                <div className="check-box-container">
                  <input id="gdpr" name="gdpr" type="checkbox" className="cf-check-box" style={{ position: 'absolute', verticalAlign: 'top' }} findex="63" kfocus="Halse" />
                  <label tabIndex="-1" htmlFor="gdpr" className="cf-check-item cf-unticked" style={{ margin: '12px 0px 0px -36px' }}>
                    <span className="checkmark"></span>
                  </label>
                  <h4 className="box-desc" style={{ display: 'inline-block', textAlign: 'left' }}>Heck Yes! Email me my macros and other useful information related to my fat loss goals.</h4>
                </div>
                <div tabIndex="-1" className="cf-margin"></div>
              </div>
              <button style={{ color: 'rgb(255, 255, 255)', borderRadius: 10, boxShadow: 'rgb(235, 71, 34) 0px 0px 10px', backgroundColor: 'rgb(235, 71, 34)', border: 'medium none' }} id="submit" className="cf-submit" findex="64" kfocus="false">Please Fill Out Missing Info</button>
              <div tabIndex="-1" className="cf-margin"></div>
              <p className="privacy-policy">Due to the new GDPR law, you must check the box above to proceed. Click <a className="calc-privacy" target="_blank" rel="noopener noreferrer" href="https://iifym.com/privacy-policy" findex="65" kfocus="false">here</a> to view our Privacy Policy, thanks!</p>
              <div className="cf-margin-big"></div>
            </div>
         */}
          </div>
        </div>
      </div>
    );
  }
}