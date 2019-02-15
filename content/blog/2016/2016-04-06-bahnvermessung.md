---
authors:
- Stefan Kaufmann
- Walter Palmetshofer
date: 2016-04-06 14:38:00
image:
  src: /files/blog/2016/04/bahnvermessung.jpg
  title: Hands-on-Bahnsteigvermessung mit OSM-Mappern und Bahnbeschäftigten
  license: CC-0
type: post
layout: post
card: true
tags:
- Open Data
- Deutsche Bahn
- OpenStreetMap
- Nahverkehr
- Open Transport
title: "Feldversuch: Bahnhöfe und ihre Aufzüge für OpenStreetMap vermessen"
---

*Frankfurt* – gerade einmal ein halbes Jahr ist es her, [dass die Deutsche Bahn erstmals ihre Open-Data-Pläne ankündigte](/blog/2015/10/die-bahn-kommt-auf-open-data/), und seither gab es kaum eine Verschnaufpause: [Anfang November startete das Datenportal](/blog/2015/11/its-alive-daten.deutschebahn.com/) und im Dezember [fanden nacheinander der 3. DB-Hackathon und ein Contest zur Nutzung der DB-Aufzugs-API statt](/blog/2015/12/aufzugschallenge/), bevor das neue Open-Data-Jahr [mit einer freien DB-Fahrplan-API für den Fernverkehr](http://data.deutschebahn.com/blog/2016/02/25/fahrplan/) eingeläutet wurde. Die wurde in der Zwischenzeit auch schon interessiert begutachtet und für eigene Projekte genutzt.

## Unterwegs mit GPS, Meterstab und Laserpieps

Damit das perfekte Routing auch beim Umsteigen von Bahnsteig zu Bahnsteig funktionieren kann, gab es seit Herbst im inoffiziellen Test und mittlerweile auch ganz offiziell eine [Fahrstuhl-API](http://data.deutschebahn.com/apis/adam/) namens ADAM, die über Weihnachten auch umfangreich im Rahmen des [Elevator-API-Contest](https://www.mindboxberlin.com/index.php/contest-en.html) erprobt wurde. Herzstück des Systems ist je Aufzug ein kleines Embedded System, das binnen Sekunden eine Störung oder deren Behebung melden kann – wichtig für alle, die mit viel Gepäck, im Rollstuhl oder samt Kinderwagen den Bahnsteig wechseln müssen.

Wie so ein Routing später einmal in einer Mobilitätsapp aussehen kann, zeigt beispielsweise der OSM-basierte Contest-Sonderpreisgewinner [Umsteigematrix](http://olbricht.nrw/adam/bahnhof.html). Sind erst einmal hinreichend viele Aufzüge an den DB-Bahnhöfen mit den Status-Boxen versehen, lassen sich so gegebenenfalls bei gestörten Fahrstühlen gleich vorab Alternativrouten berechnen.

Damit das aber funktioniert, müssen für alle Aufzüge auch die Koordinaten erfasst sein. Und da fehlt's noch. Und leider auch in der OpenStreetMap. Rund 350 Aufzüge der Bahn sind weder in der DB-eigenen Datenhaltung noch in der OpenStreetMap mit Koordinaten vermerkt. Was nicht nur für die Bahn ungünstig ist, sondern auch für F/OSS-Routinganwendungen ein Problem darstellt, ganz unabhängig von der API. Der beim Hackathon im Dezember entstandene [Paternoster](http://erhard.okfn.de:32769/map) zeigt in der Kartenansicht, wo noch etwas zu tun ist: Grün sind die bereits mit Koordinaten erfassten Aufzüge, die blau markierten Aufzüge sind immerhin in der OpenStreetMap eingetragen. Alle roten Punkte – aktuell 158 – stehen aber für Bahnhöfe, an denen noch mindestens ein Aufzug weder in OSM noch bei der DB mit Koordinaten erfasst ist.

![Paternoster: Das Werkzeug für Aufzugskoordinaten mit zweifelhafter Usability!](/files/blog/2016/04/pata.png "Paternoster: Das Werkzeug für Aufzugskoordinaten mit zweifelhafter Usability!")

Um das zu beheben, hatten wir bereits im Januar einen Bahnhofs-Mappingparty-Prototypen mit [Nakaner](https://twitter.com/nakaner) zwischen Ulm, Stuttgart und Nürtingen ausprobiert, waren von Bahnhof zu Bahnhof getourt und hatten die dort bislang eher dürftig gemappten Aufzüge mit Maßstab, Laserentfernungsmesser, GPS, Kamera und Skizzen erfasst. Bevor wir todmüde in einer Stuttgarter Pizzeria versackten, waren so immerhin 11 Bahnhöfe vermessen und für OSM nachverfeinert.

<blockquote class="twitter-tweet" data-lang="de"><p lang="de" dir="ltr">Es kann losgehen! <a href="https://twitter.com/hashtag/operationSprinter?src=hash">#operationSprinter</a> <a href="https://t.co/me26gQUsBc">pic.twitter.com/me26gQUsBc</a></p>&mdash; OpenRailwayMap (@openrailwaymap) <a href="https://twitter.com/openrailwaymap/status/698478194593263616">13. Februar 2016</a></blockquote>

Damit jedoch nicht nur eingefleischte [OpenRailwayMapper](http://www.openrailwaymap.org/) wissen, wie man einen Bahnhof besser für die OSM absteckt, riefen wir am 13. Februar zur ersten [Operation Sprinter](http://wiki.openstreetmap.org/wiki/Eisenbahn/Sprinter) auf – einer Sternfahrt nach Frankfurt, um auf dem Weg die dort noch ziemlich gehäuften „roten“ Bahnhöfe zu erledigen. Vor Ort in der ehemaligen DB-Lounge des Frankfurter Hauptbahnhofs konnten sich Mapper und Bahn-Beschäftigte austauschen, und wenige Anblicke waren dieses Jahr bisher so genial, wie dem DB-Open-Data-Team im Außeneinsatz beim Laser- und Meterstab-Einmessen von Bahnsteigen zuzusehen ;)

<blockquote class="twitter-tweet" data-lang="de"><p lang="de" dir="ltr">DB-Bewchaeftigte lernen OSM-Mapping. Wie auf ner Klassenfahrt :D <a href="https://t.co/UZyrNaU1ti">pic.twitter.com/UZyrNaU1ti</a></p>&mdash; stk (@_stk) <a href="https://twitter.com/_stk/status/698546110261026816">13. Februar 2016</a></blockquote>

## Und der Rest?

Wer [die Karte](http://erhard.okfn.de:32769/map) angesehen hat, hat bereits gemerkt: Da fehlt immer noch einiges. Das Problem ist, dass selbst was aus einer kleineren Zoomstufe wie ein „Cluster“ aussieht, in Regel in der Wirklichkeit einige zum Teil dann doch recht weit auseinander liegende Bahnhöfe sind. Also etwas, was sich weniger für eine koordinierte Mappingparty eignet, als vielmehr für ein gemeinsames, dezentrales Sammeln „im Vorbeigehen“, wenn man ohnehin unterwegs ist.

Jeder rote Punkt in Deiner Nähe kann also ein Anhaltspunkt sein: Dort ist mit großer Wahrscheinlichkeit ein Bahnhof, der OSM-Liebe braucht. Und wenn du ohnehin Daten für die Freie Weltkarte sammelst, wäre es auch für die Bahn ganz großartig, wenn du [in Paternoster](http://erhard.okfn.de:32769/map) die Koordinaten und eventuell gesammelte zusätzliche Informationen unter CC-0-Lizenz spendest!

Wie Du en passant noch weitere Verbesserungen in die OSM bringen kannst, findest Du [unter anderem auf der Operation-Sprinter-Seite](http://wiki.openstreetmap.org/wiki/Eisenbahn/Sprinter#Was_gibt_es_alles_zu_tun_und_wo_finde_ich_Anleitungen.3F) – jeder Hinweis, wie die Anleitungen und [erklärenden Bilder](http://wiki.openstreetmap.org/wiki/File:A-simple-station.svg) noch besser werden könnten, sind gerne gesehen!
