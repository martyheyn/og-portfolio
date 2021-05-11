gsap.registerPlugin(ScrollTrigger);

// Grab body and not scroll for 8 seconds
// function disableScroll() {
//   // Get the current page scroll position
//   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
//     // if any scroll is attempted,
//     // set this to the previous value
//     (window.onscroll = function () {
//       window.scrollTo(scrollLeft, scrollTop);
//     });
// }

// disableScroll();

// setTimeout(function () {
//   window.onscroll = function () {};
// }, 11000);

// Typing Animation
const tl = gsap.timeline();

// Caret timeline
const caretTl = gsap.timeline({ repeat: -1 });

caretTl
  .to('#big-caret', {
    scale: 1.1,
    y: 5,
    ease: 'power3.out',
    duration: 1,
  })
  .to('#big-caret', {
    scale: 1,
    y: 0,
    ease: 'power3.in',
    duration: 1,
  });

gsap.to('#big-caret', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'bottom top',
    // markers: true,
  },
  // opacity: 0,
  display: 'none',
});

// Cursor
tl.fromTo(
  '#cursor',
  { autoAlpha: 0, x: -10 },
  { autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1) }
)
  .to('#text', {
    text: {
      value:
        'Hello World,<br/> My name is Marty<br/> I am a fullstack developer',
    },
    duration: 8,
    delay: 1,
    // ease: SteppedEase.config(200),
    ease: 'none',
  })
  .from(
    '#big-caret',
    {
      opacity: 0,
      duration: 1.5,
      ease: 'back.out(1.4)',
      y: -100,
      delay: 2,
    },
    '=0'
  )
  .to(
    '#cursor',
    {
      opacity: 0,
      display: 'none',
      delay: 1,
    },
    '=0'
  )
  .add(caretTl, '=0');

// Projects scroll trigger
gsap.from('.project-transition', {
  scrollTrigger: {
    trigger: '.project-transition',
    start: 'center bottom',
    toggleActions: 'play none none pause',
    // markers: true,
  },
  x: 100,
  opacity: 0,
  duration: 1.2,
  stagger: 1.3,
  overflow: 'hidden',
});

// Project img Hover
let img1 = document.querySelector('#project-img1');
let img2 = document.querySelector('#project-img2');
let img3 = document.querySelector('#project-img3');

// Mouse enters
img1.addEventListener('mouseenter', () => {
  gsap.to('#project-img1', {
    duration: 1,
    width: '105%',
  });
});

img2.addEventListener('mouseenter', () => {
  gsap.to('#project-img2', {
    duration: 1,
    width: '105%',
  });
});

img3.addEventListener('mouseenter', () => {
  gsap.to('#project-img3', {
    duration: 1,
    width: '105%',
  });
});

// Mouse leaves
img1.addEventListener('mouseleave', () => {
  gsap.to('#project-img1', {
    duration: 1,
    width: '100%',
  });
});

img2.addEventListener('mouseleave', () => {
  gsap.to('#project-img2', {
    duration: 1,
    width: '100%',
  });
});

img3.addEventListener('mouseleave', () => {
  gsap.to('#project-img3', {
    duration: 1,
    width: '100%',
  });
});
