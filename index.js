const selectSmiley = (evt) => {
    evt.target.classList.add('btn-smiley--selected');
  };
  
  document.querySelector('#smiley1').addEventListener('click', selectSmiley);
  document.querySelector('#smiley2').addEventListener('click', selectSmiley);
  document.querySelector('#smiley3').addEventListener('click', selectSmiley);
  document.querySelector('#smiley4').addEventListener('click', selectSmiley);
  document.querySelector('#smiley5').addEventListener('click', selectSmiley);
