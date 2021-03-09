<!-- Vue SFC -->
<template>
  <div class="form-group" v-if="options">
    <label v-if="label" :for="id">{{ label }}</label>
    <vue-tree-select :normalizer="normalizer"
                     :matchKeys="searchKeys"
                     v-model="inputValue"
                     :valueFormat="valueFormat"
                     :multiple="multiple"
                     :value-consists-of="valueConsistsOf"
                     :options="options"/>

    <span class="error" v-if="!!validation_error">* {{ validation_error }}</span>
  </div>
</template>

<script>
// import the component
import VueTreeSelect from 'vue3-treeselect'
// import the styles
import 'vue3-treeselect/dist/vue3-treeselect.css'

export default {
  name: 'TreeSelect',
  props: {
    modelValue: {
      default: null
    },
    options: {
      type: Array,
      required: true
    },
    id: {
      type: String,
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    optionKey: {
      type: String,
      default: () => 'id'
    },
    valueKey: {
      type: String,
      default: () => 'name'
    },
    childrenKey: {
      type: String,
      default: () => 'children'
    },
    childrenLabel: {
      type: String,
      default: () => 'name'
    },
    searchKeys: {
      type: Array,
    },
    validation_error: {
      default: null
    },
    multiple: {
      type: Boolean,
      default: () => false
    },
    valueFormat: {
      type: String,
      default: () => "id"
    },
    valueConsistsOf: {
      type: String,
      default: () => "ALL_WITH_INDETERMINATE"
    },
  },
  // register the component
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  },
  components: {VueTreeSelect},
  methods: {
    normalizer(node) {
      return {
        id: this.valueFormat === 'object' ? this.ID(node[this.optionKey]) : node[this.optionKey],
        label: node[this.valueKey] || node[this.childrenLabel],
        children: node[this.childrenKey],
      }
    },
    ID(id) {
      // Math.random should be unique because of its seeding algorithm.
      return id + '_' + Math.floor(Math.random() * 100000);
    }
  },
}
</script>
<style lang="scss">
@import './src/assets/scss/colors.scss';

.vue-treeselect__control {
  height: 38px;
  border-radius: 0;
  border-color: $gray-300;
}

.vue-treeselect__control-arrow {
  color: $dark
}

.error {
  float: right;
  color: $primary;
  padding: 2px;
  font-size: 13px;
  font-weight: 600;
}
</style>