"use strict";(self.webpackChunkkcc_newsroom=self.webpackChunkkcc_newsroom||[]).push([[426],{426:function(e,t,r){r.r(t),t.default=function(){[...document.querySelectorAll(".modal")].forEach((e=>{e.addEventListener("shown.bs.modal",(e=>{if(e.target.dataset.video){const t=e.target,r=e.target.dataset.video.replace(/^https:\/\/youtu.be\//g,"https://www.youtube.com/embed/"),a=t.querySelector("iframe");a.setAttribute("allow","autoplay; encrypted-media"),a.setAttribute("src",`${r}?rel=0&autoplay=1`),function(e){e.addEventListener("hide.bs.modal",(e=>{const t=e.target.querySelector("iframe");t.setAttribute("allow",""),t.setAttribute("src","")}))}(t)}}))}))}}}]);