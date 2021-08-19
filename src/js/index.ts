import $ from 'jquery';

$.fn.slider = function(this: JQuery): JQuery {
  const elemPositionTop  = this.position().top,
        elemPositionLeft = this.position().left,
        elemParentNode   = this.parent();

  this.attr('readonly', '');
  this.attr('tabindex', '-1');
  this.addClass('sliderLib__hidden-input')

  const sliderWrapper = $('<div></div>', {
          class: 'slider-lib__wrapper',
        }),
        sliderBar = $('<div></div>', {
          class: 'slider-lib__bar',
        }),
        sliderBarFilled = $('<div></div>', {
          class: 'slider-lib__bar-filled',
        }),
        sliderHandle = $('<div></div>', {
          class: 'slider-lib__handle',
        }),
        sliderTrigger = $('<div></div>', {
          class: 'slider-lib__trigger',
        });

  sliderHandle.append(sliderTrigger);
  sliderBar.append(sliderBarFilled, sliderHandle);
  sliderWrapper.append(sliderBar);
  elemParentNode.append(sliderWrapper);

  sliderWrapper.css({'top': elemPositionTop, 'left': elemPositionLeft});

  return this;
};

let tallest = $('input').slider();
