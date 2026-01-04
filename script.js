document.addEventListener("DOMContentLoaded", function () {
  const groups = document.querySelectorAll(".content-wrapper");
  const loadMoreBtn = document.getElementById("loadMoreButton");
  
  let currentGroup = 0;
  const groupsPerLoad = 3; // Load 1 full section at a time

  function showGroups() {
    for (let i = currentGroup; i < currentGroup + groupsPerLoad; i++) {
      if (groups[i]) {
        groups[i].style.display = 'block';
      }
    }
    
    currentGroup += groupsPerLoad;

    if (currentGroup >= groups.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

  groups.forEach(group => group.style.display = 'none');

  showGroups();

  loadMoreBtn.addEventListener("click", showGroups);
});