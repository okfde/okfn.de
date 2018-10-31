---
authors:
- Stefan Kaufmann
- Maximilian Richt
- Constantin Müller
- Walter Palmetshofer
date: 2017-03-08 17:30:00
image:
  src: /files/blog/2017/03/rettedeinennahverkehr.png
  title: RetteDeinenNahverkehr.de
type: post
layout: post
card: true
tags:
- Open Data
- Nahverkehr
- Open Transport
title: "Rette deinen Nahverkehr: Hilf mit, Fahrplandaten zu befreien"
---
Deine [Nahverkehrsapp nervt](https://rettedeinennahverkehr.de/img/share/preisauskunft.jpg)? Braucht [zu lange zum Starten](https://rettedeinennahverkehr.de/img/share/startup.jpg) und du fragst dich, warum du [in London eine bessere Auskunft](https://rettedeinennahverkehr.de/img/share/underground.jpg) bekommst als hier?

Dann ist es Zeit für _[rettedeinennahverkehr.de](https://rettedeinennahverkehr.de)_. Gemeinsam machen wir unsere Landrät\*innen und Oberbürgermeister\*innen darauf aufmerksam, dass sie in ihrem Verkehrsverbund tatsächlich etwas bewegen können - indem sie die Fahrplandaten als Open Data für alle bereitstellen.

Zugegeben – der öffentliche Nahverkehr hat noch viele andere Probleme. Er ist chronisch unterfinanziert, in kleinteilige Verbundgebiete zersplittert und hängt der technischen Entwicklung oft mehrere Jahre hinterher. Das ist aber umso mehr ein Argument, vernetzte Mobilität endlich als Plattform zu denken: Egal ob Bus, Bahn, Bike- oder Carsharing, alle stellen ihre Daten offen und frei bereit, damit beliebige Dritte damit die perfekte und bequeme Lösung entwickeln können, die genau Deinen Bedürfnissen entspricht.


**→ [Zur Aktionsseite: rettedeinennahverkehr.de](https://rettedeinennahverkehr.de)**


### Aber noch einmal von vorne – was ist bislang eigentlich passiert?

* 2012 hat sich [der VBB bewegt](https://okfn.de/blog/2012/09/open-data-nahverkehr-berlin-brandenburg-update-zum-status-quo-und-den-entwicklungen/) - und stellt seitdem die [Fahrplandaten als GTFS](http://daten.berlin.de/datensaetze?field_publisher_tid=478) in das Open Data Portal der Stadt Berlin
* 2013 öffnete die Stadtwerke Ulm durch [lokale Communityarbeit](https://stefan.bloggt.es/2013/03/ein-ereignisreiches-open-transit-wochenende/)  (yeah!) ihren Fahrplan als GTFS
* Im Februar 2016 passierte die [lang erwartete Öffnung von DB Fernverkehr](http://data.deutschebahn.com/blog/fahrplan-fernverkehr-online) - zwar leider nur als API, sodass die Community [gleich wieder GTFS draus machte](https://github.com/fredlockheed/db-fv-gtfs).
* und im April 2016 hat der RNV nicht nur GTFS herausgegeben, sondern sich [gleich ein eigenes Open Data Portal gegönnt](http://www.rnv-online.de/aktuelles/news/detail/artikel/rnv-geht-mit-open-data-portal-an-den-start.html)

Das reicht aber noch lange nicht. Wir haben über 120 Verkehrsverbünde - und alle sollten ihre Fahplandaten öffnen - am besten im weltweit akzeptierten GTFS-Format unter einer freien Lizenz!

### Warum ist die Freigabe der Daten überhaupt so wichtig und was kann man damit machen?

Der öffentliche Nahverkehr ist Teil der öffentlichen Daseinsvorsorge und beeinflusst Lebensqualität und Mobilität sowohl in den Städten wie auch auf dem Land. Dabei konkurriert er mittlerweile nicht mehr nur mit dem Auto, sondern auch mit verschiedenen Carsharing- und Pseudo-Taxi-Diensten wie Uber. All diese neuen Dienste haben eins gemein: Schnelle Entwicklungsabteilungen, deren oberstes Ziel ist, ihr Produkt so einfach und leicht wie möglich benutzbar zu machen.

Für Verkehrsverbünde ist es schwer, mit dieser Konkurrenz mitzuhalten. Viele kleinere Verbünde sind durch [Vendor Lock-In](https://de.wikipedia.org/wiki/Lock-in-Effekt) gezwungen, ihre Auskunftsapps von einem der wenigen Anbieter einzukaufen, die den deutschen Markt für Fahrplanauskünfte dominieren. Diese verkaufen die immer gleichen Lösungen jedem einzelnen Verkehrsverbund teuer aufs neue – und sie können in der Regel wenig mehr als eine One-Size-Fits-All-Auskunft für die Durchschnittsfahrgäste anzubieten. Wer besondere Anforderungen – beispielsweise mit dem Kinderwagen oder Rollstuhl – hat, oder eine Tür-zu-Tür-Auskunft mit Bikesharing, S-Bahn und Taxi aus _einer_ Hand möchte, bleibt im Regen stehen.
Viele Entwickler\*innen haben aber Lust darauf, diese Probleme zu lösen. Ganz typisch sind das in der Regel eigene Probleme, von deren Lösung aber auch viele andere profitieren können. Auch sobald man nicht mehr nur in der Größe _eines_ Verkehrsverbundes denkt, sind Zielgruppen auf einmal nicht mehr so klein – und eine vermeintliche Nischenanwendung hat über ganz Deutschland oder gar die ganze Welt verteilt genügend Nutzer\*innen, für die es sich lohnt, Lösungen zu entwickeln. Um das zu ermöglichen, bedarf es eines Formats, das auch alle verstehen – nicht nur in Deutschland, sondern idealerweise weltweit.  Hier hat sich [GTFS](https://de.wikipedia.org/wiki/General_Transit_Feed_Specification) als Soll-Fahrplandatenformat durchgesetzt, das weltweit benutzt wird und auf dem schon viele Anwendungen aufbauen.

Letztendlich können wir den öffentlichen Nahverkehr mit den Daten und den Apps, die daraus entstehen, für uns und viele Menschen noch attraktiver (oder überhaupt erst erträglich) machen – und eventuell noch mehr Menschen dazu bringen, ihren Nahverkehr zu nutzen. Wer in eine fremde Stadt reist, kann mit offenen Daten einfach die schon vertraute App dort nutzen, anstatt wie bisher in jedem Verkehrsverbund die hauseigene App herunterladen zu müssen. Und wenn Fahrplandaten beispielsweise mit Ausflugszielen oder touristischen Aktionen verbunden werden, sind ganz neue Anwendungen möglich – und zwar ohne dafür gleich sechsstellige Fördergelder zu versenken, wie das in den letzten Jahren in diesem Bereich leider Usus war.

Damit das funktioniert, müssen die Daten schmerzfrei öffentlich unter einer der bekannten OpenData-Lizenzen heruntergeladen werden können. Bei über 100 Verkehrsverbünden in Deutschland können die freiwilligen Entwicklerteams aus der Civic-Tech-Bewegung nur mit großem Aufwand jeden einzelnen Verbund anfragen und womöglich individuelle Nutzungsvereinbarungen prüfen und unterschreiben. Auch Startups scheitern in der Regel an dieser Hürde – übrig bleiben dann nur die großen Industrie-Dickschiffe mit mächtiger Rechtsabteilung. Innovation wird so nur ausgebremst.

### Und was ist mit Echtzeitdaten?

Viele Verbünden argumentieren, dass sie ja bereits jetzt Echtzeitschnittstellen bereitstellen würden. Leider lassen diese Schnittstellen jedoch nur Abfragen nach genau definierten Einzelfahrten zu und sind zu 100% von einer funktionierenden Internetanbindung abhängig. Wer also im Tunnel steckt, als Tourist\*in ohne deutsches Datenvolumen unterwegs ist oder einen Gesamtfahrplan für die WG-Suche analysieren möchte, bekommt – nichts passendes. Und selbst wenn die Echtzeitauskunft für den individuellen Zweck ausreicht, sind die Daten in der Regel gänzlich unlizenziert oder ihre Auswertung über eine Fahrplanauskunft hinaus gar per AGB verboten. Ob das rechtlich überhaupt haltbar ist, ist fraglich – Innovation schreckt es auf jeden Fall ab.

Es ist also an der Zeit, die Entscheidungsträger\*innen in den Gebietskörperschaften auf das riesige, ungeborgene Potenzial offener Fahrpläne aufmerksam zu machen. Lasst uns diese Karte der "offenen Verbünde" zusammen komplett grün einfärben – Du brauchst nicht viel mehr als einen Drucker, einen Briefumschlag und eine Briefmarke!

![Karte der Verbünde, die bereits Open Data veröffentlichen](/files/blog/2017/03/rdn-opendata-map.png "Karte der Verbünde, die bereits Fahrplandaten als Open Data veröffentlichen")

<p class="post-image-license">
Karte der Verbünde, die bereits Fahrplandaten als Open Data veröffentlichen, <a href="https://creativecommons.org/licenses/by-sa/2.5/deed.en">CC-BY-SA 2.5</a> <a href="https://github.com/highsource/verbundkarte">github.com/highsource/verbundkarte</a>
</p>
