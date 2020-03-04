let examplesSection = document.querySelector('.examples');
let sliderSmallTarget = document.querySelector('.examples__container-slaider--small-all');
let arrowNext = document.querySelector('.arrow-next');
let arrowPrevious = document.querySelector('.arrow-previous');
let numberSmall, numberBig, numberCardText, numberPagination, numberSmallEl;

function sliderBigOpacity(event) {
  let examplesBigImg = document.querySelector('.examples__container-slider-big');
  let imgBig = examplesBigImg.children;

  for(i = 0; i < examplesBigImg.children.length; i++) {
    imgBig = examplesBigImg.children[i];

    if(imgBig.classList.contains('examples-opacity') == false ) {
      numberBig = i;
    } 
  }

  if(event.target == arrowPrevious && numberBig == 0 ) {
    imgBig = examplesBigImg.lastElementChild;
    imgBig.classList.remove('examples-opacity');

    imgBig = examplesBigImg.firstElementChild;
    imgBig.classList.add('examples-opacity');
  }

  if(event.target == arrowNext && numberBig == examplesBigImg.children.length - 1 ) {
    imgBig = examplesBigImg.lastElementChild;
    imgBig.classList.add('examples-opacity');

    imgBig = examplesBigImg.firstElementChild;
    imgBig.classList.remove('examples-opacity');
  }

  for(let i = 0; i < examplesBigImg.children.length; i++) {
    imgBig = examplesBigImg.children[i];
    
    if(imgBig.classList.contains('examples-opacity') == false && event.target == arrowPrevious && (numberBig >0 && numberBig <= examplesBigImg.children.length - 1)) {
      imgBig.classList.add('examples-opacity');
      
      imgBig = examplesBigImg.children[i - 1];
      imgBig.classList.remove('examples-opacity');
      return ;
    } 

    if(imgBig.classList.contains('examples-opacity') == false && event.target == arrowNext && (numberBig >=0 && numberBig < examplesBigImg.children.length - 1)) {
      imgBig.classList.add('examples-opacity');
      
      imgBig = examplesBigImg.children[i + 1];
      imgBig.classList.remove('examples-opacity');
      return ;
    } 
  }
}

function sliderSmallOpacity(event) {
  let examplesSmallImg = document.querySelector('.examples__container-slaider--small-all');
  let imgSmall = examplesSmallImg.children;

  for(let i = 0; i < examplesSmallImg.children.length; i++) {
    imgSmall = examplesSmallImg.children[i];

    if(imgSmall.classList.contains('examples-opacity') == false ) {
      numberSmallEl = i;
    } 
  }

  if(event.target == arrowPrevious && numberSmallEl == 0 ) {
    imgSmall = examplesSmallImg.lastElementChild;
    imgSmall.classList.remove('examples-opacity');

    imgSmall = examplesSmallImg.firstElementChild;
    imgSmall.classList.add('examples-opacity');
  }

  if(event.target == arrowNext && numberSmallEl == examplesSmallImg.children.length - 1 ) {
    imgSmall = examplesSmallImg.lastElementChild;
    imgSmall.classList.add('examples-opacity');

    imgSmall = examplesSmallImg.firstElementChild;
    imgSmall.classList.remove('examples-opacity');
  }

  for(let i = 0; i < examplesSmallImg.children.length; i++) {
    imgSmall = examplesSmallImg.children[i];
    
    if(imgSmall.classList.contains('examples-opacity') == false && event.target == arrowPrevious && (numberSmallEl >0 && numberSmallEl <= examplesSmallImg.children.length - 1)) {
      imgSmall.classList.add('examples-opacity');
      
      imgSmall = examplesSmallImg.children[i - 1];
      imgSmall.classList.remove('examples-opacity');
      return ;
    } 

    if(imgSmall.classList.contains('examples-opacity') == false && event.target == arrowNext && (numberSmallEl >=0 && numberSmallEl < examplesSmallImg.children.length - 1)) {
      imgSmall.classList.add('examples-opacity');
      
      imgSmall = examplesSmallImg.children[i + 1];
      imgSmall.classList.remove('examples-opacity');
      return ;
    } 
  }
}

function sliderCard(event) {
  let examplesCardText = document.querySelector('.slider-card');
  let cardText = examplesCardText.children;

  for(let i = 0; i < examplesCardText.children.length; i++) {
    cardText = examplesCardText.children[i];

    if(cardText.classList.contains('examples-opacity') == false ) {
      numberCardText = i;
    } 
  }

  if(event.target == arrowPrevious && numberCardText == 0 ) {
    cardText = examplesCardText.lastElementChild;
    cardText.classList.remove('examples-opacity');

    cardText = examplesCardText.firstElementChild;
    cardText.classList.add('examples-opacity');
  }

  if(event.target == arrowNext && numberCardText == examplesCardText.children.length - 1 ) {
    cardText = examplesCardText.lastElementChild;
    cardText.classList.add('examples-opacity');

    cardText = examplesCardText.firstElementChild;
    cardText.classList.remove('examples-opacity');
  }

  for(let i = 0; i < examplesCardText.children.length; i++) {
    cardText = examplesCardText.children[i];
    
    if(cardText.classList.contains('examples-opacity') == false && event.target == arrowPrevious && (numberCardText >0 && numberCardText <= examplesCardText.children.length - 1)) {
      cardText.classList.add('examples-opacity');

      cardText = examplesCardText.children[i - 1];
      cardText.classList.remove('examples-opacity');
      return ;
    } 

    if(cardText.classList.contains('examples-opacity') == false && event.target == arrowNext && (numberCardText >=0 && numberCardText < examplesCardText.children.length - 1)) {
      cardText.classList.add('examples-opacity');

      cardText = examplesCardText.children[i + 1];
      cardText.classList.remove('examples-opacity');
      return ;
    } 
  }
}

function sliderBig(childrenI, childrenJ, sliderBigTarget) {
  let imgBigEl = sliderBigTarget.children;

  for(let i = 0; i < sliderBigTarget.children.length; i++) {
    for(let j = 0; j < sliderBigTarget.children[i].children.length; j++) {
      if(childrenI == i && childrenJ == j) {
        imgBigEl = sliderBigTarget.children[i].children[j];
        imgBigEl.classList.remove('examples-opacity');
      }

      else {
        imgBigEl = sliderBigTarget.children[i].children[j];
        imgBigEl.classList.remove('examples-opacity');
        imgBigEl.classList.add('examples-opacity');
      }

        imgBigEl = sliderBigTarget.children[i].firstElementChild;
        imgBigEl.classList.remove('examples-opacity');
    }
  }
}

function sliderSmall(event) {
  let sliderBigTarget = document.querySelector('.examples__container-slider-big');
  let imgSmallEl = sliderSmallTarget.children;

  for(let i = 0; i < sliderSmallTarget.children.length; i++) {   

    for(let j = 0; j < sliderSmallTarget.children[i].children.length; j++) {
      imgSmallEl = sliderSmallTarget.children[i].children[j];
      imgSmallEl.classList.remove('examples__container-slaider--small-img--passive');
      imgSmallEl.classList.add('examples__container-slaider--small-img');

      if(event.target == imgSmallEl && event.currentTarget) {
        let childrenI = i;
        let childrenJ = j;
        imgSmallEl = event.target;
        imgSmallEl.classList.add('examples__container-slaider--small-img--passive');
        imgSmallEl.classList.remove('examples__container-slaider--small-img');  
        sliderBig(childrenI, childrenJ, sliderBigTarget);
      }

      if(event.target == arrowPrevious || event.target == arrowNext) {
        imgSmallEl = sliderSmallTarget.children[i].firstElementChild;
        imgSmallEl.classList.add('examples__container-slaider--small-img--passive');
        imgSmallEl.classList.remove('examples__container-slaider--small-img');
      }
    }
  }
}

function sliderPagination(event) {
  let examplesPagination = document.querySelector('.examples__container-pagination');
  let pagination = examplesPagination.children;

  for(let i = 0; i < examplesPagination.children.length; i++) {
    pagination = examplesPagination.children[i];

    if(pagination.classList.contains('examples__container-pagination-circle--active') == true ) {
      numberPagination = i;
    } 
  }

  if(event.target == arrowPrevious && numberPagination == 0 ) {
    pagination = examplesPagination.lastElementChild;
    pagination.classList.remove('examples__container-pagination-circle');
    pagination.classList.add('examples__container-pagination-circle--active');

    pagination = examplesPagination.firstElementChild;
    pagination.classList.remove('examples__container-pagination-circle--active');
    pagination.classList.add('examples__container-pagination-circle');
  }

  if(event.target == arrowNext && numberPagination == examplesPagination.children.length - 1 ) {
    pagination = examplesPagination.lastElementChild;
    pagination.classList.add('examples__container-pagination-circle');
    pagination.classList.remove('examples__container-pagination-circle--active');

    pagination = examplesPagination.firstElementChild;
    pagination.classList.remove('examples__container-pagination-circle');
    pagination.classList.add('examples__container-pagination-circle--active');
  }

  for(let i = 0; i < examplesPagination.children.length; i++) {
    pagination = examplesPagination.children[i];
    
    if(pagination.classList.contains('examples__container-pagination-circle--active') == true && event.target == arrowPrevious && (numberPagination >0 && numberPagination <= examplesPagination.children.length - 1)) {
      pagination.classList.add('examples__container-pagination-circle');
      pagination.classList.remove('examples__container-pagination-circle--active');

      pagination = examplesPagination.children[i - 1];
      pagination.classList.add('examples__container-pagination-circle--active');
      pagination.classList.remove('examples__container-pagination-circle');
      return ;
    } 

    if(pagination.classList.contains('examples__container-pagination-circle--active') == true && event.target == arrowNext && (numberPagination >=0 && numberPagination < examplesPagination.children.length - 1)) {
      pagination.classList.add('examples__container-pagination-circle');
      pagination.classList.remove('examples__container-pagination-circle--active');

      pagination = examplesPagination.children[i + 1];
      pagination.classList.add('examples__container-pagination-circle--active');
      pagination.classList.remove('examples__container-pagination-circle');
      return ;
    } 
  }
}

function examplesListener(event) {
  sliderBigOpacity(event);
  sliderSmallOpacity(event);
  sliderCard(event);
  sliderPagination(event);
  sliderSmall(event);
}
examplesSection.addEventListener('click', examplesListener);

function SmallTargetListener(event) {
  sliderSmall(event);
}
sliderSmallTarget.addEventListener('click', SmallTargetListener);