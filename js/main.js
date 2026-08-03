(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- mobile nav ---------- */
  var nav = document.getElementById("siteNav");
  var toggle = document.getElementById("navToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll("#navLinks a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- present-role rotator (current roles only) ---------- */
  var roles = [
    "Head of Logistics, MFINUE",
    "President, Entrepreneurship Club",
    "Active Equity Investor",
    "Competitive Swimmer, Fenerbahçe SC"
  ];
  var roleEl = document.getElementById("role");
  var i = 0;
  if (roleEl && !reduceMotion) {
    setInterval(function () {
      i = (i + 1) % roles.length;
      roleEl.style.opacity = 0;
      setTimeout(function () {
        roleEl.textContent = roles[i];
        roleEl.style.opacity = 1;
      }, 260);
    }, 2600);
  }

  /* ---------- hero ripple ---------- */
  var canvas = document.getElementById("ripple");
  if (canvas && !reduceMotion) {
    var ctx = canvas.getContext("2d");
    var w, h, dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      w = canvas.parentElement.offsetWidth;
      h = canvas.parentElement.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener("resize", resize);
    resize();

    var blobs = [];
    for (var k = 0; k < 6; k++) {
      blobs.push({
        x: Math.random(),
        y: Math.random(),
        r: 90 + Math.random() * 160,
        speed: 0.05 + Math.random() * 0.08,
        phase: Math.random() * Math.PI * 2
      });
    }

    var t = 0;
    function frame() {
      t += 1;
      ctx.clearRect(0, 0, w, h);
      blobs.forEach(function (b) {
        var cx = (b.x * w) + Math.sin(t * 0.004 * b.speed + b.phase) * 60;
        var cy = (b.y * h) + Math.cos(t * 0.003 * b.speed + b.phase) * 40;
        var grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, b.r);
        grad.addColorStop(0, "rgba(62, 140, 147, 0.35)");
        grad.addColorStop(1, "rgba(62, 140, 147, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, b.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* ---------- scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- contact form -> mailto ---------- */
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var to = form.dataset.to;
      var name = document.getElementById("cf-name").value;
      var email = document.getElementById("cf-email").value;
      var message = document.getElementById("cf-message").value;
      var subject = "Portfolio message from " + name;
      var body = message + "\n\n— " + name + " (" + email + ")";
      var url = "mailto:" + encodeURIComponent(to) +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      window.location.href = url;
    });
  }
})();
