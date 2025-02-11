(()=> {
    "use strict";
    function e(e, t) {
        let i;
        return function() {
            clearTimeout(i),
            i = setTimeout(e, t)
        }
    }
    const t = e((function() {
        window.upperBound = window.innerWidth - 100
    }
    ), 100);
    let i, n, o;
    window.upperBound = window.innerWidth - 100;
    const s = {
        query: "lan",
        config: {
            usePetLinks: !0
        },
        player: {
            ign: "lan",
            level: "25",
            job: "software engineer",
            fame: "-",
            guild: "-",
            alliance: "-",
            married: !0
        },
        buttons: {
            wishlist: "",
            party: "mailto::veeaudy1204@gmail.com",
            family: "https://discord.gg/rxZR48jDtP"
        },
        pet: [{
            "pet-ign": "baws",
            type: "Tubby Tiger",
            "pet-level": 26,
            closeness: 1204,
            fullness: 88,
            style: {
                "--pet-width": "63px",
                "--pet-height": "40px",
                "--pet-x-offset": "2px",
                "--pet-y-offset": "-19px"
            },
            links: [{
                url: "https://open.spotify.com/user/baestatlon?si=cf71ab96efe94039",
                title: "Spotify",
                image: "./public/images/ui/icons/links/spotify.png",
                requiredLevel: 0
            }, {
                url: "https://bsky.app/profile/lannymon.bsky.social",
                title: "Bluesky",
                image: "./public/images/ui/icons/links/bluesky.png",
                requiredLevel: 0,
                custom: "25px"
            }, {
                url: "https://letterboxd.com/lanny1201/",
                title: "Letterboxd",
                image: "./public/images/ui/icons/links/letterboxd.png",
                requiredLevel: 0
            }]
        }, {
            "pet-ign": "kiki",
            type: "DreamyBunny",
            "pet-level": 21,
            closeness: 100,
            fullness: 99,
            style: {
                "--pet-width": "28px",
                "--pet-height": "17px",
                "--pet-x-offset": "7px",
                "--pet-y-offset": "-43px"
            },
            links: [{
                url: "https://www.linkedin.com/in/audy-vee-384479217/",
                title: "LinkedIn",
                image: "./public/images/ui/icons/links/linkedin.png",
                requiredLevel: 0
            }, {
                url: "https://instagram.com/lannymon_",
                title: "Github",
                image: "./public/images/ui/icons/links/github.png",
                requiredLevel: 0,
                custom: "25px"
            }]
        }, {
            "pet-ign": "winry",
            type: "Kero-chan",
            "pet-level": 12,
            closeness: 91,
            fullness: "100",
            style: {
                "--pet-width": "40px",
                "--pet-height": "60px",
                "--pet-x-offset": "7px",
                "--pet-y-offset": "-15px"
            }
        }],
        links: [{
            url: "https://twitter.com/lannymon_",
            title: "Twitter",
            image: "./public/images/ui/icons/links/twitter.png",
            requiredLevel: 0
        }, {
            url: "https://instagram.com/lannymon_",
            title: "Instagram",
            image: "./public/images/ui/icons/links/instagram.png",
            requiredLevel: 0
        }, {
            url: "https://www.twitch.tv/lannymon",
            title: "Twitch",
            image: "./public/images/ui/icons/links/twitch.png",
            requiredLevel: 0
        }, {
            url: "https://www.youtube.com/@lannymon2393",
            title: "YouTube",
            image: "./public/images/ui/icons/links/youtube.png",
            requiredLevel: 0,
            custom: "30px"
        }, {
            url: "https://open.spotify.com/user/baestatlon?si=cf71ab96efe94039",
            title: "Spotify",
            image: "./public/images/ui/icons/links/spotify.png",
            requiredLevel: 0
        }, {
            url: "https://bsky.app/profile/lannymon.bsky.social",
                title: "Bluesky",
                image: "./public/images/ui/icons/links/bluesky.png",
                requiredLevel: 0
        }, {
            url: "https://letterboxd.com/lanny1201/",
            title: "Letterboxd",
            image: "./public/images/ui/icons/links/letterboxd.png",
            requiredLevel: 0
        }]
    }
    , l = new class {
        constructor() {
            this.status = "idle",
            this.direction = "right",
            this.coordinate = 0,
            this.previousCoordinate = 0
        }
        changeAnimation(e) {
            n.style.backgroundImage = `url('./public/images/animations/${e}.gif')`
        }
        turn(e) {
            this.direction = e,
            "left" === this.direction ? (n.style.transform = "none",
            i.style.transform = "none") : "right" === this.direction && (n.style.transform = "scaleX(-1)",
            i.style.transform = "scaleX(-1)")
        }
        setStatus(e) {
            "idle" !== e && "walking" !== e || (this.status = e,
            this.turn(this.direction),
            this.changeAnimation(e))
        }
        reset() {
            n.style.transition = "none",
            this.setStatus("idle"),
            clearTimeout(o)
        }
        move(e) {
            this.previousCoordinate = this.coordinate,
            this.coordinate = e,
            this.setStatus("walking"),
            this.coordinate > this.previousCoordinate ? this.turn("right") : this.turn("left");
            const t = 10 * Math.abs(e - this.previousCoordinate);
            return n.style.transition = `left ${t}ms linear`,
            n.style.left = `${e}px`,
            o = setTimeout(( () => {
                n.style.transition = "none",
                this.setStatus("idle")
            }
            ), t),
            t
        }
        moveRandomly() {
            const e = Math.floor(Math.random() * window.upperBound)
              , t = Math.floor(3e3 * Math.random()) + 1e3;
            let n = this.move(e);
            setTimeout(this.moveRandomly.bind(this), n + t)
        }
        init() {
            n = document.getElementById("character"),
            i = document.getElementById("character-ign-container"),
            this.setStatus("idle"),
            this.turn("right")
        }
    }
      , a = document.getElementById("character-info")
      , c = document.getElementById("character-title-bar")
      , u = document.getElementById("character-help-button")
      , r = document.getElementById("keyboard")
      , d = document.getElementById("keyboard-title-bar")
      , m = document.getElementById("keyboard-close-button")
      , g = document.getElementById("character-preview")
      , p = document.getElementById("pet-links")
      , h = document.getElementById("item-links-container")
      , y = document.getElementById("item-button")
      , b = document.getElementById("item-links")
      , f = document.getElementById("up-button")
      , k = document.getElementById("down-button")
      , v = document.getElementById("fame")
      , x = document.getElementById("ios-scrollbar-track")
      , w = window.matchMedia("(max-width: 520px)");
    let E, L, I = !1, B = 0, T = {
        trackMouse: !1,
        initial: {
            x: 0,
            y: 0
        },
        coord: {
            x: 0,
            y: 0
        },
        moveAmount: {
            x: 0,
            y: 0
        },
        lastTarget: null
    };
    function $() {
        const e = document.querySelector("#character-info .click-here");
        e.classList.remove("hidden"),
        clearTimeout(E),
        E = setTimeout(( () => {
            e.classList.add("hidden")
        }
        ), 5e3)
    }
    function M(e) {
        console.log("Value of e:", e);
        g.style.backgroundImage = `url("./public/images/animations/emote/${e}.gif")`,
        clearTimeout(L),
        L = setTimeout(( () => {
            g.style.backgroundImage = 'url("./public/images/animations/idle.gif")'
        }
        ), 5e3)
    }
    function q() {
        w.matches ? (y.disabled = !0,
        F()) : (y.disabled = !1,
        H())
    }
    function C() {
        const e = p.scrollHeight
          , t = p.clientHeight
          , n = p.scrollTop / (e - t) * 100 / 100 * (t - x.clientHeight - 26);
        x.style.transform = `translateY(${n}px)`
    }
    async function A() {
        const e = document.getElementById("up-button")
          , t = document.getElementById("down-button")
          , n = document.getElementById("fame");

        const response = await fetch(`http://localhost:8000/players/${s.query}/fame?action=up`, {
            method: "PATCH"
        });

        const result = await response.json();

        if (response.ok) {
            n.textContent = result.fame;
            M(result.reaction); // Trigger the emote
        } else {
            e.disabled = true;
            t.disabled = true;
            console.error(result.detail);
        }
    }
    function F() {
        I = !1,
        b.classList.add("closed"),
        b.classList.remove("open"),
        p.innerHTML = "",
        s.links.forEach((e => {
            const t = `<a href="${e.url}" target="_blank">\n      <div class="link-image">\n      <div class="link-image-inner" style="background-image: url('${e.image}'); width: ${e.custom || "35px"}; height: ${e.custom || "35px"}; background-size: contain;"></div>\n      </div>\n      <div class="link-text">${e.title}</div>\n      <div class="link-subtext">\n        <img src="./public/images/ui/ReqLv.png" />\n        <span>${e.requiredLevel}</span>\n      </div>\n    </a>`;
            p.innerHTML += t
        }
        ))
    }
    function H() {
        I = !0,
        b.classList.remove("closed"),
        b.classList.add("open"),
        p.innerHTML = "",
        s.config.usePetLinks && P(B)
    }
    function P(e) {
        const t = s.pet[e];
        if (t && I) {
            p.innerHTML = "";
            const e = t.links || []
              , n = Math.max(0, 3 - e.length);
            e.forEach((e => {
                p.innerHTML += `<a href="${e.url}" target="_blank">\n        <div class="link-image">\n          <div class="link-image-inner" style="background-image: url('${e.image}'); width: ${e.custom || "35px"}; height: ${e.custom || "35px"}; background-size: contain;"></div>\n        </div>\n        <div class="link-text">${e.title || ""}</div>\n        <div class="link-subtext">\n          <img src="./public/images/ui/ReqLv.png" />\n          <span>${e.requiredLevel || "0"}</span>\n        </div>\n      </a>`
            }
            )),
            console.log(n);
            for (let e = 0; e < n; e++)
                p.innerHTML += '\n        <div class="filler" style="position: static; background-image: url(\'../../public/images/ui/link-background.png\'); height: 35px; width: 145px;"></div>\n      '
        }
    }
    !function(e) {
        let t = []
          , n = document.getElementById("fade")
          , i = 0;
        for (let o = 0; o < e.length; o++)
            t[o] = new Image,
            t[o].onload = function() {
                i++,
                i === e.length && (n.style.opacity = 0,
                setTimeout(( () => {
                    n.style.visibility = "hidden"
                }
                ), 750))
            }
            ,
            t[o].src = e[o]
    }(["./public/images/animations/idle.gif", "./public/images/animations/walking.gif", "./public/images/setting/0.png", "./public/images/setting/1.png", "./public/images/setting/2.png"]),
    function(e) {
        const t = document.createElement("div");
        t.style.display = "none",
        document.body.appendChild(t);
        for (let n = 0; n < e.length; n++) {
            const i = new Image;
            i.src = e[n],
            t.appendChild(i)
        }
    }(["./public/images/ui/cursor/click.png", "./public/images/ui/cursor/cursor.png", "./public/images/ui/cursor/link.png", "./public/images/ui/button/fame/down-disabled.png", "./public/images/ui/button/fame/up-disabled.png", "./public/images/ui/button/party/mouseover.png", "./public/images/ui/button/party/pressed.png", "./public/images/ui/button/wishlist/mouseover.png", "./public/images/ui/button/wishlist/pressed.png", "./public/images/ui/button/help/mouseover.png", "./public/images/ui/button/help/pressed.png", "./public/images/ui/button/close/mouseover.png", "./public/images/ui/button/close/pressed.png", "./public/images/ui/button/item/mouseover.png", "./public/images/ui/button/item/pressed.png", "./public/images/animations/emote/F1.gif", "./public/images/animations/emote/F2.gif", "./public/images/animations/emote/F3.gif", "./public/images/animations/emote/F4.gif", "./public/images/animations/emote/F5.gif", "./public/images/animations/emote/F6.gif", "./public/images/animations/emote/F7.gif"]),
    h.innerHTML = "",
    s.links.forEach(( (e, t) => {
        if (s.config.usePetLinks) {
            if (t > s.links.length - 4)
                return
        } else
            p.style.backgroundImage = "none";
        const n = `\n          <a class="item-link" href="${e.url}" target="_blank">\n          <div class="link-image">\n          <div class="link-image-inner" style="background-image: url('${e.image}'); width: ${e.custom || "35px"}; height: ${e.custom || "35px"}; background-size: contain;"></div>\n          </div>\n          <div class="link-text">${e.title}</div>\n          <div class="link-subtext">\n            <img src="./public/images/ui/ReqLv.png" />\n            <span>${e.requiredLevel}</span>\n          </div>\n        </a>\n      `;
        h.innerHTML += n
    }
    )),
    P(B),
    $(),
    function() {
        for (const e in s.buttons) {
            const t = document.getElementById(`${e}-button`);
            if (s.buttons[e])
                t.href = s.buttons[e];
            else {
                const n = document.createElement("button");
                n.setAttribute("id", `${e}-button`),
                n.setAttribute("disabled", ""),
                t.parentNode.replaceChild(n, t)
            }
        }
    }(),
    function() {
        const e = document.getElementById("marriage");
        null !== s.player.married && (s.player.married ? e.style.backgroundImage = 'url("./public/images/ui/icons/married.png")' : e.style.backgroundImage = 'url("./public/images/ui/icons/unmarried.png")')
    }(),
    a.classList.toggle("hidden");
    for (const e in s.player) {
        const t = document.getElementById(e);
        t && (t.textContent = s.player[e])
    }
    for (const e in s.buttons) {
        const t = document.getElementById(`${e}-button`);
        t && (t.href = s.buttons[e])
    }
    function R() {
        const e = s.pet[B];
        document.getElementById("pet-preview").style.backgroundImage = `url("./public/images/animations/pet${B + 1}.gif")`;
        for (const t in e) {
            if ("style" === t)
                continue;
            const n = document.getElementById(t);
            n && (n.textContent = e[t])
        }
        document.body.style.setProperty("--pet-width", e.style["--pet-width"]),
        document.body.style.setProperty("--pet-height", e.style["--pet-height"]),
        document.body.style.setProperty("--pet-x-offset", e.style["--pet-x-offset"]),
        document.body.style.setProperty("--pet-y-offset", e.style["--pet-y-offset"]),
        P(B)
    }
    function S(e) {
        B = e,
        R()
    }
    if (s.pet[0]) {
        const e = document.getElementById("pet-1");
        e.removeAttribute("disabled"),
        e.addEventListener("click", ( () => S(0)))
    }
    if (s.pet[1]) {
        const e = document.getElementById("pet-2");
        e.removeAttribute("disabled"),
        e.addEventListener("click", ( () => S(1)))
    }
    if (s.pet[2]) {
        const e = document.getElementById("pet-3");
        e.removeAttribute("disabled"),
        e.addEventListener("click", ( () => S(2)))
    }
    R(),
    document.getElementById("character-ign").textContent = s.player.ign,
    v.textContent = s.player.fame,
    y.addEventListener("click", (function() {
        I ? F() : H()
    }
    )),
    m.addEventListener("click", (function() {
        r.classList.toggle("hidden")
    }
    )),
    u.addEventListener("click", (function() {
        r.classList.remove("hidden"),
        $()
    }
    )),
    l.init(),
    setTimeout(( () => {
        l.moveRandomly()
    }
    ), 1e3),
    C(),
    async function() {
        document.getElementById("fame").textContent = await async function() {
            const e = await fetch(`http://localhost:8000/players/${s.query}/fame`);
            return (await e.json()).fame
        }()
    }(),
    A(),
    addEventListener("resize", (function() {
        t(),
        e((function() {
            const e = document.getElementById("character-info");
            e.style.left = window.innerWidth / 2 - (I ? 255 : 137.5) + "px",
            e.style.top = window.innerHeight / 2 - 200 - 70 + "px"
        }
        ), 100)()
    }
    )),
    f.addEventListener("click", A),
    k.addEventListener("click", async function() {
        const response = await fetch(`http://localhost:8000/players/${s.query}/fame?action=down`, {
            method: "PATCH"
        });
    
        const result = await response.json();
    
        if (response.ok) {
            document.getElementById("fame").textContent = result.fame;
            M(result.reaction); 
        } else {
            console.error(result.detail);
        }
    }),
    p.addEventListener("scroll", C),
    w.addEventListener("change", q),
    q(),
    document.addEventListener("mousedown", (function(e) {
        if (0 === e.button && document.body.classList.add("left-click"),
        e.target === c || e.target === d) {
            let t;
            e.preventDefault(),
            e.target === c && (t = a.getBoundingClientRect(),
            T.lastTarget = a),
            e.target === d && (t = r.getBoundingClientRect(),
            T.lastTarget = r),
            T.coord.x = t.left,
            T.coord.y = t.top,
            T.trackMouse = !0,
            T.initial.x = e.clientX,
            T.initial.y = e.clientY
        }
    }
    )),
    document.addEventListener("mouseup", (function(e) {
        0 === e.button && document.body.classList.remove("left-click"),
        T.trackMouse && (T.lastTarget.style.left = `${T.coord.x + T.moveAmount.x}px`,
        T.lastTarget.style.top = `${T.coord.y + T.moveAmount.y}px`,
        T.lastTarget.style.transform = "none",
        T.moveAmount.x = 0,
        T.moveAmount.y = 0,
        T.trackMouse = !1)
    }
    )),
    document.addEventListener("mousemove", (function(e) {
        T.trackMouse && (T.moveAmount.x = e.clientX - T.initial.x,
        T.moveAmount.y = e.clientY - T.initial.y,
        T.lastTarget.style.transform = `translate(${T.moveAmount.x}px, ${T.moveAmount.y}px)`)
    }
    )),
    document.addEventListener("keydown", (function(e) {
        const t = e.key
          , n = ["F1", "F2", "F3", "F4", "F5", "F6", "F7"].includes(t)
          , i = ["1", "2", "3", "4", "5", "6", "7"].includes(t);
        (n || i) && (e.preventDefault(),
        M(n ? t : `F${t}`))
    }
    )),
    document.addEventListener("visibilitychange", (function() {
        document.hidden || l.reset()
    }
    )),
    console.log("%c @lannymon", "font: 26px sans-serif; font-weight:bold; color: #c9e4ff; -webkit-text-stroke:0.01px black;")
  }
  )();