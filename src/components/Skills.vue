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
                            <li>
                                <span class="icon-bullet "></span>HTML
                                <div class="data expert">
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                </div>

                            </li>
                            <li>
                                <span class="icon-bullet"></span>CSS
                                <div class="data expert">
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                </div>

                            </li>
                            <li>
                                <span class="icon-bullet"></span>Javascript
                                <div class="data knowlegeable">
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                </div>

                            </li>
                            <li>
                                <span class="icon-bullet"></span>PHP
                                <div class="data starter">
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                </div>
                            </li>
                            <li>
                                <span class="icon-bullet"></span>C#
                                <div class="data starter">
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-empty"></span>
                                </div>
                            </li>
                            <li>
                                <span class="icon-bullet"></span>Typescript
                                <div class="data starter">
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-empty"></span>
                                    <span class="icon-star-empty"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="columns3 border content">
                        <h3>{{$t('skills.framework') }}</h3>
                        <ul>
                            <li>
                                <span class="icon-bullet"></span>ASP.NET
                                <div class="data medium">
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-empty"></span>
                                </div>

                            </li>
                            <li>
                                <span class="icon-bullet"></span>Vue JS
                                <div class="data starter">
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-empty"></span>
                                    <span class="icon-star-empty"></span>
                                </div>

                            </li>
                            <li>
                                <span class="icon-bullet"></span>React JS
                                <div class="data starter">
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-empty"></span>
                                    <span class="icon-star-empty"></span>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div class="columns3 border content">
                        <h3>CMS</h3>
                        <ul>
                            <li>
                                <span class="icon-bullet"></span>Wordpress
                                <div class="data expert">
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-empty"></span>
                                </div>

                            </li>
                            <li>
                                <span class="icon-bullet"></span>Django
                                <div class="data starter">
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-empty"></span>
                                    <span class="icon-star-empty"></span>
                                </div>

                            </li>

                            <li>
                                <span class="icon-bullet"></span>Magento
                                <div class="data medium">
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-full"></span>
                                    <span class="icon-star-empty"></span>
                                    <span class="icon-star-empty"></span>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </section>
</template>
<script>
import { useI18n } from 'vue-i18n';

export default {
    setup(){
        const { t } = useI18n();
        return { t };

    }
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