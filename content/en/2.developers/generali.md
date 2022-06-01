---
title: Strumenti
description: ''
position: 1
category: developers
---

## Strumenti

## Linux

[http://linuxcommand.org/tlcl.php](http://linuxcommand.org/tlcl.php)

Tutti gli sviluppatori a Nodopiano utilizzano una distribuzione linux. Sui pc viene installata la distribuzione Ubuntu Linux (al momento 20.04 LTS ma sarà aggiornata a breve).

Ognuno è libero di utilizzare un’altra distribuzione a piacere a patto che:

- Sia sempre funzionante
- Sia compatibile con l’hardware fornito
- Si mantengano le stesse funzionalità della distribuzione ubuntu.

## VsCode

[https://code.visualstudio.com/](https://code.visualstudio.com/)

L’editor per il codice che utilizziamo è VsCode ma anche in questo caso non è una scelta tassativa. Ognuno è libero di utilizzare l’editor che lo rende più produttivo e di condividere con gli altri i pro e i contro della propria scelta. 

Eventuali estensioni che installiamo dipendono dal linguaggio utilizzato e relative convenzioni.

## Php

Php è il linguaggio backend che usiamo sostanzialmente in tutti i nostri progetti a meno che la piattaforma o le esigenze specifiche del progetto non richiedano altri linguaggi. 

Un introduzione al moderno Php è disponibile a questo indirizzo.

[https://phptherightway.com/](https://phptherightway.com/)

## Composer

[https://getcomposer.org/](https://getcomposer.org/)

Composer è il package manager di Php. Nessuna applicazione da noi o sito web realizzato a Nodopiano funzionerebbe senza. È responsabile di scaricare e aggiornare i pacchetti che compongono l’applicazione. 

## Javascript

[https://jstherightway.org/](https://jstherightway.org/)

Javascript è il linguaggio che utilizziamo per tutte le applicazioni client-side. Pur parlando sempre di Javascript lo utilizziamo in varie forme diverse attraverso framework o librerie che hanno scopi differenti e ci permettono di raggiungere gli obiettivi del progetto.

## NodeJS - Npm/Yarn

[https://nodejs.org/it/download/](https://nodejs.org/it/download/) 

[https://yarnpkg.com/](https://yarnpkg.com/)

Node (e i suoi package manager, npm o yarn) sono fondamentali per i processi di build delle librerie frontend. Non è necessario conoscerne tutti i dettagli, ma qualsiasi task che involva il frontend molto spesso comincia con questi comandi.

## Tailwind

[https://tailwindcss.com/](https://tailwindcss.com/)

Negli ultimi anni il linguaggio CSS è cambiato molto poco se escludiamo l’introduzione di Flexbox e Grid, quello che è cambiato è l’ecosistema attorno al linguaggio e i tools utilizzati. Se fino a 2-3 anni fa utilizzavamo Sass per potenziare CSS e metodologie come BEM per controllarne gli effetti collaterali, magari unite a framework come bootstrap o foundation (usato fino a 2 anni fa) oggi la tendenza è verso framework detti “utility-first”. 

Si tratta in sostanza di framework che utilizzano classi “atomiche” che vengono applicate direttamente agli elementi HTML su cui devono agire.

I benefici di un framework come Tailwind sono sostanzialmente 2

- velocità del prototipare interfacce
- eliminazione dei processi di build necessari con Sass (spesso lunghi)

## Gitlab

[https://gitlab.com/](https://gitlab.com/)

Tutto il codice che scriviamo, è salvato (in gergo: committato) su gitlab. Gitlab è una piattaforma che offre vari servizi oltre a salvare e organizzare il codice in repository. È anche responsabile di una serie di altre attività, tra cui i test e il deploy del codice.

## Docker

[https://www.docker.com/](https://www.docker.com/)

Docker è un progetto open-source che attraverso la virtualizzazione fornita dal sistema operativo linux permette di creare dei “contenitori” software al cui interno vengono eseguite le applicazioni.

È lo strumento che utilizziamo per avere un ambiente di sviluppo sempre condiviso tra tutti i membri del team.

Utilizziamo docker principalmente in locale, ma in alcuni casi rappresenta anche il nostro stack in produzione

## Ansible

[https://www.ansible.com/](https://www.ansible.com/)

Ansible è un software di automazione che utilizziamo per eseguire le azioni più ripetitive di inizializzazione e configurazione.

Tipicamente lo utilizziamo per creare e configurare gli ambienti di produzione, staging e sviluppo in modo automatico e standardizzato.


