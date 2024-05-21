<template>
    <nav id="nav" class="close">
        <span id="mobile-menu">lll</span>
        <div>
            <a href="#" id="home">Alexandra Persilié</a>
            <ul>
                <li
                    v-for="{ title, href, id } in sectionTitles"
                    :id="'listItem_' + id"
                    :key="title"
                    >
                    <button
                        :class="[
                        activeTitle === id ? 'active' : '',
                        ]"
                        @click="goToSection(href)"
                    >
                        {{ t(title) }}
                    </button>
                </li>
            </ul>
            <span id="close-button">X</span>
        </div>
    </nav>
  </template>
  
  <script>
  import { useGoTo } from 'vuetify';
  import { useI18n } from 'vue-i18n';

  const sectionTitles = [
  { id: 'welcome', title: 'Alexandra Persilié', href: '#welcome' },
  { id:'skills',title: 'Compétences', href: '#skills' },
  { id:'qualification',title: 'Expériences', href: '#qualification' },
  { id:'contact',title: 'Contactez moi', href: '#contact' }, //TODO il8n
];

  export default {
    name: 'NavBar',
    setup() {
        const goTo = useGoTo();
        const { t } = useI18n();

        return {
            t,
            goTo,
            sectionTitles
        };
    },
    data() {
    return {
      activeTitle: 'welcome',
    };
  },
    created() {
        this.sectionTitles = sectionTitles;
    // Scrolling
    this.scrollOptions = {
      duration: 1000,
      offset: -100,
      easing: 'easeInOutCubic',
    };

    // Intersection
    const onIntersect = (_isIntersecting, entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeTitle = entry.target.id;
        }
      });
    };

    this.intersectConfig = {
      handler: onIntersect,
      options: {
          threshhold: .2,
          rootMargin: '-150px 0px -500px 0px',
        }
    };
  },
    methods: {
        goToSection(url) {
        this.goTo(url, this.scrollOptions);
        window.location.hash = url;
        },

    },
  }
  </script>
  
  <style>
nav {
    display: flex;

    background-color: #fff;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
}

nav div {
    text-align: right;
    padding: 20px;
    position: relative;
    width: 100%;
}

nav ul li,
nav ul {
    display: inline;
}

nav li {
    padding: 0 20px;
}

nav li a {
    color: #000;
}

nav #home {
    position: absolute;
    left: 20px;
}

nav #close-button {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
}

nav #close-button,
nav #mobile-menu {
    display: none;
}

#mobile-menu,
#close-button {
    padding: 15px;
    font-size: 2em;
}

#mobile-menu {
    transform: rotate(90deg);
}
  </style>