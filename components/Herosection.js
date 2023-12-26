function Herosection() {
  const Herosection = document.getElementById("Herosection");
  const Container = document.createElement("div");
  const BG = document.createElement("div");
  Container.classList.add("container");
  BG.classList.add("hero-bg");
  Container.innerHTML = `
  <div class="row row-cols-2 gx-5 gy-5">
          <div class="text-wrapper col-12 col-lg-7">
            <div class="text-body">
              <h1 class=" fw-bold">
                Purple Mango is a global live-streaming platform partner for content creation, discovery & communication
                
              </h1>
              <p class="mt-3">
                Purple Mango is a proven leader in onboarding, coaching and empowering creators to unlock their creativity and generate a sustainable income..
              </p>
            </div>
            <div class="btns-group mt-3">
              <a class="button btn-theme-default" href="https://www.mq20trk.com/2RSFWK9X/7XDN2">Get Started</a>
              <a class="button btn-theme-2" href="https://www.mq20trk.com/2RSFWK9X/7XDN2"
                > <i class="bi bi-play-circle me-2"></i> Watch Video</a
              >
            </div>
          </div>
          <div
            class="mockup-img col-12 col-lg-5 overflow-hidden d-flex justify-content-center"
          >
            <img class="" src="./Images/mockup-mobile1.png" alt="" id="" />
          </div>
        </div>
        
  `;
  BG.innerHTML = `
        <img class="band left-bands" src="./Images/left-bands.svg"></img>
        <img class="band right-bands" src="./Images/right-bands.svg"></img>
       <div class="bg"></div>
        <img class="purple-circle" src="./Images/Purple Circle.svg"></img>
  `;
  Herosection.appendChild(Container);
  Herosection.appendChild(BG);
}
Herosection();
