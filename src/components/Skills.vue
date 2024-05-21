<template>
    <section class="skills" id="skills">
                <div class="title">
                    <h2>{{$t('skills.title') }}</h2>
                    <p>{{$t('skills.subtitle') }}</p>
                </div>
                <div class="grid">
                    <div class="columns3 border content">
                        <h3>{{$t('skills.language') }}</h3>
                        <ul>
                            <li
                            v-for="{ title, nbStarFull, id } in technos"
                            :id="'listItem_' + id"
                            :key="title"
                            >
                                <span class="icon-bullet"></span>{{title}}
                                <div class="data">
                                    <span
                                        v-for="( index) in nbStarFull"
                                        :key="title + index"
                                        class="icon-star-full"
                                        >
                                    </span>
                                    <span
                                        v-for="( index) in 5 - nbStarFull"
                                        :key="title + index"
                                        class="icon-star-empty"
                                        >
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="columns3 border content">
                        <h3>{{$t('skills.framework') }}</h3>
                        <ul>
                            <li
                            v-for="{ title, nbStarFull, id } in frameworks"
                            :id="'listItem_' + id"
                            :key="title"
                            >
                                <span class="icon-bullet"></span>{{title}}
                                <div class="data">
                                    <span
                                        v-for="( index) in nbStarFull"
                                        :key="title + index"
                                        class="icon-star-full"
                                        >
                                    </span>
                                    <span
                                        v-for="( index) in 5 - nbStarFull"
                                        :key="title + index"
                                        class="icon-star-empty"
                                        >
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="columns3 border content">
                        <h3>CMS</h3>
                        <ul>
                            <li
                            v-for="{ title, nbStarFull, id } in cms"
                            :id="'listItem_' + id"
                            :key="title"
                            >
                                <span class="icon-bullet"></span>{{title}}
                                <div class="data">
                                    <span
                                        v-for="( index) in nbStarFull"
                                        :key="title + index"
                                        class="icon-star-full"
                                        >
                                    </span>
                                    <span
                                        v-for="( index) in 5 - nbStarFull"
                                        :key="title + index"
                                        class="icon-star-empty"
                                        >
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
</template>
<script>
import { useI18n } from 'vue-i18n';

const technos = [
  { id: 'HTML', title: 'HTML', nbStarFull: 5 },
  { id: 'CSS', title: 'CSS', nbStarFull: 5 },
  { id: 'JS', title: 'Javascript', nbStarFull: 5 },
  { id: 'PHP', title: 'PHP', nbStarFull: 5 },
  { id: 'C-sharp', title: 'C#', nbStarFull: 4 },
  { id: 'TS', title: 'Typescript', nbStarFull: 3 },
];

const frameworks = [
  { id: 'ASPNET', title: 'ASP.NET', nbStarFull: 4 },
  { id: 'Vuejs', title: 'VUE.JS', nbStarFull: 3 },
  { id: 'React', title: 'React JS', nbStarFull: 3 },
];

const cms = [
  { id: 'Wordpress', title: 'Wordpress', nbStarFull: 4 },
  { id: 'Django', title: 'Django', nbStarFull: 3 },
  { id: 'Magento', title: 'Magento', nbStarFull: 3 },
];

export default {
    setup(){
        const { t } = useI18n();
        return { t };

    },
    created() {
        this.frameworks = frameworks;
        this.technos = technos;
        this.cms = cms;

    },
}
</script>
<style scoped>
@font-face {
  font-family: 'icomoon';
  src:  url('./fonts/icomoon.eot');
  src:  url('./fonts/icomoon.eot?') format('embedded-opentype'),
    url('./fonts/icomoon.ttf') format('truetype'),
    url('./fonts/icomoon.woff') format('woff'),
    url('./fonts/icomoon.svg?') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.icon-star-empty:before {
  content: "\e9d7";
}
.icon-star-full:before {
  content: "\e9d9";
}
.icon-mail:before {
  content: "\ea83";
}
.icon-github:before {
  content: "\eab0";
}
.icon-linkedin:before {
  content: "\eac9";
}
.icon-bullet:before {
  content: "\e900";
}

h3 {
    text-align: center;
    padding: 20px 0;
    font-weight: 500;
    font-size: 1.1em;
}

.content ul {
    column-count: 2;
    padding: 0px 15px 50px;
}

.content li {
    padding: 10px 0 0 20px;
    position: relative;
    text-align: left;
    display: inline-block;
}

.data {
    color: #eecd10;
}

.data span {
    font-size: 0.6em;
}

.icon-bullet {
    position: absolute;
    left: 0;
    top: 20px;
    color: #6bc7f5;
    font-size: 8px;
}
@media (max-width: 800px) {


    .content ul {
        column-count: 3;
    }

}

</style>