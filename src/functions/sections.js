import React, { Component } from "react";
import Strings from "./strings";

export const sections = {
  home: {
    excludeFromMain: true,
    titleKey: "homeTitle"
  },
  about: {
    titleKey: "aboutTitle"
  },
  expertise: {
    titleKey: "expertiseTitle",
    subsections: [
      {
        slug: "economia",
        title: Strings.expertise.sections.economia,
        href: "/expertise/economia"
      },
      {
        slug: "ingenieria",
        title: Strings.expertise.sections.ingenieria,
        href: "/expertise/ingenieria"
      },
      {
        slug: "finanzas",
        title: Strings.expertise.sections.finanzas,
        href: "/expertise/finanzas"
      },
      {
        slug: "transparencia",
        href: "/expertise/transparencia",
        title: Strings.expertise.sections.transparencia
      },
      {
        slug: "data",
        title: Strings.expertise.sections.data,
        href: "/expertise/data"
      }
    ]
  },
  sectors: {
    titleKey: "sectorsTitle"
  },
  contact: {
    excludeFromMain: true,
    excludeFromBig: true,
    titleKey: "contactTitle"
  }
};
export function sectionsArrayFunction() {
  var o = [];
  for (var key in sections) {
    if (sections.hasOwnProperty(key)) {
      var obj = sections[key];
      obj.slug = key;
      o.push(obj);
    }
  }
  return o;
}
export const sectionsArray = sectionsArrayFunction();
export function isInMainMenu(slug) {
  var section = sections[slug];
  var r = false;
  if (section) {
    if (!section.excludeFromMain) {
      r = true;
    }
  }
  return r;
}
export function getSectionTitle(slug) {
  var section = sections[slug];
  var r = "";
  if (section) {
    if (section.titleKey) {
      r = Strings[section.titleKey];
    }
  }
  return r;
}
