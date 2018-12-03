---
authors:
- Arne Semsrott
- Walter Palmetshofer
date: 2018-11-28 09:10:00
image:
  src: /files/blog/2018/11/openschufa.jpg
  title:
  license:
  license_url:
tags:
- OpenSchufa
type: post
layout: post
card: true
published: true
title: "OpenSchufa: Die Ergebnisse (Updates)"
featured: "yellow"
---

Lange hat es gedauert, aber heute werden die ersten Analysen des OpenSchufa-Datensatzes veröffentlicht. Die Redaktionen vom [SpiegelOnline](http://www.spiegel.de/wirtschaft/service/schufa-so-funktioniert-deutschlands-einflussreichste-auskunftei-a-1239214.html) und dem [Bayerischen Rundfunk](https://www.br.de/nachrichten/wirtschaft/schufa-score-wie-menschen-unverschuldet-zum-risikofall-werden,RAheWGP) haben die anonymisierten Daten, die wir mithilfe von [OpenSchufa](https://okfn.de/blog/tags/openschufa/) im Frühjahr gesammelt haben, ausgewertet.  Herzlichen Dank an alle Personen, die uns für das Projekt [Geld](https://www.startnext.com/openschufa), Zeit und [Daten](https://www.openschufa.de/) gespendet haben!

## Das sind die wichtigsten Erkenntnisse:

- Schlechte Scores auch ohne Negativmerkmale

Viele Personen haben schlechte Schufa-Scores, obwohl sie keine negativen Merkmale haben. Im OpenSchufa-Datensatz finden sich mehr als 20 Verbraucherinnen und Verbraucher, denen die Schufa ein "erhöhtes Risiko" bescheinigt, obwohl ihre Finanzhistorie nicht mehr als drei Einträge umfasst - ausschließlich positive. Das bedeutet: Offenbar ist der Schufa-Algorithmus fehleranfällig. Wenn auch Personen, die keine Schulden oder Zahlungsausfälle haben, schlechte Scores bekommen, ist das **Scoring-Verfahren kaputt**.

- Angeblich genaue Scores trotz ungenauer Daten

Die Schufa-Scores suggerieren der Öffentlichkeit, dass sie besonders wissenschaftlich erstellt werden. Ein Teil dieses Bildes wird durch die angebliche Genauigkeit von Scores wie beispielsweise 85,04% oder 97,41% erzeugt. Die Angaben sind allerdings irreführend. Oft fehlt der Schufa die Datenbasis, um tatsächlich zuverlässige Aussagen über die Kreditwürdigkeit von einzelnen Personen treffen zu können. Über fast ein Viertel der Personen im OpenSchufa-Datensatz hat die Schufa maximal drei Informationen aus dem Wirtschaftsleben gespeichert.  Statistische Fehlerbereiche fehlen in den Auskünften trotzdem. Der Score ist in diesen Fällen **nicht besonders vertrauenswürdig**.

- Faktoren: Alter, Geschlecht und Umzüge

Der OpenSchufa-Datensatz legt nahe, dass Faktoren wie Alter, Geschlecht und viele Umzüge sich auf den Schufa-Score auswirken. Beispielsweise sind häufig junge Männer schlechtergestellt. Das bedeutet: Auch Aspekte, die nicht beeinflussbar sind, könnten negative Schufa-Scores hervorrufen. Mit den Daten lässt sich nicht abschließend sagen, wie genau die Faktoren auf den jeweiligen Score wirken und ob die Schufa diese einzeln in die Berechnung eingehen lässt oder sie kombiniert. Es könnte sein, dass **die Scores diskriminieren**.

- Manche Scores sind aus der Zeit gefallen

In vielen Bereichen hält die Schufa aus einem Scoring-Bereich mehrere Score-Versionen über Einzelpersonen. Das führt dazu, dass Personen beispielsweise nach der Version 1 des Schufa-Bankenscores einen schlechteren Score haben als nach Version 2 oder Version 3 des Schufa-Bankenscores. Wer Pech hat, dass eine Bank eine ältere Score-Version von der Schufa anfordert, hat in einem solchen Beispiel schlechtere Karten. Dass die älteren Score-Versionen noch herausgegeben werden, **führt offenbar zu Verzerrungen**.

## Daraus ergeben sich diese Forderungen:

Dank OpenSchufa hat sich bereits der Sachverständigenrat für Verbraucherfragen (SVRV) beim Bundesministerium für Justiz und Verbraucherschutz mit [Scoring-Transparenz beschäftigt](http://www.svr-verbraucherfragen.de/dokumente/verbrauchergerechtes-scoring/).

Er hat sich [dafür ausgesprochen](https://okfn.de/files/blog/2018/10/SVRV_HR-Verbrauchergerechtes_Scoring.pdf), dass die Schufa und weitere Scoring-Anbieter ihren Algorithmus offenlegen. Merkmale und Gewichtung des Scores müssen für den Verbraucher verständlich werden. Wie auch die Ergebnisse von OpenSchufa zeigen, muss mögliche Diskriminierung geprüft und offengelegt werden. Ein zentrales Problem bei der Schufa  ist offenbar die Qualität des Scores und der ihr zugrunde liegenden Daten.

Weitere Berichterstattung des Bayerischen Rundfunks hat bereits gezeigt, dass die Aufsicht der Schufa und anderer Scoring-Anbieter mangelhaft ist. Die Schufa [bezahlt selbst für die Gutachten, die sie eigentlich unabhängig prüfen sollen](https://www.br.de/nachrichten/deutschland-welt/luecken-beim-pruefen-von-auskunfteien,Qs8b2xe).

Das Bundesministerium hat bereits angekündigt, die Empfehlungen des Rats zu prüfen. Die Schufa sollte neben Transparenz auch ihre Verantwortung in der Gesellschaft akzeptieren. Dazu gehört, dass die Schufa mit Forschern, Journalistinnen und der Zivilgesellschaft konstruktiv kooperieren sollte. Bisher ist die Pressestelle der Schufa vor allem dadurch aufgefallen, dass sie [Journalistinnen einschüchtert](https://twitter.com/fanaticTRX/status/1006854038921601024).

## Und was ist mit dem Schufa-Algorithmus?

Wir arbeiten derzeit noch daran, verschiedene Aspekte der Schufa-Formel zuverlässig zu entschlüsseln. Die Herausforderung: Von rund 30.000  Anfragen, die Nutzer über selbstauskunft.net an die Schufa gestellt haben, sind an uns nur rund 3.000 Datensätze weitergeleitet worden, die vor allem aus bestimmten gesellschaftlichen Milieus stammen. Wir versuchen trotzdem, weitere möglichst sichere Aussagen über den Schufa-Algorithmus zu treffen und arbeiten dafür weiter mit dem Datensatz.

Ursprünglich hatten wir geplant, bei Verzerrungen in den Daten gezielte Aufrufe an bestimmte Bevölkerungsschichten zu richten, um von ihnen Daten zu erhalten. Das ist derzeit aber nicht mehr möglich. Seit Anwendung der Datenschutzgrundverordnung (DSGVO) im Mai gibt die Schufa mit der kostenlosen Selbstauskunft deutlich weniger Daten also vorher an Einzelpersonen. Datenspenden von Schufa-Auskünften sind also seit Mai für uns nicht verwendbar. Hier muss sich die Schufa bewegen.

## Wie geht es weiter?

Wir arbeiten gemeinsam mit unserem Partner AlgorithmWatch weiter an der Auswertung der Daten und hoffen, bald noch weitere Erkenntnisse aus den Daten ableiten zu können. Daran anschließend wollen wir weitere Empfehlungen für gesetzliche Regelungen geben.
<a id="Updates"></a>
Wichtig außerdem: Derzeit weigert sich die Schufa noch, [kostenlose Auskünfte auch per E-Mail herausgeben](https://www.welt.de/finanzen/article177303132/DSGVO-stellt-das-Abo-Modell-der-Schufa-infrage.html), obwohl sie es müsste. Wir werden uns dafür einsetzen, dass die Schufa dieser Verpflichtung aus der DSGVO nachkommt.

Die Schufa ist der Anfang, aber nicht das Ende. Wir brauchen mehr Transparenz für alle Scoring-Anbieter in Deutschland und Europa.

## Zur aktuellen Schufa-Berichterstattung

- [SpiegelOnline: Blackbox Schufa](http://www.spiegel.de/wirtschaft/service/schufa-so-funktioniert-deutschlands-einflussreichste-auskunftei-a-1239214.html)
- [SpiegelOnline: 2800 Datensätze - so haben wir sie ausgewertet](http://www.spiegel.de/wirtschaft/service/blackbox-schufa-2800-verbraucher-spendeten-ihre-selbstauskunft-a-1240703.html)
- [SpiegelOnline: So bestellen Sie Ihre kostenlose Schufa-Auskunft](http://www.spiegel.de/wirtschaft/service/schufa-auskunft-kostenlos-online-beantragen-so-geht-s-a-1240548.html)
- [SpiegelOnline: Video - Wie die Schufa zu ihrem Urteil kommt](http://www.spiegel.de/video/erklaervideo-wie-der-schufa-score-funktioniert-video-99023089.html)
- [Bayerischer Rundfunk: Die ganze Recherche - Erhöhtes Risiko](https://web.br.de/interaktiv/erhoehtes-risiko/)
- [Bayerischer Rundfunk: Schufa-Score - Wie Menschen unverschuldet zum Risikofall werden](https://www.br.de/nachrichten/wirtschaft/schufa-score-wie-menschen-unverschuldet-zum-risikofall-werden,RAheWGP)
- [ARD PlusMinus: Blackbox Schufa: Eine exklusive Datenauswertung gibt Einblicke ](https://www.daserste.de/information/wirtschaft-boerse/plusminus/sendung/plusminus-996.html)
- [ZDF Zoom: Unheimliche Macht - Wie Algorithmen unser Leben bestimmen](https://www.zdf.de/dokumentation/unheimliche-macht---wie-algorithmen-unser-leben-bestimmen-102.html)
- [tagesschau.de: Unverschuldet als Risikofall eingestuft?](https://www.tagesschau.de/wirtschaft/schufa-105.html)
- [Deutschlandfunk: Durch die Schufa unverschuldet zum Risikofall](https://www.deutschlandfunk.de/medienbericht-durch-die-schufa-unverschuldet-zum-risikofall.1939.de.html?drn:news_id=950686)
- [MDR jump: Wie verlässlich sind die Schufa-Scores?](https://www.jumpradio.de/thema/schufa-algorithmus-fragwuerdig-recherche-falscher-score-100.html)
- [Wired.de: Citizen Scoring: Wie Staaten mit Daten und Überwachungstechnik über ihre Bürger herrschen](https://www.wired.de/article/citizen-scoring-wie-staaten-mit-daten-und-ueberwachungstechnik-ueber-ihre-buerger-herrschen)
- [Spiegel - Wie faires Scoring aussehen könnte](http://www.spiegel.de/wirtschaft/service/kreditwuerdigkeit-wie-faires-scoring-aussehen-koennte-a-1241323.html)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ifajykkrnic" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Politische Reaktionen
- 29.11 [Ministerin Barley fordert Schufa zu mehr Transparenz auf](http://www.spiegel.de/wirtschaft/service/schufa-co-barley-fordert-mehr-transparenz-von-auskunfteien-a-1241107.html)<br>
- 29.11 [Nach Schufa-Recherche: Politiker verlangen mehr Transparenz](https://www.br.de/nachrichten/wirtschaft/nach-schufa-recherche-politiker-verlangen-mehr-transparenz,RAnwNpV)<br>
- 30.11 [Renate Künast - Schufa ist eine Blackbox. Es braucht ein Gesetz für Transparenz](https://www.mdr.de/nachrichten/audio-895128_zc-fd08c406_zs-950f04ff.html)
- 18.09 [Tabea Rößner über eine undurchsichtige Auskunftsdatei und wie Bürgerinnen und Bürger sie reformieren können](https://www.neues-deutschland.de/artikel/1100866.transparenz-der-schufa-blackbox-schufa.html)<br>

## Pressekontakt

Arne Semsrott, Open Knowledge Foundation Deutschland, arne.semsrott@okfn.de, 030 57703666 0
