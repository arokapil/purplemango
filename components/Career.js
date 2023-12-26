function Career() {
  const Career = document.getElementById("Careers");
  const Container = document.createElement("div");
  Container.classList.add("container", "py-5");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 gy-5 align-items-center">
    <div class="col text-body">
      <h2 class="title fw-bold">Join the Purple Mango Talent Family</h2>
      <p class="mt-2">
        Don’t see an exact role match? No problem! Join our Purple Mango Talent
        Family and get coached by the experts.
      </p>
      <a class="button btn-theme-default mt-3" href="https://www.mq20trk.com/2RSFWK9X/7XDN2"> Join Now </a>
    </div>
    <div class="col container-body">
      <img
        class="img-fluid"
        src="./Images/career-illustration.png"
        alt=""
      />
    </div>
  </div>
    `;
  Career.appendChild(Container);
}
Career();
