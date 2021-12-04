
///////////////////////////////////////////////////
/////// Create Nav Menu Elemetns Start Here/////////////////
///////////////////////////////////////////////////

//Query the All section
const sections = document.querySelectorAll('section');

//Create Fragment that will be contain elements
const navFragment = document.createDocumentFragment();

//Ul Element
const navUl = document.getElementById('navbar__list');


//Loop on each section to get the data
for(section of sections){
    const liItem = document.createElement('li');
    const liLink = document.createElement('a');
    liLink.setAttribute('href' , '#' + section.getAttribute('id'));
    liLink.textContent = section.getAttribute('id');
    
    liItem.appendChild(liLink);

    navFragment.appendChild(liItem);
}

navUl.appendChild(navFragment);
///////////////////////////////////////////////////
/////// Create Nav Menu Elemetns End Here/////////////////
///////////////////////////////////////////////////