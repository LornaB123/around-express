(this['webpackJsonparound-react'] = this['webpackJsonparound-react'] || []).push([[0], {
  15(e, t, n) {},
  16(e, t, n) {
    n.r(t); const a = n(0); const r = n(1); const o = n.n(r); const c = n(6); const s = n.n(c); const i = (n(15), n(9)); const u = n(2); const l = `${n.p}static/media/logo.c7581985.svg`; const p = function () { return Object(a.jsx)('header', { className: 'header', children: Object(a.jsx)('img', { src: l, alt: 'Around the US', className: 'logo' }) }); }; const d = Object(r.createContext)(); const j = function (e) {
      const t = e.card; const n = e.onCardDelete; const o = e.onCardClick; const c = e.onCardLike; const s = Object(r.useContext)(d); const i = t.owner._id === s._id; const u = 'elements__trash '.concat(i ? 'elements__trash_visible' : 'elements__trash'); const l = t.likes.some(((e) => e._id === s._id)); const p = 'elements__favorite '.concat(l ? 'elements__favorite_selected' : 'elements__favorite'); return Object(a.jsxs)('figure', {
        className: 'elements__element',
        children: [Object(a.jsx)('img', {
          className: 'elements__element-pic', alt: 'card image', onClick() { return o(t); }, src: t && t.link,
        }), Object(a.jsx)('figcaption', { className: 'elements__caption', children: t.name }), Object(a.jsxs)('div', {
          className: 'elements__favorite-container',
          children: [Object(a.jsx)('button', {
            className: p, onClick() { return c(t); }, type: 'button', 'aria-label': 'Like',
          }), Object(a.jsx)('p', { className: 'elements__likes', children: t.likes.length })],
        }), Object(a.jsx)('button', {
          className: u, type: 'button', onClick() { return n(t); }, 'aria-label': 'Delete',
        })],
      });
    }; const b = function (e) {
      const t = e.cards; const n = e.onEditAvatar; const o = e.onEditProfile; const c = e.onAddPlace; const s = e.onCardDelete; const i = e.onCardClick; const u = e.onCardLike; const l = Object(r.useContext)(d); return Object(a.jsxs)('main', {
        className: 'content',
        children: [Object(a.jsxs)('section', {
          className: 'profile',
          children: [Object(a.jsxs)('div', {
            className: 'profile__avatar',
            children: [Object(a.jsx)('img', { className: 'profile__image', src: l.avatar, alt: l.avatar }), Object(a.jsx)('button', {
              onClick: n, className: 'profile__image-edit', type: 'button', 'aria-label': 'Edit Avatar',
            })],
          }), Object(a.jsxs)('div', { className: 'profile__info', children: [Object(a.jsx)('h1', { className: 'profile__info-title', children: l.name }), Object(a.jsx)('button', { className: 'profile__edit-button', onClick: o, 'aria-label': 'Edit Profile' }), Object(a.jsx)('p', { className: 'profile__info-subtitle', children: l.about })] }), Object(a.jsx)('button', { className: 'profile__add-button', onClick: c, 'aria-label': 'Add' })],
        }), Object(a.jsx)('section', {
          className: 'elements',
          children: Object(a.jsx)(a.Fragment, {
            children: t.map(((e) => Object(a.jsx)(j, {
              card: e, onCardDelete: s, onCardClick: i, onCardLike: u,
            }, e._id))),
          }),
        })],
      });
    }; const f = function () { return Object(a.jsx)('footer', { className: 'footer', children: Object(a.jsx)('p', { className: 'footer__info', children: '\xa9 2020 Around The U.S.' }) }); }; const h = function (e) {
      const t = e.card; const n = e.isOpen; const r = e.onClose; return Object(a.jsx)('div', {
        className: 'popup popup_type_image '.concat(n ? 'popup_open' : ''),
        onClick: r,
        children: Object(a.jsxs)('div', {
          className: 'popup_container_type_image',
          children: [Object(a.jsx)('img', { alt: 'Popup Image Picture', className: 'popup__image', src: t && t.link }), Object(a.jsx)('h3', { className: 'popup__caption', children: t.name }), Object(a.jsx)('button', {
            className: 'popup__close-button', onClick: r, type: 'reset', 'aria-label': 'Close Form',
          })],
        }),
      });
    }; const m = function (e) {
      const t = e.name; const n = e.onSubmit; const r = e.onClose; const o = e.isOpen; const c = e.buttonText; const s = e.children; const i = e.title; return Object(a.jsx)('div', {
        className: 'popup popup_'.concat(t, ' ').concat(o ? 'popup_open' : ''),
        onClick: r,
        children: Object(a.jsx)('div', {
          className: 'popup__container',
          children: Object(a.jsxs)('form', {
            action: '#',
            className: 'popup__form '.concat(t, '-form'),
            onSubmit: n,
            noValidate: !0,
            children: [Object(a.jsx)('h2', { className: 'popup__title', children: i }), s, Object(a.jsx)('button', {
              className: 'popup__save', type: 'submit', 'aria-label': 'Save', children: c,
            }), Object(a.jsx)('button', {
              className: 'popup__close-button', onClick: r, type: 'reset', 'aria-label': 'Close Form',
            })],
          }),
        }),
      });
    }; const _ = function (e) {
      const t = Object(r.useState)(' '); const n = Object(u.a)(t, 2); const o = n[0]; const c = n[1]; const s = Object(r.useState)(' '); const i = Object(u.a)(s, 2); const l = i[0]; const p = i[1]; const j = Object(r.useState)(' '); const b = Object(u.a)(j, 2); const f = b[0]; const h = b[1]; const _ = Object(r.useState)(' '); const O = Object(u.a)(_, 2); const v = O[0]; const x = O[1]; const g = Object(r.useState)(' '); const C = Object(u.a)(g, 2); const k = (C[0], C[1], Object(r.useContext)(d)); return Object(r.useEffect)((() => { c(k.name), p(k.about); }), [k]), Object(a.jsxs)(m, {
        name: 'type_edit',
        title: 'Edit Profile',
        buttonText: 'Save',
        isOpen: e.isOpen,
        onClose: e.onClose,
        onSubmit(t) { t.preventDefault(), e.onUpdateUser({ name: o, about: l }); },
        children: [Object(a.jsx)('input', {
          id: 'profile-name', type: 'text', name: 'name', value: o || '', className: 'popup__input popup__input_type_name '.concat(f && 'popup__input_type_error'), onChange(e) { c(e.target.value), h(e.target.validationMessage); }, placeholder: 'Jacques Cousteau', required: !0, maxLength: '40', minLength: '2',
        }), Object(a.jsx)('span', { id: 'profile-name-error', className: 'popup__error', children: f }), Object(a.jsx)('input', {
          id: 'profile-text', type: 'text', name: 'about', className: 'popup__input popup__input_type_job '.concat(v && 'popup__input_type_error'), value: l || '', onChange(e) { p(e.target.value), x(e.target.validationMessage); }, placeholder: 'Explorer', required: !0, maxLength: '200', minLength: '2',
        }), Object(a.jsx)('span', { id: 'profile-text-error', className: 'popup__error', children: v })],
      });
    }; const O = function (e) {
      const t = e.isOpen; const n = e.onClose; const o = e.onUpdateAvatar; const c = Object(r.useRef)(); return Object(a.jsxs)(m, {
        name: 'type_avatar',
        value: c || '',
        title: 'Change Profile Picture',
        buttonText: 'Save',
        isOpen: t,
        onClose: n,
        onUpdateAvatar: o,
        onSubmit(e) { e.preventDefault(), o(c.current.value), c.current.value = ''; },
        children: [Object(a.jsx)('input', {
          id: 'avatar-URL', type: 'url', name: 'avatarURL', className: 'popup__input popup__input_type_avatar-URL', minLength: '2', ref: c,
        }), Object(a.jsx)('span', { id: 'avatar-URL-error', className: 'popup__error' })],
      });
    }; const v = function (e) {
      const t = e.isOpen; const n = e.onClose; const r = e.onDeleteCard; return Object(a.jsx)(m, {
        name: 'type_delete-card', title: 'Are you sure?', buttonText: 'Yes', isOpen: t, onClose: n, onDeleteCard: r, onSubmit(e) { e.preventDefault(), r(); },
      });
    }; const x = function (e) {
      const t = e.isOpen; const n = e.onClose; const o = e.onAddPlace; const c = Object(r.useState)(''); const s = Object(u.a)(c, 2); const i = s[0]; const l = s[1]; const p = Object(r.useState)(''); const d = Object(u.a)(p, 2); const j = d[0]; const b = d[1]; return Object(a.jsxs)(m, {
        name: 'type_add-card',
        title: 'New Place',
        buttonText: 'Create',
        isOpen: t,
        onClose: n,
        onSubmit(e) { e.preventDefault(), o({ name: i, link: j }), b(''), l(''); },
        children: [Object(a.jsx)('input', {
          id: 'card-title', type: 'text', name: 'card-title', value: i, onChange(e) { l(e.target.value); }, className: 'popup__input popup__input_type_title', placeholder: 'Title', required: !0, maxLength: '30', minLength: '2',
        }), Object(a.jsx)('span', { id: 'card-title-error', className: 'popup__error' }), Object(a.jsx)('input', {
          id: 'card-url', type: 'url', name: 'card-link', value: j, onChange(e) { b(e.target.value); }, className: 'popup__input popup__input_type_link', placeholder: 'Image Link', required: !0,
        }), Object(a.jsx)('span', { id: 'card-url-error', className: 'popup__error' })],
      });
    }; const g = n(7); const C = n(8); const k = new (function () { function e(t) { const n = t.baseUrl; const a = t.headers; Object(g.a)(this, e), this._baseUrl = n, this._headers = a; } return Object(C.a)(e, [{ key: 'getInitialCards', value() { return fetch(`${this._baseUrl}/cards/`, { headers: this._headers }).then(((e) => (e.ok ? e.json() : Promise.reject(`Error${e.statusText}`)))).catch(((e) => console.log(e))); } }, { key: 'getUserInfo', value() { return fetch(`${this._baseUrl}/users/me/`, { headers: this._headers }).then(((e) => (e.ok ? e.json() : Promise.reject(`Error${e.statusText}`)))).catch(((e) => console.log(e))); } }, { key: 'getAppInfo', value() { return Promise.all([this.getUserInfo(), this.getInitialCards()]); } }, { key: 'addCard', value(e) { const t = e.name; const n = e.link; return fetch(`${this._baseUrl}/cards/`, { headers: this._headers, method: 'POST', body: JSON.stringify({ name: t, link: n }) }).then(((e) => (e.ok ? e.json() : Promise.reject(`Error${e.statusText}`)))).catch(((e) => console.log(e))); } }, { key: 'removeCard', value(e) { return fetch(`${this._baseUrl}/cards/${e}`, { headers: this._headers, method: 'DELETE' }).then(((e) => (e.ok ? e.json() : Promise.reject(`Error${e.statusText}`)))).catch(((e) => console.log(e))); } }, { key: 'addLike', value(e) { return fetch(`${this._baseUrl}/cards/likes/${e}`, { headers: this._headers, method: 'PUT' }).then(((e) => (e.ok ? e.json() : Promise.reject(`Error${e.statusText}`)))).catch(((e) => console.log(e))); } }, { key: 'removeLike', value(e) { return fetch(`${this._baseUrl}/cards/likes/${e}`, { headers: this._headers, method: 'DELETE' }).then(((e) => (e.ok ? e.json() : Promise.reject(`Error${e.statusText}`)))).catch(((e) => console.log(e))); } }, { key: 'setUserInfo', value(e) { const t = e.name; const n = e.about; return fetch(`${this._baseUrl}/users/me/`, { method: 'PATCH', headers: { authorization: 'a950b923-6d6c-4927-9948-6833c1950cc9', 'Content-Type': 'application/json' }, body: JSON.stringify({ name: t, about: n }) }).then(((e) => (e.ok ? e.json() : Promise.reject(`Error${e.statusText}`)))).catch(((e) => console.log(e))); } }, { key: 'setUserAvatar', value(e) { return fetch(`${this._baseUrl}/users/me/avatar/`, { headers: this._headers, method: 'PATCH', body: JSON.stringify({ avatar: e }) }).then(((e) => (e.ok ? e.json() : Promise.reject(`Error${e.statusText}`)))).catch(((e) => console.log(e))); } }]), e; }())({ baseUrl: 'https://around.nomoreparties.co/v1/group-7', headers: { authorization: 'a950b923-6d6c-4927-9948-6833c1950cc9', 'Content-Type': 'application/json' } }); const y = function () {
      const e = Object(r.useState)(!1); const t = Object(u.a)(e, 2); const n = t[0]; const o = t[1]; const c = Object(r.useState)(!1); const s = Object(u.a)(c, 2); const l = s[0]; const j = s[1]; const m = Object(r.useState)(!1); const g = Object(u.a)(m, 2); const C = g[0]; const y = g[1]; const N = Object(r.useState)(!1); const S = Object(u.a)(N, 2); const U = S[0]; const P = S[1]; const E = Object(r.useState)(!1); const T = Object(u.a)(E, 2); const L = T[0]; const A = T[1]; const D = Object(r.useState)(''); const I = Object(u.a)(D, 2); const F = I[0]; const J = I[1]; const q = Object(r.useState)(''); const w = Object(u.a)(q, 2); const R = w[0]; const M = w[1]; const z = Object(r.useState)([]); const B = Object(u.a)(z, 2); const H = B[0]; const V = B[1]; function Y() { o(!1), j(!1), y(!1), P(!1), A(!1); } function G(e) { e.target === e.currentTarget && Y(); } return Object(r.useEffect)((() => { k.getInitialCards().then(((e) => { V(e); })).catch(((e) => console.log(e))); }), []), Object(r.useEffect)((() => { k.getUserInfo().then(((e) => { M(e); })).catch(((e) => console.log(e))); }), []), Object(a.jsx)('div', {
        className: 'body',
        children: Object(a.jsxs)(d.Provider, {
          value: R,
          children: [Object(a.jsx)(p, {}), Object(a.jsx)(b, {
            cards: H, onEditAvatar() { o(!0); }, onEditProfile() { j(!0); }, onAddPlace() { y(!0); }, onCardDelete(e) { P(!0), J(e); }, onCardClick(e) { J(e), A(!0); }, onCardLike(e) { (!1 === e.likes.some(((e) => e._id === R._id)) ? k.addLike(e._id) : k.removeLike(e._id)).then(((t) => { const n = H.map(((n) => (n._id === e._id ? t : n))); V(n); })).catch(((e) => console.log(e))); },
          }), Object(a.jsx)(f, {}), Object(a.jsx)(O, { isOpen: n, onClose: G, onUpdateAvatar(e) { k.setUserAvatar(e).then(((e) => { M(e); })).catch(((e) => console.log(e))).finally((() => Y())); } }), Object(a.jsx)(_, { isOpen: l, onClose: G, onUpdateUser(e) { const t = e.name; const n = e.about; k.setUserInfo({ name: t, about: n }).then(((e) => { M(e); })).catch(((e) => console.log(e))).finally((() => Y())); } }), Object(a.jsx)(x, { isOpen: C, onClose: G, onAddPlace(e) { const t = e.name; const n = e.link; k.addCard({ name: t, link: n }).then(((e) => { V([e].concat(Object(i.a)(H))); })).catch(((e) => console.log(e))).finally((() => Y())); } }), Object(a.jsx)(v, { isOpen: U, onClose: G, onDeleteCard() { const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F; k.removeCard(e._id).then((() => { const t = H.filter(((t) => t._id !== e._id)); V(t); })).catch(((e) => console.log(e))).finally((() => Y())); } }), Object(a.jsx)(h, { card: F, isOpen: L, onClose: Y })],
        }),
      });
    }; const N = function (e) { e && e instanceof Function && n.e(3).then(n.bind(null, 17)).then(((t) => { const n = t.getCLS; const a = t.getFID; const r = t.getFCP; const o = t.getLCP; const c = t.getTTFB; n(e), a(e), r(e), o(e), c(e); })); }; s.a.render(Object(a.jsx)(o.a.StrictMode, { children: Object(a.jsx)(y, {}) }), document.getElementById('root')), N();
  },
}, [[16, 1, 2]]]);
// # sourceMappingURL=main.487f07b2.chunk.js.map
