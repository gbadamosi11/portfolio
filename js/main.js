const list = document.querySelector('.nav-list');
const toggleBtn = document.querySelector('#toggle');


toggleBtn.addEventListener('click', function(){
     list.classList.toggle('show-list')
});
