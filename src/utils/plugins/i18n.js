import {createI18n} from 'vue-i18n';


const loadMessages = () => {
    const locales = require.context('@/locales', true, /[\w-]+\.json$/i);
    return locales
        .keys()
        .reduce(
            (locals, loc) => (
                {...locals, [loc.replace(/\.|\/|json/g, '')]: locales(loc)}
            ), {});
};

export default {
    install: async app => {
        const i18n = createI18n({
            locale: process.env.VUE_APP_I18N_LOCALE || "az",
            fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "az",
            messages: loadMessages()
        });

        app.use(i18n);
    }
};
