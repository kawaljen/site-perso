<template>
      <section class="qualification" id="qualification">
            <div class="title">
                <h2>Expériences <!--<span class="icon-briefcase"></span> --></h2>
            </div>
            <!-- <ul class="button-container">
                <li class="button">
                    <span class="icon-earth"></span></span> Formations
                </li>
                <li class="button active">
                    <span class="icon-briefcase"></span> Expériences
                </li>
            </ul> -->
            <div class="content-container">
                <ul class="content">
                    <li>
                        <div>
                            Formation dev
                        </div>
                        <div>|</div>
                    </li>
                    <li>
                        <div class="vide">vide</div>
                        <div>|</div>
                        <div>
                            Licence
                        </div>
                    </li>

                </ul>
                <ul class="content active jobs">
                    <li class="grid-notresp">
                        <span class="bullet"></span>
                        <div class="block columns4">
                            <div class="position">Développeuse web</div>
                            <div class="info">Mediaclash</div>
                            <div class="dates">Janvier-mai 2016</div>
                            <ul class="tags">
                                <li>Django</li>
                                <li>Wordpress</li>
                                <li>Javascript</li>
                                <li>Sass</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                        <div class="block line columns4"><span></span><span></span></div>
                        <div class="block vide columns4">vide</div>
                    </li>
                    <li class="grid-notresp">
                        <span class="bullet"></span>
                        <div class="block vide columns4">vide</div>
                        <div class="block line columns4"><span></span><span></span></div>
                        <div class="block columns4">
                            <div class="position">Développeuse web</div>
                            <div class="info">Abel and Cole</div>
                            <div class="dates">Janvier-septembre 2015</div>
                            <ul class="tags">
                                <li>ASP.NET</li>
                                <li>Javascript</li>
                                <li>Less</li>
                                <li>C#</li>
                            </ul>
                        </div>
                    </li>
                    <li class="grid-notresp">
                        <span class="bullet"></span>
                        <div class="block columns4">
                            <div class="position">Rich media testeur</div>
                            <div class="info">Opera</div>
                            <div class="dates">Juillet-decembre 2014 </div>
                            <ul class="tags">
                                <li>Javascript</li>
                                <li>css</li>
                            </ul>
                        </div>
                        <div class="block line columns4"><span></span><span></span></div>
                        <div class="block vide columns4">vide</div>
                    </li>
                    <li class="grid-notresp">
                        <span class="bullet"></span>
                        <div class="block vide columns4">vide</div>
                        <div class="block line columns4"><span></span><span></span></div>
                        <div class="block columns4">
                            <div class="position">Free lance Web dev</div>
                            <div class="dates">2013-2020 </div>
                            <ul class="tags">
                                <li>Wordpress</li>
                                <li>Javascript</li>
                                <li>Sass</li>
                                <li>PHP</li>
                                <li>vueJs</li>
                            </ul>
                        </div>
                    </li>
                </ul>
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

<style  scoped>
 .button-container {
    text-align: center;
}

 .button {
    display: inline;
}

 .button {
    background-color: #fbfcfd;
    color: black;
}

 .button.active {
    padding: 15px;
    border-radius: 5px;
    text-decoration: none;
    background-color: #000;
    color: #ffffff;
}

 ul {
    margin: 30px 0;
    width: 100%;
}

 .content {
    display: none;
}

 .content.active {
    display: block;
}

 .grid-notresp {
    justify-content: center;
    align-items: center;
}

 .block {
    text-align: left;
}

 .block.vide {
    visibility: hidden;
}

 .block.line {
    text-align: center;
    align-self: stretch;
    display: flex;
}

 .block.line span {
    align-self: stretch;
    width: 50%;
}

 .block.line span:first-child {
    border-right: solid black 1px;
}

 .position {
    font-weight: 500;
}

 .info {
    padding: 10px 0;
}

 .dates {
    color: #808080;
}

 ul .tags {
    font-size: small;
}

 .tags li {
    background-color: #34b5f6;
    border-radius: 30px;
    display: inline-block;
    padding: 4px 8px;
    margin: 4px;
    text-align: left;
    color: #fff;
}

.jobs li {
    position: relative;
}

.jobs .bullet {
    position: absolute;
    background-color: rgb(44, 62, 80);
    border-radius: 50%;
    display: block;
    width: 10px;
    top: 0;
    left: 50%;
    height: 10px;
    transform: translate(-5px, 0);
}

</style>