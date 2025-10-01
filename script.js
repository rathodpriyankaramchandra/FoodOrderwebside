function updateResume(){
  const defaultAbout = "Short summary about yourself will appear here.";

  // Main Resume Fields
  document.getElementById('resName').innerText = document.getElementById('name').value || "Your Name";
  document.getElementById('resAddress').innerText = document.getElementById('address').value || "Address";
  document.getElementById('resEmail').innerText = document.getElementById('email').value || "Email";
  document.getElementById('resPhone').innerText = document.getElementById('phone').value || "Phone";
  document.getElementById('resAbout').innerText = document.getElementById('about').value || defaultAbout;

  fillList('skills','resSkills');
  fillList('projects','resProjects');
  fillList('experience','resExperience');
  fillList('education','resEducation');

  // Top Notes Paragraphs
  document.getElementById('resAboutTop').innerText = document.getElementById('about').value || defaultAbout;
  document.getElementById('resSkillsTop').innerText = document.getElementById('skills').value || "Add your skills as descriptive paragraph here.";
  document.getElementById('resProjectsTop').innerText = document.getElementById('projects').value || "Add your project details here.";
  document.getElementById('resExperienceTop').innerText = document.getElementById('experience').value || "Add your work experience here.";

  // Profile picture
  const fileInput = document.getElementById('profilePic');
  const resPic = document.getElementById('resPic');
  if(fileInput.files && fileInput.files[0]){
    const reader = new FileReader();
    reader.onload = function(e){
      resPic.src = e.target.result;
      resPic.style.display = "block";
    }
    reader.readAsDataURL(fileInput.files[0]);
  }
}

function fillList(inputId, ulId){
  const ul = document.getElementById(ulId);
  ul.innerHTML = '';
  const items = document.getElementById(inputId).value.split(',');
  items.forEach(item=>{
    if(item.trim()!==''){
      const li = document.createElement('li');
      li.innerText = item.trim();
      ul.appendChild(li);
    }
  });
}

function downloadPDF(){
  const element = document.getElementById('resumePreview');
  html2pdf().set({ margin:0.5, filename:'Resume.pdf', html2canvas:{scale:2} }).from(element).save();
}

function changeTheme(theme){
  if(theme==='dark'){
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

function toggleNotes(){
  const notes = document.getElementById('topNotes');
  const btn = document.querySelector('.toggle-notes-btn');
  if(notes.style.display === "none"){
    notes.style.display = "flex";
    btn.innerText = "Hide Info";
  } else {
    notes.style.display = "none";
    btn.innerText = "Show Info";
  }
}
