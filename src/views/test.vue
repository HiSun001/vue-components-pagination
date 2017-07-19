<template>
    <pagination @pagination="getList" :options="paginationData"></pagination>
</template>


<script>
    import pagination from './common/pagination';

    export default {
        components: {
            pagination: pagination
        },

        data() {
            return {
                paginationData: {
                    total: 0,
                    // numDisplayEntries : 5, // 主体页数（默认为5）
                    // currentPage : 1, //页码（默认为1）
                    // pageSize: 10 //页码（默认为10）
                }
            };
        },

        mounted () {
            this.getList();
        },

        methods: {
            /**
             * 查询数据
             * @param {Number} pageSize 子组件回传页码
             */
            getList (currentPage) {
                console.log(currentPage);

                // 根据实际数据赋值
                this.paginationData.total = 100;
            }
        }
    }
</script>