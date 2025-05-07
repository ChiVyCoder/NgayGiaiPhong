const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Xử lí line trên header

const line = $('.underline')
const navItem = $$('.nav-item')

navItem.forEach(item => {
    item.onclick = function () {
        navItem.forEach(i => i.classList.remove('active')) 
        this.classList.add('active')

        if (line) {
          line.style.left = this.offsetLeft + 'px'
         line.style.width = this.offsetWidth + 'px'
        }
    }
});

// Xử lý timeline

window.addEventListener('scroll', () => {
  const timeline = $('.timeline');
  const progress = $('.timeline-progress');

  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const timelineHeight = timeline.offsetHeight;

  // Tính khoảng cách từ tâm màn hình đến top của timeline
  const centerY = windowHeight / 2;
  const distanceToCenter = centerY - rect.top;

  if (rect.top < centerY && rect.bottom > centerY) {
    let percent = distanceToCenter / timelineHeight;
    percent = Math.min(Math.max(percent, 0), 1); // Giới hạn từ 0 -> 1

    progress.style.height = `${percent * 100}%`;
  } else if (rect.bottom <= centerY) {
    progress.style.height = '100%';
  } else {
    progress.style.height = '0%';
  }
});

//Xử lý show paragraph
const texts = document.querySelectorAll('.fadeIn-text');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1 
});

texts.forEach(text => observer.observe(text));

// Xử lý click like

const likeBtn = $('.like-icon')
const dislikeBtn = $('.dislike-icon')
console.log(likeBtn.classList);


likeBtn.onclick = () => {
  if (likeBtn.classList.contains('active'))
    likeBtn.classList.remove('active')
  else if (dislikeBtn.classList.contains('active')) {
    dislikeBtn.classList.remove('active')
    likeBtn.classList.add('active')
    alert("Cảm ơn bạn đã bình chọn!")
  }
  else 
    likeBtn.classList.add('active')
    alert("Cảm ơn bạn đã bình chọn!")
}

dislikeBtn.onclick = () => {
  if (dislikeBtn.classList.contains('active'))
    dislikeBtn.classList.remove('active')
  else if (likeBtn.classList.contains('active')) {
    likeBtn.classList.remove('active')
    dislikeBtn.classList.add('active')
    alert("Cảm ơn nhận xét của bạn!")
  }
  else 
    dislikeBtn.classList.add('active')
    alert("Cảm ơn nhận xét của bạn!")
}
