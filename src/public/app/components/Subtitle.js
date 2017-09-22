import React from 'react';

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
  //delta = type speed
  var delta = 200 - Math.random() * 100;

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

class Subtitle extends React.Component {

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
      <div className="subtitle-container">
        <div className="subtitle">
          <span
             className="txt-rotate"
             data-period="3000"
             data-rotate='[ "Developer", "Simple", "Motorcyclist", "Biker"]'>
          </span>
          <span className="subtitleSpace">,</span>
          <span
             className="txt-rotate"
             data-period="2000"
             data-rotate='[ "Coder","Photographer", "Traveler", "New Yorker"]'>
          </span>
          <span className="subtitleSpace">,</span>
          <span
             className="txt-rotate"
             data-period="3200"
             data-rotate='[ "Builder..", "Creative..", "Dog Lover..", "Designer.."]'>
          </span>
        </div>
      </div>
    )
  }
}


export default Subtitle;
