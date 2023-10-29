document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const coursesData = collectCourseData();
  const name = document.getElementById("name").value;
  const mascot = document.getElementById("mascot").value;
  const imageInput = document.getElementById("image");
  const image = imageInput.files[0];
  const caption = document.getElementById("caption").value;
  const personal = document.getElementById("personal-bg").value;
  const professional = document.getElementById("professional-bg").value;
  const academic = document.getElementById("academic-bg").value;
  const webdev = document.getElementById("webdev").value;
  const pcPlatform = document.getElementById("pcPlatform").value;
  const funnyThing = document.getElementById("funny-bg").value;
  const anythingElse = document.getElementById("anything-bg").value;

  const reader = new FileReader();

  reader.onload = function(e) {
    const imageSrc = e.target.result;

    const resultsHTML = generateResultsHTML(
      name,
      mascot,
      imageSrc,
      caption,
      personal,
      professional,
      academic,
      webdev,
      pcPlatform,
      coursesData,
      funnyThing,
      anythingElse
    );

    document.getElementById("content").innerHTML = resultsHTML;
    document.getElementById("reset").style.display = "block";

  };

  
  reader.readAsDataURL(image);
});

function collectCourseData() {
  const courseInputs = document.querySelectorAll('.course-input');
  const courseData = [];

  courseInputs.forEach(input => {
    const courseName = input.value;
    const explanation = input.nextElementSibling.value;

    if (courseName.trim() !== '') {
      courseData.push({ name: courseName, explanation });
    }
  });

  return courseData;
}

function generateResultsHTML(
  name,
  mascot,
  imageSrc,
  caption,
  personal,
  professional,
  academic,
  webdev,
  pcPlatform,
  coursesData,
  funnyThing,
  anythingElse
) {
  const resultsHTML = `
    <div id="results">
      <h2>Your Introduction</h2>
      <p style="text-align: center;"><strong>${name} || ${mascot}</strong></p>
      <img src="${imageSrc}" alt="Image" style="max-width: 100%; height: auto;">
      <p style="font-style: italic; text-align: center; font-size: 14px;">${caption}</p>
      <p style="text-align: left;"><strong>Personal Background:</strong> ${personal}</p>
      <p style="text-align: left;"><strong>Professional Background:</strong> ${professional}</p>
      <p style="text-align: left;"><strong>Academic Background:</strong> ${academic}</p>
      <p style="text-align: left;"><strong>Background in Web Development:</strong> ${webdev}</p>
      <p style="text-align: left;"><strong>Primary Computer Platform:</strong> ${pcPlatform}</p>
      <p><strong>Courses currently taking:</strong></p>
      <ul>
        ${coursesData.map(course => `<li><strong>${course.name}:</strong> ${course.explanation}</li>`).join('')}
      </ul>
      <p style="text-align: left;"><strong>Funny thing?</strong> ${funnyThing}</p>
      <p style="text-align: left;"><strong>Anything else?</strong> ${anythingElse}</p>
      <button type="button" id="start-over" onclick="startOver()">Start Over</button>
    </div>
  `;

  const resultsElement = document.getElementById("results");
  if (resultsElement) {
    document.getElementById("start-over").style.display = "block";
  } else {
    document.getElementById("start-over").style.display = "none";
  }

  document.getElementById("start-over").addEventListener("click", function() {
    const form = document.getElementById("form");
    form.reset();
    document.getElementById("content").innerHTML = ""; // Clear the result content
  });
  

  return resultsHTML;
}

let courseCount = 1; 

function addCourse() {
  const coursesContainer = document.getElementById('course-inputs');
  const newCourseInput = document.createElement('div');
  newCourseInput.classList.add('course-input-row');

  newCourseInput.innerHTML = `
    <input type="text" placeholder="Course" class="course-input" required>
    <input type="text" placeholder="Explanation" class="course-explanation" required>
  `;

  coursesContainer.appendChild(newCourseInput);
  courseCount++; 
}

function removeCourse() {
  const coursesContainer = document.getElementById('course-inputs');
  const courseInputs = coursesContainer.querySelectorAll('.course-input-row');

  if (courseInputs.length > 1) {
    coursesContainer.removeChild(courseInputs[courseInputs.length - 1]);
  }
}

// clears the page and reloads
function startOver() { 
  localStorage.clear(); 
  location.reload();    
}

