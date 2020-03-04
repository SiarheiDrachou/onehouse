let workSection = document.querySelector('.work');
let next = document.querySelector('.work__next-img');
let previous = document.querySelector('.work__previous-img');
let cardTextNumber, paginationNumber, numberDottedPagination;

function sliderCard(event) {
  let workCardText = document.querySelector('.work__container-description-card');
  let cardText = workCardText.children;

  for(let i = 0; i < workCardText.children.length; i++) {
    cardText = workCardText.children[i];

    if(cardText.classList.contains('opacity') == false ) {
      cardTextNumber = i;
    } 
  }

  for(let i = 0; i < workCardText.children.length; i++) {
    cardText = workCardText.children[i];
    
    if(cardText.classList.contains('opacity') == false && event.target == previous && (cardTextNumber >0 && cardTextNumber <= workCardText.children.length - 1)) {
      cardText.classList.toggle('opacity');

      cardText = workCardText.children[i - 1];
      cardText.classList.toggle('opacity');
      return ;
    } 

    if(cardText.classList.contains('opacity') == false && event.target == next && (cardTextNumber >=0 && cardTextNumber < workCardText.children.length - 1)) {
      cardText.classList.toggle('opacity');

      cardText = workCardText.children[i + 1];
      cardText.classList.toggle('opacity');
      return ;
    } 
  }
}


function sliderPagination(event) {
  let workPagination = document.querySelector('.work__container');
  let pagination = workPagination.children;

  for(let i = 0; i < workPagination.children.length; i++) {
    pagination = workPagination.children[i];

    if(pagination.classList.contains('work__container-number--active-circle') == true ) {
      paginationNumber = i;
    } 
  }
  for(let i = 0; i < workPagination.children.length; i++) {
    pagination = workPagination.children[i];
    
    if(pagination.classList.contains('work__container-number--active-circle') == true && event.target == previous && (paginationNumber >0 && paginationNumber <= workPagination.children.length - 1)) {
        pagination.classList.toggle('work__container-number--active-circle');
        pagination.classList.toggle('work__container-number--active');

        pagination = workPagination.children[i - 2];
        pagination.classList.toggle('work__container-number--active-circle');

        pagination = workPagination.children[i - 1];
        pagination.classList.toggle('work__container-dashed--active');
      return ;
    } 

    if(pagination.classList.contains('work__container-number--active-circle') == true && event.target == next && (paginationNumber >=0 && paginationNumber < workPagination.children.length - 1)) {
        pagination.classList.toggle('work__container-number--active-circle');
  
        pagination = workPagination.children[i + 2];
        pagination.classList.toggle('work__container-number--active-circle');
        pagination.classList.toggle('work__container-number--active');

        pagination = workPagination.children[i + 1];
        pagination.classList.toggle('work__container-dashed--active');
      return ;
    } 
  }
}

function workListener(event) {
  sliderPagination(event);
  sliderCard(event);
}
workSection.addEventListener('click', workListener);