
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
    //Create List Item
    const liItem = document.createElement('li');
    //Create a Item
    const liLink = document.createElement('a');
    //Set href to the target section id
    liLink.setAttribute('href' , '#' + section.getAttribute('id'));
    //add style to the nav menu Items
    liLink.setAttribute('class' , 'menu__link');
    //Add text content to a element which will be the same section id
    liLink.textContent = section.getAttribute('id');
    
    //Append the <a> Element to Li item
    liItem.appendChild(liLink);
    // Add the List item to the DocumentFragment
    navFragment.appendChild(liItem);
}
//Add the Document Fragment to Ul
navUl.appendChild(navFragment);

//Add Event listener to menu items
///// I added Event listener to UL rather than <a> Element for PErformance Reasons
navUl.addEventListener('click' , function(event){
    //Make sure The <a> Element Was clicked not ul
    if(event.target.nodeName === 'A'){
        
    }
});


///////////////////////////////////////////////////
/////// Create Nav Menu Elemetns End Here/////////////////
///////////////////////////////////////////////////