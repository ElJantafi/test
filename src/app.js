const projects = [
    {
     id : 1 ,
     title : 'Leon agency' ,
     image : 'leon.png',
     link : 'AllProjects/template1/index.html',
    },
    {
     id : 2 ,
     title : 'Jantafi World' ,
     image : 'jantafi.png',
     link : '/AllProjects/template3/index.html'
    },
    {
     id : 3 ,
     title : 'Restaurent Menu' ,
     image : 'menu.png' ,
     link : 'AllProjects/Menu/index.html'
    },
    {
     id : 4 ,
     title : 'Portfolio' ,
     image : 'dev103.png' ,
     link : 'https://phenomenal-wisp-398218.netlify.app/'
    }, 
    {
      id : 5 ,
      title : 'Kasper Agency' ,
      image : 'kasper2.png' ,
      link : 'AllProjects/template2/index.html'
     },
    {
      id : 6 ,
      title : 'Reviews' ,
      image : 'reviews2.png' ,
      link : 'AllProjects/reviews/index.html'
     },
    {
      id : 7 ,
      title : 'Color Flipper' ,
      image : 'colorFlipper.png' ,
      link : 'AllProjects/reviews/index.html'
     },
    {
      id : 8 ,
      title : 'Ecommerce Website' ,
      image : 'ryeh.png' ,
      link : 'AllProjects/ryeh/index.html'
     }
 ];

const li = document.querySelectorAll(".project-nav ul li");
      li.forEach((el) => {
       
        el.onclick = () => {
          li.forEach((e) => e.classList.remove("active"));
          el.classList.add("active");
          alert('the websites still under developement you can only choose \'all\' in the navigation for now . Thanks for your understanding !!')
        };
      });


function addCardsToProjectsSection(projects){
    const projectsDiv = document.querySelector('.projects');
    projects.forEach((e)=>{
        let div = document.createElement('div');
        div.innerHTML  = `
        <div class="box">
        <img src="images/projects/${e.image}" alt="" />
        <div class="info">
          <h3>${e.title}</h3>
          <a href="${e.link}">
          <img src="images/transparency.png" alt="" />
          </a>
          
        </div>
      </div>`;
      projectsDiv.appendChild(div);
        
    })


}

addCardsToProjectsSection(projects)