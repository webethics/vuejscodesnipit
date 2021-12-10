<template>
    <div>
        <b-form-select
            v-model="orderBy" 
            :options="options"
            @change="changeOrder"
        >
        
        <template #first>
        <b-form-select-option 
            :value="null" 
            disabled>Order
        </b-form-select-option>
        </template>
        </b-form-select>
        </div>
</template>
<script>

  export default {
    name: 'SortingDropdown',
    data() {
      return {
        orderBy: 'desc',
        options: [
          { value: 'asc', text: 'Ascending' },
          { value: 'desc', text: 'Descending' }
        ]
      }
    },
    methods: {
        changeOrder() {
             this.$emit('setOrder', this.orderBy);
        }
    }
  };
  </script>

  <style>
  .custom-select {
	display: inline-block;
	width: 100%;
	height: calc(1.5em + .75rem + 2px);
	padding: .375rem 1.75rem .375rem .75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #495057;
	vertical-align: middle;
	background: #fff url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .75rem center/8px 10px;
	border: 1px solid #ced4da;
	border-radius: .25rem;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
.custom-control-label::before, .custom-file-label, .custom-select {
	transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.custom-select {
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #495057;
}
  </style>