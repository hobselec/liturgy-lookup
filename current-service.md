
<script setup>
import VexFlow from './components/VexFlow.vue'
</script>

# Current Service

### Fall 2022

This page describes the standard components of the liturgy that do not change week to week.  This is mostly setting #2 from the LBW (setting #4 from ELW). Refer to a bulletin for the placement of the hymns.
<!--
We are using *Setting 10* from [*ELW*](sources.md#elw), but the Great Thanksgiving is from [*Now The Feast*](sources.md#now-the-feast).  The Lamb of God is from ELW setting 3.
-->

## Kyrie

<VexFlow :score-id="5" :system-width="720" />

<!--
From [*ELW #4*](sources.html#elw)
-->

<!--
::: tip
This has not been used
:::
-->

## Hymn of Praise

<VexFlow :score-id="7" :system-width="720" />



## Psalm

<!-- NEED TO PUT THIS IN liturgy.json
<VexFlow :measures="[{key: 'D', notes : [
    { key: 'a/4', duration : '1/2', stem: 'hide'},
    { key: 'f/4', duration : 'q', stem: 'hide'},
    { key: 'a/4', duration : 'q', stem: 'hide'},
    { key: 'b/4', duration : 'h', stem: 'hide'}
    ]},
    {
    notes : [
    { key: 'g/4', duration : '1/2', stem: 'hide'},
    { key: 'e/4', duration : 'q', stem: 'hide'},
    { key: 'g/4', duration : 'q', stem: 'hide'},
    { key: 'a/4', duration : 'h', stem: 'hide'},
] }]"
:system-width="700"
/>
-->

<!--
<VexFlow :measures="[{key: 'Bb', notes : [
    { key: 'b/4', duration : '1/2', stem: 'hide'},
    { key: 'g/4', duration : 'q', stem: 'hide'},
    { key: 'e/4', duration : 'q', stem: 'hide'},
    { key: 'f/4', duration : 'h', stem: 'hide'}
    ]},
    {
    notes : [
    { key: 'g/4', duration : '1/2', stem: 'hide'},
    { key: 'e/4', duration : 'q', stem: 'hide'},
    { key: 'f/4', duration : 'q', stem: 'hide'},
    { key: 'e/4', duration : 'h', stem: 'hide'},
] }]"
:system-width="700"
/>
-->
<!--
<VexFlow :measures="[{key: 'D', notes : [
    { key: 'a/4', duration : '1/2', stem: 'hide'},
    { key: 'd/4', duration : 'q', stem: 'hide'},
    { key: 'e/4', duration : 'q', stem: 'hide'},
    { key: 'f/4', duration : 'h', stem: 'hide'}
    ]},
    {
    notes : [
    { key: 'g/4', duration : '1/2', stem: 'hide'},
    { key: 'f/4', duration : 'q', stem: 'hide'},
    { key: 'g/4', duration : 'q', stem: 'hide'},
    { key: 'e/4', duration : 'h', stem: 'hide'},
] }]"
:system-width="750"
/>
-->
Psalm tone #5

<VexFlow :score-id="17" :system-width="720" />


Psalms are located beginning on page 214 of the ELW liturgy book

## Gospel Acclamation

Alleluia from current setting

## Gospel

**P:**  The Holy Gospel according to ```[Gospel Book] ```, the ```[nth]``` chapter.


<VexFlow :measures="[{key: 'D', notes : [
    { key: 'f/4', duration : 'q', stem: 'hide'},
    { key: 'g/4', duration : 'q', stem: 'hide'}
    ]}, { notes : [
    { key: 'a/4', duration : 'h', text: 'Glo -'},
    { key: 'b/4', duration : 'q', text: 'ry'},
    { key: 'a/4', duration : 'q', text: 'to'},
    { key: 'd/5', duration : 'q', text: 'you,'},
    { key: 'c/5', duration : 'q', text: ''},
    { key: 'b/4', duration : 'h', text: 'O'},
    { key: 'a/4', duration : 'h', text: 'Lord.'}
], ties : [[3,4]] }]"
:system-width="700"
/>

```This is from page 31 of the LBW liturgy```


:::tip
This also is played after the gospel is read
:::

## Offertory Response

*not currently done*


## Great Thanksgiving

*not currently done*
<!--
<VexFlow :score-id="9" :system-width="700" />
-->
<!--
```This is from ``` [*Now The Feast*](sources.html#now-the-feast)
-->

<!--
## Holy, Holy, Holy

<VexFlow :score-id="12" :system-width="700" />
-->

## Communion

<VexFlow :score-id="18" :system-width="720" />

<!--
```This is from setting 3, page ? of the ELW liturgy```
-->

Communion consists of two hymns.