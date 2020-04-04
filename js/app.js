const sectionOne = document.querySelector('#section1');
const sectionTwo = document.querySelector('#section2');
const sectionThree = document.querySelector('#section3');
const sectionFour = document.querySelector('#section4');
const navList = document.querySelector('#navbar__list');
const hamBurg = document.querySelector('.container');
const barOne = document.querySelector('.bar1');
const barTwo = document.querySelector('.bar2');
const barThree = document.querySelector('.bar3');


const sectionArr = [sectionOne, sectionTwo, sectionThree, sectionFour];

hamBurg.addEventListener('click', createList);
window.addEventListener('scroll', makeSectionActive);



/**
* @description Listener for the hamburger clcik event
* @param event
*/

function createList(e) {

  barOne.classList.toggle('change1');
  barTwo.classList.toggle('change2');
  barThree.classList.toggle('change3');
//TODO: add interaction to hamburger


  sectionArr.forEach(function(item) {
    let li = document.createElement('li'); 
    let link = document.createElement('a');
    li.className = item.id;
    link.setAttribute("onfocus", "setBgColor(this)")
    link.href = `${item.id}`;
    link.textContent = item.firstElementChild.firstElementChild.textContent;
    link.className = "menu__link";
    li.appendChild(link);
    navList.appendChild(li);
  
    });
//TODO: create list and append to NavBar

    let lists = document.querySelectorAll('li');
    let links = document.querySelectorAll('.menu__link');

    links.forEach( link => {
      link.addEventListener('click', disableLinkDefault);
      function disableLinkDefault(e) {
        e.preventDefault();
      }
    }
    );
 //TODO: Prevent default in the <a> tag

    lists.forEach( list => {
      list.addEventListener('click', moveToSection);
      function moveToSection(e) {
        sectionArr.forEach(unit => {
          if (list.className == unit.id) {
              unit.scrollIntoView();
         }
        })
      }
    }
    );
 //TODO: to bring corresponding section to view when navbar is clicked.
}

/**
* @description Listener for the scroll and make respective section in viewport active
* @param event
*/

function makeSectionActive(e) {
  sectionArr.forEach(unit => {
  let bounding = unit.getBoundingClientRect();
  let sectionTop = bounding.top;
  let SectionBottom = bounding.bottom;
  let sectionRight = bounding.right;
  let sectionLeft = bounding.left;
  if (
    sectionTop  >= 0 &&
    sectionLeft >= 0 && sectionRight <= (window.innerWidth || document.documentElement.clientWidth) && SectionBottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      unit.classList.add('active-section');

      navList.childNodes.forEach( arg => { arg.childNodes[0].classList.remove("active-nav");
  if (navList.childNodes.className == unit.id) {
    navList.childNodes.classList.add('active-nav');
  } else {
    navList.childNodes.classList.remove('active-nav');
  }

} )
    }  else {
      unit.classList.remove('active-section');
    }
//TODO: add interaction to the section is in viewport

}
  );

}

function setBgColor(e){
  navList.childNodes.forEach( arg => arg.childNodes[0].classList.remove('active-nav'));
  e.classList.add('active-nav');
}
//TODO: add interaction when nav element is clicked











