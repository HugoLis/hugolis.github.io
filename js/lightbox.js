function is_imagelink(url) {
    var p = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
    return (url.match(p)) ? true : false;
}
function setGallery(el) {
    var elements = document.body.querySelectorAll(".gallery");
    elements.forEach(element => {
        element.classList.remove('gallery');
	});
	if(el.closest('ul, p')) {
		var link_elements = el.closest('ul, p').querySelectorAll("a[class*='lightbox-']");
		link_elements.forEach(link_element => {
			link_element.classList.remove('current');
		});
		link_elements.forEach(link_element => {
			if(el.getAttribute('href') == link_element.getAttribute('href')) {
				link_element.classList.add('current');
			}
		});
		if(link_elements.length>1) {
			document.getElementById('lightbox').classList.add('gallery');
			link_elements.forEach(link_element => {
				link_element.classList.add('gallery');
			});
		}
		var currentkey;
		var gallery_elements = document.querySelectorAll('a.gallery');
		Object.keys(gallery_elements).forEach(function (k) {
			if(gallery_elements[k].classList.contains('current')) currentkey = k;
		});
    //hides next button for last element of gallery
		if(currentkey==(gallery_elements.length-1)) {
      document.getElementById('next').style.visibility = "hidden"
      //var nextkey = 0;
    }
		else var nextkey = parseInt(currentkey)+1;
    //hides previous button for first element of gallery
    if(currentkey==0) {
      document.getElementById('prev').style.visibility = "hidden"
      //var prevkey = parseInt(gallery_elements.length-1);
    }
		else var prevkey = parseInt(currentkey)-1;
		document.getElementById('next').addEventListener("click", function() {
			gallery_elements[nextkey].click();
		});
		document.getElementById('prev').addEventListener("click", function() {
			gallery_elements[prevkey].click();
		});

    // Arrows and escape support.
    document.onkeydown = (e) => {
      e = e || window.event;
      // Prevents opening lightbox from arrow keys.
      if (document.getElementById('lightbox').style.display == 'none') { return }
      if (e.key == "ArrowLeft") {
        gallery_elements[prevkey].click();
      } else if (e.key == "ArrowRight") {
        gallery_elements[nextkey].click();
      } else if (e.key == "Escape") {
        document.getElementById("close").click()
      }
    }

    //Discrete swipe support.
    let touchStartX = 0
    // Prevents accidental swipes when more than one finger is touching.
    let breakSwipe = false;
    document.ontouchstart = (t0) => {
      t0 = t0;
      if (t0.touches.length >= 2) {
        breakSwipe = true;
      } else {
        breakSwipe = false;
      }
      touchStartX = t0.changedTouches[0].screenX;
    }
    document.ontouchend = (t1) => {
      t1 = t1;
      if (breakSwipe === true) {
        return;
      }
      let touchEndX = t1.changedTouches[0].screenX;
      let threshhold = 50;
      if ((touchEndX - touchStartX) > threshhold) {
        gallery_elements[prevkey].click();
      }
      if ((touchEndX - touchStartX) < -threshhold) {
        gallery_elements[nextkey].click();
      }
      touchStartX = 0
    }
	}
}

document.addEventListener("DOMContentLoaded", function() {

    //create lightbox div in the footer
    var newdiv = document.createElement("div");
    newdiv.setAttribute('id',"lightbox");
    document.body.appendChild(newdiv);

    //add classes to links to be able to initiate lightboxes
    var elements = document.querySelectorAll('a');
    elements.forEach(element => {
        var url = element.getAttribute('href');
        if(url) {
            if(is_imagelink(url) && !element.classList.contains('no-lightbox')) {
                element.classList.add('lightbox-image');
                var href = element.getAttribute('href');
                var filename = href.split('/').pop();
                var split = filename.split(".");
                var name = split[0];
                element.setAttribute('title',name);
            }
        }
    });

    //remove the clicked lightbox
    document.getElementById('lightbox').addEventListener("click", function(event) {
        if(event.target.id != 'next' && event.target.id != 'prev'){
            this.innerHTML = '';
            document.getElementById('lightbox').style.display = 'none';
            //Enables scrolling when lightbox is hidden.
            document.body.style.overflow = 'scroll';
        }
    });

    //add the image lightbox on click
    var elements = document.querySelectorAll('a.lightbox-image');
    elements.forEach(element => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById('lightbox').innerHTML = '<a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="img" style="background: url(\''+this.getAttribute('href')+'\') center center / contain no-repeat;" title="'+this.getAttribute('title')+'" ><img src="'+this.getAttribute('href')+'" alt="'+this.getAttribute('title')+'" /></div><span>'+this.getAttribute('title')+'</span>';
            document.getElementById('lightbox').style.display = 'block';
            setGallery(this);
            //Disables scrolling when lightbox is shown.
            document.body.style.overflow = 'hidden';
        });
    });

});
