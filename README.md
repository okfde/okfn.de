# OKFDE reloaded

Statische Seite mit Hugo!

## Technisches

### Seite lokal laufen lassen

Hugo installieren (Version > 0.51):

https://gohugo.io/getting-started/installing

Wenn du das Hugo binary manuell installierst, achte darauf die `extended` version zu nehmen, da diese auch Sass kompilieren kann

Developement Server laufen lassen:

``` bash
$ hugo serve
```

Dann auf `localhost:1313`  die Seite anschauen. (Die Suche wird hier nicht funktionieren, weil die Indexe fehlen)

### Seite lokal laufen lassen mit Suche

Seite und dann Indexe bauen.

``` bash
$ hugo && \
  cat public/index.json | node scripts/lunr/site-index.js > public/js/site-search-index.json  && \
  cat public/blog/index.json | node scripts/lunr/blog-index.js > public/js/blog-search-index.json && \
  echo "Done"
```
Dann in `/public` einen HTTP-Server starten.


### Seite deployen

Ein Push zu GitHub genügt um den Buildprozess anzustoßen.
Im Normalfall musst du dich um nichts kümmern und deine Änderungen sind in ein paar Minuten online.

Falls das nicht passiert, findest du unten unter 'Anderes' und 'Buildprozess' mehr Infos.

---

## Inhalte bearbeiten

### Blogpost

Alle Blogposts befinden sich in `content/blog/` und nach Jahren organisiert.

#### Neuer Post

Ein Beispiel für einen neuen Blogpost findest du in `archetypes/post.md`.

Erstelle eine neue Datei in `content/blog/<jahr>/` und kopiere die Dummydaten aus der Archetypesdatei.

- `authors`: eine Liste der Autoren
- `date`: das Veröffentlichungsdatum. Wird zur Sortierung benutzt
- `image`: ein Bild das in Social Media Links angezeigt wird und optional bei _Featured_ (siehe unten). Bitte achte auf angemessene Bildgrößen! Ein Bild direkt von Flickr oder deiner Kamera ist in den meisten Fällen viel zu groß!
- `tags`: eine Liste von Tags
- `type` und `layout` für intere Sachen. Bitte nicht verändern
- `published`: ob der Post veröffentlicht werden soll, `true` oder `false`
- `title`: der Titel des Posts
- `featured`: siehe unten


#### Featured!

_Featured_ ist ein neues Feature.

Auf der Startseite und auf der ersten Seite des Blogs wird ein Blogpost gefeatured, d.h. groß und mit buntem Hintergrund und Bild angezeigt.

Die Logik hinter _Featured_ ist, das immer der aktuellste Post, bei dem `featured` gesetzt ist, als feature erscheint. Dein POst soll nicht gefeatured werden? Lösche `featured` aus deinem Post.

`featured` kann zwei Werte haben `yellow` und `blue`, die einen gelben oder blau/türkisen Hintergrund definieren.

### Teammitglieder

Alle Teammitglieder und Vorstände sind in `data/team.yml` zu finden.

#### Neues Mitglied

Um ein neues Mitglied hinzuzufügen, kopiere einen Listeneintrag (oder das leere Beispiel) und setze ihn an das Ende der Datei.
Die folgenden Felder werden unterstützt:

``` yaml
- name:
  title:
  img:
  staff: 1
  board: 0
  advisory: 0
  position:
  position_en:
  bio:
  bio_en:
  mail:
  twitter:
  website:

```
Die 0 und 1 werden als true und false Werte behandelt. Sprich, `staff: 1` bedeutet aktives Teammitglied, `staff: 0` bedeutet ehemaliges Teammitglied

Die Übersetzungen der Bio und der Position sind direkt hier mit dabei.

`img` sollte dem Namen der Bilddatei entsprechen, die du in `static/team` als `.jpg` ablegst. Bitte achte darauf keine gigantischen Bilder zu benutzen, denn Nutzer wollen nicht 2 Minuten auf ein Bild warten. 300 x 200 Pixel in guter Qualität sind absolut ausreichend.

### Projekte

Alle Projekte befinden sich unter `content/projekte`.
Dabei hat jedes Projekt zwei Dateien, eine deutsch- (`.md`) und eine englischsprachige (`.en.md`).

#### Neues Projekt

Lege in `content/projekte` zwei Dateien an: `einproject.md` und `deinproject.en.md`.
In `archetypes/project.md` findet du die Beispiel mit Felder, die ein Projekt haben kann.

Hier kurz Erklärungen zu den einzelnen Feldern:

- `title` ist der Name des Projektes
- `subtitle` is die Tagline
- `kategorien` is nur für die deutschsprachige Seite wichtig und kann auf der englischen gelöscht werden. Es soll eine Liste mit ein oder mehreren Kategorien sein, nach denen auf der Projektseite gefiltert werden kann
- `categories` ist nur für die englischsprachige Seite wichtig und kann auf der deutschen gelöscht werden. Es soll eine Liste mit ein oder mehreren KAtegorien sein, nach denen auf der englischen Projektseite gefiltert werden kann.
- `tile` bestimmt wie das Projekt auf der Projektübersichtsseite dargestellt wird. `Single` beschreibt eine kleine Fläche, `double` die doppelt so große. Soll ein Projekt nur unter "Weitere Projekte" gelistet werden, dann kannst du dieses Feld löschen
- `website` die url zur Website des Projektes


### Jobs

Jobs sind nun getrennt von Blogposts, bekommen aber trotzdem eine eigene Seite, die verlinkt und geteilt werden kann.

#### Neues Jobposting

Um eine neue Stellenaussschreibung hinzuzufügen, musst du in `content/jobs` eine neue Markdown-Datei anlegen.
In `archetypes/jobs.md` kannst du dir eine Vorlage für das Markdown ansehen, kopieren und anpassen.

Um das Jobposting zu entfernen, einfach die entsprechende Markdown-Datei löschen.

### Vereinsstats

Unter `/verein` sind einige Fakten in Zahlen angegeben. Diese befinden sich in `/content/verein.md` und `content/verein.en.md` unter dem Key 'stats'. Unter diesem Key gibt es eine Liste aus Schlüssel/Wertpaaren die immer eine Zahl und einen Text dazu definieren. Diese können beliebig verändert werden.

#### Jahresberichte

Ebenfalls auf `/verein` befinden sich die herunterladbaren Jahresberichte bzw Tätigkeitsberichte. Diese werden in `/data/jahresberichte.yml` definiert. Pro Eintrag gibt es immer:

- `year` das Jahr des jeweilgen Jahresberichtes
- `img` ein Pfad zum Teaserbild
- `pdf` ein Pfad zum Jahresbericht als PDF zum downloads
- jeweils `title` und `text` under den Sprachoptionen

Für einen neuen Eintrag, einfach einen alten kopieren, an den _Anfang_ der Datei setzen (es wird nicht extra sortiert, die Reihenfolge in der Datei ist wichtig) und anpassen.

#### Downloads

Der letzte Abschnitt auf `/verein` listet verschiedene herunterladbare Dokumente, die die Organisation als Verein betreffen.

Diese sind under `/data/downloadsverein.yml` definiert und können dort auch angepasst und verändert werden. Es gibt die Felder `title` und `text` jeweils auf deutsch und englisch und dann `path` der Pfad zur herunterladbaren Datei.

### Finanzen

Auf der Finanzseite gibt es mehrere Grafiken, die die Entwicklung und Einnahmen/Ausgaben aufschlüsseln.

Die Grafiken werden dynamisch aus CSV-Dateien erstellt, die sich in `/static/okf/finanzierung` befinden.
Pro Grafik existiert eine CSV-Datei, deren Inhalte jeweils angepasst werden können. Die Dateinahmen und das Schema dürfen nicht verändert werden, weil sonst das Script kaput geht.

#### Downloads

Ebenfalls auf der Finanzierungsseite zu finden sind weitere Downloads. Diese sind in `/data/downloadsfinanzierung.yml` festgehalten. Sie funktionieren wie die anderen Downloads auch mit der Ausnahme des letzen Eintrags. Hier gibt es eine Liste der Gewinn- und Verlustrechnungen der vergangenen Jahre, die anstelle eines kleinen Beschreibungstextes aufgeführt werden. Damit das (auch für weitere Jahre) funktioniert, müssen diese unter `/static/files/documents/OKF-DE-Gewinnermittlung-kurz-<jahr>.pdf` abgelegt werden. Dabei ist `<jahr>` mit dem entsprechenden Jahr zu ersetzen.

---

## Anderes

### Übersetzungen

Alle Inhalte, abgesehen von Blogposts, sind auf deutsch und englisch vorhanden.
In den meisten Fällen wird eine Markdowndatei `.md` mit einem äquivalenten, aber übersetzten `.en.md` bereitgestellt.
Manchmal, gerade wenn Informationen in `/data` als yml liegen, gibt es Übersetzungsspezifische Keys.

Templateübersetzungen finden sich in `/i18n/`.

### Wohin soll ich meine Bilder, PDFs etc verschieben?

Alle Bilder, PDFs oder sonstige Assets kannst du in `/static` ablegen.
Während des Buildprozesses wird der Inhalt von `/static` direkt in das Roorverzeichnis kopiert.

Was heißt das für die Dateipfade?

Ein Bild das in `/static/bild.png` liegt wird direkt unter `okfn.de/bild.png` verfügbar sein. Also die Ordnerstruktur bleibt die gleiche, `/static` am Anfang muss weg.

### Eine alte URL geht jetzt nicht mehr :(

Du kannst für einen Post oder eine Seite einen 'Alias' anlegen. Hugo wird dann von diesem Alias auf die aktuelle Seite weiterleiten. Das funktioniert über das `aliases:` keyword im Frontmatter.

``` yaml
aliases:
  - /blog/old-post-url/
  - /blog/maybe-even-older/url/
```


### Was ist mit package.json?

Alle notwendigen externen Abhängigkeiten sind extra in js/vendor oder sass/vendor eingecheckt.

Das hat den Vorteil das Menschen nicht extra Node/npm lokal installieren müssen um die Seite zu bearbeiten.

Package.json dient damit eher als informative Liste, was so benutzt wird.

### Suche und Suchindexe

Die seitenweite und Blogsuche funktionieren komplett clientseitig mit [lunr.js](https://lunrjs.com/).
Dafür generiert Hugo zwei JSON-Dateien, einmal mit allen Blogposts und einmal mit allen Inhalten der Seite.

Diese JSON-Dateien werden auf Travis mit Node-Scripten (siehe `/scripts/ci/*`) in Suchindexe geparst und serialisiert (siehe `/scripts/lunr/*`) und wieder als JSON gespeichert.

Die serialisierten Suchindexe können im Browser direkt von lunr gelesen und verwendet werden, das spart die Indexierung 'on the fly' bei jedem Seitenaufruf.

Leider sind die Suchindexe sehr groß, was sich auf die Ladegeschwindigkeit der Seite auswirkt.

Es gibt die Möglichkeit Seiten explizit aus der Suche auszuschließen. Setze hierfür `layout: none` im Frontmatter.

Es gibt auch die Möglichkeit extra Suchwörter als Tags auf einer Seite anzugeben. Setze hierfür Begriffe als Liste im Frontmatter:

``` yaml
search_keys:
  - custom
  - keyword
```

### Buildprozess

Der Buildprozess verläuft in mehreren Stufen:
1. der Push wird von GitHub registriert und stößt einen Build bei [Travis CI](https://travis-ci.com/okfde/okfde-reloaded) an
  - hier wird die Seite mit Hugo gebaut
  - zwei Nodescripte erstellen die Suchindexe (als .json) für die seitenweite und die Blogsuche
  - (wegen dieser Scripte brauchen wir Travis, Hookay kann das nicht alleine)
  - der Atom und RSS feed wird an die selben Stellen kopiert, auf der sie auf der alten Seite zu finden waren
2. ist ein Travis-Build auf dem Master branch erfolgreich, pusht Travis die gebaute Seite zurück zu GitHub, aber auf den [Release branch](https://github.com/okfde/okfde-reloaded/tree/release)
  - dieser Badge zeigt den Status des letzten Builds an [![Build Status](https://travis-ci.com/okfde/okfde-reloaded.svg?branch=master)](https://travis-ci.com/okfde/okfde-reloaded)
  - ist der Badge rot ist schon was beim bauen der Seite schief gelaufen. Vermutlich was mit Hugo in den Templates, hier musst du debuggen!
3. hat Travis auf den Release branch gepusht, sendet GitHub einen Webhook an [Hookay](https://lab.okfn.de/build-status/)
  - Hookay klont den Release branch auf unseren Server und kopiert ihn an die richtige Stelle
    - es kann sein, dass die Webhook-payload von GitHub sehr groß ist und Hookay dann einen Fehler wwirft. Das kannst du [hier](https://github.com/okfde/okfde-reloaded/settings/hooks/) (sofern du die Rechte hast) nachsehen.
    - Ist beim letzten senden eines Webhooks was schief gelaufen (Fehler 413) dann kannst du über Hookay die Seite manuell neu bauen. Die gebaute Seite liegt ja schon bei GitHub und muss nur kopiert werden.

Wenn alles geklappt hat, sind dein Änderungen jetzt online!
