<template>
  <div>
    <b-form-select
        v-model="selected" 
        :options="options"
        @change="changePerPage"
    >
    <template #first>
      <b-form-select-option 
        :value="null" 
        disabled>Records
      </b-form-select-option>
    </template>
    </b-form-select>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: 'PerPageDropdown',
    data() {
      return {
        selected: 10,
        options: [
          { value: '10', text: '10' },
          { value: '25', text: '25' },
          { value: '50', text: '50' }
        ]
      }
    },
    computed: {
        ...mapState('blog', ['perPage'])
    },
    methods: {
        changePerPage() {
             this.$emit('setPerPage', this.selected);
        }
    }
  };
  </script>