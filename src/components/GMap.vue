<template>
    <GoogleMap
            api-key="AIzaSyBoqgtA5cFMclxc4eW0fl30n9MVoNRVYEM"
            style="width: 100%; height: 500px"
            :center="center"
            :zoom="zoom || 15"
    >
        <Marker
                v-for="(datum, i) in markers"
                :key="i"
                :options="{ position: datum.loc }"
        />
    </GoogleMap>
</template>

<script>
    import { GoogleMap, Marker } from 'vue3-google-map';

    export default {
        name: "GMap",
        components: {
            GoogleMap, Marker
        },
        props: {
            center: Object,
            markers: Array,
            zoom: Number
        },
    };
</script>

<style scoped>

</style>
