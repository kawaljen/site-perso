<template>

<section id="contact" class="contact">
            <div class="title">
                <h2>{{ t('contact.title') }}</h2>
                <p>{{ t('contact.subtilte') }}</p>
            </div>
            <div class="grid">
                <ul class="columns3">
                    <li class="border">
                        <a href="mailto:persiliealexandra@gmail.com">
                            <div class="icon-mail icon"></div>
                            <div> Email</div>
                            <div>{{ t('contact.emailme') }} -></div>
                        </a>
                    </li>
                    <li class="border">
                        <a href="https://www.linkedin.com/in/alexandra-persili%C3%A9-43456697/" target="_blank">
                            <div class="icon-linkedin icon"></div>
                            <div>Linkedin</div>
                            <div>{{ t('contact.profil') }} -></div>
                        </a>
                    </li>
                    <li class="border">
                        <a href="https://github.com/kawaljen" target="_blank">
                            <div class="icon-github icon"></div>
                            <div>Github</div>
                            <div>{{ t('contact.profil') }} -></div>
                        </a>
                    </li>
                </ul>
                <!--<div class="columns3">
                    <h4>{{ t('contact.formTitle') }} !</h4>
                    <form class="contact-form" id="contact-form">
                        <input type="text" name="name" placeholder="Votre nom" class="form-input" />
                        <input type="text" name="email" placeholder="Votre email" class="form-input" />
                        <textarea class="form-input" name="message">{{ t('contact.textareamsg') }}</textarea>
                        <input type="submit" class="button" value="Envoyer" id="submit-btn" />
                    </form>
                    <div id="result"></div>
                </div>-->
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

 li {
    padding: 20px 0;
    font-size: 0.9em;
    margin-bottom: 10px;
}

 li div {
    padding: 4px 0;
}

 li .icon {
    font-size: 20px;
}

 li a {
    color: 2C3E50;
}

-form .form-input,
-form .form-input {
    padding: 20px 15px;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #cee0e7;
    color: #2c3e50;
    border-radius: 15px;
}

input[type="submit"] {
    width: 100%;
    border-radius: 15px;
}

 h4 {
    font-weight: 400;
    padding: 20px 0;
}
</style>