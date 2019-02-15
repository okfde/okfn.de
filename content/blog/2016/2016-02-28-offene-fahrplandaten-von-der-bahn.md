---
authors:
- Stefan Kaufmann
- Walter Palmetshofer
date: 2016-02-28 16:39:00
image:
  src: /files/blog/2016/02/db-launchevent.jpg
  title: "Launchevent in der DB-Mindbox: Die erste echte freie Fahrplandaten-API der Bahn"
  license: CC-0
type: post
layout: post
card: true
tags:
- Open Data
- Deutsche Bahn
- Fernverkehr
- Open Transport
title: "Offene Fahrplandaten von der Bahn"
---

Gerade einmal vier Monate ist es her, [dass die Deutsche Bahn erstmals ihre Open-Data-Pläne ankündigte](/blog/2015/10/die-bahn-kommt-auf-open-data/), und seither gab es kaum eine Verschnaufpause: [Anfang November startete das Datenportal](/blog/2015/11/its-alive-daten.deutschebahn.com/) und im Dezember [fanden nacheinander der 3. DB-Hackathon und ein Contest zur Nutzung der DB-Aufzugs-API statt](/blog/2015/12/aufzugschallenge/), bevor das Open-Data-Jahr [mit einem Austausch mit der Community auf dem 32C3 in Hamburg ausklang](http://www.golem.de/news/opendata-im-spnv-deutsche-bahn-oeffnet-sich-weiter-der-hackercommunity-1512-118261.html).

Dabei ging es vielfach um Datensätze und APIs rund um die Aufzüge und Parkplätze der Deutschen Bahn. Was vielfach die Frage aufwarf, was denn eigentlich mit offenen Daten rund um Züge sei – schließlich könne man doch argumentieren, dass das *Kerngeschäft* der Bahn doch eigentlich das horizontale Bewegen von Menschen in Eisenbahnen sei, weniger der Vertikaltransport in Aufzügen oder der gar-nicht-Transport von Autos.

Weil das natürlich stimmt, ackerten – inspiriert von den positiven Resultaten der bisherigen Datenöffnungen – verschiedene Fachabteilungen hinter den Kulissen daran, auch die Fahrplandaten des Personenverkehrs ganz „offiziell“ zu befreien. Zwar kann man schon seit Längerem die einschlägig bekannten [IRIS-](http://finalrewind.org/projects/Travel-Status-DE-IRIS/), EFA- und [HAFAS-Schnittstellen abgrasen](https://github.com/schildbach/public-transport-enabler) und auf diesem Wege an die Verkehrsdaten kommen – *eigentlich* ist das aber eine *unerlaubte* Nutzung dieser Dienste. Was nicht einmal am Unwillen der Bahn liegt, sondern vielmehr an den Lizenzbedingungen, die sie vor Jahren mit den Herstellerfirmen der Auskunftssoftware vereinbart hatte, und aus der sie so schnell nicht herauskommen wird.

Als rechtlich saubere Lösung wurde gestern deswegen in der DB Mindbox in Berlin [eine neue REST-Schnittstelle vorgestellt,](http://data.deutschebahn.com/blog/2016/02/25/fahrplan/) die im ersten Schritt alle Soll-Fahrplandaten des DB-Fernverkehrs unter freier Lizenz bereitstellt. 
Interessierten stellt die Bahn einen API-Key per Email zur Verfügung. Die XML-Variante ist – im derzeit verfügbaren Ausbauzustand – identisch zur gewohnten HAFAS-Schnittstelle und trägt generell die Handschrift von HaCon; zudem existiert eine per Transformation erstellte JSON-Variante.


## Workshopday: Praxistest und wie’s weitergeht

![Einige der Prämierten der Aufzugs-Challenge](/files/blog/2016/02/db-challengewinner.jpg "Einige der Prämierten der Aufzugs-Challenge")

Tags darauf trafen sich in der Mindbox die Entwickler\*innen der neuen API mit denen, die damit in der Praxis etwas anfangen – nämlich einer Reihe von Anwendungsentwickler\*innen und Aktivist\*innen aus der Open-Data- und Verkehrswelt. Fünf davon hatten bei der DB-Aufzugs-Challenge teilgenommen und Preise gewonnen, für die sie noch einmal gewürdigt wurden (v.l.n.r.: [yetzt](http://yetzt.me) für [Liftstream](https://github.com/yetzt/liftstream), [Alexey Valikov](https://twitter.com/orless) für den [Aufzugswächter](http://aufzugswaechter.org/), [ubahnverleih](https://twitter.com/ubahnverleih) für [Indoorvator](http://blattspinat.com/maps/indoorvator), [Roland Olbricht](http://wiki.openstreetmap.org/wiki/User:Roland.olbricht) für die [Umsteigematrix](http://olbricht.nrw/adam/bahnhof.html), [Sebastian Sooth](https://twitter.com/sebaso) und Onno Szillis von der DB, [KatrinS](http://twitter.com/katrins) für das Team von [Deutschlands Bahnhöfe](http://www.deutschlands-bahnhoefe.de/) und nochmal Axel Sommer von der DB.)

In rotierenden Sessions fand danach [der hochoffiziell gewünschte und gesuchte Austausch mit der Community](http://www.deutschebahn.com/de/presse/pressestart_zentrales_uebersicht/10840664/p20160225.html) über den weiteren Weg bei der Datenöffnung und die Zukunft des API-Managements bei der Bahn statt.

Ein gewünschter weiterer Schritt für die Aufzugs-API war eine direkt am jeweiligen Fahrstuhl erkennbare Markierung mit der Equipmentnummer samt QR-Code. Diese Nummer identifiziert nämlich zwar eindeutig jeden einzelnen Aufzug – ist aber nicht ohne Weiteres vor Ort erkennbar. Die Echtzeit-API soll indes bis zum 3. Quartal 2016 von den jetzt 100 „Test-Aufzügen“ vollständig auf alle Fahrstühle ausgeweitet werden. Spannend war auch die Frage, ob und wie Verkehrsverbünde oder Kommunen sich dieser Technik zukünftig bedienen können, um den Status durchgehender Barrierefreiheit vom Start- bis zum Zielbahnhof sicherstellen zu können.

![Im Dialog mit der Datengewalt](/files/blog/2016/02/db-workshop.jpg "Im Dialog mit der Datengewalt")

Ideen für weitere Datenschätze gab es genügend: Von den Daten auf dem Wagenstandsanzeiger und der Behängung einzelner Züge über das Serviceangebot im Zug (Sonderabteile, Speiseangebot,…), Einkaufsmöglichkeiten im Bahnhof und den Bahnhofsplänen als Vektordaten über einen besseren Zugang zur Fundsachenmeldung, Informationen zu Baustellen und Bauprojekten bis hin zur Lage von Raucherbereichen auf dem Bahnsteig reichten die Ideen, die sich auf dem Flipchart sammelten. Auch [die Parkplatz-API](http://data.deutschebahn.com/apis/parkplatz/) und ihr Potenzial für durchgehende Tür-zu-Tür-Auskünfte mit Startpunkten auf dem Land wurde diskutiert – schließlich ist in ländlichen Regionen das Auto häufig immer noch das „normale“ Fortbewegungsmittel, aus dem der Umstieg im wahrsten Sinne des Wortes schwerfällt.

Nicht unerwähnt soll die Idee eines simplen Zugangs zu Provisionen für vermittelte Ticketverkäufe bleiben – was eventuell ein Anreiz für bessere Auskunftssysteme mit durchdachtem UI und guter Übersetzung in andere Sprachen sein könnte.

## Schnittstelle oder Bulk-Daten

Kontrovers diskutiert wurde die neue Fahrplandatenschnittstelle. Rechtlich gesehen ist sie zweifelsfrei ein Fortschritt gegenüber der eher grauzonigen Benutzung der HAFAS-Schnittstelle der DB und der EFA-Schnittstellen der jeweiligen Verbünde. Praktisch ist damit jedoch nun [eine weitere Standardvariante geschaffen](https://xkcd.com/927/), die zudem im gegenwärtigen Ausbaustadium im Funktionsumfang deutlich weniger mächtig ist als HAFAS oder EFA.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/dbopendata">@dbopendata</a> Really guys... This API is just ridiculous. What&#39;s wrong with a simple GTFS? Will cost you lots less and is way better</p>&mdash; Pieter Colpaert (@pietercolpaert) <a href="https://twitter.com/pietercolpaert/status/703259512527052802">February 26, 2016</a></blockquote>

Die kritischen Stimmen im Netz ließen demnach auch nicht lange auf sich warten. Die Fragen nach [GTFS](https://developers.google.com/transit/gtfs/), insbesondere bei Sollfahrplandaten, sind unserer Meinung nach sehr berechtigt. Die DB verfügt offenkundig über einen Exportprozess für das in Entwickler\*innenkreisen beliebte Datenformat, schließlich stellt sie ihren Gesamtfahrplan so [bereits seit über drei Jahren Google zur Verfügung](https://netzpolitik.org/2012/verpasste-open-data-chance-deutsche-bahn-schenkt-einzig-google-seine-fahrplandaten/). Solange es noch keine Freigabe für die Plandaten der jeweiligen DB-Regio-Gliederungen gibt, müssten deren Fahrten lediglich vorab ausgefiltert werden. Und nicht zuletzt kann die Bereitstellung von Bulk-Fahrplandaten auch nicht als unbeabsichtigtes Endorsement der [VDV-7030](http://www.opencitycamp.de/14/offene-nahverkehrsdaten-in-deutschland/) missverstanden werden, die deutschen Verkehrsunternehmen anstelle richtiger offener Daten immer noch vernagelte APIs empfiehlt, die sie „Open Service“ nennt – idealerweise mit einem eindeutigen API-Key je Developer.

Wer jedoch bei der Release-Veranstaltung genau hinhörte, konnte bisweilen den Eindruck bekommen, dass diese in Windeseile entstandene API ein beachtlicher Paradigmenwechsel weg von den ansonsten üblichen langwierigen Prozessen sein dürfte. „Es gibt nicht nur *eine* Bahn“ war ein vielfach gehörtes Zitat beim Workshop am Freitag, und dementsprechend werten wir diesen Schritt vor allem als keinesfalls zu unterschätzendes Signal nach innen in den Konzern. Auch dass die API-Key-Vergabe mehr analog zur anderswo üblichen Angabe eines User-Agent-Strings zu verstehen sei, ist erfreulich. Wir bleiben also gespannt, wie die weitere Open-Data-Strategie aussieht – und auch, welche Ideen auf Basis dieser neuen Daten realisiert werden.

### Updates

Ihr wolltet GTFS? Ihr bekommt GTFS! [Patrick Brosi hat einen Parser veröffentlicht, der die API abgrast und GTFS-Feeds daraus baut](https://github.com/patrickbr/db-api-to-gtfs).

* 2016-02-28: Rechtschreibfehler korrigiert
* 2016-02-29: Hinweis auf GTFS-Parser ergänzt; klargestellt, dass auch eine JSON-Variante der API existiert.
