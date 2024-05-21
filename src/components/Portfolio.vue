<template>
   <section id="portfolio" class="portfolio">
            <div class="title">
                <h2>Portfolio</h2>
                <p>Mes dernières réalisations</p>
            </div>


            <div id="mod_perc_kwljn">
                <div id="mperc_kjn"></div>
            </div>


            <ul class="content grid">
                <li class="border columns3 data">
                    <img src="https://declics.eu/porto/800-ee64.png" alt="EE64 website" />
                    <h3>Education environnement</h3>
                    <p>Site Joomla avec un panier codé en OO PHP</p>
                    <a href="https://github.com/kawaljen/madeinshoreditch" target="_blank">Voir le code du panier sur
                        Github</a>
                </li>
                <li class="border columns3 data">
                    <img src="https://declics.eu/porto/800-folie_douce.png" alt="Folie doyce" />
                    <h3>Folie douce</h3>
                    <p>Site Wordpress avec un thème créé sur mesure</p>

                </li>
                <li class="border columns3 data">
                    <img src="https://declics.eu/porto/800-MISbtq.png" alt="Made in shoreditch website" />
                    <h3>Made in Shoreditch</h3>
                    <p>Site wordpress avec un thème créé sur mesure</p>
                    <a href="" target="_blank">Voir le theme Wordpress sur Github</a>
                </li>
            </ul>
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
.content {
    text-align: left;
}

.data {
    padding: 30px;
}

.data img {
    border-radius: 5px;
}

p {
    padding: 10px 0;
}

h3 {
    margin: 10px 0;
}
</style>