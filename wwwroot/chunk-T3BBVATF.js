import{H as v,n as b,p as f}from"./chunk-U7N6QTAN.js";import{$ as d,Ub as u,Vb as p,W as c,X as s,Z as o,dc as g,ib as m,jb as l,q as n}from"./chunk-LWQ2NCQP.js";var C=["*"];var x=new o("MAT_CARD_CONFIG"),k=(()=>{class r{appearance;constructor(){let e=d(x,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(a){return new(a||r)};static \u0275cmp=m({type:r,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(a,i){a&2&&g("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:C,decls:1,vars:0,template:function(a,i){a&1&&(u(),p(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return r})();var O=(()=>{class r{static \u0275fac=function(a){return new(a||r)};static \u0275mod=l({type:r});static \u0275inj=s({imports:[v]})}return r})();var h=class r{http=d(f);baseUrl="/api/families";list(t={}){let e=new b;return t.page&&(e=e.set("page",t.page)),t.pageSize&&(e=e.set("pageSize",t.pageSize)),t.search&&(e=e.set("search",t.search)),t.wardId&&(e=e.set("wardId",t.wardId)),t.status&&(e=e.set("status",t.status)),t.sortBy&&(e=e.set("sortBy",t.sortBy)),t.sortDir&&(e=e.set("sortDir",t.sortDir)),this.http.get(this.baseUrl,{params:e}).pipe(n(a=>({rows:a.rows||[],total:a.total||0,page:a.page||1,pageSize:a.pageSize||25})))}getById(t){return this.http.get(`${this.baseUrl}/${t}`).pipe(n(e=>e.data))}getNextCode(){return this.http.get(`${this.baseUrl}/next-code`).pipe(n(t=>t.data.family_code))}create(t){return this.http.post(this.baseUrl,t).pipe(n(e=>e.data))}update(t,e){return this.http.put(`${this.baseUrl}/${t}`,e).pipe(n(a=>a.data))}delete(t){return this.http.delete(`${this.baseUrl}/${t}`)}addMember(t,e){return this.http.post(`${this.baseUrl}/${t}/members`,e).pipe(n(a=>a.data))}updateMember(t,e){return this.http.put(`${this.baseUrl}/members/${t}`,e).pipe(n(a=>a.data))}removeMember(t){return this.http.delete(`${this.baseUrl}/members/${t}`)}splitFamily(t,e){return this.http.post(`${this.baseUrl}/${t}/split`,e).pipe(n(a=>a.data))}migrateFamily(t,e){return this.http.post(`${this.baseUrl}/${t}/migrate`,e).pipe(n(a=>a.data))}getCensus(){return this.http.get(`${this.baseUrl}/stats/census`).pipe(n(t=>t.data))}getWards(){return this.http.get("/api/masters/wards?pageSize=500").pipe(n(t=>t.rows||[]))}static \u0275fac=function(e){return new(e||r)};static \u0275prov=c({token:r,factory:r.\u0275fac,providedIn:"root"})};export{k as a,O as b,h as c};
