/* Source Logic */
let selectCategoryBtn = document.querySelectorAll('.select-category-btn');
// Contribution and Resource Box
const resourceBox = document.getElementById('resourceBox');
const contributionGuidline = document.getElementById('contributionGuideline');
// Resource Showcase Section
const beginnerResourceBox = document.getElementById('beginnerResourceBox');
const intermediateResourceBox = document.getElementById(
	'intermediateResourceBox',
);
const advancedResourceBox = document.getElementById('advancedResourceBox');
const projectsResourceBox = document.getElementById('projectsResourceBox');
// const domains = ["web","web","web"];
const programming = ['c++', 'java', 'python', 'javascript', 'php'];
const programmingLength = programming.length;
const domains = [
  "c++",
  "java",
  "python",
  "javascript",
  "php",
  "frontend",
  "backend",
  "mern",
  "mean",
  "mevn",
  "ruby_on_rails",
  "android",
  "flutter",
  "ios",
  "react_native",
  "general",
  "illustrations",
  "motion",
  "photo",
  "sound",
  "ui-ux",
  "video",
  "ai",
  "computer_vision",
  "deep_learning",
  "machine_learning",
  "big_data",
  "statistics",
  "git",
  "data_structure_&_algorithm",
  "data_management",
  "blockchain",
  "ethical_hacking",
  "Game_dev",
  "robotics",
  "CyberSecurity",
  "linux"
];
let bres = '';
let bdata = '';
let ires = '';
let idata = '';
let ares = '';
let adata = '';
let pres = '';
let pdata = '';
// Contribution Btn
contributionBtn.addEventListener('click', (e) => {
	resourceBox.style.display = 'none';
	contributionGuidline.style.display = 'block';
	contributionBtn.style.backgroundColor = '#6940d3';
	contributionBtn.style.color = 'white';
	for (let j = 0; j < category.length; j++) {
		selectBtn[j].style.backgroundColor = 'white';
		selectBtn[j].style.color = 'black';
	}
	for (let i = 0; i < category.length; i++) {
		let x = category[i].querySelector('.select-option');
		x.style.display = 'none';
	}
});
// Select Category Btn
for (let i = 0; i < selectCategoryBtn.length; i++) {
	selectCategoryBtn[i].addEventListener('click', async (e) => {
		contributionGuidline.style.display = 'none';
		resourceBox.style.display = 'block';
		/* getting domain */
		beginnerResourceBox.innerHTML = '';
		intermediateResourceBox.innerHTML = '';
		advancedResourceBox.innerHTML = '';
		projectsResourceBox.innerHTML = '';
		const value = selectCategoryBtn[i].value;
		console.log(value);
		console.log(domains[i]);
		if (
			value == 'Blockchain' ||
			value == 'ethical_hacking' ||
			value == 'Game_dev' ||
			value == 'robotics' ||
			value == 'CyberSecurity' ||
			value == 'data_structure_&_algorithm' ||
			value == 'database_management' ||
      value == 'git' ||
			value == 'api' ||
      value == 'linux'
		) {
			console.log('hello');
			/* beginner*/
			bres = await fetch(`./data/domains/${value}/beginner.json`);
			bdata = await bres.json();
			/* intermediate */
			ires = await fetch(`./data/domains/${value}/intermediate.json`);
			idata = await ires.json();
			/* advanced */
			ares = await fetch(`./data/domains/${value}/advanced.json`);
			adata = await ares.json();
		} else if (value == 'web' && domains[i] == 'mern') {
			/* beginner*/
			bres = await fetch(
				`./data/domains/${value}/${domains[i]}/beginner.json`,
			);
			bdata = await bres.json();
			/* intermediate */
			ires = await fetch(
				`./data/domains/${value}/${domains[i]}/intermediate.json`,
			);
			idata = await ires.json();
			/* advanced */
			ares = await fetch(
				`./data/domains/${value}/${domains[i]}/advanced.json`,
			);
			adata = await ares.json();
			/*projects*/
			pres = await fetch(
				`./data/domains/${value}/${domains[i]}/projects.json`,
			);
			pdata = await pres.json();
			console.log(pdata);
		} else {
			/* beginner*/
			bres = await fetch(
				`./data/domains/${value}/${domains[i]}/beginner.json`,
			);
			bdata = await bres.json();
			/* intermediate */
			ires = await fetch(
				`./data/domains/${value}/${domains[i]}/intermediate.json`,
			);
			idata = await ires.json();
			/* advanced */
			ares = await fetch(
				`./data/domains/${value}/${domains[i]}/advanced.json`,
			);
			adata = await ares.json();
		}
    
    /* new feature added linux resources*/

    if (value == "Blockchain" || value == "ethical_hacking" || value == "Game_dev" ||value == "robotics" || value == "CyberSecurity" || value == "git" || value == "data_structure_&_algorithm" || value == "database_management" || value == "api" || value == "linux") {
      console.log("hello");
      /* beginner*/
      bres = await fetch(`./data/domains/${value}/beginner.json`);
      bdata = await bres.json();
      /* intermediate */
      ires = await fetch(`./data/domains/${value}/intermediate.json`);
      idata = await ires.json();
      /* advanced */
      ares = await fetch(`./data/domains/${value}/advanced.json`);
      adata = await ares.json();
    }
    else {
      /* beginner*/
      console.log("here");
      bres = await fetch(`./data/domains/${value}/${domains[i]}/beginner.json`);
      bdata = await bres.json();
      /* intermediate */
      ires = await fetch(
        `./data/domains/${value}/${domains[i]}/intermediate.json`
      );
      idata = await ires.json();
      /* advanced */
      ares = await fetch(`./data/domains/${value}/${domains[i]}/advanced.json`);
      adata = await ares.json();
    }

    /* beginner data */
    // later we can have loader
    setTimeout(() => {
      if (bdata != "") {
        for (let i = 0; i < bdata.length; i++) {
          if (bdata[i].type == "docs") {

            beginnerResourceBox.innerHTML += ` 
            <div class="col-6 col-md-4">
            <div class="card m-3" style="width: 100%">
            <img
            src="./assets/images/explore.jpg"
            class="card-img-top img-sz mx-auto"
            alt="..."
            />
            <div class="card-body text-center">
            <h5 class="card-title">${bdata[i].title}</h5>
            <a href="${bdata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
            </div>
            </div>
            </div>`;
					} else {
						beginnerResourceBox.innerHTML += `
            <div class="col-6 col-md-4">
            <div class="card m-3" style="width: 100%">
            <img
            src="./assets/images/content.png"
            class="card-img-top img-sz mx-auto"
            alt="..."
            />
            <div class="card-body text-center">
            <h5 class="card-title">${bdata[i].title}</h5>
            <a href="${bdata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
            </div>
            </div>
            </div>`;
					}
				}
			} else {
				beginnerResourceBox.innerHTML += `<img
                src="./assets/images/empty.jpg"
                class="card-img-top img-sz mx-auto"
                alt="..."
              />`;
			}
			/* Intermediate Resource Box */

			if (idata != '') {
				for (let i = 0; i < idata.length; i++) {
					if (idata[i].type == 'docs') {
						intermediateResourceBox.innerHTML += `
              <div class="col-6 col-md-4">
              <div class="card m-3" style="width: 100%">
              <img
              src="./assets/images/explore.jpg"
              class="card-img-top img-sz mx-auto"
              alt="..."
              />
              <div class="card-body text-center">
              <h5 class="card-title">${idata[i].title}</h5>
              <a href="${idata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
              </div>
              </div>
              </div>`;
					} else {
						intermediateResourceBox.innerHTML += `
            <div class="col-6 col-md-4">
            <div class="card m-3" style="width: 100%">
            <img
            src="./assets/images/content.png"
            class="card-img-top img-sz mx-auto"
            alt="..."
            />
            <div class="card-body text-center">
            <h5 class="card-title">${idata[i].title}</h5>
            <a href="${idata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
            </div>
            </div>
            </div>`;
					}
				}
			} else {
				intermediateResourceBox.innerHTML += `<img
                src="./assets/images/empty.jpg"
                class="card-img-top img-sz mx-auto"
                alt="..."
              />`;
			}
			/* Advanced Resource Box */
			if (adata != '') {
				for (let i = 0; i < adata.length; i++) {
					if (adata[i].type == 'docs') {
						advancedResourceBox.innerHTML += `
            <div class="col-6 col-md-4">
            <div class="card m-3" style="width: 100%">
            <img
            src="./assets/images/explore.jpg"
            class="card-img-top img-sz mx-auto"
            alt="..."
            />
            <div class="card-body text-center">
            <h5 class="card-title">${adata[i].title}</h5>
            <a href="${adata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
            </div>
            </div>
            </div>`;
					} else {
						advancedResourceBox.innerHTML += `
            <div class="col-6 col-md-4">
            <div class="card m-3" style="width: 100%">
            <img
            src="./assets/images/content.png"
            class="card-img-top img-sz mx-auto"
            alt="..."
            />
            <div class="card-body text-center">
            <h5 class="card-title">${adata[i].title}</h5>
            <a href="${adata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
            </div>
            </div>
            </div>`;
					}
				}
			} else {
				advancedResourceBox.innerHTML += `<img
                src="./assets/images/empty.jpg"
                class="card-img-top img-sz mx-auto"
                alt="..."
              />`;
			}

			if (value == 'web' && domains[i] == 'mern') {
				projectsResourceBox.innerHTML = `<h3 class="resource-heading"
>Projects</h3>`;
				//get by class

				for (let i = 0; i < pdata.length; i++) {
					if (pdata[i].type == 'docs') {
						projectsResourceBox.innerHTML += `

              <div class="col-6 col-md-4">
              <div class="card m-3" style="width: 100%">
              <img
              src="./assets/images/explore.jpg"
              class="card-img-top img-sz mx-auto"
              alt="..."
              />
              <div class="card-body text-center">
              <h5 class="card-title">${pdata[i].title}</h5>
              <a href="${pdata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
              </div>
              </div>
              </div>`;
					} else {
						projectsResourceBox.innerHTML += `
            <div class="col-6 col-md-4">
            <div class="card m-3" style="width: 100%">
            <img
            src="./assets/images/content.png"
            class="card-img-top img-sz mx-auto"
            alt="..."
            />
            <div class="card-body text-center">
            <h5 class="card-title">${pdata[i].title}</h5>
            <a href="${pdata[i].link}" class="btn view-more-btn" target="_blank">View More</a>
            </div>
            </div>
            </div>`;
					}
				}
			}
		}, 300);
	});
}
