(()=>{
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
            fame: "34",
            guild: "-",
            alliance: "-",
            married: !0
        },
        buttons: {
            wishlist: "",
            party: "mailto::veeaudy1201@gmail.com",
            family: "https://discord.gg/rxZR48jDtP"

        },
        pet: {
            ign: "baws",
            type: "Tubby Tiger",
            "pet-level": 25,
            closeness: 1204,
            fullness: 100
        },
        bunny: {
            ign: "kiki",
            type: "Tubby Tiger",
            "pet-level": 25,
            closeness: 1204,
            fullness: 100
        },
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
            url: "https://twitch.tv/lannymon",
            title: "Twitch",
            image: "./public/images/ui/icons/links/twitch.png",
            requiredLevel: 0
        }, {
            url: "https://www.youtube.com/channel/UCsEzDbi0RHzdQgAfbNyxhLA",
            title: "Youtube",
            image: "./public/images/ui/icons/links/youtube.png",
            requiredLevel: 0,
            custom: "30px"
        }, {
            url: "https://bsky.app/profile/lannymon.bsky.social",
            title: "Bluesky",
            image: "./public/images/ui/icons/links/bluesky.png",
            requiredLevel: 0
        }, {
            url: "https://open.spotify.com/user/baestatlon?si=d142f31e2b874217",
            title: "Spotify",
            image: "./public/images/ui/icons/links/spotify.png",
            requiredLevel: 0
        }, {
            url: "https://github.com/lancanon/",
            title: "Github",
            image: "./public/images/ui/icons/links/github.png",
            requiredLevel: 0,
            custom: "27px"
        }, {
            url: "https://www.linkedin.com/in/audy-vee-384479217/",
            title: "LinkedIn",
            image: "./public/images/ui/icons/links/linkedin.png",
            requiredLevel: 0
        }]
    }
      , a = new class {
        constructor() {
            this.status = "idle",
            this.direction = "right",
            this.coordinate = 0,
            this.previousCoordinate = 0
        }
        changeAnimation(e) {
            i.style.backgroundImage = `url('./public/images/animations/${e}.gif')`
        }
        turn(e) {
            this.direction = e,
            "left" === this.direction ? (i.style.transform = "none",
            n.style.transform = "none") : "right" === this.direction && (i.style.transform = "scaleX(-1)",
            n.style.transform = "scaleX(-1)")
        }
        setStatus(e) {
            "idle" !== e && "walking" !== e || (this.status = e,
            this.turn(this.direction),
            this.changeAnimation(e))
        }
        reset() {
            i.style.transition = "none",
            this.setStatus("idle"),
            clearTimeout(o)
        }
        move(e) {
            this.previousCoordinate = this.coordinate,
            this.coordinate = e,
            this.setStatus("walking"),
            this.coordinate > this.previousCoordinate ? this.turn("right") : this.turn("left");
            const t = 10 * Math.abs(e - this.previousCoordinate);
            return i.style.transition = `left ${t}ms linear`,
            i.style.left = `${e}px`,
            o = setTimeout((()=>{
                i.style.transition = "none",
                this.setStatus("idle")
            }
            ), t),
            t
        }
        moveRandomly() {
            const e = Math.floor(Math.random() * window.upperBound)
              , t = Math.floor(3e3 * Math.random()) + 1e3;
            let i = this.move(e);
            setTimeout(this.moveRandomly.bind(this), i + t)
        }
        init() {
            i = document.getElementById("character"),
            n = document.getElementById("character-ign-container"),
            this.setStatus("idle"),
            this.turn("right")
        }
    }
      , l = document.getElementById("character-info")
      , c = document.getElementById("character-title-bar")
      , u = document.getElementById("character-help-button")
      , r = document.getElementById("keyboard")
      , m = document.getElementById("keyboard-title-bar")
      , d = document.getElementById("keyboard-close-button")
      , g = document.getElementById("character-preview")
      , p = document.getElementById("pet-links")
      , h = document.getElementById("item-links-container")
      , b = document.getElementById("item-button")
      , y = document.getElementById("item-links")
      , f = document.getElementById("up-button")
      , v = document.getElementById("down-button")
      , k = document.getElementById("fame")
      , w = document.getElementById("ios-scrollbar-track")
      , E = window.matchMedia("(max-width: 520px)");
    let L, x, I = !1, B = {
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
        clearTimeout(L),
        L = setTimeout((()=>{
            e.classList.add("hidden")
        }
        ), 5e3)
    }
    function T(e) {
        g.style.backgroundImage = `url("./public/images/animations/emote/${e}.gif")`,
        clearTimeout(x),
        x = setTimeout((()=>{
            g.style.backgroundImage = 'url("./public/images/animations/idle.gif")'
        }
        ), 5e3)
    }
    function q() {
        E.matches ? (b.disabled = !0,
        F()) : (b.disabled = !1,
        A())
    }
    function C() {
        const e = p.scrollHeight
          , t = p.clientHeight
          , i = p.scrollTop / (e - t) * 100 / 100 * (t - w.clientHeight - 26);
        w.style.transform = `translateY(${i}px)`
    }
    async function M() {
        const e = document.getElementById("up-button")
          , t = document.getElementById("down-button")
          , i = document.getElementById("fame")
          , n = await async function() {
            return (await fetch(`https://api.risorins.com/${s.query}/fame`, {
                method: "PATCH"
            })).ok
        }();
        return n ? i.textContent = Number(i.textContent) + 1 : (e.disabled = !0,
        t.disabled = !0),
        n
    }
    function F() {
        I = !1,
        y.classList.add("closed"),
        y.classList.remove("open"),
        p.innerHTML = "",
        s.links.forEach((e=>{
            const t = `<a href="${e.url}" target="_blank">\n      <div class="link-image">\n      <div class="link-image-inner" style="background-image: url('${e.image}'); width: ${e.custom || "35px"}; height: ${e.custom || "35px"}; background-size: contain;"></div>\n      </div>\n      <div class="link-text">${e.title}</div>\n      <div class="link-subtext">\n        <img src="./public/images/ui/ReqLv.png" />\n        <span>${e.requiredLevel}</span>\n      </div>\n    </a>`;
            p.innerHTML += t
        }
        ))
    }
    function A() {
        I = !0,
        y.classList.remove("closed"),
        y.classList.add("open"),
        p.innerHTML = "",
        s.config.usePetLinks && s.links.forEach(((e,t)=>{
            if (t > s.links.length - 4) {
                const t = `<a href="${e.url}" target="_blank">\n          <div class="link-image">\n          <div class="link-image-inner" style="background-image: url('${e.image}'); width: ${e.custom || "35px"}; height: ${e.custom || "35px"}; background-size: contain;"></div>\n          </div>\n        <div class="link-text">${e.title}</div>\n        <div class="link-subtext">\n          <img src="./public/images/ui/ReqLv.png" />\n          <span>${e.requiredLevel}</span>\n        </div>\n      </a>`;
                p.innerHTML += t
            }
        }
        ))
    }
    !function(e) {
        let t = []
          , i = document.getElementById("fade")
          , n = 0;
        for (let o = 0; o < e.length; o++)
            t[o] = new Image,
            t[o].onload = function() {
                n++,
                n === e.length && (i.style.opacity = 0,
                setTimeout((()=>{
                    i.style.visibility = "hidden"
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
        for (let i = 0; i < e.length; i++) {
            const n = new Image;
            n.src = e[i],
            t.appendChild(n)
        }
    }(["./public/images/ui/cursor/click.png", "./public/images/ui/cursor/cursor.png", "./public/images/ui/cursor/link.png", "./public/images/ui/button/fame/down-disabled.png", "./public/images/ui/button/fame/up-disabled.png", "./public/images/ui/button/party/mouseover.png", "./public/images/ui/button/party/pressed.png", "./public/images/ui/button/wishlist/mouseover.png", "./public/images/ui/button/wishlist/pressed.png", "./public/images/ui/button/help/mouseover.png", "./public/images/ui/button/help/pressed.png", "./public/images/ui/button/close/mouseover.png", "./public/images/ui/button/close/pressed.png", "./public/images/ui/button/item/mouseover.png", "./public/images/ui/button/item/pressed.png", "./public/images/animations/emote/F1.gif", "./public/images/animations/emote/F2.gif", "./public/images/animations/emote/F3.gif", "./public/images/animations/emote/F4.gif", "./public/images/animations/emote/F5.gif", "./public/images/animations/emote/F6.gif", "./public/images/animations/emote/F7.gif"]),
    h.innerHTML = "",
    s.links.forEach(((e,t)=>{
        if (s.config.usePetLinks) {
            if (t > s.links.length - 4)
                return
        } else
            p.style.backgroundImage = "none";
        const i = `\n          <a class="item-link" href="${e.url}" target="_blank">\n          <div class="link-image">\n          <div class="link-image-inner" style="background-image: url('${e.image}'); width: ${e.custom || "35px"}; height: ${e.custom || "35px"}; background-size: contain;"></div>\n          </div>\n          <div class="link-text">${e.title}</div>\n          <div class="link-subtext">\n            <img src="./public/images/ui/ReqLv.png" />\n            <span>${e.requiredLevel}</span>\n          </div>\n        </a>\n      `;
        h.innerHTML += i
    }
    )),
    $(),
    function() {
        for (const e in s.buttons) {
            const t = document.getElementById(`${e}-button`);
            if (s.buttons[e])
                t.href = s.buttons[e];
            else {
                const i = document.createElement("button");
                i.setAttribute("id", `${e}-button`),
                i.setAttribute("disabled", ""),
                t.parentNode.replaceChild(i, t)
            }
        }
    }(),
    function() {
        const e = document.getElementById("marriage");
        null !== s.player.married && (s.player.married ? e.style.backgroundImage = 'url("./public/images/ui/icons/married.png")' : e.style.backgroundImage = 'url("./public/images/ui/icons/unmarried.png")')
    }(),
    l.classList.toggle("hidden");
    for (const e in s.player) {
        const t = document.getElementById(e);
        t && (t.textContent = s.player[e])
    }
    for (const e in s.buttons) {
        const t = document.getElementById(`${e}-button`);
        t && (t.href = s.buttons[e])
    }
    for (const e in s.pet) {
        const t = "ign" === e ? "pet-ign" : e
          , i = document.getElementById(t);
        i && (i.textContent = s.pet[e])
    }
    for (const e in s.bunny) {
        const t = "ign" === e ? "bunny-ign" : e
          , i = document.getElementById(t);
        i && (i.textContent = s.bunny[e])
    }
    document.getElementById("character-ign").textContent = s.player.ign,
    document.getElementById("pet-sleep-ign").textContent = s.pet.ign,
    document.getElementById("bunny-sleep-ign").textContent = s.bunny.ign,
    k.textContent = s.player.fame,
    b.addEventListener("click", (function() {
        I ? F() : A()
    }
    )),
    d.addEventListener("click", (function() {
        r.classList.toggle("hidden")
    }
    )),
    u.addEventListener("click", (function() {
        r.classList.remove("hidden"),
        $()
    }
    )),
    a.init(),
    setTimeout((()=>{
        a.moveRandomly()
    }
    ), 1e3),
    C(),
    async function() {
        document.getElementById("fame").textContent = await async function() {
            const e = await fetch(`https://api.risorins.com/${s.query}/fame`);
            return (await e.json()).fame
        }()
    }(),
    M(),
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
    f.addEventListener("click", M),
    v.addEventListener("click", (function() {
        T("F4")
    }
    )),
    p.addEventListener("scroll", C),
    E.addEventListener("change", q),
    q(),
    document.addEventListener("mousedown", (function(e) {
        if (0 === e.button && document.body.classList.add("left-click"),
        e.target === c || e.target === m) {
            let t;
            e.preventDefault(),
            e.target === c && (t = l.getBoundingClientRect(),
            B.lastTarget = l),
            e.target === m && (t = r.getBoundingClientRect(),
            B.lastTarget = r),
            B.coord.x = t.left,
            B.coord.y = t.top,
            B.trackMouse = !0,
            B.initial.x = e.clientX,
            B.initial.y = e.clientY
        }
    }
    )),
    document.addEventListener("mouseup", (function(e) {
        0 === e.button && document.body.classList.remove("left-click"),
        B.trackMouse && (B.lastTarget.style.left = `${B.coord.x + B.moveAmount.x}px`,
        B.lastTarget.style.top = `${B.coord.y + B.moveAmount.y}px`,
        B.lastTarget.style.transform = "none",
        B.moveAmount.x = 0,
        B.moveAmount.y = 0,
        B.trackMouse = !1)
    }
    )),
    document.addEventListener("mousemove", (function(e) {
        B.trackMouse && (B.moveAmount.x = e.clientX - B.initial.x,
        B.moveAmount.y = e.clientY - B.initial.y,
        B.lastTarget.style.transform = `translate(${B.moveAmount.x}px, ${B.moveAmount.y}px)`)
    }
    )),
    document.addEventListener("keydown", (function(e) {
        const t = e.key
          , i = ["F1", "F2", "F3", "F4", "F5", "F6", "F7"].includes(t)
          , n = ["1", "2", "3", "4", "5", "6", "7"].includes(t);
        (i || n) && (e.preventDefault(),
        T(i ? t : `F ${t}`))
    }
    )),
    document.addEventListener("visibilitychange", (function() {
        document.hidden || a.reset()
    }
    )),
    console.log("%ctwitter @lannymon_", "font: 26px sans-serif; font-weight:bold; color: #77DD77; -webkit-text-stroke:0.01px black;")
}
)();
