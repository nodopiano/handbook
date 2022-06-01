---
title: Application Team
description: ''
position: 4
category: developers
---
In aggiunta agli strumenti presentati nella pagina precedente, il team che si occupa di applicazioni web utilizza alcuni framework, librerie e pattern che permettono di costruire più velocemente le applicazioni che vogliamo realizzare.

## Laravel

[https://laravel.com/](https://laravel.com/)

Laravel è il framework php che utilizziamo in tutte le applicazioni web che realizziamo. È ben fatto, con un codice espressivo ed elegante e “battery included”. Contiene cioè gran parte degli strumenti necessari in quasi tutte le applicazioni (invio di email, astrazione del DBMS e migrazione del database, gestione delle code e cron).

Abbiamo fatto nostre molte delle convenzioni adottate da Laravel, questo rende più semplice passare da un progetto ad un altro.

## VueJS

[https://vuejs.org/](https://vuejs.org/)

VueJS è la libreria frontend che utilizziamo nelle applicazioni web che abbiamo realizzato negli ultimi anni. La scelta è caduta per due ragioni principali:

- Velocità e facilità di adozione: Vue poteva essere integrato in un applicazione senza doverla completamente riscrivere
- Curva di apprendimento: Vue utilizza le fondamenta del web, html, javascript e css.
- Integrazione con Laravel. Fin dalle prime versioni, laravel ha spinto molto su vue, integrandolo nel framework come default.

## InertiaJS

[https://inertiajs.com/](https://inertiajs.com/)

Laravel utilizza un sistema di template chiamato Blade. È molto potente per applicazioni semplici o “statiche” in quando è un template che produce codice lato server. Quando l’applicazione deve essere più reattiva utilizziamo InertiaJS, una libreria che sostanzialmente ci permette di utilizzare delle viste costruite con VueJS anzichè in Blade/php.

## NuxtJS

[https://nuxtjs.org/](https://nuxtjs.org/)

Nuxt è un potente framework per VueJS che permette di separare completamente l’applicazione backend dall’applicazione frontend, che comunicheranno soltanto attraverso [API REST](https://www.redhat.com/it/topics/api/what-is-a-rest-api)

Avendo separato in due le applicazioni, le possibilità diventano molte. NuxtJs può utilizzare diverse fonti di dati e diversi backend per arricchire di dati la propria interfaccia in un modo assolutamente trasparente.

*Ad esempio: possiamo realizzare una semplice applicazione NuxtJS che utilizza wordpress come backend e passare a Laravel in un momento successivo senza necessariamente cambiare nulla nell’interfaccia dell’applicazione.*

