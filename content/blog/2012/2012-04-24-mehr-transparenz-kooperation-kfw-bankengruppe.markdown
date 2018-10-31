---
author: Christian Kreutz
date: 2012-04-24 15:14:34
image:
  src: /files/blog/2012/04/kfw.png
  title: KfW Förderreport Webseite
layout: post
tags:
- Offene Daten
title: 'Mehr Transparenz: Kooperation KfW-Bankengruppe'
type: post
---

Wir freuen uns bekannt zu geben, dass wir gerade ein Projekt mit der KfW-Bankengruppe abgeschlossen haben.

Inspiriert von unserem Projekt [offenerhaushalt.de](http://bund.offenerhaushalt.de) sprach uns die KfW vor einiger Zeit an und fragte, ob wir nicht auch deren Finanzdaten auf eine neue Weise aufbereiten könnten. Bisher gab es die Daten [nur auf hunderten Seiten eines PDFs](http://www.kfw.de/kfw/de/KfW-Konzern/Unternehmen/Erfolg/Erfolg_in_Zahlen/Foerderreport/index.jsp).

Das Ergebnis ist eine neue Darstellung der Förderungen der KfW in Deutschland: <http://foerderreport.kfw.de>. Für das Projekt haben wir verschiedene Visualisierungstypen verknüpft, damit der Betrachter einen möglichst tiefgehenden Einblick in den Datensatz bekommnt.

  * Die bekannte [Treemap bietet eine Übersicht der einzelnen Förderschwerpunkte](http://foerderreport.kfw.de/foerderschwerpunkte/index.html) nach Jahren und daneben steht eine tabellarische Liste aller Förderungen im Detail.
  * Eine Kartenanwendung zeigt die Aufteilung der Förderungen nach [Bundesländern](http://foerderreport.kfw.de). Daneben gibt es noch eine kleinteiligere [Aufschlüsselung nach Landkreise](http://foerderreport.kfw.de/landkreise/index.html). Hier kann man zum [Beispiel schnell sehen](http://foerderreport.kfw.de/landkreise/index.html), dass die Förderungen zu Innovation fast alle in den Süden Deutschlands wandern.
  * Als dritte Visualisierungsart arbeiten wir mit klassischen Diagrammen, die besser die [Größenordnungen bei den Kreditarten](http://foerderreport.kfw.de/foerderschwerpunkte/index.html) und die Information aus dem Geschäftsbericht darstellen.

Außerdem bieten wir im ersten Schritt alle Daten jeweils auch als CSV Format an. Wir hoffen, dass dies nur ein Anfang ist und sich die KfW in nächster Zeit entschließt weitere Datensätze transparenter und in offenen Formaten anzubieten und dies Inspiration für anderen Banken und Firmen ist.

**Technische Umsetzung**

Die Umsetzung basiert auf Open Source Software:

  * Web App: [Flask](http://flask.pocoo.org/) und dem genialen [Frozen-Flask Modul](http://packages.python.org/Frozen-Flask/)
  * Die Treemap haben wir mit dem [JavaScript InfoVis Toolkit](http://thejit.org/) in einem "Fork" von [Openspending.org](https://github.com/okfn/openspending) umgesetzt.
  * Die Geodaten wurden mit Python/Sqlite aufbereitet und [Tilemill](https://github.com/mapbox/tilemill) umgesetzt. Die [Geodaten sind übrigens kostenlos erhältlich](http://www.geodatenzentrum.de/geodaten/gdz_rahmen.gdz_div?gdz_spr=deu&gdz_user_id=0&gdz_akt_zeile=5&gdz_anz_zeile=5) beim Bundesamt für Kartopgraphie und Geodäsie.