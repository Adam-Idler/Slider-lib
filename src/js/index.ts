import $ from 'jquery';

$.fn.slider = function(this: JQuery): JQuery {
  const input: HTMLElement = this[0],
        inputPositionTop: number  = input.offsetTop,
        inputPositionLeft: number = input.offsetLeft,
        inputParentNode: Node & ParentNode = input.parentNode;

  input.setAttribute('readonly', '');
  input.setAttribute('tabindex', '-1');
  input.classList.add('sliderLib__hidden-input');

  const sliderWrapper: HTMLElement = document.createElement('div'),
        sliderBar: HTMLElement = document.createElement('div'),
        sliderBarFilled: HTMLElement = document.createElement('div'),
        sliderHandle: HTMLElement = document.createElement('div'),
        sliderTrigger: HTMLElement = document.createElement('div');

  sliderWrapper.classList.add('slider-lib__wrapper');
  sliderBar.classList.add('slider-lib__bar');
  sliderBarFilled.classList.add('slider-lib__bar-filled');
  sliderHandle.classList.add('slider-lib__handle');
  sliderTrigger.classList.add('slider-lib__trigger');

  sliderHandle.appendChild(sliderTrigger);
  sliderBar.appendChild(sliderBarFilled);
  sliderBar.appendChild(sliderHandle);
  sliderWrapper.appendChild(sliderBar);
  inputParentNode.appendChild(sliderWrapper);

  sliderWrapper.style.cssText = `top: ${inputPositionTop}; left: ${inputPositionLeft}`;

  return this;
};

let tallest = $('input').slider();
