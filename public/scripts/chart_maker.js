function chartMaker(B, C) {
  var H = function(g) {
    g = g || {};
    var a = [],
      c = {
        cellWidth: 21,
        cellHeight: 25,
        dotDia: 19,
        nutHeight: 5,
        fontBaseline: 7,
        fontHeight: 16,
        barGirth: 2,
        barHeight: 9,
        padding: 5,
        minSpan: 4
      },
      b, u, v, x, D, y, z, w, A, E, q, r, k, m, F, G, B = function(a) {
        for (var e = (v - 1) * k, h = w ? 1 : 0, d = ""; h <= x; h++) d += " M" + f(q) + " " + f(r + h * m) + " h" + f(e);
        a.setAttributeNS(null, "d", d)
      },
      C = function(a) {
        for (var e = f(x * m), h = 0, d = ""; h < v; h++) d += " M" + f(q + h * k) + " " + f(r) + " v" + e;
        a.setAttributeNS(null, "d", d)
      },
      H = function(a, e, h, d) {
        for (var l = 0, n = q; l < h.length; l++, n +=
          k)
          if (0 < h[l]) {
            var p = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
              t = f(r + (h[l] - (w ? .5 : b - .5)) * m);
            p.cx.baseVal.value = n;
            p.cy.baseVal.value = t;
            p.r.baseVal.value = c.dotDia / 2;
            a.appendChild(p);
            d && d[l] && (p = document.createElementNS("http://www.w3.org/2000/svg", "tspan"), p.setAttributeNS(null, "x", f(n)), e.appendChild(p), p.setAttributeNS(null, "y", f(t + m / 2 - c.fontBaseline)), p.appendChild(document.createTextNode(d[l])))
          }
      },
      K = function(a) {
        var e;
        e = (v - 1) * k;
        var h = f(c.nutHeight / 2);
        e = "M" + f(q) + " " + f(r) + " h -" +
          h + " a" + h + " " + h + " 0 0 1 0 -" + 2 * h + " h" + f(e + 2 * h) + " a" + h + " " + h + " 0 0 1 0 " + 2 * h + " z";
        a.setAttributeNS(null, "d", e)
      },
      L = function(a, e, h, d) {
        e = q + k * e;
        d = r + m * (d - (w ? .5 : b - .5));
        h = f(k * (h - 1));
        var l = c.dotDia / 2,
          n = f(h / 2 + l / 2),
          p = c.barHeight,
          t = p + c.barGirth,
          g = "M" + f(e - l) + " " + f(d - l),
          g = g + (" A " + n + " " + f(p) + " 0 0 1 " + f(e + h + l) + " " + f(d - l)),
          g = g + (" A " + n + " " + f(t) + " 0 0 0 " + f(e - l) + " " + f(d - l));
        a.setAttributeNS(null, "d", g)
      },
      I = function(a, e, h, d) {
        a.setAttributeNS(null, "x", h);
        a.setAttributeNS(null, "y", d);
        a.appendChild(document.createTextNode(e))
      },
      J = function(a, e, h, d) {
        d -= c.fontBaseline;
        for (var b = 0; b < v; b++)
          if (e[b]) {
            var n = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            n.setAttributeNS(null, "x", f(h + b * k));
            n.setAttributeNS(null, "y", f(d));
            n.appendChild(document.createTextNode(e[b]));
            a.appendChild(n)
          }
      },
      M = function(a, b) {
        for (var h in b) a.setAttribute(h, b[h])
      },
      f = function(a, b) {
        return Number(a.toFixed(void 0 !== b ? b : 1))
      };
    (function(a, b) {
      for (var h in b) void 0 !== a[h] && (a[h] = b[h])
    })(c, g);
    return function(g, e) {
      (function(a) {
        var d, e, f, g = [],
          t = [],
          k = [];
        b = Number.MAX_VALUE;
        u = -b;
        a.head = [];
        v = a.fret.length;
        for (d = 0; d < v; d++) f = a.fret[d], isNaN(f) || 0 > f ? a.head[d] = "x" : 0 == f ? a.head[d] = "o" : (a.head[d] = "", e = t.indexOf(f), 0 > e ? (g.push(d), t.push(f), f < b && (b = f), f > u && (u = f)) : a.label[d] && a.label[d] == a.label[g[e]] ? k[e] = d : g[e] = d);
        b > u && (b = 1, u = c.minSpan);
        x = Math.max(c.minSpan, u - b + 1);
        if (0 < k.length)
          for (d = 0, z = Number.MAX_VALUE; d < k.length; d++) k[d] && z > t[d] && (z = t[d], D = g[d], y = k[d] - D + 1);
        else y = 0;
        w = !(1 < b && u > x)
      })(e);
      k = c.cellWidth;
      q = c.padding + k / 2 + (w ? 0 : k);
      m = c.cellHeight;
      G = c.padding + m *
        (e.title ? 1 : 0);
      F = G + m;
      r = F + c.nutHeight * (w ? 1 : 0);
      A = f(q + k * (v - .5) + c.padding);
      E = f(r + m * x + (e.footer ? m : 0) + c.padding);
      for (M(g, {
          "class": "chordChart",
          xmlns: "http://www.w3.org/2000/svg",
          width: f(A * (e.scale || 1), 0),
          height: f(E * (e.scale || 1), 0),
          viewBox: "0 0 " + f(A, 0) + " " + f(E, 0),
          preserveAspectRatio: "xMidYMid meet",
          "font-size": c.fontHeight
        }); 0 < g.childNodes.length;) g.removeChild(g.lastChild);
      (function(b) {
        for (var d in b)
          for (var f = d, c = b[d].split(","), g = e.style, k = 0; k < c.length; k++) a[c[k]] = document.createElementNS("http://www.w3.org/2000/svg",
            f), a[c[k]].className.baseVal = c[k], g && g[c[k]] && a[c[k]].setAttributeNS(null, "style", g[c[k]])
      })({
        g: "grid,dots,text",
        path: "frets,strings,nut,barre",
        text: "title,header,labels,lofret,footer"
      });
      e.style && e.style.root && g.setAttributeNS(null, "style", e.style.root);
      g.appendChild(a.grid);
      g.appendChild(a.dots);
      H(a.dots, a.labels, e.fret, e.label);
      g.appendChild(a.text);
      a.text.setAttributeNS(null, "text-anchor", "middle");
      a.grid.appendChild(a.frets);
      B(a.frets);
      a.grid.appendChild(a.strings);
      C(a.strings);
      a.text.appendChild(a.header);
      J(a.header, e.head, q, F);
      w ? (g.appendChild(a.nut), K(a.nut)) : (a.text.appendChild(a.lofret), I(a.lofret, b, c.padding + k / 2, r + m - c.fontBaseline));
      e.barre && 1 < y && 0 < b && (g.appendChild(a.barre), L(a.barre, D, y, z));
      e.footer && (a.text.appendChild(a.footer), J(a.footer, e.footer, q, r + m * (x + 1)));
      e.label && a.text.appendChild(a.labels);
      e.title && (a.text.appendChild(a.title), I(a.title, e.title, f(A / 2), f(G)))
    }
  }(function(g, a) {
    if (!g && !a) return {};
    g = g || 16;
    a = a || 1.2;
    var c = function(a) {
        return Number(a.toFixed(1))
      },
      b = {
        fontHeight: g,
        dotDia: c(1.2 *
          g)
      };
    1 > a ? (b.cellHeight = c(1.2 * b.dotDia), b.padding = c(.2 * b.cellHeight), b.cellWidth = c(b.cellHeight / a)) : (b.cellWidth = c(1.2 * b.dotDia), b.padding = c(.2 * b.cellWidth), b.cellHeight = c(b.cellWidth * a));
    b.fontBaseline = c((b.cellHeight - .7 * b.fontHeight) / 2);
    b.nutHeight = c(.2 * b.cellHeight);
    b.barHeight = c(.35 * b.cellHeight);
    b.barGirth = c(.1 * b.cellHeight);
    return b
  }(B, C));
  return function(g, a) {
    var c = {},
      b;
    for (b in a) c[b] = a[b];
    if (a.fret)
      for (c.fret = a.fret.split(","), b = 0; b < c.fret.length; b++) c.fret[b] = parseInt(c.fret[b], 10);
    a.label &&
      (c.label = a.label.split(","));
    a.footer && (c.footer = a.footer.split(","));
    H(g, c)
  }
};
