
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
        //check if the target element does not have a .active_menu_link class, Then add it
        if(!event.target.classList.contains('active_menu_link')){
            //1- Remove .active_menu_link From all <a> Elements
            const LinkElements = this.querySelectorAll('.menu__link');
            for(linkElement of LinkElements){
                if(linkElement.classList.contains('active_menu_link')){
                    linkElement.classList.remove('active_menu_link');
                    //Scroll to the selecetd Section
                    document.querySelector(event.target.getAttribute('href')).scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    
                }
            }
            //2-Then add it
            event.target.classList.add('active_menu_link');
            

        }
    }
});


///////////////////////////////////////////////////
/////// Create Nav Menu Elemetns End Here/////////////////
///////////////////////////////////////////////////

///////////////////////////////////////////////////
/////// Create Scroll event Listener Start Here/////////////////
///////////////////////////////////////////////////
window.addEventListener('scroll' , function(event){
    
    //Loop for each section
    for(section of sections){
        //Check if current Section in the view Port
        if(section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top <= 300){
            //Remove All Active class from the another Sections
            for(cureentSection of sections){
                //Check if current Section contain active class
                if(cureentSection.classList.contains('your-active-class')){
                    //Then remove it
                    cureentSection.classList.remove('your-active-class');

                }
            }
            //Then add Active class to the section in veiw port
            section.classList.add('your-active-class');
        }
    }
     
    
});

///////////////////////////////////////////////////
/////// Create Scroll event Listener End Here/////////////////
///////////////////////////////////////////////////
