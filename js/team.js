let teamContainer = document.querySelector('.team__container-slider');
let nextArrow = document.querySelector('.team__container-slider-img-next');
let previousArrow = document.querySelector('.team__container-slider-img-previous');
let number;

function teamSliderOpacity(event) {
    let teamSliderEl = document.querySelector('.team__slider');
    let teamEl = teamSliderEl.children;

    for(let i = 0; i < teamSliderEl.children.length; i++) {
        teamEl = teamSliderEl.children[i];
    
        if(teamEl.classList.contains('bg-color') == false ) {
            number = i;
        } 
    }
        
    if(event.target == previousArrow && number == 0 ) {
        teamEl = teamSliderEl.lastElementChild;
        teamEl.classList.remove('bg-color');
        teamEl.classList.add('team__slider-underline');
    
        teamEl = teamSliderEl.firstElementChild;
        teamEl.classList.add('bg-color');
        teamEl.classList.remove('team__slider-underline');
    }
    
    if(event.target == nextArrow && number == teamSliderEl.children.length - 1) {
        teamEl = teamSliderEl.lastElementChild;
        teamEl.classList.add('bg-color');
        teamEl.classList.remove('team__slider-underline');
    
        teamEl = teamSliderEl.firstElementChild;
        teamEl.classList.remove('bg-color');
        teamEl.classList.add('team__slider-underline');
    }

    for(i = 0; i < teamSliderEl.children.length; i++) {
        teamEl = teamSliderEl.children[i];
        
        if(teamEl.classList.contains('bg-color') == false && event.target == previousArrow && (number >0 && number <= teamSliderEl.children.length - 1)) {
            teamEl.classList.add('bg-color');
            teamEl.classList.remove('team__slider-underline');

            teamEl = teamSliderEl.children[i - 1];
            teamEl.classList.remove('bg-color');
            teamEl.classList.add('team__slider-underline');
            return ;
        } 

        if(teamEl.classList.contains('bg-color') == false && event.target == nextArrow && (number >=0 && number < teamSliderEl.children.length - 1)) {
            teamEl.classList.add('bg-color');
            teamEl.classList.remove('team__slider-underline');

            teamEl = teamSliderEl.children[i + 1];
            teamEl.classList.remove('bg-color');
            teamEl.classList.add('team__slider-underline');
            return ;
        } 
    }
}

function teamSliderBigImg(event) {
    let teamSliderBig = document.querySelector('.team__slider-big-img');
    let teamBigImg = teamSliderBig.children;

    if(event.target == previousArrow && number == 0) {
        teamBigImg = teamSliderBig.lastElementChild;
        teamBigImg.classList.remove('team-opacity');
    
        teamBigImg = teamSliderBig.firstElementChild;
        teamBigImg.classList.add('team-opacity');
    }
    
    else if(event.target == nextArrow && number == teamSliderBig.children.length - 1) {
        teamBigImg = teamSliderBig.lastElementChild;
        teamBigImg.classList.add('team-opacity');
    
        teamBigImg = teamSliderBig.firstElementChild;
        teamBigImg.classList.remove('team-opacity');
    }

    for(let i = 0; i < teamSliderBig.children.length; i++) {
        teamBigImg = teamSliderBig.children[i];
        
        if(teamBigImg.classList.contains('team-opacity') == false && event.target == previousArrow && (number >0 && number <= teamSliderBig.children.length - 1)) {
            teamBigImg.classList.add('team-opacity');

          teamBigImg = teamSliderBig.children[i - 1];
          teamBigImg.classList.remove('team-opacity');
          return ;
        } 
    
        if(teamBigImg.classList.contains('team-opacity') == false && event.target == nextArrow && (number >=0 && number < teamSliderBig.children.length - 1)) {
            teamBigImg.classList.add('team-opacity');

          teamBigImg = teamSliderBig.children[i + 1];
          teamBigImg.classList.remove('team-opacity');
          return ;
        } 
      }
    
}

function teamCardText(event) {
    let teamCardTextEl = document.querySelector('.team__description');
    let teamText = teamCardTextEl.children;

    if(event.target == previousArrow && number == 0) {
        teamText = teamCardTextEl.lastElementChild;
        teamText.classList.remove('team-opacity');
    
        teamText = teamCardTextEl.firstElementChild;
        teamText.classList.add('team-opacity');
    }
    
    else if(event.target == nextArrow && number == teamCardTextEl.children.length - 1) {
        teamText = teamCardTextEl.lastElementChild;
        teamText.classList.add('team-opacity');
    
        teamText = teamCardTextEl.firstElementChild;
        teamText.classList.remove('team-opacity');
    }

    for(let i = 0; i < teamCardTextEl.children.length; i++) {
        teamText = teamCardTextEl.children[i];
        
        if(teamText.classList.contains('team-opacity') == false && event.target == previousArrow && (number >0 && number <= teamCardTextEl.children.length - 1)) {
            teamText.classList.add('team-opacity');

          teamText = teamCardTextEl.children[i - 1];
          teamText.classList.remove('team-opacity');
          return ;
        } 
    
        if(teamText.classList.contains('team-opacity') == false && event.target == nextArrow && (number >=0 && number < teamCardTextEl.children.length - 1)) {
            teamText.classList.add('team-opacity');

          teamText = teamCardTextEl.children[i + 1];
          teamText.classList.remove('team-opacity');
          return ;
        } 
    }
}

function teamSliderListener(event) {
    teamSliderOpacity(event);
    teamSliderBigImg(event);
    teamCardText(event);
}
teamContainer.addEventListener('click', teamSliderListener);