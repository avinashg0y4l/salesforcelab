(function(){
  // Grab CASE_STUDIES from global scope (loaded from projects-data.js)
  var caseStudies = window.CASE_STUDIES || [];

  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('overlay');
  var menuToggle = document.getElementById('menuToggle');
  
  if (menuToggle && sidebar && overlay) {
    menuToggle.addEventListener('click', function(){
      sidebar.classList.toggle('open');
      overlay.classList.toggle('open');
    });
    overlay.addEventListener('click', function(){
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  }

  // Sub-nav collapse toggles
  document.querySelectorAll('.navgroup-toggle').forEach(function(t){
    t.addEventListener('click', function(e){
      e.preventDefault();
      var sub = document.getElementById(t.getAttribute('data-toggle'));
      if (sub) {
        t.classList.toggle('open');
        sub.classList.toggle('open');
      }
      showSection(t.getAttribute('data-section') || 'projects');
      setActiveLink(t);
    });
  });

  var sections = document.querySelectorAll('.section');
  var navlinks = document.querySelectorAll('.navlink[data-section]');

  function showSection(name){
    sections.forEach(function(s){
      s.classList.toggle('active', s.getAttribute('data-section') === name);
    });
    buildTOC(name);
    window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});
  }

  function setActiveLink(clicked){
    navlinks.forEach(function(l){ l.classList.remove('active'); });
    if(clicked && clicked.classList.contains('navlink')) clicked.classList.add('active');
  }

  // Handle sidebar navigation links
  navlinks.forEach(function(link){
    link.addEventListener('click', function(e){
      e.preventDefault();
      var target = link.getAttribute('data-section');
      showSection(target);
      setActiveLink(link);
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('open');

      // Category filters
      if(link.hasAttribute('data-filter')){
        var filter = link.getAttribute('data-filter');
        renderProjectGrid(filter);
      }
    });
  });

  // Dynamic Card Template Builder
  function createCardHTML(study) {
    var statusText = study.status === 'completed' ? 'Completed' : (study.status === 'in-progress' ? 'In Progress' : 'Not Started');
    var badgeClass = 'diff-' + study.difficulty.toLowerCase();
    
    var tagHTML = study.tags.map(function(t){
      return '<span class="tag">' + t + '</span>';
    }).join('');

    return `
      <div class="project-card" data-id="${study.id}">
        <div class="pc-top">
          <span class="badge industry">${study.industry}</span>
          <span class="status-pill ${study.status}">
            <span class="status-dot"></span>${statusText}
          </span>
        </div>
        <div class="pc-title">${study.title}</div>
        <div class="pc-scenario">${study.businessProblem}</div>
        <div class="pc-meta">
          ${tagHTML}
          <span class="badge ${badgeClass}">${study.difficulty}</span>
        </div>
        <div class="pc-foot">
          <span>${study.module}</span>
          <span>${study.duration}</span>
        </div>
      </div>
    `;
  }

  // Render Grid Cards
  function renderProjectGrid(filter) {
    var grid = document.getElementById('projectGrid');
    if (!grid) return;
    grid.innerHTML = '';

    var filteredStudies = caseStudies;
    if (filter && filter !== 'all') {
      filteredStudies = caseStudies.filter(function(s) {
        return s.filterCategory === filter;
      });
    }

    filteredStudies.forEach(function(study) {
      var cardDiv = document.createElement('div');
      cardDiv.innerHTML = createCardHTML(study).trim();
      var actualCard = cardDiv.firstChild;
      
      // Add card click listener
      actualCard.addEventListener('click', function() {
        var id = actualCard.getAttribute('data-id');
        loadProjectDetail(id);
        showSection('project-detail');
        navlinks.forEach(function(l){ l.classList.remove('active'); });
      });

      grid.appendChild(actualCard);
    });
  }

  // Render Home Page Featured Card
  function renderFeaturedProject() {
    var container = document.getElementById('featuredProjectContainer');
    if (!container) return;
    
    // Let's feature M2 (PropNest Realty) by default
    var featured = caseStudies.find(function(s){ return s.id === 'propnest'; }) || caseStudies[0];
    if (!featured) return;

    container.innerHTML = '';
    var cardDiv = document.createElement('div');
    cardDiv.innerHTML = createCardHTML(featured).trim();
    var actualCard = cardDiv.firstChild;

    actualCard.addEventListener('click', function() {
      loadProjectDetail(featured.id);
      showSection('project-detail');
      navlinks.forEach(function(l){ l.classList.remove('active'); });
    });

    container.appendChild(actualCard);
  }

  // Dynamically load detailed info into tabs
  function loadProjectDetail(id) {
    var study = caseStudies.find(function(s){ return s.id === id; });
    if (!study) return;

    // Headings & breadcrumb
    document.getElementById('h-pd-title').textContent = study.title;
    
    var eyebrow = document.getElementById('pd-eyebrow');
    if (eyebrow) {
      eyebrow.textContent = 'Module ' + study.module + ' · ' + (study.tags[0] || 'Salesforce Admin');
    }

    var lede = document.getElementById('pd-lede');
    if (lede) {
      var statusColor = study.status === 'completed' ? 'var(--th-green)' : (study.status === 'in-progress' ? 'var(--th-orange)' : 'var(--th-muted)');
      var statusText = study.status === 'completed' ? 'Completed' : (study.status === 'in-progress' ? 'In Progress' : 'Not Started');
      lede.innerHTML = 'Industry: ' + study.industry + ' &nbsp;·&nbsp; Scenario: ' + study.company + ' &nbsp;·&nbsp; Status: <strong style="color:' + statusColor + '">' + statusText + '</strong>';
    }

    // 1. Overview Tab
    var overviewPanel = document.getElementById('pd-overview');
    if (overviewPanel) {
      var constraintsHTML = study.constraints.map(function(c){ return '<li>' + c + '</li>'; }).join('');
      var buildHTML = study.whatYouWillBuild.map(function(b){ return '<li>' + b + '</li>'; }).join('');
      
      overviewPanel.innerHTML = `
        <h3 id="h-pd-overview-problem">Business Problem</h3>
        <p>${study.businessProblem}</p>
        <h3 id="h-pd-overview-objective">Objective</h3>
        <p>${study.objective}</p>
        <h3 id="h-pd-overview-constraints">Constraints & Assumptions</h3>
        <ul>${constraintsHTML}</ul>
        <h3 id="h-pd-overview-build">What You Will Build</h3>
        <ul>${buildHTML}</ul>
      `;
    }

    // 2. Design Tab
    var designPanel = document.getElementById('pd-design');
    if (designPanel) {
      var tableHeaders = study.solutionDesign.tableHeader.map(function(h){ return '<th>' + h + '</th>'; }).join('');
      var tableRows = study.solutionDesign.tableRows.map(function(row){
        var cells = row.map(function(c){ return '<td>' + c + '</td>'; }).join('');
        return '<tr>' + cells + '</tr>';
      }).join('');

      designPanel.innerHTML = `
        <h3 id="h-pd-design-arch">Architecture Overview</h3>
        <div class="callout">
          <span class="callout-title">Architecture Description</span>
          ${study.solutionDesign.architectureOverview}
        </div>
        <h3 id="h-pd-design-objects">Configuration / Objects Schema</h3>
        <table>
          <thead><tr>${tableHeaders}</tr></thead>
          <tbody>${tableRows}</tbody>
        </table>
      `;
    }

    // 3. Decisions Tab
    var decisionsPanel = document.getElementById('pd-decisions');
    if (decisionsPanel) {
      decisionsPanel.innerHTML = '';
      study.decisions.forEach(function(dec){
        var callout = document.createElement('div');
        callout.className = 'callout success';
        callout.innerHTML = `
          <span class="callout-title">${dec.title}</span>
          ${dec.text}
        `;
        decisionsPanel.appendChild(callout);
      });
      if (study.decisions.length === 0) {
        decisionsPanel.innerHTML = '<p>No specific custom architectural decision logs entered for this module.</p>';
      }
    }

    // 4. Implementation Tab
    var implPanel = document.getElementById('pd-implementation');
    if (implPanel) {
      var stepsHTML = study.implementationSteps.map(function(s){ return '<li>' + s + '</li>'; }).join('');
      implPanel.innerHTML = `
        <h3 id="h-pd-impl-steps">Implementation Steps</h3>
        <ol>${stepsHTML}</ol>
      `;
    }

    // 5. Testing Tab
    var testingPanel = document.getElementById('pd-testing');
    if (testingPanel) {
      var testHeaders = study.testingMatrix.tableHeader.map(function(h){ return '<th>' + h + '</th>'; }).join('');
      var testRows = study.testingMatrix.tableRows.map(function(row){
        var cells = row.map(function(c){ return '<td>' + c + '</td>'; }).join('');
        return '<tr>' + cells + '</tr>';
      }).join('');
      var checklistHTML = study.testingMatrix.checklist.map(function(c){ return '<li>' + c + '</li>'; }).join('');

      var screenshotsHTML = '';
      if (study.screenshots && study.screenshots.length > 0) {
        var items = study.screenshots.map(function(scr){
          var placeholderUrl = 'https://placehold.co/600x400/f4f6f9/0176d3?text=' + encodeURIComponent('Placeholder: ' + scr.caption);
          return `
            <div class="screenshot-item" style="margin-bottom: 20px; border: 1px solid var(--th-border); border-radius: 8px; overflow: hidden; background: #fff;">
              <img src="${scr.url}" alt="${scr.caption}" style="width: 100%; display: block; border-bottom: 1px solid var(--th-border); max-height: 450px; object-fit: contain; background: #fcfdfe;" onerror="this.onerror=null; this.src='${placeholderUrl}';">
              <div class="caption" style="padding: 10px 14px; font-size: 13px; font-weight: 600; color: var(--th-navy);">${scr.caption}</div>
            </div>
          `;
        }).join('');
        
        screenshotsHTML = `
          <h3 id="h-pd-testing-evidence" style="margin-top: 30px;">Screenshots & Implementation Evidence</h3>
          <div class="screenshots-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; margin-top: 16px;">
            ${items}
          </div>
        `;
      } else {
        screenshotsHTML = `
          <h3 id="h-pd-testing-evidence" style="margin-top: 30px;">Screenshots & Implementation Evidence</h3>
          <div class="callout" style="border-left-color: var(--th-blue); background: #e3f2fd;">
            <span class="callout-title">No Screenshots Uploaded</span>
            Add your screenshot PNGs to the <code>images/</code> folder and update the <code>screenshots</code> list in <code>projects-data.js</code> to link them.
          </div>
        `;
      }

      testingPanel.innerHTML = `
        <h3 id="h-pd-testing-matrix">Validation Testing Matrix</h3>
        <table>
          <thead><tr>${testHeaders}</tr></thead>
          <tbody>${testRows}</tbody>
        </table>
        <h3 id="h-pd-testing-screenshots">Verification Checklist</h3>
        <ul class="checklist">${checklistHTML}</ul>
        ${screenshotsHTML}
      `;
    }

    // 6. Resume Tab
    var resumePanel = document.getElementById('pd-resume');
    if (resumePanel) {
      var resumeHTML = study.resumeImpact.map(function(r){ return '<li>' + r + '</li>'; }).join('');
      var qaHTML = study.interviewQuestions.map(function(q){ return '<li>' + q + '</li>'; }).join('');

      resumePanel.innerHTML = `
        <h3 id="h-pd-resume-bullets">Resume Impact</h3>
        <ul>${resumeHTML}</ul>
        <h3 id="h-pd-resume-interview">Interview Questions From This Project</h3>
        <ul>${qaHTML}</ul>
      `;
    }

    // Rebuild the right-hand TOC panel for this section
    buildTOC('project-detail');
  }

  // Tabs inside project detail
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      tabs.forEach(function(t){ t.classList.remove('active'); });
      tab.classList.add('active');
      document.querySelectorAll('.tabpanel').forEach(function(p){
        p.classList.toggle('active', p.id === tab.getAttribute('data-tab-target'));
      });
      buildTOC('project-detail');
    });
  });

  // Global search implementation
  var searchInput = document.querySelector('.topbar-search input');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      var query = searchInput.value.toLowerCase().trim();
      var grid = document.getElementById('projectGrid');
      if (!grid) return;

      // Force route to projects page to see search results
      showSection('projects');
      document.querySelectorAll('.navlink').forEach(function(l){
        l.classList.toggle('active', l.getAttribute('data-section') === 'projects');
      });

      // Filter studies matching search terms
      var cards = grid.querySelectorAll('.project-card');
      cards.forEach(function(card) {
        var id = card.getAttribute('data-id');
        var study = caseStudies.find(function(s){ return s.id === id; });
        if (study) {
          var textMatch = study.title.toLowerCase().indexOf(query) !== -1 ||
                            study.businessProblem.toLowerCase().indexOf(query) !== -1 ||
                            study.industry.toLowerCase().indexOf(query) !== -1 ||
                            study.tags.join(' ').toLowerCase().indexOf(query) !== -1;
          card.style.display = textMatch ? '' : 'none';
        }
      });
    });
  }

  // Build right-hand TOC from visible headings in the active section
  function buildTOC(sectionName){
    var sec = document.getElementById('sec-' + sectionName);
    var list = document.getElementById('tocList');
    if (!list) return;
    list.innerHTML = '';
    if(!sec) return;
    var scope = sec;
    var activePanel = sec.querySelector('.tabpanel.active');
    if(activePanel) scope = activePanel;
    var heads = scope.querySelectorAll('h2[id], h3[id]');
    heads.forEach(function(h, i){
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      if(h.tagName === 'H3') a.style.paddingLeft = '24px';
      a.addEventListener('click', function(e){
        e.preventDefault();
        h.scrollIntoView({behavior:'smooth', block:'start'});
        document.querySelectorAll('.toc-list a').forEach(function(x){x.classList.remove('active');});
        a.classList.add('active');
      });
      list.appendChild(a);
    });
  }

  // Initialization
  renderProjectGrid('all');
  renderFeaturedProject();
  buildTOC('home');
})();
