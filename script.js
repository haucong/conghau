         let toggle = document.querySelector('.toggle');
        let topbar = document.querySelector('.topbar');
        let navigation = document.querySelector('.navigation');
        let main = document.querySelector('.main');
        let themswitch = document.querySelector('.themswitch')
        let body = document.querySelector('body')

        toggle.onclick = function(){
            toggle.classList.toggle('active');
            topbar.classList.toggle('active');
            navigation.classList.toggle('active');
            main.classList.toggle('active');
        }

        //theme switch toggle
        themswitch.onclick = function(){
            body.classList.toggle('dark')
        }
        //menu active
        function toggleMenu(){
            let navigation = document.querySelector('.navigation');
            let main = document.querySelector('.main');
            navigation.classList.remove('active');
            main.classList.remove('active');
        }

        //img
        var index = 1;
        changeImage = function(){
            var imgs = ["./img/about.jpg", "./img/about2.jpg", "./img/about3.jpg", "./img/about4.jpg", "./img/about5.jpg"];
            document.getElementById('img').src = imgs[index];
            index++;
            if(index ==5){
                index = 0;
            }
        }
        setInterval(changeImage, 1500);

        //next
        var slideIndex = 0;
            function plusSlides(n) {
            showSlides2(slideIndex += n);
            }
            function showSlides2(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            
            slides[slideIndex-1].style.display = "block";
            }
            //scroll to top
            window.onscroll = () => {
                var y = window.scrollY;
                btnTopPage = document.getElementById("up");
                
                if (y > 400){
                    btnTopPage.className = "go-top-page btn-show"
                }
                else{
                    btnTopPage.className = "go-top-page btn-hide"
                }
            }       
            //mouse
            const cursor = document.querySelector(".cursor");
            var timeout;
        
            //follow cursor on mousemove
            // document.addEventListener("mousemove", (e) => {
            //   let x = e.pageX;
            //   let y = e.pageY;
        
            //   cursor.style.top = y + "px";
            //   cursor.style.left = x + "px";
            //   cursor.style.display = "block";
        
            //   //cursor effects when mouse stopped
            //   function mouseStopped(){
            //     cursor.style.display = "block";
            //   }
            //   clearTimeout(timeout);
            //   timeout = setTimeout(mouseStopped, 500);
            // });
        
            // //cursor effects when mouseout
            // document.addEventListener("mouseout", () => {
            //   cursor.style.display = "block";
            // });