/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
Name : Purabi Panigrahy
*/


//Number of students displayed in each page is 9, stored in itemsPerPage
const itemsPerPage = 9;


/* This function renders the content of the page passed as 2nd parameter from the data passed
 as 1st parameter*/

function showPage(list, page) {
 
   //First index of the student display on page
   const startIndex = (page  * itemsPerPage) - itemsPerPage ;

   //Last index of the student display on page
   const endIndex = page  * itemsPerPage ;

   // Element with a class of `student-list` is assigned to studentList variable
   const studentList = document.querySelector('.student-list');

   
   // The innerHTML property of studentList set to an empty string
    studentList.innerHTML = "";
 
   // loop over the length of the `list` parameter
   for(let i = 0; i < list.length; i++) {

     // Checks to display the proper students
     if ( i >= startIndex && i < endIndex ){

      /* create the DOM elements needed to display the student at that index, 
      which we will assign to a variable named studentItem.*/
      let studentItem = `<li class="student-item cf">
                          <div class="student-details">
                            <img class="avatar" src="${data[i].picture.thumbnail}" alt="Profile Picture">
                            <h3>${data[i].name.first} ${data[i].name.last}</h3>
                            <span class="email">${data[i].email}</span>
                          </div>
                          <div class="joined-details">
                            <span class="date">Joined ${data[i].registered.date}</span>
                          </div>
                        </li>`
                        

      // insert studentItem into the DOM on the studentList
      studentList.insertAdjacentHTML('beforeend', studentItem);
      }
    }
 }

 //Call function
 showPage(data, 1);

/*
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {

  // create a variable to calculate the number of pages needed
  let numOfPages = Math.ceil(list.length / itemsPerPage);

  // select the element with a class of `link-list` and assign it to linkList
   const linkList = document.querySelector('.link-list');

  // set the innerHTML property of linkList to an empty string
  linkList.innerHTML = "";

  // loop over the number of pages needed
  for (let i = 1; i <= numOfPages; i++){

    let button = `<li>
    <button type="button">${i}</button>
    </li>`;
   
    linkList.insertAdjacentHTML('beforeend', button);
  }

  const firstButton = document.querySelector('button');
  firstButton.className = 'active';

  //create an event listener on linkList that will be called when there is a click event.
  linkList.addEventListener('click', (e) => {

    //checks if the tagName of the event target is a BUTTON elemen
    if(e.target.tagName === "BUTTON"){
     document.querySelector(".active").className = "";
     e.target.className = "active";
     const pageNumber = parseInt(e.target.textContent);
     showPage(list, pageNumber);

    }
  })
}


// Call function
addPagination(data);
