<template>
    <!-- Banner -->
    <div id="banner" class="mt-3 mt-sm-5">
        <div class="container">
            <div class="row">
                <div class="col-6">
					<span class="banner-title">
						Sizə ən yaxın <br> notariat ofisləri
					</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Map -->
    <div class="container mt-5">
        <div class="row d-flex justify-content-between">
            <div class="col-md-4 col-12 d-flex flex-column mb-3">
                <tree-select v-if="notarius_data"
                             v-model="selectedRegion"
                             option-key="name"
                             :search-keys="['name', 'region']"
                             value-key="region"
                             value-format="object"
                             :options="[...notarius_data].filter((v,i,a) => a.findIndex(t => (t.region === v.region)) === i)
"
                />

                <tree-select v-if="selectedRegion"
                             v-model="selectedNotariat"
                             option-key="name"
                             :search-keys="['name', 'region']"
                             value-key="name"
                             value-format="object"
                             :options="[...notarius_data].filter(d => d.region === selectedRegion.region)"
                />


            <!-- <div class="container">
                <div v-if="selectedNotariat" class=" row notariat-info">
                    <div class="col-6">
                            <p>Notarius:</p>
                            <p>Email:</p>
                            <p>Mobil telefon:</p>
                            <p>Ev telefonu:</p>
                            <p>Ünvan:</p>
                    </div>
                    <div class="col-6">
                    <span>{{selectedNotariat.name}}</span>
                        <div v-if="selectedNotariat.info">
                            <p>{{selectedNotariat.info['person_name']}}</p>
                            <p>{{selectedNotariat.info['email']}}</p>
                            <p>{{selectedNotariat.info['phone']}}</p>
                            <p>{{selectedNotariat.info['telephone']}}</p>
                            <p>{{selectedNotariat.info['address']}}</p>
                        </div>
                    </div>
                </div>
            </div> -->

            <div v-if="selectedNotariat" class="container notariat-info">

                <div v-if="selectedNotariat.info['person_name']" class="row pb-3 notariat-info-item notariat-info-item-title">
                    <div class="col-12 text-center">
                        <span style="white-space: pre-wrap">{{selectedNotariat.name}}</span>
                    </div>
                </div>

                <div v-if="selectedNotariat.info['person_name']" class="row py-3 notariat-info-item">
                    <div class="col-3">
                        <span>Notarius:</span>
                    </div>
                    <div class="col-9">
                        <span style="white-space: pre-wrap">{{selectedNotariat.info['person_name']}}</span>
                    </div>
                </div>

                <div v-if="selectedNotariat.info['email']" class="row py-3 notariat-info-item">
                    <div class="col-3">
                        <span>Email:</span>
                    </div>
                    <div class="col-9">
                        <span>{{selectedNotariat.info['email']}}</span>
                    </div>
                </div>

                <!-- <div class="row py-3 notariat-info-item">
                    <div class="col-5">
                        <span>Mobil telefon:</span>
                    </div>
                    <div class="col-7">
                        <span style="white-space: pre-wrap">{{selectedNotariat.info['phone']}}</span>
                    </div>
                </div> -->

                <div v-if="selectedNotariat.info['telephone']" class="row py-3 notariat-info-item">
                    <div class="col-3">
                        <span>Telefon:</span>
                    </div>
                    <div class="col-9">
                        <span style="white-space: pre-wrap">{{selectedNotariat.info['telephone']}}</span>
                    </div>
                </div>

                <div v-if="selectedNotariat.info['address']" class="row pt-3">
                    <div class="col-3">
                        <span>Ünvan:</span>
                    </div>
                    <div class="col-9">
                        <span>{{selectedNotariat.info['address']}}</span>
                    </div>
                </div>
            </div>


            </div>
            <div class="col-md-8 col-12 map-container mb-5 googleMap">
                <g-map
                        :center="center"
                        :markers="notarius_data"
                        :zoom="zoom"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import '../assets/css/index.css';
    import '../assets/css/xerite.css';
    import json from '../assets/data'

    import GMap from "../components/GMap";
    import TreeSelect from "@/components/common/TreeSelect";

    export default {
        name: "Xerite",
        components: {
            TreeSelect,
            GMap
        },
        data() {
            return {
                center: {
                    lat: 40.348194,
                    lng: 49.835208
                },
                zoom: null,
                selectedRegion: null,
                selectedNotariat: null
            }
        },
        computed: {
            notarius_data() {
                return json;
            }
        },
        methods: {
            updateCenter(location) {
                this.center = location;
                this.zoom = 20;
            }
        },
        watch: {
            selectedNotariat: {
                handler(notariat) {
                    if (notariat) {
                        this.updateCenter(notariat.loc);
                    }
                },
                deep: true
            },
            selectedRegion: {
                handler(region) {
                    if (!region) {
                        this.selectedNotariat = null;
                        this.center = null;
                        this.zoom = null;
                    }
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

    .notariat-info {
        /* border: 1px solid #3A7292; */
        padding: 1em;
        color: white;
        background-color: #3A7292;
        font-size: 0.8em;
    }

    .notariat-info-item {
        border-bottom: 1px solid white;
        white-space: pre-wrap;
    }

    .notariat-info-item-title {
        font-family: CalibriBold;
        /* text-transform: uppercase; */
        font-size: 1.2em !important;
    }

</style>
