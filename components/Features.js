function Features() {
  const Features = document.getElementById("Features");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div
  class="text-body text-center d-flex flex-column align-items-center"
>
  <h2 class="title fw-bold">Specialized Expertise</h2>
  <p class="">
   we have specific expertise in understanding the Tango community, its preferences, 
   behaviors, and how to create targeted and effective content that resonate with this 
   audience..
  </p>
</div>
<div
  class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4"
>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-1.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Creative Opportunities</div>
      <div class="description text-center">
         Working in a niche agency allows for more creative freedom to explore innovative ways to
         broadcast within the Tango space.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-3.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Flexibility</div>
      <div class="description text-center">
        We only expect 15 days committment in a month.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-5.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Broadcasters friendly</div>
      <div class="description text-center">
        we support when it is needed the most to help move.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-7.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Payouts</div>
      <div class="description text-center">
        In-time payouts without chasers.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-2.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Professional Growth</div>
      <div class="description text-center">
       Joining a specialized agency can offer unique learning experiences, 
       allowing you to develop specialized skills and knowledge.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-8.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Well organised</div>
      <div class="description text-center">
        we have a dedicated to team who look after the broadcasters
      </div>
    </div>
  </div>
</div>
    `;
  Features.appendChild(Container);
}
Features();
