function Pricing() {
  const Pricing = document.getElementById("Pricing");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body d-flex flex-column align-items-center">
          <h2 class="text-center fw-bold">Braodcasters Type</h2>
        
        </div>
        <div class="row mt-5">
          <!-- Pricing Table -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <span class="tag bg-primary-300">Independent Broadcasters:</span>
                <div class="price">
                 <span class="duration"> </span>
              </div>
              <div class="title"></div>
             
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>This distinguished classification embraces individuals who, as self-driven
entities, radiate a unique aura of autonomy and creative flair. With the freedom to carve their own paths
and chart uncharted territories, independent broadcasters wield their artistic prowess to captivate and
engage audiences in unparalleled ways.</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>No commitment</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>No targets</span>
                  </li>
                  <li>
                    <span ><i class="bi bi-check2"></i>No bonus</span>
                  </li>
                   <li>
                    <span ><i class="bi bi-check2"></i>No streaming schedule</span>
                  </li>
                   <li>
                    <span ><i class="bi bi-check2"></i>Broadcaster gets 100% of the earnings once he/she reaches threshold ($25)</span>
                  </li>
                  
                </ul>
              </div>
              
            </div>
          </div>
          <!-- Pricing Table -->
          <div class="pricing-table position-relative tagged col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <span class="tag bg-primary-300">Regular Broadcasters:</span>
                <div class="price">
                 <span class="duration"> </span>
              </div>
              <div class="title"></div>
             
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>Within this esteemed classification lie the broadcasters who exemplify the
embodiment of consistent commitment and unwavering dedication. Meticulously curated by Tango, these
individuals stand as steadfast pillars of the community, weaving a rich tapestry of compelling content, day in
and day out, fostering an enduring connection with their loyal fanbase.
</span>
                  </li>
                   <li>
                    <span><i class="bi bi-check2"></i>Commitment of hours per month (40 h)</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Commitment of days per month (15 days)</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Revenue Targets and Bonus based on performance. Only redeemed diamonds will be calculated for bonus

                    </span>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>
          <!-- Pricing Table -->
              <div class="pricing-table position-relative tagged col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <span class="tag bg-primary-300">Regular Broadcasters:</span>
                <div class="price">
                 <span class="duration"> </span>
              </div>
              <div class="title"></div>
             
              <div class="table-content">
               
                  <div class="col container-body overflow-hidden">
    <img class="img-fluid" src="./Images/Regular.png" alt="" />
  </div>
             
            </div>
          </div>
  `;
  Pricing.appendChild(Container);
}
Pricing();
