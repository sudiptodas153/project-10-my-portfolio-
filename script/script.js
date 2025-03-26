const homeClick = () => {
    const home = document.getElementById('home');
    const myProject= document.getElementById('myProject');
    const blogs = document.getElementById('blog');
    const skills = document.getElementById('skill');
    home.classList.add('active');
    skills.classList.remove('active');
    myProject.classList.remove('active');
    blogs.classList.remove('active');
    
}

const skillsClick = () => {  
    const skills = document.getElementById('skill');
    const home = document.getElementById('home');
    const myProject= document.getElementById('myProject');
    const blogs = document.getElementById('blog');
    skills.classList.add('active');
    home.classList.remove('active');
    myProject.classList.remove('active');
    blogs.classList.remove('active');
}

const myProjects = () => {
    const myProject= document.getElementById('myProject');
    const home = document.getElementById('home');  
    const blogs = document.getElementById('blog');
    const skills = document.getElementById('skill');   
    myProject.classList.add('active');
    skills.classList.remove('active');
    home.classList.remove('active');
    blogs.classList.remove('active');
}

const blogs = () => {   
    const blogs = document.getElementById('blog');
    const home = document.getElementById('home');
    const myProject= document.getElementById('myProject');
    const skills = document.getElementById('skill');
    blogs.classList.add('active');
    skills.classList.remove('active');
    home.classList.remove('active');
    myProject.classList.remove('active');
    
}
