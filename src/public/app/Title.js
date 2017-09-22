import React from 'react';
import ReactDom from 'react-dom';

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 400 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 200;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};


class Title extends React.Component {

  componentDidMount() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  }

  render() {
    return(
      <div className="landing" style = {{ height: this.props.windowHeight * 0.8, width: this.props.windowWidth < 1000 ? this.props.windowWidth * 0.8 : 600, maxWidth: 600 }}>
        <div className="title-container">
          <div className="title">
            <span>Anthony</span>
            <span>Greenheck</span>
          </div>
          <div className="subtitle-container">
            <div className="subtitle">
              <span
                 className="txt-rotate"
                 data-period="7000"
                 data-rotate='[ "Developer", "Simple", "Motorcyclist", "Photographer"]'>
              </span>
              <span className="subtitleSpace">,</span>
              <span
                 className="txt-rotate"
                 data-period="6500"
                 data-rotate='[ "Coder", "Biker", "Traveler", "New Yorker"]'>
              </span>
              <span className="subtitleSpace">,</span>
              <span
                 className="txt-rotate"
                 data-period="6000"
                 data-rotate='[ "Builder", "Creative", "Dog Lover", "Designer"]'>
              </span>
            </div>
          </div>
        </div>
        <div className="links">
          <a href="https://github.com/anthonyemg" target="_blank"><img src="../assets/github.svg" /></a>
          <a href="https://www.linkedin.com/in/anthonygreenheck/" target="_blank"><img src="../assets/linkedin.svg" /></a>
        </div>
        {/* <a href="http://worldfm.io/" target="_blank" className="WorldFMTitle">WorldFM</a> */}
        {/* <img src="https://i.imgur.com/lpSYKFJ.png" height="200"/> */}
        <div className="projects-button faa-pulse animated">
          <span>PROJECTS</span>
          {/* <i className="icon fa fa-chevron-down faa-pulse animated" /> */}
        </div>
        
      </div>
    )
  }
};

export default Title;
