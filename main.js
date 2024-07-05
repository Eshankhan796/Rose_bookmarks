const topic_container = document.querySelectorAll('.a7');
const topit_select = document.querySelectorAll('.a5 a');

window.onscroll = () => {
  topic_container.forEach(container => {
    let top = window.scrollY;
    let offset = container.offsetTop - 100;
    let height = container.offsetHeight;
    const id = container.getAttribute('id');
    if (top >= offset && top < offset + height) {
      topit_select.forEach(links => {
        links.classList.remove('active');
        document.querySelector('.a5 a[href*=' + id + ']').classList.add('active');
      })
    }
  })
};