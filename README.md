# OKFDE reloaded

Statische Seite mit Hugo!

## Technisches

### Seite lokal laufen lassen

Hugo installieren (Version > 0.51):

https://gohugo.io/getting-started/installing

> Wenn du das Hugo binary manuell installierst, achte darauf die `extended` version zu nehmen, da diese auch Sass kompilieren kann

Lokal laufen lassen

``` bash
$ hugo serve
```

Dann auf localhost:1313  die Seite anschauen.

### Seite deployen

TBD

---

## Inhalte bearbeiten

### Blogpost

#### Neuer Post

#### Featured!

### Teammitglieder

#### Neues Mitglied

#### Bearbeiten

### Projekte

#### Neues Projekt

#### Bearbeiten


### Vereinsstats

### Jahresberichte

### Downloads

---

## Anderes

### Was ist mit package.json?

Alle notwendigen externen Abhängigkeiten sind extra in js/vendor oder sass/vendor eingecheckt.

Das hat den Vorteil das Menschen nicht extra Node/npm lokal installieren müssen um die Seite zu bearbeiten.

Package.json dient damit eher als informative Liste, was so benutzt wird.
