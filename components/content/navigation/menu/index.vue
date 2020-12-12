<template>
  <div>
    <Cards/>
    <Table />
<!--    <Table :paginateMenu="paginateMenu"/>-->
    <ReadMenuModal/>
    <CreateMenuModal/>
    <UpdateMenuModal/>
    <DeleteMenuModal/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Cards from './cards'
import Table from './table'

import ReadMenuModal from './forms/read'
import CreateMenuModal from './forms/create'
import UpdateMenuModal from './forms/update'
import DeleteMenuModal from './forms/delete'
// import MenuPagination from '~/components/content/navigation/menu/pagination'

export default {
  // props: ['paginateMenu'],
  components: {
    Cards,
    Table,
    ReadMenuModal,
    CreateMenuModal,
    UpdateMenuModal,
    DeleteMenuModal,
  },
  methods: {
    ...mapActions({
      'handleView': 'content/navigation/menu/handleView',
      'handleEdit': 'content/navigation/menu/handleEdit',
      'handleDelete': 'content/navigation/menu/handleDelete'
    })
  },


}

</script>

