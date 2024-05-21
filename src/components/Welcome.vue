
<template>
    <div class="welcome">
        <div class="container grid">
            <div class="columns2 title">
                <h1>Hello ! </h1>
                <h2>{{ $t('welcome.subtitle1') }} <br>{{ $t('welcome.subtitle2') }}</h2>
                <p>{{ $t('welcome.comment1') }} <br>{{ $t('welcome.comment2') }}</p>
                <!-- <p>I develop dynamic creative and functional websites, from visual communication to code, through the new web languages.</p> -->
                <a href="mailto:persiliealexandra@gmail.com" class="button">{{ $t('welcome.button') }} <span
                        class="icon-mail"></span></a>
            </div>
            <div class="columns2">
                <img src="https://img.freepik.com/photos-gratuite/fond-ete-saison-pelucheux-propre_1122-2407.jpg"
                    alt="aucun probleme" />
            </div>
        </div>
    </div>
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

.welcome {
    margin: 130px auto;
    max-width: 600px;
    clear: both;
}

h2 {
    text-align: left;
    margin: 0 0 15px;
}

img {
    border-radius: 50%;
    max-width: 300px;
    margin: 0 auto;
    display: block;
    border: 4px solid #ffffff;
}

.button {
    width: 100%;
    text-align: center;
}

@media (max-width: 800px) {

    .welcome,
    .welcome h2 {
        text-align: center;
    }



}


</style>