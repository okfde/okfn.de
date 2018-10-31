---
author: Stefan Kaufmann und Walter Palmetshofer
date: 2015-11-02 22:14:00
image: 
  src: /files/blog/2015/11/RK.png
layout: post
tags:
- Nahverkehr
- Open Transport
- Deutsche Bahn
- 
title: "Ein erster Blick auf Aufzugsdaten: Erste Daten von der Bahn" 
type: post
---
*Berlin, 02.11.2015* – Wie [unlängst angekündigt](/blog/2015/10/die-bahn-kommt-auf-open-data/) hatte die Deutsche Bahn die Öffnung erster Datensätze als „echtes" Open Data in Aussicht gestellt, was nicht ohne Echo blieb:

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/okfde">@okfde</a> <a href="https://twitter.com/_stk">@_stk</a> wooot! For real? Party to celebrate? Champagne? <a href="https://twitter.com/OKFN">@OKFN</a></p>&mdash; Pieter Colpaert (@pietercolpaert) <a href="https://twitter.com/pietercolpaert/status/657633315046957061">October 23, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" lang="en"><p lang="de" dir="ltr"><a href="https://twitter.com/_stk">@_stk</a> <a href="https://twitter.com/pietercolpaert">@pietercolpaert</a> nur Aufzuege? Naja... Irgendwo muss man ja anfangen :)</p>&mdash; Tristram Gräbener (@tristramg) <a href="https://twitter.com/tristramg/status/657641902280454145">October 23, 2015</a></blockquote>

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/tristramg">@tristramg</a> <a href="https://twitter.com/_stk">@_stk</a> <a href="https://twitter.com/pietercolpaert">@pietercolpaert</a> &#10;No realtime status and position about these elevators? &#10;Very disappointing</p>&mdash; Thomas (@somoht) <a href="https://twitter.com/somoht/status/657646384498262016">October 23, 2015</a></blockquote>

Nun haben die Mühlen gemahlen, und wir können einen kleinen Einblick geben, welche Daten rund um Aufzüge die DB AG vor hat freizugeben, welche Features vorhanden sind – und welche fehlen. Um gleich einmal Hands-on damit etwas anfangen zu können, haben wir vorab [einige Auszüge aus den Daten](/files/blog/2015/11/DB-Aufzug-Probedatensaetze.csv) bekommen, die wir auch schon in einer abendlichen Telefonsession mit [@Nakaner](https://twitter.com/nakaner) aus der [OpenRailwayMap](http://www.openrailwaymap.org/)-Community mit dem Ist-Stand verglichen haben.

## Besonderheiten und Caveats

Eines fällt schon bei unserem [kleinen Auszug](/files/blog/2015/11/DB-Aufzug-Probedatensaetze.csv) auf: Die vielen verschiedenen Datenfelder sind recht unterschiedlich gepflegt. Bei manchen Datensätzen (siehe das Beispiel Neu-Ulm) sind beinahe alle Felder eingepflegt und auch korrekt, wie die händische Vermessung vor Ort ergab. Anderenorts kann es schon einmal vorkommen, dass bis auf Grunddaten wie die Equipmentnummer, Bahnhof und Baujahr so gut wie nichts dokumentiert ist – inklusive fehlender Koordinaten.

Spannend wird auch die Frage, die wir mit der DB gerade diskutieren, welche der Merkmale passenderweise als Unique Identifier dienen sollen. An jedem Aufzug ist für die Benutzer*innen sichtbar eine Herstellernummer angebracht, die in Verbindung mit dem [Hersteller](http://wiki.openstreetmap.org/wiki/Key:brand) eindeutig ist. Darüber hinaus existiert im Datensatz noch die DB-konzernweit eindeutige Equipmentnummer, die [analog zum Hamburger Vorschlag](https://lists.openstreetmap.de/pipermail/hamburg/2015-June/thread.html#1191) in OSM mitgetaggt werden könnte, um die Verknüpfung zur „Echtwelt" zu schaffen. 

Die Koordinaten sind dann noch einmal eine *ganz* spezielle DB-Spezialität. Auf den ersten Blick ist das simples [DHDN/Gauß-Krüger Zone 3](http://spatialreference.org/ref/epsg/31467/) – wie wir aber mittlerweile erklärt bekamen, ist das ein eigenes DB-[CRS](https://de.wikipedia.org/wiki/Koordinatenreferenzsystem), innerhalb dessen auch Koordinaten *außerhalb* der Zone 3 in GK3 passend gemacht worden seien. Die Ausschnitte, die wir mit eigener Ortskenntnis vergleichen konnten, schwankten zwischen besser als metergenauer Lagetreue und systematischen Lagefehlern von rund fuenf Metern. Die DB möchte die Koordinaten im Laufe der nächsten Wochen passend [umtransformieren](https://de.wikipedia.org/wiki/Helmert-Transformation), wird aber auch die Originalkoordinaten veröffentlichen.

Egal, welche Koordinaten in welchem Format: Die Bahn hat aus den Fehlern Dritter gelernt und möchte auf keinen Fall mit einem automatischen Import die OSM zerschießen. Deswegen ist es volle Absicht, der Community so umfangreich wie möglich [„echte" offene Daten](http://blog.openrailwaymap.org/?lang=de#25) (bald auch mit dem lange geforderten Betriebsstellenverzeichnis!) zur Verfügung zu stellen.

## Was fehlt

Neben den unterschiedlichen Pflegeständen bei Koordinaten und sonstigen Datenfeldern fehlen manche Angaben selbst bei vollständig erfassten Anlagen. Leider nur eingeschränkt sind beispielsweise Rückschlüsse auf die Barrierefreiheit der Aufzüge möglich. Über die Kabinenabmessungen und Türbemaßung – sofern vorhanden – lassen sich zwar Rückschlüsse auf die Eignung für Rollstuhlfahrer*innen [nach DIN 18040](http://nullbarriere.de/din-18040-1-aufzug.htm) ziehen. Informationen über taktile Bedienelemente, [Brailleschrift](http://wiki.openstreetmap.org/wiki/Key:tactile_writing) und Stockwerkansagen für blinde und sehgeschädigte Personen ([DIN EN 81-70](http://nullbarriere.de/aufzug-abmessung.htm)) sind jedoch momentan überhaupt nicht vorhanden. Auch fehlen Informationen, ob der Fahrstuhl durchgängig benutzt werden kann oder nur innerhalb bestimmter [Betriebszeiten](http://wiki.openstreetmap.org/wiki/DE:Key:opening_hours). 

## Ausblick, und: Was will die Community?

Das aktuelle Ziel der Bahn ist, noch vor dem [#dbhackathon](https://www.eventbrite.de/e/3rd-dbhackathon-commit-open-data-tickets-19270040209) am 11.12. in Berlin eine rudimentäre Alpha-Version einer API für die Aufzüge bereitzustellen. Mittelfristig sollen über diese API alle Aufzüge eines Bahnhofs oder einer Bounding Box abgefragt werden können – inklusive ihres Betriebszustands, d.h. ob sie gerade funktionieren oder ob eine Störung vorliegt. Idealerweise sollte so jedem Aufzug auch ein URL in der OpenStreetMap [zugeordnet werden können,](http://wiki.openstreetmap.org/wiki/DE:Key:contact) um den Betriebszustand abzufragen. Spannend ist auch die Frage, wie ein gemeinsamer Weg aussehen könnte, die derzeit noch fehlenden Koordinaten und IDs gemeinsam zu ergänzen. Die Bahn ist auch daran interessiert, wie das OSM-Mappingschema für Aufzüge gegebenenfalls gemeinsam erweitert werden könnte.

Nachdem es auch Mapper*innen bei der Bahn gibt, ist der Vorschlag für die Erweiterung des Aufzug-Taggingschemas folgender:

* [`opening_hours=*`](http://wiki.openstreetmap.org/wiki/DE:Key:opening_hours) – Betriebszeiten des Aufzugs
* `ref:elevator_machineid=*` – die Herstellerkennung des Aufzugs, der in Verbindung mit dem Hersteller eindeutig sein sollte
* [`operator=*`](http://wiki.openstreetmap.org/wiki/DE:Key:operator) – Betreiber des Aufzugs
* `ref:elevator_operatorid=*` – eindeutiger Schlüssel des Aufzugbetreibers für die Anlage ([siehe Hamburger Vorschlag](https://lists.openstreetmap.de/pipermail/hamburg/2015-June/thread.html#1191))
* [`contact:website=URL`](http://wiki.openstreetmap.org/wiki/DE:Key:contact) – hier beispielsweise ein Link zur Echtzeit-API

Da die DB dankenswerterweise den bewährten Weg gehen möchte, kleine Schritte in Absprache mit der Community zu gehen, anstatt große Würfe zu versuchen und am Ende ohne Flughafen dazustehen: Wir freuen uns über euren Input!

*Zu den Autoren: [Stefan Kaufmann](http://stefan.bloggt.es/) ([Twitter](http://www.twitter.com/_stk)) mag Züge und braucht endlich eine Warnweste, damit er ohne Argwohn zu erregen nachts Bahnhofsfahrstuhlkabinen nachvermessen kann.  
[Walter Palmetshofer](http://twitter.com/vavoida) arbeitet bei der OKF beim [ODINE Open Data Incubator for Europe](http://opendataincubator.eu/) Projekt und fährt gern mit Zügen durch die Landschaft.  
Titelbild: DB-Daten (Dreiecke) über der OSM. [OSM-Daten © OSM-Mitwirkende](https://www.openstreetmap.org/copyright/de)*
