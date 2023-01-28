import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  


  const config = readBlockConfig(block);
  console.log(config);
  block.textContent = '';

  // fetch nav content
  const navPath = config.nav || '/nav';
  const resp = await fetch(`${navPath}.plain.html`);

  if (resp.ok) {
    const html = await resp.text();

    // decorate nav DOM
    const nav = document.createElement('nav');
    nav.id = 'nav';
    nav.innerHTML = html;

    const classes = ['brand', 'sections', 'tools'];
    classes.forEach((c, i) => {
      const section = nav.children[i];
      if (section) section.classList.add(`nav-${c}`);
    });

    const navSections = nav.querySelector('.nav-sections');
    if (navSections) {
      navSections.querySelectorAll(':scope > ul > li').forEach((navSection) => {
        if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
        navSection.addEventListener('click', () => {
          // if (MQ.matches) {
          //   const expanded = navSection.getAttribute('aria-expanded') === 'true';
          //   toggleAllNavSections(navSections);
          //   navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
          // }
        });
      });
    }

    // hamburger for mobile
    // const hamburger = document.createElement('div');
    // hamburger.classList.add('nav-hamburger');
    // hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
    //     <span class="nav-hamburger-icon"></span>
    //   </button>`;
    // hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
    // nav.prepend(hamburger);
    // nav.setAttribute('aria-expanded', 'false');
    // // prevent mobile nav behavior on window resize
    // toggleMenu(nav, navSections, MQ.matches);
    // MQ.addEventListener('change', () => toggleMenu(nav, navSections, MQ.matches));

    decorateIcons(nav);
    block.append(nav);
  }
}


