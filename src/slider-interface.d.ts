interface sliderOptions {
    outputSelector: string;
}
  
interface sliderGlobalOptions {
    options?: sliderOptions;
}

interface sliderFunction {
    (options?: object): JQuery;
}

interface slider extends sliderGlobalOptions, sliderFunction { }
  
interface JQuery {
    slider: slider;
}