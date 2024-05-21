<script setup lang="js">
//import TheWelcome from '../components/TheWelcome.vue'
import Welcome from '../components/Welcome.vue'
import Skills from '../components/Skills.vue'
import Portfolio from '../components/Portfolio.vue'
import Qualification from '../components/Qualification.vue'
import Contact from '../components/Contact.vue'



</script>

<template>
  <main>
    <Welcome/>
    <Skills/>
    <Portfolio/>
    <Qualification/>
    <Contact />
  </main>
</template>

<style>


@font-face {
    font-family: "Fraunces";
    src: url("https://declics.eu/static/fonts/Fraunces/static/Fraunces_144pt-Bold.ttf")
        format("truetype");
}

@font-face {
    font-family: "Inter";
    src: url("https://declics.eu/static/fonts/Inter/static/Inter-Light.ttf") format("truetype");
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body,
textarea,
input {
    font-family: Inter !important;
}

.container,
section,
ul {
    width: 100%;
}

img {
    border: none;
    width: 100%;
    display: block;
}

ul {
    list-style-type: none;
}

a {
    color: #6bc7f5;
    text-decoration-line: none;
}

/* *************************************************** */
html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: 1em;
    font-family: "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans",
        "Liberation Sans";
    background-color: #fbfcfd;
}

button,
.button,
.button.active {
    padding: 15px;
    margin: 20px 0;
    display: inline-block;
    font-weight: 500;
    text-decoration: none;
    border-radius: 15px;
    border: none;
    color: #ffffff;
    background-color: #34b5f6;
}

button,
a.button:visited {
    background-color: #58a4c0;
}

button,
a.button:hover {
    background-color: #6bc7f5;
}

button,
a.button:active {
    background-color: #7cbedf;
}

.border {
    border: 1px solid #cee0e7;
    border-radius: 5px;
    background-color: #ffffff;
}

.button span {
    font-size: 25px;
    top: 3px;
    left: 3px;
    position: relative;
}

h1,
h2 {
    font-family: "Fraunces";
}

h1 {
    font-size: 2em;
    font-weight: 500;
}

h2 {
    margin: 60px 0 10px;
    font-size: 1.8em;
    text-align: center;
    font-weight: 500;
}

h3 {
    font-size: 1em;
    font-weight: 500;
}

.clr {
    clear: both;
}

.container,
section {
    clear: both;
}

/* *************************************************** */
header .container,
main section,
nav div {
    max-width: 800px;
    clear: both;
    margin: 0 auto;
}

main section {
    margin: 140px auto;
    text-align: center;
}

.grid,
.grid-notresp {
    margin: auto;
    width: 100%;
    justify-content: space-around;
}

.grid {
    display: flex;
}

.grid-notresp {
    display: flex;
}

.grid .columns2 {
    width: 49%;
}

.grid .columns3 {
    width: 32%;
}

.grid .columns4,
.grid-notresp .columns4 {
    width: 25%;
}

.title {
    margin-bottom: 30px;
}

.title p {
    font-size: 1.05em;
    color: #808080;
    padding: 15px 0;
}

body {
    position: relative;
}
@media (max-width: 800px) {
    header .container,
    main section {
        max-width: 450px;
    }

    .grid {
        display: block;
    }

    .grid .columns2,
    .grid .columns3 {
        width: 98%;
        margin: 10px auto;
    }


}
</style>
