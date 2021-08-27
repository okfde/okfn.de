---
authors:
- Katharina Meyer
- Adriana Groh
date: 2021-08-27
image:
  src: /files/blog/2021/08/dependency.png
  title: 
  license: CC BY-NC 2.5
  license_url: https://creativecommons.org/licenses/by-nc/2.5/
tags:
- infrastructure
- zivilgesellschaft
type: post
layout: post
published: true
featured: blue
title: Infrastructure first, Innovation second!
---

Verschiedene Arten von Infrastrukturen verbindet, dass sie in der Regel beinahe unsichtbar sind - und deshalb gerne in Vergessenheit geraten. Ob Internet-Kabel auf dem Meeresgrund, die Straßen unter unseren Füßen und Reifen, oder die untersten Schichten eines Technologiestacks - Infrastrukturen wirken im Verborgenen.
Weshalb die Resilienz und Sicherheit von Software-Infrastruktur und Raum für offene Standards für die Arbeit der OKF und die gesamte Gesellschaft wichtig ist - und was wir zu deren Steigerung unternehmen wollen, berichtet wir euch im Blogpost.

tldr; wir arbeiten an einem Umsetzungskonzept für einen OSS-Infrastruktur-Fund, zum thematischen Newsletter geht es hier: https://tinyletter.com/infrastructurefund. 

**(Vorläufiges) Mission Statement**
Die Entwicklung, Verbesserung und Wartung von kritischer IKT-Basistechnologien sowie Vorhaltung offener Standards sollten durch gezielte öffentliche Förderung unterstützt werden. Ziel eines Förderprogramms könnte es sein, das Open-Source-Ökosystem nachhaltig zu stärken, wobei der Fokus auf Sicherheit, Resilienz, technologischer Vielfalt und den Menschen hinter dem Code liegt.

### Theorie...
Über den Prototype Fund unterstützen wir gemeinsam mit dem BMBF bereits seit 2016 die Entwicklung von innovativen Anwendungen, die auf offenem Sourcecode basieren. In 6 Monaten gelingt die Umsetzung von Prototypen dabei nur, weil Entwickler:innen auch auf einen gewaltigen Fundus von Vorentwicklungen zurückgreifen können. [Permissiven Lizenzen](https://de.wikipedia.org/wiki/Freiz%C3%BCgige_Open-Source-Lizenz) sei Dank: Compiler, Libraries mit vordefinierten Funktionsbestandteilen, offene technische Standards zur Implementierung, wie auch Sicherheitstools wie Zertifikate stehen als [Software-Infrastruktur](https://prototypefund.de/softwareinfrastruktur/) zur Nachnutzung bereit. 
[Gemeinsam bilden diese Komponenten mit die Voraussetzung für ein offenes Internet und dezentrale Anwendungen](https://www.journalismliberty.org/publications/what-is-digital-public-infrastructure) - denn eine [Marktkonsolidierung](https://future.internetsociety.org/2019/consolidation-in-the-internet-economy/) hat sich bereits weitgehend realisiert.

Foren wie StackOverflow und Hostingplattformen wie Git(hub,lab…) können beim Programmieren nicht nur Zeit, sondern potenziell auch Nerven sparen - in der Theorie. Allerdings: In der Prototype Fund-[Nachhaltigkeitsevaluation](https://prototypefund.de/about/begleitforschung/) mit den Geförderten, wie auch den von den Projekten selbst am Ende der Förderphase abgelieferten [Abschlussberichten](https://www.tib.eu/de/suchen/?tx_tibsearch_search%5Bquery%5D=Software-Sprint&tx_tibsearch_search%5Bcnt%5D=20&tx_tibsearch_search%5Bpg%5D=1&tx_tibsearch_search%5BDlicenseModel%5D%5B0%5D=oa) lesen wir regelmäßig folgendes: Schnittstellen funktionieren nicht immer wie vorgesehen, Dependencies sind im Eimer, es gibt [Upstream](https://de.wikipedia.org/wiki/Upstream_(Softwareentwicklung)) einen Stau bei den Pull Requests für neue Funktionalitäten, Kernentwickler vielfach in der Software-Lieferkette verbauter offener Projekte sind überlastet und nicht ansprechbar. 

Die Herausforderung an der Basis hat einen komplexen Kern: Die Unterversorgung ist strukturell bedingt und liegt in der Erfolgsgeschichte von offener Software selbst: [Open Source als Produktionslogik hat sich mit ihren Vorteilen teils schneller durchgesetzt und skaliert, als die Hervorbringungsmechanismen und produzierenden Communities mitwachsen konnten](https://www.fordfoundation.org/just-matters/just-matters/posts/every-day-we-rely-on-digital-infrastructure-built-by-volunteers-what-happens-when-it-fails/). Zudem sind externe Effekte zu beobachten, die viele Gemeingüter betreffen: Viele Nutzende (auch in der Industrie), (zu) wenige Beitragende.

Aktuell sind wir deshalb an einem neuralgischen Punkt angekommen, an dem man im Sinne des Gemeinwohls nicht länger nur auf das Innovationspotenzial von Open Source sehen kann, sondern an den Wurzeln ansetzen muss. Ressourcen und Aufmerksamkeit für Software-Infrastruktur sind grundlegend für digitale Sicherheit, Resilienz, Vielfalt, Souveränität und Gemeinwohl im digitalen Raum. 

### ...und Praxis: Machbarkeitsstudie

Die OKF hat sich mit einem Kernteam aus dem Prototype Fund (Adriana Groh und Katharina Meyer) und weiteren praxiserfahrenen Partner:innen, wie Eileen Wagner, Fiona Krakenbürger und Tara Tarakiyee, auf Grundlage von [Forschungs-](https://www.fordfoundation.org/work/challenging-inequality/technology-and-society/digital-infrastructure/) und [Felderkenntnissen](https://offerman.com/en/projects/ec-projects) bei der öffentlichen Hand dafür eingesetzt, zu prüfen, wie Steuermittel und nicht-monetäre Förderung dafür verwendet werden könnten, die drängendsten Probleme in der digitalen Infrastruktur in enger Zusammenarbeit mit (Core-)[Maintainern](https://de.wikipedia.org/wiki/Maintainer) und Implementierern zu adressieren. Von Projekt-Governance bis zu Security-Fragen. Im Rahmen einer vom BMWI geförderten Machbarkeitsstudie haben wir nun die Möglichkeit, Bedarfe im Feld für ein solches Förderprogramm zu prüfen.

Die Machbarkeitsstudie ist für uns der erste Schritt auf dem Weg in eine nachhaltigere Entwicklungsumgebung für Software-Basistechnologien. Das Open-Source-Ökosystem soll erhalten und gestärkt werden, um sichere und resiliente digitale Infrastrukturen und soziale Nachhaltigkeit zu gewährleisten. Die Idee orientiert sich u.a. am Vorbild des OTF Core Infrastructure Funds, Forschungsergebnissen aus dem [Critical Digital Infrastructure](https://www.fordfoundation.org/work/challenging-inequality/technology-and-society/digital-infrastructure/strategy/)-Feld- und kann aus Erfahrungen aus weiteren Programmen, z. B. des Prototype Funds, lernen und hier bereits getestete Verfahren integrieren. 

Wenn ihr zu dieser Idee mit uns in Austausch treten wollt, meldet euch gerne!
