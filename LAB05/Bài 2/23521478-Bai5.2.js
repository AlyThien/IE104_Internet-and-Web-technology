const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i++) { /*MSSV: 23521478 - Cau 2.1*/
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${i}.jpg`);
  newImage.onclick = function(e) { /*MSSV: 23521478 - Cau 2.2*/
    displayedImage.setAttribute('src', e.target.src);
  }
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function() { /*MSSV: 23521478 - Cau 2.3*/
  const btnClass = btn.getAttribute('class'); 
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'; 
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'; 
  }
}
