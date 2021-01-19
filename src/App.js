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
      age: 45,
      bodyFat: 28,
      gender: false,
      imperialMetric: false,
      nutritionalPrefLowCarb: false,
      firstName: '',
      email: '',
      recieveEmail: false,

      liftingDaysPerWeek: 3,
      liftingMinutesPerDay: 60,
      cardioDaysPerWeek: 3,
      cardioMinutesPerDay: 60,

      heightInFeet: 66,
      currentWeightInPounds: 305,
      goalWeightInPounds: 305,

      heightInCM: 165,
      currentWeightInKg: 140,
      goalWeightInKg: 140,

      activeJobDayRoutine: [
        { label: 'sedentary', description: 'Desk job, work from home\nVery little activity', active: true },
        { label: 'lightly\nactive', description: 'Teacher, host, usher\nSome standing & moving', active: false },
        { label: 'moderately\nactive', description: 'Server, trainer, nurse\nMostly standing & moving', active: false },
        { label: 'Very\nactive', description: 'Construction worker, farmer\nMostly moving & lifting', active: false }
      ],
      fitnessExperience: [
        { label: 'Beginner', active: false },
        { label: 'Intermediate', active: true },
        { label: 'Advanced', active: false }
      ],
      fitnessLocation: [
        { label: 'The Gym', active: true },
        { label: 'Home', active: false }
      ],
      strengthLevel: [
        { label: 'Light', description: 'I can hold a conversation', active: true },
        { label: 'Moderate', description: 'I am breathing hard', active: false },
        { label: 'Difficult', description: 'Can\'t talk, busy sweating', active: false },
        { label: 'Intense', description: 'I seriously might die', active: false }
      ],
      cardioLevel: [
        { label: 'Light', description: 'I can hold a conversation', active: true },
        { label: 'Moderate', description: 'I am breathing hard', active: false },
        { label: 'Difficult', description: 'Can\'t talk, busy sweating', active: false },
        { label: 'Intense', description: 'I seriously might die', active: false }
      ],
      nutritionalPreference: [
        { label: 'standard Western', active: true },
        { label: 'Vegan', active: false },
        { label: 'Vegetarian', active: false },
        { label: 'Pescatarian', active: false },
        { label: 'Pollotarian', active: false },
        { label: 'Pesce-Pollotarian', active: false },
      ],
      motivationPerson: [
        { label: 'My Family', active: false },
        { label: 'My Friends', active: false },
        { label: 'I have always been\nself-motivated', active: false },
        { label: 'My desire\nto change', active: false },
        { label: 'I\'m not very\nmotivated yet', active: true },
        { label: 'Others', active: false },
      ],
      otherMotivation: '',

      bestHelptoReachGoal: [
        { label: 'Step-by-Step Instructions', active: false },
        { label: 'Meal plans & Recipes', active: false },
        { label: 'Macro Coaching', active: false },
        { label: '30 Minute Consultation', active: false },
        { label: 'none', active: true },
        { label: 'Others', active: false },
      ],
      otherHelp: '',

      trackingMacros: [
        { label: 'Total Noob', description: 'I\'ve never tracked macros and barely understand the concept', active: true },
        { label: 'Semi Aware', description: 'I know about macros but have never been successful tracking', active: false },
        { label: 'Moderate', description: 'I\'ve tracked macros with some success, but struggle with it', active: false },
        { label: 'Total Pro', description: 'I\'ve been tracking macros for a while and can teach others too', active: false }
      ],

      medicalDiagnosis: [
        { label: 'Pre-Diabetic', active: false, },
        { label: 'Hashimoto', active: false, },
        { label: 'Diabetic 1 or 2', active: false, },
        { label: 'Menopause', active: false, },
        { label: 'PCOS', active: false, },
        { label: 'None', active: true },
      ],
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
    let a = this.state.fitnessExperience;
    a[0]['active'] = false; a[1]['active'] = false; a[2]['active'] = false;
    a[index]['active'] = true;
    await this.setState({ fitnessExperience: a })
  }

  selectFitnessLocation = async (index) => {
    let a = this.state.fitnessLocation;
    a[0]['active'] = false; a[1]['active'] = false;
    a[index]['active'] = true;
    await this.setState({ fitnessLocation: a })
  }

  selectStrengthLevel = async (index) => {
    let a = this.state.strengthLevel;
    a[0]['active'] = false; a[1]['active'] = false;
    a[2]['active'] = false; a[3]['active'] = false;
    a[index]['active'] = true;
    await this.setState({ strengthLevel: a })
  }

  selectCardioLevel = async (index) => {
    let a = this.state.cardioLevel;
    a[0]['active'] = false; a[1]['active'] = false;
    a[2]['active'] = false; a[3]['active'] = false;
    a[index]['active'] = true;
    await this.setState({ cardioLevel: a })
  }

  selectNutritionalPreference = async (index) => {
    let a = this.state.nutritionalPreference
    a[0]['active'] = false; a[1]['active'] = false; a[2]['active'] = false;
    a[3]['active'] = false; a[4]['active'] = false; a[5]['active'] = false;
    a[index]['active'] = true;

    if (a[3]['active'] === true || a[4]['active'] === true || a[5]['active'] === true) {
      await this.setState({ nutritionalPrefLowCarb: false })
    }

    await this.setState({ nutritionalPreference: a })
  }

  selectMotivationPerson = async (index) => {
    let a = this.state.motivationPerson;
    a[0]['active'] = false; a[1]['active'] = false; a[2]['active'] = false;
    a[3]['active'] = false; a[4]['active'] = false; a[5]['active'] = false;
    a[index]['active'] = true;

    await this.setState({ nutritionalPreference: a })
  }

  selectBestHelp = async (index) => {
    let a = this.state.bestHelptoReachGoal;
    a[0]['active'] = false; a[1]['active'] = false; a[2]['active'] = false;
    a[3]['active'] = false; a[4]['active'] = false; a[5]['active'] = false;
    a[index]['active'] = true;

    await this.setState({ bestHelptoReachGoal: a })
  }

  selectTrackingMacros = async (index) => {
    let a = this.state.trackingMacros;
    a[0]['active'] = false; a[1]['active'] = false;
    a[2]['active'] = false; a[3]['active'] = false;
    a[index]['active'] = true;
    await this.setState({ trackingMacros: a })
  }

  selectMedicalDiagnosis = async (index) => {
    let a = this.state.medicalDiagnosis;

    switch (index) {
      case 0:
        a[0]['active'] = !a[0]['active'];
        a[2]['active'] = false;
        a[5]['active'] = false;
        await this.setState({ medicalDiagnosis: a })
        break;
      case 1:
        a[1]['active'] = !a[1]['active'];
        a[5]['active'] = false;
        await this.setState({ medicalDiagnosis: a })
        break;
      case 2:
        a[0]['active'] = false;
        a[2]['active'] = !a[2]['active'];
        a[5]['active'] = false;
        await this.setState({ medicalDiagnosis: a })
        break;
      case 3:
        a[3]['active'] = !a[3]['active'];
        a[5]['active'] = false;
        await this.setState({ medicalDiagnosis: a })
        break;
      case 4:
        a[4]['active'] = !a[4]['active'];
        a[5]['active'] = false;
        await this.setState({ medicalDiagnosis: a })
        break;

      default:
        a[0]['active'] = false; a[1]['active'] = false;
        a[2]['active'] = false; a[3]['active'] = false; a[4]['active'] = false;
        a[index]['active'] = true;
        await this.setState({ medicalDiagnosis: a })
        break;
    }
  }

  updateInput = (e) => this.setState({ [e.target.id]: e.target.value });

  updateCheckInput = (e) => this.setState({ [e.target.id]: e.target.checked });

  ValidateEmail = (inputText) => {
    var mailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (inputText.match(mailformat)) return 'cf-text-input';
    else return 'cf-text-input-invalid';
  }

  render() {
    const { heightInFeet, currentWeightInPounds, goalWeightInPounds } = this.state;
    const { heightInCM, currentWeightInKg, goalWeightInKg } = this.state;
    const { age, gender, imperialMetric, bodyFat, nutritionalPrefLowCarb, firstName, email, recieveEmail } = this.state;
    const { liftingDaysPerWeek, liftingMinutesPerDay, strengthLevel, cardioDaysPerWeek, cardioMinutesPerDay, cardioLevel } = this.state;
    const { activeJobDayRoutine, fitnessExperience, fitnessLocation, nutritionalPreference, trackingMacros } = this.state;
    const { motivationPerson, otherMotivation, bestHelptoReachGoal, otherHelp, medicalDiagnosis } = this.state;
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

              {/* Imperial  */}
              <div style={{ display: imperialMetric === true ? '' : 'none' }}>
                <div className="iam-text">My Height: <font className="cfgreen">{heightInCM}</font>{heightInCM === 210 ? '+' : ''} cm</div>
                <div className="slider-container" style={{ width: 750, maxWidth: '80%', margin: '0px auto' }}>
                  <PrettoSlider defaultValue={heightInCM} onChange={(e, v) => this.setState({ heightInCM: v })} step={1} min={120} max={210} />
                </div>
                <div className="iam-text">Current Weight: <font className="cfgreen">{currentWeightInKg}</font>{currentWeightInKg === 250 ? '+' : ''} kg</div>
                <div className="slider-container" style={{ width: 750, maxWidth: '80%', margin: '0px auto' }}>
                  <PrettoSlider defaultValue={currentWeightInKg} onChange={(e, v) => this.setState({ currentWeightInKg: v })} step={1} min={30} max={250} />
                </div>
                <div className="iam-text">Goal Weight: <font className="cfgreen">{goalWeightInKg}</font>{goalWeightInKg === 250 ? '+' : ''} kg</div>
                <div className="slider-container" style={{ width: 750, maxWidth: '80%', margin: '0px auto' }}>
                  <PrettoSlider defaultValue={goalWeightInKg} onChange={(e, v) => this.setState({ goalWeightInKg: v })} step={1} min={30} max={250} />
                </div>
              </div>

              {/* Metric  */}
              <div style={{ display: imperialMetric === true ? 'none' : '' }}>
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
                        <button onClick={() => this.selectActiveJobRoutine(index)} style={{ width: '100%' }} id={'daily_activity' + index.toString()} className={item.active ? 'cf-button selected' : 'cf-button'} findex="11" kfocus="false">
                          <div className="cf-button-text-wrapper">
                            <div className={item.active ? 'with-desc cf-button-label-selected' : 'with-desc cf-button-label'}>{item.label}</div>
                            <div className="cf-center-desc">
                              <div className={item.active ? 'cf-button-desc-selected' : 'cf-button-desc'}>{item.description}</div>
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
                    fitnessExperience.map((item, index) => (
                      <div key={index} style={{ margin: 5, width: 'calc(23.3333% - 10px)', display: 'inline-block' }}>
                        <button onClick={() => this.selectFitnessExperience(index)} style={{ width: '100%' }} id={'fitnessExperience' + index.toString()} className={item.active ? 'cf-button selected' : 'cf-button'} findex="15" kfocus="false">
                          <div className="cf-button-text-wrapper">
                            <div className={item.active ? 'cf-button-label-selected' : 'cf-button-label'}>{item.label}</div>
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
                    fitnessLocation.map((item, index) => (
                      <div key={index} style={{ margin: 5, width: 'calc(35% - 10px)', display: 'inline-block' }}>
                        <button onClick={() => this.selectFitnessLocation(index)} style={{ width: '100%' }} id={'fitnessLocation' + index.toString()} className={item.active ? 'cf-button selected' : 'cf-button'} findex="19" kfocus="false">
                          <div className="cf-button-text-wrapper">
                            <div className={item.active ? 'cf-button-label-selected' : 'cf-button-label'}>{item.label}</div>
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
                          strengthLevel.map((item, index) => (
                            <div key={index} style={{ margin: 5, width: 'calc(35% - 10px)', display: 'inline-block' }}>
                              <button onClick={() => this.selectStrengthLevel(index)} style={{ width: '100%' }} id={'strengthLevel' + index.toString()} className={item.active ? 'cf-button selected' : 'cf-button'} findex="23" kfocus="false">
                                <div className="cf-button-text-wrapper">
                                  <div className={item.active ? 'with-desc cf-button-label-selected' : 'with-desc cf-button-label'}>{item.label}</div>
                                  <div className="cf-center-desc">
                                    <div className={item.active ? 'cf-button-desc-selected' : 'cf-button-desc'}>{item.description}</div>
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
                        {
                          cardioLevel.map((item, index) => (
                            <div key={index} style={{ margin: 5, width: 'calc(35% - 10px)', display: 'inline-block' }}>
                              <button onClick={() => this.selectCardioLevel(index)} style={{ width: '100%' }} id={'cardioLevel' + index.toString()} className={item.active ? 'cf-button selected' : 'cf-button'} findex="23" kfocus="false">
                                <div className="cf-button-text-wrapper">
                                  <div className={item.active ? 'with-desc cf-button-label-selected' : 'with-desc cf-button-label'}>{item.label}</div>
                                  <div className="cf-center-desc">
                                    <div className={item.active ? 'cf-button-desc-selected' : 'cf-button-desc'}>{item.description}</div>
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

                {
                  nutritionalPreference.map((item, index) => (
                    <div key={index} style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                      <button onClick={() => this.selectNutritionalPreference(index)} style={{ width: '100%' }} className={item.active ? 'cf-button selected' : 'cf-button'} findex="32" kfocus="false">
                        <div className="cf-button-text-wrapper">
                          <div className={item.active ? 'cf-button-label-selected' : 'cf-button-label'}>{item.label}</div>
                        </div>
                      </button>
                    </div>
                  ))
                }

                {
                  (nutritionalPreference[0]['active'] === true || nutritionalPreference[1]['active'] === true || nutritionalPreference[2]['active'] === true)
                    ? <div style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                      <button onClick={() => this.setState({ nutritionalPrefLowCarb: !nutritionalPrefLowCarb })} style={{ width: '100%' }} id="diet" className={nutritionalPrefLowCarb === true ? 'cf-button selected' : 'cf-button'} findex="38" kfocus="false">
                        <div className="cf-button-text-wrapper">
                          <div className={nutritionalPrefLowCarb === true ? 'cf-button-label-selected' : 'cf-button-label'}>Low Carb?</div>
                        </div>
                      </button>
                    </div>
                    : <div />
                }

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

                {
                  medicalDiagnosis.map((item, index) => (
                    <div key={index} style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                      <button onClick={() => this.selectMedicalDiagnosis(index)} style={{ width: '100%' }} id={'conditions' + index.toString()} className={item.active ? 'cf-button selected' : 'cf-button'} findex="44" kfocus="false">
                        <div className="cf-button-text-wrapper">
                          <div className={item.active ? 'cf-button-label-selected' : 'cf-button-label'}>{item.label}</div>
                        </div>
                      </button>
                    </div>
                  ))
                }

              </div>
              <div tabIndex="-1" className="cf-margin"></div>
            </div>

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
                  {
                    motivationPerson.map((item, index) => (
                      <div key={index} style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                        <button onClick={() => this.selectMotivationPerson(index)} style={{ width: '100%' }} id={'motivation' + index.toString()} className={item.active ? 'cf-button selected' : 'cf-button'} findex="45" kfocus="false">
                          <div className="cf-button-text-wrapper">
                            <div className={item.active ? 'cf-button-label-selected' : 'cf-button-label'}>{item.label}</div>
                          </div>
                        </button>
                      </div>
                    ))
                  }
                  <span style={{ display: motivationPerson[5]['active'] === true ? '' : 'none' }}>
                    <div tabIndex="-1" className="cf-margin"></div>
                    <div>
                      <div>
                        <input
                          step="1" findex="57" kfocus="false"
                          type="text" pattern="\w*"
                          style={{ display: 'inline-block' }}
                          className={otherMotivation === '' ? 'cf-text-input-invalid' : 'cf-text-input'}
                          placeholder="What motivates you the most?"
                          onInput={this.updateInput}
                          id="otherMotivation"
                          value={otherMotivation}
                        />
                      </div>
                    </div>
                  </span>
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
                  {
                    bestHelptoReachGoal.map((item, index) => (
                      <div key={index} style={{ margin: 5, width: 'calc(33.3333% - 10px)', display: 'inline-block' }}>
                        <button onClick={() => this.selectBestHelp(index)} style={{ width: '100%' }} id={'help' + index.toString()} className={item.active ? 'cf-button selected' : 'cf-button'} findex="51" kfocus="false">
                          <div className="cf-button-text-wrapper">
                            <div className={item.active ? 'cf-button-label-selected' : 'cf-button-label'}>{item.label}</div>
                          </div>
                        </button>
                      </div>
                    ))
                  }
                  <span style={{ display: bestHelptoReachGoal[5]['active'] === true ? '' : 'none' }}>
                    <div tabIndex="-1" className="cf-margin"></div>
                    <div>
                      <div>
                        <input step="1" style={{ display: 'inline-block' }} className={otherHelp === '' ? 'cf-text-input-invalid' : 'cf-text-input'} type="text" pattern="\w*" placeholder="What would help the most?" onInput={this.updateInput} id="otherHelp" value={otherHelp} findex="57" kfocus="false" />
                      </div>
                    </div></span>
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
                  {
                    trackingMacros.map((item, index) => (
                      <div key={index} style={{ margin: 5, width: 'calc(50% - 10px)', display: 'inline-block' }}>
                        <button onClick={() => this.selectTrackingMacros(index)} style={{ width: '100%' }} id={'experience' + index.toString()} className={item.active ? 'cf-button selected' : 'cf-button'} findex="57" kfocus="false">
                          <div className="cf-button-text-wrapper">
                            <div className={item.active ? 'with-desc cf-button-label-selected' : 'with-desc cf-button-label'}>{item.label}</div>
                            <div className="cf-center-desc">
                              <div className={item.active ? 'cf-button-desc-selected' : 'cf-button-desc'}>{item.description}</div>
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
            <div className="cf-whoSection" style={{ width: '100%' }}>
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
                    <input step="1" style={{ display: 'inline-block' }} className={firstName === '' ? 'cf-text-input-invalid' : 'cf-text-input'} type="text" pattern="\w*" placeholder="First Name" id="firstName" onInput={this.updateInput} value={firstName} findex="61" kfocus="false" />
                  </div>
                </div>
                <div tabIndex="-1" className="cf-margin"></div>
                <div>
                  <div>
                    <input step="1" style={{ display: 'inline-block' }} className={this.ValidateEmail(email)} type="email" placeholder="Valid Email Address" id="email" onInput={this.updateInput} value={email} findex="62" kfocus="false" />
                  </div>
                </div>
                <div tabIndex="-1" className="cf-margin"></div>
                <div className="check-box-container">
                  <input id="recieveEmail" name="recieveEmail" onChange={this.updateCheckInput} checked={recieveEmail} type="checkbox" className="cf-check-box" style={{ position: 'absolute', verticalAlign: 'top' }} findex="63" kfocus="Halse" />
                  <label tabIndex="-1" htmlFor="recieveEmail" className={recieveEmail ? 'cf-check-item cf-ticked' : 'cf-check-item cf-unticked'} style={{ margin: '12px 0px 0px -36px' }}>
                    <span className="checkmark"></span>
                  </label>
                  <h4 className="box-desc" style={{ display: 'inline-block', textAlign: 'left' }}>Heck Yes! Email me my macros and other useful information related to my fat loss goals.</h4>
                </div>
                <div tabIndex="-1" className="cf-margin"></div>
              </div>
              {
                (recieveEmail && this.ValidateEmail(email) === 'cf-text-input' && firstName)
                  ? <button style={{ color: 'rgb(255, 255, 255)', borderRadius: 10, boxShadow: 'rgb(155, 205, 45) 0px 0px 10px', backgroundColor: 'rgb(155, 205, 45)', border: 'medium none' }} id="submit" className="cf-submit" findex="64" kfocus="false">Show Me My Macros &amp;{'\n'} Email Me A Special Offer</button>
                  : <button style={{ color: 'rgb(255, 255, 255)', borderRadius: 10, boxShadow: 'rgb(235, 71, 34) 0px 0px 10px', backgroundColor: 'rgb(235, 71, 34)', border: 'medium none' }} id="submit" className="cf-submit" findex="64" kfocus="false">Please Fill Out{'\n'} Missing Info</button>
              }
              <div tabIndex="-1" className="cf-margin"></div>
              <p className="privacy-policy">Due to the new GDPR law, you must check the box above to proceed. Click <a className="calc-privacy" rel="noopener noreferrer" href="" findex="65" kfocus="false">here</a> to view our Privacy Policy, thanks!</p>
              <div className="cf-margin-big"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}